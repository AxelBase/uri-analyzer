<!-- src/routes/+error.svelte -->

<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>404 — Page Not Found | URI Component Analyzer & Debugger</title>
    <meta name="description" content="The requested page could not be found. Return to the home page to continue analyzing URI components." />
    <meta property="og:title" content="404 — Page Not Found | URI Component Analyzer & Debugger" />
    <meta property="og:description" content="The requested page could not be found. Return to the home page to continue analyzing URI components." />
    <meta property="og:url" content="{base}/404" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="robots" content="noindex" />
</svelte:head>

<div class="container fade-in post-layout">
    <div class="breadcrumbs">
        <a href="{base}/">Home</a>
        <span>/</span>
        <p>404 Not Found</p>
    </div>

    <article class="prose text-center">
        <h1>404 — Page Not Found</h1>

        <p class="post-meta">We're sorry — the page you're looking for doesn't exist.</p>

        <p>It might have been removed, renamed, or is temporarily unavailable. If you entered the URL manually, please double-check the spelling.</p>

        <div class="mt-5 mb-5">
            <a href="{base}/" class="btn btn-primary btn-lg">Return to Home</a>
        </div>

        <h2>Useful Links</h2>
        <ul class="list-unstyled d-inline-block text-start">
            <li><a href="{base}/">URI Analyzer Home</a></li>
            <li><a href="{base}/blog">Blog</a></li>
            <li><a href="{base}/privacy">Privacy Policy</a></li>
            <li><a href="{base}/terms">Terms and Conditions</a></li>
        </ul>

        <h2>Need Help?</h2>
        <p>If you believe this page should exist or encountered this error unexpectedly, try refreshing the page or clearing your browser cache. For persistent issues, feel free to open an issue on the project's GitHub repository.</p>

        <p class="italic-note"><strong>Keep encoding correctly.</strong> We'll help you get back on track.</p>
    </article>
</div>

<!-- Updated <style> tag for src/routes/+error.svelte (404 Error Page) -->

<style>
    .post-layout {
        max-width: 800px;
        padding-top: 5rem;
        padding-bottom: 7rem;
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
        text-align: center;
    }

    .prose .post-meta {
        color: var(--text-muted);
        font-size: 1.1rem;
        margin-bottom: 3rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--glass-border);
    }

    .prose h1 {
        font-size: 4.5rem;
        font-weight: 700;
        color: var(--olive-primary);
        margin-bottom: 1.5rem;
        line-height: 1.1;
    }

    .prose h2 {
        font-size: 2rem;
        font-weight: 700;
        color: var(--olive-primary);
        margin-top: 3.5rem;
        margin-bottom: 1.5rem;
    }

    .prose p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .prose ul {
        list-style-type: none;
        padding-left: 0;
        margin: 3rem auto;
        max-width: 400px;
    }

    .prose ul li {
        margin-bottom: 1.25rem;
        font-size: 1.2rem;
    }

    .prose ul li a {
        color: var(--olive-primary);
        text-decoration: none;
        font-weight: 600;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        display: inline-block;
        transition: all 0.3s ease;
        border: 2px solid var(--glass-border);
    }

    .prose ul li a:hover {
        background: var(--glass-bg);
        transform: translateY(-3px);
        box-shadow: var(--glass-shadow);
    }

    .prose .btn-primary {
        font-size: 1.3rem;
        padding: 1rem 2.5rem;
        margin: 2rem 0;
    }

    .prose .italic-note {
        font-style: italic;
        color: var(--text-muted);
        text-align: center;
        margin-top: 5rem;
        font-size: 1.3rem;
        padding: 2.5rem;
        background: var(--glass-bg);
        border-radius: var(--radius-lg);
        border: 1px solid var(--glass-border);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
    }

</style>