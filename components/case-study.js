import { projectsMeta } from '../js/projects-meta.js';
import { getProjectData, renderDashboard } from './dashboard.js';

function renderList(items = []) {
  if (!items.length) return '';

  return `
    <ul class="case-study-list">
      ${items.map(item => `<li>${item}</li>`).join('')}
    </ul>
  `;
}

function renderSection(label, content) {
  if (!content) return '';

  const body = Array.isArray(content)
    ? renderList(content)
    : `<p class="case-study-section__text">${content}</p>`;

  return `
    <section class="case-study-section">
      <h3 class="case-study-section__label">${label}</h3>
      ${body}
    </section>
  `;
}

function escHandler(e) {
  if (e.key === 'Escape') closeCaseStudy();
}

export function renderCaseStudy(projectId) {
  const meta = projectsMeta[projectId];
  if (!meta) return;

  closeCaseStudy();

  const overlay = document.createElement('div');
  overlay.id = 'case-study-overlay';
  overlay.className = 'case-study-overlay';

  overlay.innerHTML = `
    <div
      class="case-study-modal"
      role="dialog"
      aria-modal="true"
      aria-label="${meta.title} case study"
    >

      <button
        class="case-study-modal__close"
        type="button"
        aria-label="Close case study"
      >
        &times;
      </button>

      <div class="case-study-modal__scroll">

        <span class="eyebrow">Case Study</span>

        <h2 class="case-study-modal__title">${meta.title}</h2>

        <div class="tag-list" style="margin-top:var(--space-3);">
          ${meta.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>

        ${renderSection('The Challenge', meta.challenge)}

        ${renderSection('Approach', meta.approach)}

        ${renderSection('Key Findings', meta.findings)}

        ${renderSection('Recommendations', meta.recommendations)}

        <section class="case-study-section">
          <h3 class="case-study-section__label">Interactive Dashboard</h3>
          <div id="case-study-dashboard"></div>
        </section>

      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.classList.add('is-locked');

  requestAnimationFrame(() => {
    overlay.classList.add('is-open');
  });

  const dashboardContainer = overlay.querySelector('#case-study-dashboard');

  if (dashboardContainer) {
    renderDashboard(dashboardContainer, projectId);
  }

  overlay
    .querySelector('.case-study-modal__close')
    .addEventListener('click', closeCaseStudy);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeCaseStudy();
    }
  });

  document.addEventListener('keydown', escHandler);
}

export function closeCaseStudy() {
  const overlay = document.getElementById('case-study-overlay');

  if (!overlay) return;

  overlay.remove();
  document.body.classList.remove('is-locked');
  document.removeEventListener('keydown', escHandler);
}
