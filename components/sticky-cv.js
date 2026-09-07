export function renderStickyCV() {
  if (document.getElementById('sticky-cv-btn')) return;

  const btn = document.createElement('a');
  btn.id = 'sticky-cv-btn';
  btn.href = 'assets/Ahmed_Gomaa_EN.pdf';
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.setAttribute('aria-label', 'Download Ahmed Gomaa CV PDF');

  btn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    background: var(--color-ink, #1a1a1a);
    color: var(--color-bg, #ffffff);
    padding: 12px 20px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 8px 24px rgba(0,0,0,0.25);
    display: flex;
    align-items: center;
    gap: 8px;
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;
    outline-offset: 2px;
  `;

  btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
    <span>Download CV</span>
  `;

  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-3px)';
    btn.style.boxShadow = '0 12px 28px rgba(0,0,0,0.35)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translateY(0)';
    btn.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)';
  });

  btn.addEventListener('focus', () => {
    btn.style.transform = 'translateY(-2px)';
  });

  btn.addEventListener('blur', () => {
    btn.style.transform = 'translateY(0)';
  });

  document.body.appendChild(btn);

  function checkScrollPosition() {
    const contact = document.getElementById('contact');
    if (!contact) return;

    const rect = contact.getBoundingClientRect();
    const nearContact = rect.top < window.innerHeight * 0.6;

    btn.style.opacity = nearContact ? '0' : '1';
    btn.style.pointerEvents = nearContact ? 'none' : 'auto';
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        checkScrollPosition();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  checkScrollPosition();
}
