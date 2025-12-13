<!-- src/routes/blog/+page.svelte -->

<script lang="ts">
    import { base } from '$app/paths';

    const posts = [
        { href: '/blog/posts/post1', title: 'Introduction to URI Component Analysis', description: 'Discover how this tool helps developers inspect and debug percent-encoding in URI components for reliable API interactions.' },
        { href: '/blog/posts/post2', title: 'Understanding Percent-Encoding per RFC 3986', description: 'Explore the rules of percent-encoding, reserved vs. unreserved characters, and why proper encoding is essential for URI validity.' },
        { href: '/blog/posts/post3', title: 'Common Percent-Encoding Issues in API Debugging', description: 'Learn about frequent problems like malformed sequences, invalid hex digits, and their impact on API requests.' },
        { href: '/blog/posts/post4', title: 'Detecting and Avoiding Double-Encoding Errors', description: 'Understand how double percent-encoding occurs, why it breaks URIs, and how the tool identifies potential double-encoding.' },
        { href: '/blog/posts/post5', title: 'encodeURIComponent vs. encodeURI: Key Differences', description: 'A deep dive into when to use each JavaScript function for encoding URI components versus full URIs.' },
        { href: '/blog/posts/post6', title: 'Handling Reserved Characters in Query Parameters', description: 'Best practices for encoding characters like ?, &, =, and / in query strings to prevent parsing errors.' },
        { href: '/blog/posts/post7', title: 'Validating Non-ASCII and Special Characters in URIs', description: 'How UTF-8 percent-encoding works for international characters and tips for ensuring cross-browser compatibility.' },
    ];
</script>

<svelte:head>
    <title>Blog | URI Component Analyzer Insights</title>
    <meta name="description" content="In-depth articles on URI percent-encoding, API debugging techniques, RFC 3986 compliance, and best practices for handling URI components." />
</svelte:head>

<div class="container fade-in blog-index">
    <header class="blog-header">
        <h1><i class="bi bi-journal-richtext"></i> Blog: URI Analyzer Insights</h1>
        <p class="subtitle">
            Deep dives into percent-encoding mechanics, common pitfalls in API development, RFC 3986 guidelines, and practical debugging strategies using the URI Component Analyzer & Debugger.
        </p>
    </header>

    <div class="posts-grid">
        {#each posts as post}
            <a href="{base}{post.href}" class="card post-card">
                <div class="card-body">
                    <h2 class="post-title">{post.title}</h2>
                    <p class="post-description">{post.description}</p>
                    <span class="read-more">Read Article &rarr;</span>
                </div>
            </a>
        {/each}
    </div>
</div>

<!-- Updated <style> tag for src/routes/blog/+page.svelte (Blog Index) -->

<style>
    .blog-index {
        padding-top: 3rem;
        padding-bottom: 5rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .blog-header {
        text-align: center;
        margin-bottom: 4rem;
        padding-bottom: 2.5rem;
        border-bottom: 1px solid var(--glass-border);
    }

    .blog-header h1 {
        font-size: 3rem;
        font-weight: 700;
        color: var(--olive-primary);
        margin-bottom: 1.5rem;
    }

    .subtitle {
        font-size: 1.15rem;
        color: var(--text-muted);
        max-width: 800px;
        margin: 0 auto;
        line-height: 1.85;
    }

    .posts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 2rem;
    }

    .post-card {
        background: var(--glass-bg);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: var(--glass-shadow);
        transition: all 0.3s ease;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .post-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .post-card .card-body {
        padding: 1.75rem;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .post-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--olive-primary);
        margin-bottom: 1rem;
        line-height: 1.4;
    }

    .post-description {
        color: var(--text-muted);
        flex-grow: 1;
        margin-bottom: 1.5rem;
        font-size: 1.05rem;
        line-height: 1.7;
    }

    .read-more {
        color: var(--olive-primary);
        font-weight: 600;
        font-size: 1.05rem;
        align-self: flex-start;
        transition: transform 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    .read-more::after {
        content: '→';
        font-size: 1.2rem;
        transition: transform 0.3s ease;
    }

    .post-card:hover .read-more {
        transform: translateX(8px);
    }

    .post-card:hover .read-more::after {
        transform: translateX(4px);
    }

</style>