<script>
        import { base } from '$app/paths';

    import { analyzeComponent, encodeComponent, decodeComponent, getInsights } from '$lib/uriLogic';
    import { fly, fade } from 'svelte/transition';

    let input = '';
    let mode = 'analyze'; 
    let result = {};

    function handleSubmit() {
        result = {}; 

        if (mode === 'analyze') {
            const analysis = analyzeComponent(input);
            analysis.insights = getInsights(analysis);
            result = analysis;
        } else if (mode === 'encode') {
            result.encoded = encodeComponent(input);
        } else if (mode === 'decode') {
            result.decoded = decodeComponent(input);
        }
    }

    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            alert('Copied to clipboard!');
        } catch (err) {
            alert('Failed to copy');
        }
    }
</script>

<svelte:head>
    <title>URI Component Analyzer & Debugger — Percent-Encoding Tool for API Developers</title>
    <meta name="description" content="Free client-side tool to analyze, encode, and decode URI components. Detect malformed percent-encoding, double-encoding, and reserved character issues instantly in your browser—no data sent." />
    <meta property="og:title" content="URI Component Analyzer & Debugger" />
    <meta property="og:description" content="Instantly debug percent-encoding in URI components. Fully client-side, privacy-focused tool for developers working with APIs and URLs." />
    <meta property="og:url" content="{base}/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="URI Component Analyzer & Debugger" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="URI Component Analyzer & Debugger" />
    <meta name="twitter:description" content="Free tool to analyze and fix percent-encoding issues in URIs—perfect for API debugging." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="{base}/" />
</svelte:head>

