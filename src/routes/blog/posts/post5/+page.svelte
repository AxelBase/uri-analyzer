<!-- src/routes/blog/posts/post5/+page.svelte -->

<script lang="ts">
    import { base } from '$app/paths';
</script>

<svelte:head>
    <title>encodeURIComponent vs. encodeURI: Key Differences | URI Analyzer Blog</title>
    <meta name="description" content="Understand the critical differences between JavaScript's encodeURI and encodeURIComponent functions and when to use each for proper URI handling." />
    <meta property="og:title" content="encodeURIComponent vs. encodeURI: Key Differences | URI Analyzer Blog" />
    <meta property="og:description" content="Understand the critical differences between JavaScript's encodeURI and encodeURIComponent functions and when to use each for proper URI handling." />
    <meta property="og:url" content="{base}/blog/posts/post5" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
    <div class="breadcrumbs">
        <a href="{base}/blog">Blog</a>
        <span>/</span>
        <p>encodeURIComponent vs. encodeURI: Key Differences</p>
    </div>

    <article class="prose">
        <h1>encodeURIComponent vs. encodeURI: Key Differences</h1>
       
        <p class="post-meta">Published: December 13, 2025</p>
       
        <p>JavaScript provides two built-in functions for percent-encoding URIs: encodeURI and encodeURIComponent. While they appear similar, their intended use cases and behavior differ significantly, and choosing the wrong one is a common source of encoding errors.</p>
       
        <p>The key distinction lies in which characters each function treats as safe. Both encode characters that could interfere with URI syntax, but encodeURI is designed for complete URIs, while encodeURIComponent targets individual components such as query parameter values.</p>
       
        <h2>What encodeURI Leaves Unencoded</h2>
        <p>encodeURI preserves URI delimiter characters that have structural meaning in a full URI. It does not encode colon, slash, question mark, hash, ampersand, equals, or other reserved characters used to separate scheme, authority, path, query, and fragment parts.</p>
       
        <p>This makes encodeURI suitable only when encoding an entire URI string that already contains proper delimiters. Applying it to a query parameter value would leave ampersands and equals signs untouched, potentially breaking parameter parsing.</p>
       
        <h2>What encodeURIComponent Encodes</h2>
        <p>encodeURIComponent is stricter and encodes all reserved delimiters, treating the input as raw data rather than structured syntax. It converts colon, slash, question mark, ampersand, equals, and others into their percent-encoded forms.</p>
       
        <p>This behavior makes encodeURIComponent the correct choice for encoding query parameter values, path segments containing special characters, or any component that will be inserted into a larger URI.</p>
       
        <h2>Practical Examples</h2>
        <p>Consider a parameter value containing an ampersand, such as "peanut butter & jelly". Using encodeURI would leave the ampersand intact, causing the server to interpret it as a parameter separator. encodeURIComponent correctly transforms it to "peanut%20butter%20%26%20jelly", preserving the intended value.</p>
       
        <p>Similarly, slashes in path-like parameters or question marks in search terms must be encoded with encodeURIComponent to avoid altering the URI structure.</p>
       
        <h2>When to Use Each</h2>
        <p>Use encodeURI only when processing a complete URI string that needs escaping for transmission, such as when embedding a URL as a parameter in another request. Use encodeURIComponent for any individual component that will be assembled into a URI.</p>
       
        <p>The analyzer tool internally relies on encodeURIComponent behavior for component encoding, aligning with best practices for query strings and path segments.</p>
       
        <p class="italic-note">Choosing the right encoding function prevents subtle bugs and ensures predictable URI construction.</p>
    </article>
</div>

<style>
.post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
    margin: 0 auto;
}

.breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
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
}

.prose {
    line-height: 1.85;
    color: var(--text-main);
}

.prose .post-meta {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid var(--glass-border);
    padding-bottom: 1rem;
}

.prose h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--olive-primary);
    margin-bottom: 0.5rem;
}

.prose h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--olive-primary);
    margin-top: 3rem;
    margin-bottom: 0.75rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--glass-border);
}

.prose p {
    margin-bottom: 1.4rem;
    font-size: 1.1rem;
}

.prose .italic-note {
    font-style: italic;
    color: var(--text-muted);
    text-align: center;
    margin-top: 4rem;
    font-size: 1.15rem;
    padding: 1.5rem;
    background: var(--glass-bg);
    border-radius: 16px;
    border: 1px solid var(--glass-border);
}

</style>