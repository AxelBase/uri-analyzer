<!-- src/routes/blog/posts/post2/+page.svelte -->

<script lang="ts">
    import { base } from '$app/paths';
</script>

<svelte:head>
    <title>Understanding Percent-Encoding per RFC 3986 | URI Analyzer Blog</title>
    <meta name="description" content="A comprehensive guide to percent-encoding rules defined in RFC 3986, including reserved characters, unreserved characters, and proper encoding practices." />
    <meta property="og:title" content="Understanding Percent-Encoding per RFC 3986 | URI Analyzer Blog" />
    <meta property="og:description" content="A comprehensive guide to percent-encoding rules defined in RFC 3986, including reserved characters, unreserved characters, and proper encoding practices." />
    <meta property="og:url" content="{base}/blog/posts/post2" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
    <div class="breadcrumbs">
        <a href="{base}/blog">Blog</a>
        <span>/</span>
        <p>Understanding Percent-Encoding per RFC 3986</p>
    </div>

    <article class="prose">
        <h1>Understanding Percent-Encoding per RFC 3986</h1>
       
        <p class="post-meta">Published: December 13, 2025</p>
       
        <p>Percent-encoding is the mechanism defined in RFC 3986 that allows any character to be safely included in a URI by representing it as a percent sign followed by two hexadecimal digits corresponding to its UTF-8 byte value. This process ensures that data characters do not conflict with URI syntax delimiters.</p>
       
        <p>Not all characters need to be encoded. RFC 3986 distinguishes between unreserved characters, which may appear literally, and reserved characters, which have special meaning and must be encoded when used as data rather than delimiters.</p>
       
        <h2>Unreserved and Reserved Characters</h2>
        <p>Unreserved characters include uppercase and lowercase letters A-Z and a-z, digits 0-9, and the symbols hyphen, period, underscore, and tilde. These can appear in any URI component without encoding.</p>
       
        <p>Reserved characters serve as delimiters and include colon, slash, question mark, hash, brackets, at sign, ampersand, dollar, comma, semicolon, equals, and plus. When these appear as literal data, such as in a query parameter value, they must be percent-encoded to avoid being interpreted as syntax.</p>
       
        <h2>The Encoding Process</h2>
        <p>To percent-encode a character, first convert it to its UTF-8 byte sequence, then represent each byte as % followed by its two-digit uppercase hexadecimal value. For example, a space character becomes %20, and the Euro symbol becomes %E2%82%AC.</p>
       
        <p>Importantly, percent signs themselves must be encoded as %25 when they are part of the data, preventing ambiguity with actual encoding sequences.</p>
       
        <h2>Component-Specific Rules</h2>
        <p>Different URI components have slightly different encoding requirements. In query parameters, spaces may alternatively be represented as plus signs, though %20 is universally accepted. Path segments generally require stricter encoding of slashes and question marks to avoid changing the resource hierarchy.</p>
       
        <p>The fragment component follows similar rules but is never sent to servers, making correct client-side encoding especially important for single-page applications and anchor navigation.</p>
       
        <h2>Normalization and Interoperability</h2>
        <p>RFC 3986 also defines normalization rules, such as decoding unreserved characters before comparison. This means that %41 and A are considered equivalent in many contexts, though preserving the encoded form is often safer for transmission.</p>
       
        <p>Understanding these rules helps explain why the analyzer flags certain patterns as potential issues and provides insight into producing robust, standards-compliant URIs.</p>
       
        <p class="italic-note">Following RFC 3986 guidelines ensures your URIs work consistently across different systems and implementations.</p>
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