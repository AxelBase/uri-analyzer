<!-- src/routes/privacy/+page.svelte -->

<script lang="ts">
    import { base } from '$app/paths';
</script>

<svelte:head>
    <title>Privacy Policy | URI Component Analyzer & Debugger</title>
    <meta name="description" content="Read our Privacy Policy to understand how the URI Component Analyzer protects your data with a fully client-side, no-collection approach." />
    <meta property="og:title" content="Privacy Policy | URI Component Analyzer & Debugger" />
    <meta property="og:description" content="Read our Privacy Policy to understand how the URI Component Analyzer protects your data with a fully client-side, no-collection approach." />
    <meta property="og:url" content="{base}/privacy" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
    <div class="breadcrumbs">
        <a href="{base}/">Home</a>
        <span>/</span>
        <p>Privacy Policy</p>
    </div>

    <article class="prose">
        <h1>Privacy Policy</h1>

        <p class="post-meta">Effective Date: December 13, 2025</p>

        <h2>1. Introduction</h2>
        <p>Welcome to the <strong>URI Component Analyzer & Debugger</strong> ("the Tool"), a free, open-source web utility designed to help developers analyze, encode, and decode URI components. This Privacy Policy explains our data practices. We prioritize <strong>user privacy above all</strong> and operate on a strict <strong>no-data-collection principle</strong>. The Tool runs entirely in your browser using client-side JavaScript, meaning <strong>no information is ever sent to us or any third party</strong>. This policy provides full transparency about how your data is handled—or rather, not handled.</p>

        <h2>2. Information We Do Not Collect</h2>
        <p>The Tool is built to function without gathering any data whatsoever. Specifically, we do not collect:</p>
        <ul>
            <li><strong>Personal Information</strong>: Names, email addresses, IP addresses, or any identifiers.</li>
            <li><strong>Usage Data</strong>: Browser details, device information, location, or visit timestamps.</li>
            <li><strong>Input Content</strong>: Any URI strings, query parameters, or text you enter remains exclusively on your device and is never transmitted.</li>
            <li><strong>Analytics or Tracking Data</strong>: No cookies, pixels, fingerprints, or analytics services are used.</li>
        </ul>
        <p>All processing—analysis, encoding, decoding, and issue detection—happens locally in your browser.</p>

        <h2>3. How the Tool Operates</h2>
        <p>When you use the Tool:</p>
        <ul>
            <li><strong>Local Execution</strong>: JavaScript functions (including native <code>encodeURIComponent</code> and <code>decodeURIComponent</code>) perform all operations directly in your browser.</li>
            <li><strong>No Network Requests</strong>: Beyond loading the initial page and Bootstrap assets from CDNs, no data leaves your device.</li>
            <li><strong>Copy Functionality</strong>: Copy-to-clipboard features use the browser's native Clipboard API without server involvement.</li>
        </ul>
        <p>Your inputs are <strong>never stored persistently</strong>, even in localStorage or sessionStorage, unless you manually choose to keep them during your session.</p>

        <h2>4. Third-Party Services</h2>
        <p>The Tool loads Bootstrap CSS and JavaScript from official CDNs for styling and layout. These resources do not track users or set cookies in this context. No advertising, analytics, or social media integrations are present.</p>

        <h2>5. Cookies and Tracking</h2>
        <p>We <strong>do not use cookies</strong>, localStorage for tracking, web beacons, or any form of user monitoring. Your experience is completely <em>stateless</em> from our perspective.</p>

        <h2>6. Data Security</h2>
        <p>Since no data is transmitted or stored by us, the primary security responsibility lies with your browser and device. We recommend using up-to-date browsers and secure connections (HTTPS) when accessing the Tool.</p>

        <h2>7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy occasionally. Changes will be reflected on this page with an updated effective date.</p>

        <h2>8. Contact</h2>
        <p>For questions about this policy, please open an issue on our public GitHub repository.</p>

        <p class="italic-note">Your privacy is protected by design—<strong>nothing is collected, nothing is shared</strong>.</p>
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