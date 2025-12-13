<!-- src/routes/terms/+page.svelte -->

<script lang="ts">
    import { base } from '$app/paths';
</script>

<svelte:head>
    <title>Terms and Conditions | URI Component Analyzer & Debugger</title>
    <meta name="description" content="Review the Terms and Conditions for using the URI Component Analyzer & Debugger, a free client-side web tool." />
    <meta property="og:title" content="Terms and Conditions | URI Component Analyzer & Debugger" />
    <meta property="og:description" content="Review the Terms and Conditions for using the URI Component Analyzer & Debugger, a free client-side web tool." />
    <meta property="og:url" content="{base}/terms" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
    <div class="breadcrumbs">
        <a href="{base}/">Home</a>
        <span>/</span>
        <p>Terms and Conditions</p>
    </div>

    <article class="prose">
        <h1>Terms and Conditions</h1>

        <p class="post-meta">Last Updated: December 13, 2025</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the <strong>URI Component Analyzer & Debugger</strong> ("the Tool"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Tool. We reserve the right to modify these terms at any time, with changes effective upon posting.</p>

        <h2>2. Description of Service</h2>
        <p>The Tool is a free, open-source, client-side web application that allows users to analyze percent-encoding in URI components, perform encoding/decoding, and receive debugging insights. All functionality executes entirely in your browser using standard JavaScript APIs.</p>

        <h2>3. License and Usage</h2>
        <p>You are granted a <strong>non-exclusive, non-transferable, limited license</strong> to access and use the Tool for personal or professional purposes. You may not:</p>
        <ul>
            <li>Modify, reverse-engineer, or create derivative works based on the Tool beyond what is permitted by its open-source license.</li>
            <li>Use the Tool for unlawful purposes or to transmit malicious content.</li>
            <li>Attempt to overload, disrupt, or interfere with the Tool's availability.</li>
            <li>Remove or alter any copyright or attribution notices.</li>
        </ul>

        <h2>4. No Warranty</h2>
        <p>The Tool is provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind, express or implied, including but not limited to accuracy, reliability, or fitness for a particular purpose. We do not guarantee that the Tool will be error-free, uninterrupted, or meet your specific requirements. Use at your own risk.</p>

        <h2>5. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Tool, even if advised of the possibility of such damages. This includes loss of data, business interruption, or inaccuracies in analysis results.</p>

        <h2>6. Intellectual Property</h2>
        <p>The Tool's source code is licensed under the MIT License and available publicly on GitHub. All rights to the design, functionality, and content (excluding third-party libraries) are retained by the original author.</p>

        <h2>7. Third-Party Resources</h2>
        <p>The Tool uses Bootstrap (licensed under MIT) via CDN. Your use of these resources is subject to their respective licenses. We are not responsible for third-party content or services.</p>

        <h2>8. Termination</h2>
        <p>We may restrict or terminate access to the Tool at any time without notice, particularly in cases of suspected abuse.</p>

        <h2>9. Governing Law</h2>
        <p>These terms shall be governed by the laws of the jurisdiction in which the Tool is hosted, without regard to conflict of law principles.</p>

        <h2>10. Contact</h2>
        <p>For questions regarding these Terms, please open an issue on our GitHub repository.</p>

        <p class="italic-note">Thank you for using the URI Component Analyzer & Debugger responsibly.</p>
    </article>
</div>

<!-- Updated <style> tag – copy this into src/routes/privacy/+page.svelte and src/routes/terms/+page.svelte -->

<style>
    .post-layout {
        max-width: 800px;
        padding-top: 3rem;
        padding-bottom: 5rem;
        margin: 0 auto;
    }

    .breadcrumbs {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 2rem;
        font-size: 0.95rem;
        color: var(--text-muted);
    }

    .breadcrumbs a {
        color: var(--olive-primary);
        text-decoration: none;
        font-weight: 600;
    }

    .breadcrumbs a:hover {
        text-decoration: underline;
    }

    .breadcrumbs p {
        margin: 0;
        color: var(--text-main);
        font-weight: 500;
    }

    .prose {
        line-height: 1.9;
        color: var(--text-main);
    }

    .prose .post-meta {
        color: var(--text-muted);
        font-size: 0.95rem;
        margin-bottom: 2.5rem;
        padding-bottom: 1.25rem;
        border-bottom: 1px solid var(--glass-border);
    }

    .prose h1 {
        font-size: 3rem;
        font-weight: 700;
        color: var(--olive-primary);
        margin-bottom: 1rem;
        line-height: 1.2;
    }

    .prose h2 {
        font-size: 1.9rem;
        font-weight: 700;
        color: var(--olive-primary);
        margin-top: 3.5rem;
        margin-bottom: 1rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid var(--glass-border);
    }

    .prose p {
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
    }

    .prose ul {
        padding-left: 1.8rem;
        margin: 1.8rem 0;
    }

    .prose ul li {
        margin-bottom: 0.9rem;
        position: relative;
        padding-left: 0.5rem;
        font-size: 1.05rem;
    }

    .prose ul li::marker {
        color: var(--olive-primary);
        font-weight: bold;
    }

    .prose strong {
        color: var(--olive-primary);
        font-weight: 700;
    }

    .prose .italic-note {
        font-style: italic;
        color: var(--text-muted);
        text-align: center;
        margin-top: 4.5rem;
        font-size: 1.2rem;
        padding: 2rem;
        background: var(--glass-bg);
        border-radius: var(--radius-lg);
        border: 1px solid var(--glass-border);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }

</style>