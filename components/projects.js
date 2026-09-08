import { omnichannelData } from '../data/omnichannel.js';
import { hrData } from '../data/hr.js';
import { rfmData } from '../data/rfm.js';
import { projectsMeta } from '../js/projects-meta.js';
import { renderMiniSparkline } from '../js/charts.js';

function buildMiniPreview(dataset, defaultFilterKey, accentColor) {
  const view = dataset.filters[defaultFilterKey];
  const topKpi = view.kpis[0];

  return `
    <div style="width:100%; height:100%; padding: var(--space-4, 16px); display:flex; flex-direction:column; justify-content:space-between; box-sizing:border-box;">
      <div>
        <span style="font-size: var(--text-xs); font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color: var(--color-muted);">${dataset.subtitle}</span>
        <div style="display:flex; align-items:baseline; gap:8px; margin-top:6px;">
          <span style="font-size: var(--text-2xl, 26px); font-weight:800; color: var(--color-ink);">${topKpi.value}</span>
          <span style="font-size:12px; font-weight:600; color:${topKpi.isPositive ? '#10b981' : '#ef4444'};">${topKpi.change}</span>
        </div>
        <span style="font-size: 11px; color: var(--color-muted);">${topKpi.label}</span>
      </div>

      ${renderMiniSparkline(view.trendData, accentColor)}

      <span class="preview-cta" style="font-size: var(--text-xs); font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color: ${accentColor}; align-self:flex-end; transition: transform 0.2s ease, opacity 0.2s ease;">
        Click to explore →
      </span>
    </div>
  `;
}

function projectMatchesSkill(meta, skill) {
  if (skill === 'all') return true;
  return meta.tags.some(tag =>
    tag.toLowerCase().includes(skill.toLowerCase())
  );
}

export function renderProjects() {
  const section = document.querySelector("#work");
  if (!section) return;

  const previewBoxStyle = `
    background: var(--color-surface-alt);
    border-radius: var(--radius-md);
    aspect-ratio: 4/3;
    border: 1px solid var(--color-line);
    cursor: pointer;
    overflow: hidden;
    transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
  `;

  const datasets = {
    omnichannel: { data: omnichannelData, filterKey: "All Channels" },
    hr: { data: hrData, filterKey: "All Departments" },
    rfm: { data: rfmData, filterKey: "All Segments" }
  };

  const order = ["omnichannel", "hr", "rfm"];

  const filters = [
    { id: 'all', label: 'All Skills' },
    { id: 'sql', label: 'SQL' },
    { id: 'power bi', label: 'Power BI' },
    { id: 'python', label: 'Python' },
    { id: 'excel', label: 'Excel' }
  ];

  section.innerHTML = `
    <div class="container">

      <div class="section__header">
        <span class="section__eyebrow">04 / Selected Work</span>

        <h2 class="section__title">
          Data driven, <br>
          <em>business focused.</em>
        </h2>
      </div>

      <div
        class="projects-filter"
        role="group"
        aria-label="Filter projects by skill"
      >
        ${filters.map((filter, index) => `
          <button
            type="button"
            class="projects-filter__button ${index === 0 ? 'is-active' : ''}"
            data-skill="${filter.id}"
            aria-pressed="${index === 0 ? 'true' : 'false'}"
          >
            ${filter.label}
          </button>
        `).join('')}
      </div>

      <div class="projects-list stack stack--lg">

        ${order.map(id => {
          const meta = projectsMeta[id];
          const { data, filterKey } = datasets[id];
          const preview = buildMiniPreview(data, filterKey, meta.accent);

          return `
            <div
              class="card project-card"
              data-project-card="${id}"
              style="padding: var(--space-5); transition: opacity 0.3s ease, transform 0.3s ease;"
            >
              <div class="grid grid--2" style="gap: var(--space-6); align-items: center;">

                <div class="stack stack--md">

                  <h3 style="font-size: var(--text-xl); margin: 0;">
                    ${meta.title}
                  </h3>

                  <p style="color: var(--color-muted);">
                    ${meta.description}
                  </p>

                  <div class="tag-list">
                    ${meta.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                  </div>

                  <div
                    class="project-card__actions"
                    style="margin-top: var(--space-2); display:flex; flex-wrap:wrap; gap:var(--space-2);"
                  >
                    <a
                      href="#"
                      class="site-button"
                      data-project="${id}"
                    >
                      Explore Case Study
                    </a>

                    ${meta.service ? `
                      <a
                        href="${meta.service.url}"
                        class="site-button site-button--secondary"
                      >
                        ${meta.service.label}
                      </a>
                    ` : ''}
                  </div>

                </div>

                <div
                  style="${previewBoxStyle}"
                  data-project="${id}"
                  tabindex="0"
                  role="button"
                  aria-label="Preview ${meta.title}"
                  class="project-preview-box"
                  data-accent="${meta.accent}"
                >
                  ${preview}
                </div>

              </div>
            </div>
          `;
        }).join('')}

      </div>

      <div
        class="projects-filter__empty"
        id="projects-filter-empty"
        hidden
      >
        No projects found for this skill.
      </div>
    </div>
  `;

  const filterButtons = section.querySelectorAll('.projects-filter__button');
  const projectCards = section.querySelectorAll('.project-card');
  const emptyState = section.querySelector('#projects-filter-empty');

  // Interactive Hover and Keydown on Preview Boxes
  const previewBoxes = section.querySelectorAll('.project-preview-box');
  previewBoxes.forEach(box => {
    const accent = box.dataset.accent;

    box.addEventListener('mouseenter', () => {
      box.style.borderColor = accent;
      box.style.transform = 'translateY(-3px)';
      box.style.boxShadow = `0 10px 25px -5px ${accent}22`;
      const cta = box.querySelector('.preview-cta');
      if (cta) cta.style.transform = 'translateX(4px)';
    });

    box.addEventListener('mouseleave', () => {
      box.style.borderColor = 'var(--color-line)';
      box.style.transform = 'translateY(0)';
      box.style.boxShadow = 'none';
      const cta = box.querySelector('.preview-cta');
      if (cta) cta.style.transform = 'translateX(0)';
    });

    box.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const button = section.querySelector(`a.site-button[data-project="${box.dataset.project}"]`);
        if (button) button.click();
      }
    });
  });

  // Filter Logic with animations
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedSkill = button.dataset.skill;

      filterButtons.forEach(item => {
        const isActive = item === button;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      let visibleProjects = 0;

      projectCards.forEach(card => {
        const projectId = card.dataset.projectCard;
        const meta = projectsMeta[projectId];
        const shouldShow = projectMatchesSkill(meta, selectedSkill);

        if (shouldShow) {
          card.hidden = false;
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
          visibleProjects++;
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            if (card.style.opacity === '0') {
              card.hidden = true;
            }
          }, 250);
        }
      });

      if (emptyState) {
        emptyState.hidden = visibleProjects !== 0;
      }
    });
  });
}
