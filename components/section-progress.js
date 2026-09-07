const SECTIONS = [
  { id: 'hero', index: '01', label: 'Intro' },
  { id: 'about', index: '02', label: 'About' },
  { id: 'services', index: '03', label: 'Expertise' },
  { id: 'work', index: '04', label: 'Work' },
  { id: 'process', index: '05', label: 'Process' },
  { id: 'contact', index: '06', label: 'Connect' }
];

export function renderSectionProgress() {
  if (document.getElementById('section-rail')) return;

  const rail = document.createElement('nav');
  rail.id = 'section-rail';
  rail.className = 'section-rail';
  rail.setAttribute('aria-label', 'Section progress');

  rail.innerHTML = SECTIONS.map(s => `
    <a class="section-rail__item" href="#${s.id}" data-section="${s.id}" aria-current="false">
      <span class="section-rail__label">${s.index} · ${s.label}</span>
      <span class="section-rail__dot" aria-hidden="true"></span>
    </a>
  `).join('');

  document.body.appendChild(rail);

  const items = rail.querySelectorAll('.section-rail__item');

  const setActive = (id) => {
    items.forEach(item => {
      item.setAttribute('aria-current', item.dataset.section === id ? 'true' : 'false');
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
  }

  setActive('hero');
}
