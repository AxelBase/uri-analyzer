// src/lib/uriLogic.js

/**
 * Analyzes a URI component string, decoding it and identifying issues.
 * @param {string} input - The URI component to analyze.
 * @returns {object} - Object with original, decoded, and issues array.
 */
export function analyzeComponent(input) {
    let decoded;
    let issues = [];

    try {
        decoded = decodeURIComponent(input);
    } catch (e) {
        decoded = 'Error decoding';
        issues.push('Invalid encoding');
    }

    // Check for malformed percent encoding (e.g., % not followed by two hex digits)
    if (/%(?![0-9A-Fa-f]{2})/.test(input)) {
        issues.push('Malformed percent encoding');
    }

    // Check for reserved characters in decoded string that might need encoding in URIs
    if (/[/:?@#[\]$'()*+,;=]/.test(decoded)) {
        issues.push('Reserved characters present');
    }

    // Detect possible double encoding by attempting a second decode
    let doubleDecoded;
    try {
        doubleDecoded = decodeURIComponent(decoded);
        if (doubleDecoded !== decoded) {
            issues.push('Possible double encoding');
        }
    } catch (e) {
        // Ignore if second decode fails
    }

    return { original: input, decoded, issues };
}

/**
 * Encodes a plain string into a URI component.
 * @param {string} input - The string to encode.
 * @returns {string} - The percent-encoded string.
 */
export function encodeComponent(input) {
    try {
        return encodeURIComponent(input);
    } catch (e) {
        return 'Error encoding';
    }
}

/**
 * Decodes a percent-encoded URI component.
 * @param {string} input - The encoded string to decode.
 * @returns {string} - The decoded string or error message.
 */
export function decodeComponent(input) {
    try {
        return decodeURIComponent(input);
    } catch (e) {
        return 'Invalid encoding';
    }
}

/**
 * Generates debugging insights based on analysis results.
 * @param {object} analysis - The result from analyzeComponent.
 * @returns {string[]} - Array of insight tips.
 */
export function getInsights(analysis) {
    const insights = [];

    if (analysis.issues.includes('Invalid encoding')) {
        insights.push('Ensure all percent signs (%) are followed by two hexadecimal digits.');
    }

    if (analysis.issues.includes('Malformed percent encoding')) {
        insights.push('Fix incomplete or invalid hex sequences after % signs.');
    }

    if (analysis.issues.includes('Reserved characters present')) {
        insights.push('In API parameters, reserved characters like ?, &, = should be encoded to avoid parsing issues.');
    }

    if (analysis.issues.includes('Possible double encoding')) {
        insights.push('Avoid encoding strings that are already percent-encoded, as it can lead to double-encoding errors.');
    }

    if (analysis.issues.length === 0) {
        insights.push('No major issues detected. The encoding appears valid.');
    }

    return insights;
}