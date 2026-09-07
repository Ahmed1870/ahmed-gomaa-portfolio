export function renderHero() {
  const hero = document.querySelector("#hero");
  if (!hero) return;

  hero.innerHTML = `
    <div class="hero-ambient-glow"></div>
    <div class="container">
      <div class="hero">

        <div class="hero__intro">
          <p class="eyebrow">
            Data Analyst · Business & Customer Analytics
          </p>

          <h1 class="hero__title">
            Turning raw data into
            <em>business decisions.</em>
          </h1>

          <p class="hero__description">
            I turn complex and messy data into reliable analysis,
            meaningful insights, and decision-ready reporting —
            connecting business questions to evidence, not just numbers.
          </p>

          <div class="hero__actions">
            <a class="site-button" href="#work">
              Explore my work
            </a>

            <a class="site-button site-button--secondary" href="#contact">
              Let's talk
            </a>
          </div>

          <p class="hero__note">
            From business questions to measurable action,
            with data quality, analytical logic, and business context
            at every step.
          </p>
        </div>

        <div class="hero__visual">
          <div class="hero-card">
            <div class="hero-card__header">
              <span class="hero-card__badge">Analytics Dashboard</span>
              <span class="hero-card__status"><i class="dot"></i> Live Insights</span>
            </div>

            <div class="hero-card__metrics">
              <div class="metric-item">
                <span class="metric-label">Data Accuracy</span>
                <span class="metric-value">99.4%</span>
              </div>
              <div class="metric-item">
                <span class="metric-label">Decision Speed</span>
                <span class="metric-value">2x Faster</span>
              </div>
            </div>

            <div class="hero-card__chart">
              <div class="bar-group">
                <div class="bar" style="--h: 40%"></div>
                <div class="bar" style="--h: 65%"></div>
                <div class="bar" style="--h: 50%"></div>
                <div class="bar" style="--h: 85%"></div>
                <div class="bar bar--active" style="--h: 100%"></div>
              </div>
            </div>

            <div class="hero-card__tags">
              <span>SQL</span>
              <span>Python</span>
              <span>Power BI</span>
              <span>Customer Insights</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}