<div class="container mt-5 pt-3">
    
    <div class="text-center mb-5 animate-fade-in">
        <h1 class="display-4 mb-3">URI Analyzer & Debugger</h1>
        <p class="lead" style="color: var(--text-muted);">
            Decode, Encode, and Inspect your URIs with style.
        </p>
    </div>

    <div class="glass-card p-4 p-md-5 mb-5 mx-auto" style="max-width: 800px;">
        <form on:submit|preventDefault={handleSubmit}>
            <div class="mb-4">
                <label for="input" class="form-label fw-bold">Enter URI Component</label>
                <input 
                    type="text" 
                    id="input" 
                    class="form-control form-control-lg" 
                    bind:value={input} 
                    placeholder="e.g., hello%20world" 
                />
            </div>
            
            <div class="mb-4">
                <label for="mode" class="form-label fw-bold">Select Mode</label>
                <select id="mode" bind:value={mode} class="form-select form-select-lg">
                    <option value="analyze">Analyze (Breakdown & Issues)</option>
                    <option value="encode">Encode</option>
                    <option value="decode">Decode</option>
                </select>
            </div>

            <div class="d-grid">
                <button type="submit" class="btn btn-primary btn-lg shadow-sm">
                    Process URI
                </button>
            </div>
        </form>
    </div>

    {#if result.original || result.encoded || result.decoded}
        <div class="row justify-content-center" in:fly={{ y: 20, duration: 600 }}>
            <div class="col-lg-8">
                
                {#if result.original}
                    <div class="glass-card p-4">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="mb-0">Analysis Results</h4>
                            <span class="badge bg-secondary rounded-pill">Analyzed</span>
                        </div>

                        <div class="mb-4">
                            <label for="resultOriginal" class="small fw-bold text-muted text-uppercase">Original</label>
                            <div class="input-group">
                                <input type="text" id="resultOriginal" class="form-control bg-transparent" value={result.original} readonly>
                                <button class="btn btn-outline-secondary" on:click={() => copyToClipboard(result.original)}>Copy</button>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label for="resultDecoded" class="small fw-bold text-muted text-uppercase">Decoded</label>
                            <div class="input-group">
                                <input type="text" id="resultDecoded" class="form-control bg-transparent" value={result.decoded} readonly>
                                <button class="btn btn-outline-secondary" on:click={() => copyToClipboard(result.decoded)}>Copy</button>
                            </div>
                        </div>

                        <h5 class="mt-4 border-bottom pb-2" style="border-color: var(--glass-border) !important;">Issues</h5>
                        {#if result.issues && result.issues.length > 0}
                            <ul class="list-group list-group-flush rounded-3 mt-2">
                                {#each result.issues as issue}
                                    <li class="list-group-item bg-transparent text-danger border-0 ps-0">
                                        <i class="bi bi-exclamation-triangle-fill me-2"></i> {issue}
                                    </li>
                                {/each}
                            </ul>
                        {:else}
                            <p class="text-success mt-2"><i class="bi bi-check-circle-fill me-2"></i>No issues detected.</p>
                        {/if}

                        <h5 class="mt-4 border-bottom pb-2" style="border-color: var(--glass-border) !important;">Insights</h5>
                        <ul class="list-group list-group-flush mt-2">
                            {#each result.insights as insight}
                                <li class="list-group-item bg-transparent border-0 ps-0">
                                    <i class="bi bi-info-circle-fill me-2" style="color: var(--olive-primary);"></i> {insight}
                                </li>
                            {/each}
                        </ul>
                    </div>
                
                {:else if result.encoded}
                    <div class="glass-card p-4">
                        <h4 class="mb-3">Encoding Result</h4>
                        <div class="input-group">
                            <input type="text" class="form-control bg-transparent" value={result.encoded} readonly>
                            <button class="btn btn-outline-secondary" on:click={() => copyToClipboard(result.encoded)}>Copy</button>
                        </div>
                    </div>

                {:else if result.decoded}
                    <div class="glass-card p-4">
                        <h4 class="mb-3">Decoding Result</h4>
                        <div class="input-group">
                            <input type="text" class="form-control bg-transparent" value={result.decoded} readonly>
                            <button class="btn btn-outline-secondary" on:click={() => copyToClipboard(result.decoded)}>Copy</button>
                        </div>
                    </div>
                {/if}

            </div>
        </div>
    {/if}

    <div class="container my-5 py-5">
<section id="about" class="glass-card p-5 mb-4 animate-fade-in" style="animation-delay: 0.2s;">
    <h2 class="mb-3">About the URI Component Analyzer & Debugger</h2>
    <p>The URI Component Analyzer & Debugger is a lightweight, fully client-side web utility built to help developers quickly inspect, validate, and troubleshoot percent-encoding in URI components. Whether you are crafting query parameters for an API request, debugging malformed URLs, or ensuring compliance with RFC 3986, this tool provides instant feedback without sending any data to external servers.</p>
    
    <p>Designed with simplicity and precision in mind, it focuses on the most common pain points in URI handling: malformed percent sequences, unencoded reserved characters, double-encoding errors, and proper treatment of non-ASCII characters. The tool offers three core modes—Analyze, Encode, and Decode—each delivering clear breakdowns, highlighted issues, and actionable debugging insights derived directly from standards-compliant logic.</p>
    
    <p>All processing happens exclusively in your browser using native JavaScript functions such as <code>encodeURIComponent</code> and <code>decodeURIComponent</code>. No information is ever transmitted, stored, or logged, making it safe for sensitive or proprietary strings. The interface includes copy buttons for seamless integration into your workflow, whether you are testing in a browser console, building requests in Postman, or writing backend routing logic.</p>
    
    <p>Originally specified as a minimal static application with strict constraints—no more than three pages, a single logic file, and full compatibility with GitHub Pages deployment—the tool adheres to modern web standards while remaining fast and responsive across desktop and mobile devices. It is styled with Bootstrap 5 for clean presentation and includes a blog with in-depth articles exploring percent-encoding mechanics, common pitfalls, and best practices.</p>
    
    <p>Privacy is foundational: nothing is tracked, no cookies are set, and no analytics are used. The entire application is open-source under the MIT license, welcoming contributions and forks. Whether you are a frontend developer constructing dynamic query strings, a backend engineer validating incoming requests, or a student learning URI syntax, this tool aims to make percent-encoding debugging straightforward, reliable, and educational.</p>
    
</section>

<section id="how-to" class="glass-card p-5 mb-4 animate-fade-in" style="animation-delay: 0.4s;">
    <h2 class="mb-3">How to Use</h2>
    <p>Using the URI Component Analyzer & Debugger is straightforward and requires only three steps. Everything happens instantly in your browser—no accounts, no installations, no data leaving your device.</p>
    
    <div class="row g-4 mt-3">
        <div class="col-md-4">
            <div class="p-3 border rounded-4 text-center h-100" style="border-color: var(--glass-border) !important;">
                <i class="bi bi-1-circle-fill fs-2 mb-2" style="color: var(--olive-primary);"></i>
                <h5>Enter Your String</h5>
                <p class="small text-muted">Paste any URI component, query parameter value, or plain text into the large input field. This can be an already-encoded string (e.g., <code>hello%20world%21</code>) or raw text you want to encode.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 border rounded-4 text-center h-100" style="border-color: var(--glass-border) !important;">
                <i class="bi bi-2-circle-fill fs-2 mb-2" style="color: var(--olive-primary);"></i>
                <h5>Choose a Mode</h5>
                <p class="small text-muted"><strong>Analyze</strong>: Breaks down the input, decodes it, detects issues like malformed sequences or unencoded reserved characters, and provides contextual insights.<br>
                <strong>Encode</strong>: Applies proper percent-encoding using <code>encodeURIComponent</code>.<br>
                <strong>Decode</strong>: Safely decodes the string and reports errors if the encoding is invalid.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 border rounded-4 text-center h-100" style="border-color: var(--glass-border) !important;">
                <i class="bi bi-3-circle-fill fs-2 mb-2" style="color: var(--olive-primary);"></i>
                <h5>Process & Copy</h5>
                <p class="small text-muted">Click the “Process” button to see results immediately. Use the prominent <strong>Copy</strong> buttons next to original input, decoded output, or encoded result to transfer corrected values directly into your code, API client, or testing tool.</p>
            </div>
        </div>
    </div>
    
    <p class="mt-4">Results update instantly as you type or change modes. Switch freely between modes to compare behaviors. The tool works offline once loaded and is fully responsive on mobile devices. For deeper learning, explore the Blog section covering topics like RFC 3986 rules, double-encoding pitfalls, and differences between <code>encodeURI</code> and <code>encodeURIComponent</code>.</p>
    
</section>

<section id="faq" class="glass-card p-5 mb-5 animate-fade-in" style="animation-delay: 0.6s;">
    <h2 class="mb-3">Frequently Asked Questions</h2>
    <div class="accordion accordion-flush" id="faqAccordion">
        <div class="accordion-item bg-transparent">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-transparent shadow-none fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                    Is my data private and secure?
                </button>
            </h2>
            <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">Yes—completely. All analysis, encoding, and decoding occur exclusively in your browser. No data is sent to any server, stored, or logged. You can safely use the tool with sensitive API keys, tokens, or proprietary parameters.</div>
            </div>
        </div>
        <div class="accordion-item bg-transparent">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-transparent shadow-none fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                    Does the tool work offline?
                </button>
            </h2>
            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">Once the page has loaded, all functionality works fully offline. You can bookmark it or save the page for repeated use without an internet connection (Bootstrap assets will cache automatically).</div>
            </div>
        </div>
        <div class="accordion-item bg-transparent">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-transparent shadow-none fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                    Why does it flag certain encoded strings as having issues?
                </button>
            </h2>
            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">The analyzer checks for malformed percent sequences, unencoded reserved characters (e.g., &, =, ? in query values), and potential double-encoding. These are common causes of 400 Bad Request errors or misinterpreted parameters in APIs.</div>
            </div>
        </div>
        <div class="accordion-item bg-transparent">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-transparent shadow-none fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                    Should I use Encode or Analyze mode most often?
                </button>
            </h2>
            <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">Use <strong>Analyze</strong> when debugging existing URLs or parameters to understand issues. Use <strong>Encode</strong> when starting from raw text to generate safe output for insertion into URIs.</div>
            </div>
        </div>
        <div class="accordion-item bg-transparent">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-transparent shadow-none fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                    Is this tool compliant with RFC 3986?
                </button>
            </h2>
            <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">Yes. Encoding follows the standard <code>encodeURIComponent</code> behavior, and issue detection is based directly on RFC 3986 rules for reserved/unreserved characters and percent-encoding syntax.</div>
            </div>
        </div>
    </div>
    
</section>    
</div>
</div>

<style>
    /* Custom styling for inputs inside cards */
    .form-control[readonly] {
        background-color: rgba(0,0,0,0.05);
        opacity: 0.8;
    }
    
    /* Fixed: Removed unused CSS selector [data-bs-theme="dark"] .form-control[readonly] */
</style>