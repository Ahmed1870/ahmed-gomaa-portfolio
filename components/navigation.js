export function renderNavigation() {
  const header = document.querySelector("#site-header");
  if (!header) return;

  header.innerHTML = `
    <div class="container">
      <nav class="site-nav" aria-label="Primary navigation">
        <a class="site-nav__brand" href="#hero" aria-label="Ahmed Gomaa home">
          <svg class="site-nav__logo" width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
            <circle cx="17" cy="17" r="13.5" stroke="var(--color-line)" stroke-width="1.6"/>
           <circle class="site-nav__logo-arc" cx="17" cy="17" r="13.5" stroke="var(--color-accent)" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="64 85" transform="rotate(-90 17 17)"/>
            <text x="17" y="18" text-anchor="middle" dominant-baseline="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12" font-weight="700" fill="var(--color-ink)">AG</text>
          </svg>
          <span class="site-nav__brand-text">Ahmed Gomaa<span>.</span></span>
        </a>

        <div class="site-nav__links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>

        <button id="theme-toggle" class="theme-toggle" type="button" aria-label="Toggle dark mode">
          <svg class="theme-toggle__icon theme-toggle__icon--sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <circle cx="12" cy="12" r="4.5"/>
            <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8"/>
          </svg>
          <svg class="theme-toggle__icon theme-toggle__icon--moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>
          </svg>
        </button>

        <div class="site-nav__mobile">
          <details id="mobile-nav-details">
            <summary aria-label="Open navigation menu">Menu</summary>
            <div class="site-nav__mobile-links">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </div>
          </details>
        </div>

        <a class="site-nav__cta" href="#contact">
          Let's talk
        </a>
      </nav>
    </div>
  `;

  const details = header.querySelector('#mobile-nav-details');
  if (details) {
    document.addEventListener('click', (e) => {
      if (details.open && !details.contains(e.target)) {
        details.removeAttribute('open');
      }
    });

    details.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => details.removeAttribute('open'));
    });
  }

  const themeToggle = header.querySelector('#theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }
}
