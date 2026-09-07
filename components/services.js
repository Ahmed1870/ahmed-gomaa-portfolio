export function renderServices() {
  const section = document.querySelector("#services");
  if (!section) return;

  const expertise = [
    {
      id: "data-prep",
      title: "Data Preparation & Quality",
      text: "Profiling, cleansing, validation, anomaly detection, and auditable data repair — turning unreliable raw data into analysis-ready datasets.",
      tag: "SQL · Python",
      accent: "var(--color-accent)",
      icon: `<path d="M3 4h18l-7 9v6l-4 2v-8z"/>`,
      highlights: ["Automated Data Profiling", "Outlier & Anomaly Detection", "Auditable Null/Duplicate Handling"]
    },
    {
      id: "sql-analytics",
      title: "SQL Analytics & Transformation",
      text: "Complex joins, CTEs, window functions, cohorts, segmentation, KPI logic, and analytical transformations built around business questions.",
      tag: "SQL Server · PostgreSQL",
      accent: "var(--color-accent-dark)",
      icon: `<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>`,
      highlights: ["Multi-step CTE Pipelines", "Window Functions & Ranking", "Cohort & Retention Analysis"]
    },
    {
      id: "data-modeling",
      title: "Data Modeling",
      text: "Designing analytical structures that separate business logic from reporting, including fact tables, dimensions, star schemas, and reusable metrics.",
      tag: "Star Schema · BI",
      accent: "var(--color-success)",
      icon: `<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>`,
      highlights: ["Star & Snowflake Schemas", "Fact vs. Dimension Grain Definition", "Reusable Analytical Views"]
    },
    {
      id: "customer-analytics",
      title: "Customer & Workforce Analytics",
      text: "Understanding customer value, retention, RFM segments, employee attrition, and the behavioral patterns behind business outcomes.",
      tag: "RFM · Attrition · Cohorts",
      accent: "var(--color-accent)",
      icon: `<circle cx="9" cy="7" r="3"/><circle cx="17" cy="8" r="2.5"/><path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2"/><path d="M17 13.5c2.2 0 4 1.6 4 4.5v3"/>`,
      highlights: ["RFM Loyalty Segmentation", "Attrition Risk Drivers", "Customer Lifetime Value (LTV)"]
    },
    {
      id: "power-bi",
      title: "Power BI & DAX",
      text: "Building decision-focused dashboards with semantic models, dynamic measures, KPI frameworks, drill-down analysis, and interactive reporting.",
      tag: "Power BI · DAX",
      accent: "var(--color-accent-dark)",
      icon: `<rect x="3" y="10" width="4" height="11"/><rect x="10" y="5" width="4" height="16"/><rect x="17" y="13" width="4" height="8"/>`,
      highlights: ["Advanced DAX Calculations", "Dynamic KPI Formatting", "Interactive Drill-through Reports"]
    },
    {
      id: "business-insights",
      title: "Business Insight & Recommendations",
      text: "Moving beyond descriptive reporting to identify risks, revenue leakage, opportunities, and practical actions supported by evidence.",
      tag: "Analysis → Action",
      accent: "var(--color-success)",
      icon: `<path d="M9 18h6M10 22h4M12 2a6 6 0 0 0-3.6 10.8c.5.4.6.9.6 1.5V15h6v-.7c0-.6.1-1.1.6-1.5A6 6 0 0 0 12 2z"/>`,
      highlights: ["Margin Leakage Identification", "Actionable Executive Summaries", "Data-Driven ROI Metrics"]
    }
  ];

  section.innerHTML = `
    <div class="container">
      <div class="section__header">
        <span class="section__eyebrow">03 / Expertise</span>
        <h2 class="section__title">
          From raw data to<br>
          <em>clear direction.</em>
        </h2>
      </div>

      <div class="grid grid--3">
        ${expertise.map((item) => `
          <article
            class="card expertise-card"
            data-card-id="${item.id}"
            tabindex="0"
            role="button"
            aria-expanded="false"
            style="
              --card-accent:${item.accent};
              cursor: pointer;
              transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease;
              position: relative;
              user-select: none;
            "
          >
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div class="expertise-card__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                  ${item.icon}
                </svg>
              </div>
              <span class="card-expand-indicator" style="font-size: 0.9rem; opacity: 0.5; transition: transform 0.3s ease, opacity 0.3s ease; color: var(--color-muted);">+</span>
            </div>

            <h3 style="font-size:var(--text-lg); margin: var(--space-2, 0.5rem) 0 0 0; color:var(--color-ink);">
              ${item.title}
            </h3>

            <p style="color:var(--color-muted); font-size:var(--text-sm); line-height:1.7; margin: var(--space-2, 0.5rem) 0;">
              ${item.text}
            </p>

            <div class="expertise-card__details" style="max-height: 0; opacity: 0; overflow: hidden; transition: max-height 0.35s ease, opacity 0.35s ease, margin 0.35s ease;">
              <ul style="margin: 0.5rem 0 0.75rem 0; padding-left: 1.2rem; color: var(--color-ink); font-size: 0.82rem; line-height: 1.6;">
                ${item.highlights.map(h => `<li>${h}</li>`).join('')}
              </ul>
            </div>

            <span class="expertise-card__tag" style="display: inline-block;">
              ${item.tag}
            </span>
          </article>
        `).join('')}
      </div>
    </div>
  `;

  // التفاعل والسلوك عند الضغط
  const cards = section.querySelectorAll('.expertise-card');
  cards.forEach(card => {
    const toggleCard = () => {
      const isExpanded = card.getAttribute('aria-expanded') === 'true';
      const details = card.querySelector('.expertise-card__details');
      const indicator = card.querySelector('.card-expand-indicator');

      cards.forEach(c => {
        if (c !== card) {
          c.setAttribute('aria-expanded', 'false');
          c.style.transform = 'translateY(0)';
          c.style.borderColor = '';
          const d = c.querySelector('.expertise-card__details');
          const ind = c.querySelector('.card-expand-indicator');
          if (d) {
            d.style.maxHeight = '0';
            d.style.opacity = '0';
            d.style.marginTop = '0';
          }
          if (ind) {
            ind.style.transform = 'rotate(0deg)';
            ind.textContent = '+';
            ind.style.opacity = '0.5';
          }
        }
      });

      if (!isExpanded) {
        card.setAttribute('aria-expanded', 'true');
        card.style.transform = 'translateY(-3px)';
        card.style.borderColor = 'var(--card-accent)';
        if (details) {
          details.style.maxHeight = '150px';
          details.style.opacity = '1';
          details.style.marginTop = '0.5rem';
        }
        if (indicator) {
          indicator.style.transform = 'rotate(45deg)';
          indicator.textContent = '×';
          indicator.style.opacity = '1';
        }
      } else {
        card.setAttribute('aria-expanded', 'false');
        card.style.transform = 'translateY(0)';
        card.style.borderColor = '';
        if (details) {
          details.style.maxHeight = '0';
          details.style.opacity = '0';
          details.style.marginTop = '0';
        }
        if (indicator) {
          indicator.style.transform = 'rotate(0deg)';
          indicator.textContent = '+';
          indicator.style.opacity = '0.5';
        }
      }
    };

    card.addEventListener('click', toggleCard);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard();
      }
    });
  });
}
