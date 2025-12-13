<script lang="ts">
    import '../app.css';
    import { base } from '$app/paths';
    import { fly, slide } from 'svelte/transition';

    const paypalUsername = 'AxelLab427'; 
    const donationAmounts = [1, 3, 5, 10];
    let isDropdownOpen = false;

    // --- Dropdown Logic ---
    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }

    function closeDropdown() {
        isDropdownOpen = false;
    }

    function clickOutside(node: HTMLElement) {
        const handleClick = (event: MouseEvent) => {
            if (node && !node.contains(event.target as Node)) {
                node.dispatchEvent(new CustomEvent('click_outside'));
            }
        };
        document.addEventListener('click', handleClick, true);
        return {
            destroy() {
                document.removeEventListener('click', handleClick, true);
            }
        };
    }

    // --- Dark Mode Logic ---
    function toggleTheme() {
        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-bs-theme', newTheme);
    }

    const currentYear = new Date().getFullYear();
</script>

<header class="custom-navbar">
    <nav class="container-fluid navbar-content glass-card mx-3 my-2 px-4 py-2">
        
        <div class="left-section">
            <a href="{base}/" class="brand-link" aria-label="Home">
                <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-logo" />
                <span class="brand-text">AxelBase</span>
            </a>

            <div class="bmac-container" use:clickOutside on:click_outside={closeDropdown}>
                <button class="bmac-button" on:click={toggleDropdown}>
                    <i class="bi bi-cup-hot-fill"></i>
                    <span class="d-none d-sm-inline">Buy me a coffee</span>
                </button>

                {#if isDropdownOpen}
                    <div class="bmac-dropdown glass-card" transition:fly={{ y: -10, duration: 250 }}>
                        {#each donationAmounts as amount}
                            <a 
                                href="https://paypal.me/{paypalUsername}/{amount}" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                on:click={closeDropdown}
                                class="bmac-option"
                            >
                                ${amount}
                            </a>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>

        <div class="right-section">
            <ul class="nav-links d-none d-lg-flex">
                <li><a class="nav-link" href="{base}/">Home</a></li>
                <li><a class="nav-link" href="{base}/#about">About</a></li>
                <li><a class="nav-link" href="{base}/#how-to">How to use</a></li>
                <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
                <li><a class="nav-link" href="{base}/blog">Blog</a></li>
            </ul>

            <button class="theme-toggle-btn" on:click={toggleTheme} aria-label="Toggle Dark Mode">
                <i class="bi bi-moon-stars-fill theme-icon"></i>
            </button>

            <button 
                class="navbar-toggler d-lg-none ms-2" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#mobileNav"
                aria-label="Toggle Mobile Navigation Menu" 
            >
                <i class="bi bi-list fs-3"></i>
            </button>
        </div>
    </nav>
</header>

<main>
    <slot />
</main>

<footer class="custom-footer glass-card mx-3 mb-3 p-3">
    <div class="container-fluid footer-content">
        <span>&copy; {currentYear} AxelBase URI Analyzer</span>
        <div class="footer-links">
            <a href="{base}/privacy">Privacy</a>
            <span class="separator">•</span>
            <a href="{base}/terms">Terms</a>
        </div>
    </div>
</footer>

<style>
    /* Navbar Positioning */
    .custom-navbar {
        position: sticky;
        top: 0;
        z-index: 1000;
        padding-top: 0.5rem;
    }

    .navbar-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 50px; /* Bubbly shape */
    }

    .left-section, .right-section {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    /* Brand */
    .brand-link {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        text-decoration: none;
        color: var(--text-main);
        transition: transform 0.2s;
    }
    .brand-link:hover { transform: scale(1.05); }
    .navbar-logo { height: 35px; width: auto; }
    .brand-text { font-weight: 700; font-size: 1.4rem; letter-spacing: -0.5px; }

    /* Nav Links */
    .nav-links {
        list-style: none;
        display: flex;
        gap: 1.5rem;
        margin: 0;
        padding: 0;
    }
    .nav-link {
        text-decoration: none;
        color: var(--text-main);
        font-weight: 600;
        position: relative;
        padding: 0.5rem 0;
    }
    .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: var(--olive-primary);
        transition: width 0.3s ease;
        border-radius: 2px;
    }
    
    /* Removed unused CSS selector: [data-bs-theme="dark"] .nav-link::after { background-color: var(--olive-accent); } */
    .nav-link:hover::after { width: 100%; }

    /* Buy Me Coffee */
    .bmac-container { position: relative; }
    .bmac-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: linear-gradient(135deg, #ffd700, #ffaa00);
        color: #333;
        border: none;
        padding: 0.5rem 1.2rem;
        border-radius: 50px;
        font-weight: 700;
        font-size: 0.9rem;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 10px rgba(255, 215, 0, 0.3);
    }
    .bmac-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(255, 215, 0, 0.5);
    }
    .bmac-dropdown {
        position: absolute;
        top: 130%;
        left: 0;
        padding: 0.5rem;
        min-width: 120px;
        display: flex;
        flex-direction: column;
        z-index: 1001;
        overflow: hidden;
    }
    .bmac-option {
        text-decoration: none;
        color: var(--text-main);
        padding: 0.6rem 1rem;
        font-weight: 600;
        border-radius: 10px;
        text-align: center;
        transition: background-color 0.2s;
    }
    .bmac-option:hover { background-color: rgba(255, 215, 0, 0.2); }

    /* Theme Toggle */
    .theme-toggle-btn {
        background: transparent;
        border: 2px solid var(--text-main);
        color: var(--text-main);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    .theme-toggle-btn:hover {
        background: var(--text-main);
        color: var(--bg-color);
        transform: rotate(15deg);
    }
    /* Rotate icon based on theme */
    :global([data-bs-theme="dark"]) .theme-icon { transform: rotate(360deg); }
    .theme-icon { transition: transform 0.5s ease; }

    /* Footer */
    .custom-footer {
        position: relative;
        bottom: 0;
        width: calc(100% - 2rem);
        border-radius: 20px;
        z-index: 999;
    }
    .footer-content { display: flex; justify-content: space-between; align-items: center; }
    .footer-links a { color: var(--text-muted); text-decoration: none; transition: color 0.2s; }
    .footer-links a:hover { color: var(--olive-primary); text-decoration: underline; }
    .separator { margin: 0 0.5rem; color: var(--text-muted); }

    @media (max-width: 992px) {
        .custom-navbar { padding: 0.5rem 0; }
        .navbar-content { flex-direction: column; gap: 1rem; border-radius: 25px; }
        .left-section, .right-section { width: 100%; justify-content: space-between; }
        .nav-links { display: none; } /* Hide links on mobile for simplicity in this snippet */
    }
</style>