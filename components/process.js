export function renderProcess() {
  const section = document.querySelector("#process");
  if (!section) return;

  const steps = [
    {
      number: "01",
      phase: "FRAME",
      title: "Start with the question",
      question: "What decision are we trying to improve?",
      text: "I begin by understanding the business context, defining the problem, identifying stakeholders, and translating vague objectives into measurable analytical questions.",
      output: "Business question · KPI definition"
    },
    {
      number: "02",
      phase: "VALIDATE",
      title: "Understand the data",
      question: "Can the data actually support the question?",
      text: "Before analyzing anything, I inspect the structure, grain, completeness, consistency, relationships, and anomalies to understand what the data can — and cannot — tell us.",
      output: "Data profile · Quality checks · Assumptions"
    },
    {
      number: "03",
      phase: "MODEL",
      title: "Build the analytical foundation",
      question: "How should the data be structured?",
      text: "I transform and model the data so business logic becomes reliable and reusable — from SQL transformations and identity resolution to fact tables, dimensions, and semantic models.",
      output: "Clean data · Analytical model · Reusable logic"
    },
    {
      number: "04",
      phase: "ANALYZE",
      title: "Find the evidence",
      question: "What patterns explain the outcome?",
      text: "I use the appropriate analytical method for the problem: segmentation, cohorts, trends, anomaly detection, risk scoring, statistical analysis, or KPI decomposition.",
      output: "Patterns · Drivers · Risks · Opportunities"
    },
    {
      number: "05",
      phase: "COMMUNICATE",
      title: "Make the insight understandable",
      question: "What does the evidence mean for the business?",
      text: "I turn analytical results into focused visual stories and dashboards — prioritizing clarity, context, and the metrics that matter rather than visual complexity.",
      output: "Insight · Narrative · Decision-ready dashboard"
    },
    {
      number: "06",
      phase: "ACT",
      title: "Turn insight into action",
      question: "What should happen next?",
      text: "The analysis is not finished when the dashboard is published. I connect findings to practical recommendations, priorities, and measurable business actions.",
      output: "Recommendation · Priority · Next action"
    }
  ];

  section.innerHTML = `
    <div class="container">

      <div class="section__header">
        <span class="section__eyebrow">05 / Methodology</span>

        <h2 class="section__title">
          From business question<br>
          <em>to measurable action.</em>
        </h2>

        <p
          style="
            max-width:680px;
            margin-top:var(--space-4);
            color:var(--color-muted);
            font-size:var(--text-base);
            line-height:1.75;
          "
        >
          A structured analytical process that keeps the business problem
          at the center — while data, modeling, analysis, and visualization serve the decision rather than becoming the objective themselves.
        </p>
      </div>

      <div
        id="methodology-flow"
        class="methodology-flow"
        style="
          position:relative;
          display:flex;
          flex-direction:column;
          gap:0;
          margin-top:var(--space-6);
        "
      >
        <div
          aria-hidden="true"
          style="
            position:absolute;
            left:23px;
            top:28px;
            bottom:28px;
            width:1px;
            background:var(--color-line);
          "
        ></div>

        <div
          id="methodology-progress-line"
          aria-hidden="true"
          style="
            position:absolute;
            left:23px;
            top:28px;
            width:1px;
            height:0px;
            background:var(--color-accent,#3b82f6);
            transition:height 0.25s ease-out;
          "
        ></div>

        ${steps.map((step, index) => `
          <article
            id="step-${step.number}"
            class="methodology-step ${index === 0 ? 'is-active' : ''}"
            tabindex="0"
            role="button"
            aria-expanded="${index === 0 ? 'true' : 'false'}"
            style="
              position:relative;
              display:grid;
              grid-template-columns:48px minmax(110px,160px) 1fr;
              gap:var(--space-5);
              padding:var(--space-5) var(--space-3);
              border-bottom:${index === steps.length - 1 ? '0' : '1px solid var(--color-line)'};
              border-radius: var(--radius-md, 8px);
              cursor: pointer;
              transition: background 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
            "
          >

            <div
              class="methodology-step__marker"
              style="
                position:relative;
                z-index:2;
                width:46px;
                height:46px;
                display:flex;
                align-items:center;
                justify-content:center;
                border:1px solid var(--color-line);
                border-radius:50%;
                background:var(--color-surface);
                color:var(--color-ink);
                font-family:var(--font-display);
                font-size:13px;
                font-weight:700;
                transition:background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
              "
            >
              ${step.number}
            </div>

            <div>
              <span
                style="
                  display:block;
                  margin-bottom:7px;
                  font-size:10px;
                  font-weight:800;
                  letter-spacing:.14em;
                  color:var(--color-accent,#3b82f6);
                "
              >
                ${step.phase}
              </span>

              <h3
                style="
                  margin:0;
                  font-size:var(--text-base);
                  line-height:1.35;
                  color:var(--color-ink);
                "
              >
                ${step.title}
              </h3>
            </div>

            <div style="min-width:0;">

              <p
                style="
                  margin:0 0 8px;
                  font-size:var(--text-sm);
                  font-weight:700;
                  color:var(--color-ink);
                "
              >
                ${step.question}
              </p>

              <p
                style="
                  margin:0;
                  max-width:720px;
                  color:var(--color-muted);
                  font-size:var(--text-sm);
                  line-height:1.7;
                "
              >
                ${step.text}
              </p>

              <div
                style="
                  margin-top:12px;
                  font-size:11px;
                  font-weight:600;
                  color:var(--color-muted);
                "
              >
                <span style="color:var(--color-ink);">Output:</span>
                ${step.output}
              </div>

            </div>

          </article>
        `).join('')}
      </div>

      <div
        style="
          display:flex;
          align-items:center;
          justify-content:center;
          flex-wrap:wrap;
          gap:10px;
          margin-top:var(--space-6);
          padding:var(--space-4) var(--space-5);
          border:1px solid var(--color-line);
          border-radius:var(--radius-md,8px);
          background:var(--color-surface);
        "
      >
        <span style="font-size:12px;font-weight:700;color:var(--color-ink);">
          Question
        </span>

        <span aria-hidden="true" style="color:var(--color-muted);">→</span>
        <span style="font-size:12px;font-weight:700;color:var(--color-muted);">
          Evidence
        </span>
        <span aria-hidden="true" style="color:var(--color-muted);">→</span>

        <span style="font-size:12px;font-weight:700;color:var(--color-muted);">
          Insight
        </span>
        <span aria-hidden="true" style="color:var(--color-muted);">→</span>
        <span style="font-size:12px;font-weight:700;color:var(--color-accent,#3b82f6);">
          Action
        </span>
      </div>
    </div>
  `;

  const flow = section.querySelector('#methodology-flow');
  const progressLine = section.querySelector('#methodology-progress-line');
  const stepEls = Array.from(section.querySelectorAll('.methodology-step'));

  function activateStep(targetEl) {
    stepEls.forEach((el) => {
      const isActive = el === targetEl;
      el.classList.toggle('is-active', isActive);
      el.setAttribute('aria-expanded', isActive ? 'true' : 'false');

      const marker = el.querySelector('.methodology-step__marker');
      if (marker) {
        if (isActive) {
          marker.style.background = 'var(--color-accent, #3b82f6)';
          marker.style.borderColor = 'var(--color-accent, #3b82f6)';
          marker.style.color = '#ffffff';
          marker.style.transform = 'scale(1.1)';
          el.style.background = 'rgba(59, 130, 246, 0.05)';
        } else {
          marker.style.background = 'var(--color-surface)';
          marker.style.borderColor = 'var(--color-line)';
          marker.style.color = 'var(--color-ink)';
          marker.style.transform = 'scale(1)';
          el.style.background = 'transparent';
        }
      }
    });

    if (targetEl && progressLine && flow) {
      const flowRect = flow.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();
      const topOffset = targetRect.top - flowRect.top + 23;
      progressLine.style.height = `${Math.max(0, topOffset)}px`;
    }
  }

  stepEls.forEach((stepEl) => {
    stepEl.addEventListener('click', () => activateStep(stepEl));
    stepEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateStep(stepEl);
      }
    });
  });

  function updateMethodologyProgress() {
    if (!flow || !progressLine) return;
    const rect = flow.getBoundingClientRect();
    const viewportCenter = window.innerHeight * 0.5;

    let activeEl = null;
    stepEls.forEach((el) => {
      if (el.getBoundingClientRect().top <= viewportCenter) {
        activeEl = el;
      }
    });

    if (activeEl) {
      activateStep(activeEl);
    }
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateMethodologyProgress();
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateMethodologyProgress();
}
