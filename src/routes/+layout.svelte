<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';

  const currentYear = new Date().getFullYear();

  let isDropdownOpen = false;

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

  // Dark mode toggle (from File 2)
  function toggleTheme() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-bs-theme', newTheme);
  }
</script>

<header class="custom-navbar">
  <nav class="container-fluid navbar-content glass-card mx-3 my-2 px-4 py-2">
    <div class="left-section">
      <a href="{base}/" class="brand-link" aria-label="Home">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="navbar-logo" />
        <span class="brand-text">AxelBase</span>
      </a>

      <!-- === Buy Me a Coffee + Bitcoin (File 1 style adapted to File 2 theme) === -->
      <div class="bmac-container position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-4 py-2 rounded-pill shadow-sm"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-sm-inline fw-semibold">Buy me a Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div
            class="bmac-dropdown glass-card mt-2"
            transition:fly={{ y: -10, duration: 250 }}
          >
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
            >
              <span class="amount">$3</span> One Coffee
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
            >
              <span class="amount">$5</span> Two Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
            >
              <span class="amount">$10</span> Three Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
              class="custom-amount bitcoin-option"
            >
              Buy via Crypto (Bitcoin)
            </a>
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
    <span>© {currentYear} AxelBase URI Analyzer</span>
    <div class="footer-links">
      <a href="{base}/privacy">Privacy</a>
      <span class="separator">•</span>
      <a href="{base}/terms">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* ─────────────────────────────────────────────── */
  /*   Most of File 2 original styles kept unchanged   */
  /* ─────────────────────────────────────────────── */

  /* Navbar Positioning & Structure (from File 2) */
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
    border-radius: 50px;
  }

  .left-section,
  .right-section {
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
  .brand-link:hover {
    transform: scale(1.05);
  }
  .navbar-logo {
    height: 35px;
    width: auto;
  }
  .brand-text {
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: -0.5px;
  }

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
  .nav-link:hover::after {
    width: 100%;
  }

  /* === Buy Me a Coffee – File 1 style + File 2 theme adaptation === */
  .bmac-button {
    background: var(--olive-primary);
    color: white;
    font-size: 0.95rem;
    border: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(71, 64, 46, 0.25);
  }

  .bmac-button:hover {
    background: var(--olive-light);
    transform: translateY(-2px);
    box-shadow: 0 7px 18px rgba(71, 64, 46, 0.35);
  }

  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    box-shadow: var(--glass-shadow);
    overflow: hidden;
    z-index: 1001;
    padding: 0.4rem 0;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--text-main);
    text-decoration: none;
    font-size: 0.98rem;
    transition: all 0.22s ease;
  }

  .bmac-dropdown a:hover {
    background: rgba(189, 174, 133, 0.18);
    color: var(--olive-accent);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--olive-accent);
    font-size: 1.12rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    color: var(--olive-accent);
    border-top: 1px solid var(--glass-border);
    justify-content: center !important;
    padding: 14px 20px;
  }

  .bitcoin-option {
    color: #f7931a !important; /* Bitcoin orange */
    font-weight: 700;
  }

  .bitcoin-option:hover {
    background: rgba(247, 147, 26, 0.14) !important;
    color: #f7931a !important;
  }

  /* Theme Toggle (File 2) */
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
  :global([data-bs-theme='dark']) .theme-icon {
    transform: rotate(360deg);
  }
  .theme-icon {
    transition: transform 0.5s ease;
  }

  /* Footer (File 2) */
  .custom-footer {
    position: relative;
    bottom: 0;
    width: calc(100% - 2rem);
    border-radius: 20px;
    z-index: 999;
  }
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-links a {
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.2s;
  }
  .footer-links a:hover {
    color: var(--olive-primary);
    text-decoration: underline;
  }
  .separator {
    margin: 0 0.5rem;
    color: var(--text-muted);
  }

  @media (max-width: 992px) {
    .custom-navbar {
      padding: 0.5rem 0;
    }
    .navbar-content {
      flex-direction: column;
      gap: 1rem;
      border-radius: 25px;
    }
    .left-section,
    .right-section {
      width: 100%;
      justify-content: space-between;
    }
  }
</style>