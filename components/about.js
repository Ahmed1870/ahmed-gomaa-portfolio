export function renderAbout() {
  const section = document.querySelector("#about");
  if (!section) return;

  const stats = [
    {
      target: 850,
      suffix: 'K+',
      label: 'Rows Analyzed',
      icon: `<path d="M3 3h18v6H3zM3 10.5h18v6H3zM3 18h18v3H3z"/>`
    },
    {
      target: 25,
      suffix: '+',
      label: 'Analytical Queries',
      icon: `<path d="M4 17l4-4-4-4M12 19h8"/>`
    },
    {
      target: 3,
      suffix: '',
      label: 'End-to-End Projects',
      icon: `<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1l2.1-2.1M17 7l2.1-2.1"/>`
    },
    {
      target: 3,
      suffix: '',
      label: 'BI Dashboards',
      icon: `<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M3 20h18M9 16v4M15 16v4"/>`
    }
  ];

  const capabilities = [
    {
      title: 'Data Preparation & Quality',
      text: 'Cleaning, validation, anomaly detection and reliable transformation of raw data.'
    },
    {
      title: 'SQL Analytics',
      text: 'Complex transformations, window functions, segmentation, cohorts and business KPIs.'
    },
    {
      title: 'Customer & Workforce Analytics',
      text: 'RFM segmentation, retention analysis and workforce attrition insights.'
    },
    {
      title: 'BI & Decision Support',
      text: 'Power BI, DAX and interactive reporting designed around business questions.'
    }
  ];

  section.innerHTML = `
    <div class="container">

      <div class="section__header">
        <span class="section__eyebrow">02 / About</span>

        <h2 class="section__title">
          Analytical thinking,<br>
          <em>business context.</em>
        </h2>
      </div>

      <div class="grid grid--2">

        <div
          class="stack stack--md"
          style="max-width:600px; color:var(--color-muted); font-size:var(--text-lg);"
        >

          <p>
            I approach data analysis as a problem-solving discipline — not just
            as a way to build charts. I start with the business question,
            validate the data behind it, analyze the patterns, and translate
            the findings into clear business direction.
          </p>

          <p>
            My work covers customer behavior, workforce analytics, and
            enterprise retail auditing — from RFM segmentation and employee
            attrition to anomaly detection, promotional leakage, return-risk
            analysis, cohort retention, and executive KPIs.
          </p>

          <div style="margin-top:var(--space-2);">

            <p class="kpi-card__label">Core Capabilities</p>

            <div
              style="
                display:grid;
                grid-template-columns:repeat(2,minmax(0,1fr));
                gap:12px;
                margin-top:12px;
              "
            >

              ${capabilities.map(cap => `
                <div
                  style="
                    padding:16px;
                    border:1px solid var(--color-line);
                    border-radius:var(--radius-md,8px);
                    background:var(--color-surface);
                  "
                >
                  <div
                    style="
                      font-size:13px;
                      font-weight:700;
                      color:var(--color-ink);
                      margin-bottom:6px;
                    "
                  >
                    ${cap.title}
                  </div>

                  <div
                    style="
                      font-size:12px;
                      line-height:1.6;
                      color:var(--color-muted);
                    "
                  >
                    ${cap.text}
                  </div>
                </div>
              `).join('')}

            </div>

          </div>

        </div>

        <div
          id="about-stats"
          style="
            display:grid;
            grid-template-columns:repeat(2,1fr);
            gap:1px;
            background:var(--color-line);
            border:1px solid var(--color-line);
            border-radius:var(--radius-md,8px);
            overflow:hidden;
          "
        >

          ${stats.map(s => `
            <div
              style="
                background:var(--color-surface);
                padding:var(--space-5,20px);
                display:flex;
                flex-direction:column;
                justify-content:center;
                gap:10px;
              "
            >

              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent,#3b82f6)"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                ${s.icon}
              </svg>

              <span
                data-stat-target="${s.target}"
                data-stat-suffix="${s.suffix}"
                style="
                  font-size:var(--text-2xl,28px);
                  font-weight:800;
                  color:var(--color-ink);
                  font-variant-numeric:tabular-nums;
                "
              >
                0${s.suffix}
              </span>

              <span
                style="
                  font-size:12px;
                  font-weight:600;
                  color:var(--color-muted);
                  letter-spacing:0.03em;
                "
              >
                ${s.label}
              </span>

            </div>
          `).join('')}

        </div>

      </div>

    </div>
  `;

  const statsContainer = section.querySelector('#about-stats');

  const animateStats = () => {
    statsContainer
      .querySelectorAll('[data-stat-target]')
      .forEach(el => {

        const target = parseInt(
          el.getAttribute('data-stat-target'),
          10
        );

        const suffix =
          el.getAttribute('data-stat-suffix') || '';

        const duration = 1200;
        const start = performance.now();

        function step(now) {
          const progress = Math.min(
            (now - start) / duration,
            1
          );

          const eased =
            1 - Math.pow(1 - progress, 3);

          el.textContent =
            Math.round(target * eased) + suffix;

          if (progress < 1) {
            requestAnimationFrame(step);
          }
        }

        requestAnimationFrame(step);
      });
  };

  if ('IntersectionObserver' in window) {

    if (statsContainer) {

      const obsStats =
        new IntersectionObserver(
          entries => {

            entries.forEach(entry => {

              if (entry.isIntersecting) {
                animateStats();
                obsStats.disconnect();
              }

            });

          },
          { threshold: 0.4 }
        );

      obsStats.observe(statsContainer);
    }

  } else {

    animateStats();

  }
}
