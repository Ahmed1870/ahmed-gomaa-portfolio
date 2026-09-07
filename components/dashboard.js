import { omnichannelData } from '../data/omnichannel.js';
import { hrData } from '../data/hr.js';
import { rfmData } from '../data/rfm.js';
import { renderSVGLineChart, renderBarBreakdown } from '../js/charts.js';

export function getProjectData(projectId) {
  switch (projectId) {
    case 'hr': return hrData;
    case 'rfm': return rfmData;
    case 'omnichannel':
    default: return omnichannelData;
  }
}

function renderDashboardBody(view) {
  return `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 28px;">
      ${view.kpis.map(kpi => `
        <div style="background: var(--color-surface-alt); border: 1px solid var(--color-line); border-radius: var(--radius-md, 8px); padding: 16px;">
          <span style="font-size: 11px; font-weight: 700; color: var(--color-muted); letter-spacing: 0.05em; text-transform: uppercase;">${kpi.label}</span>
          <div class="kpi-value" style="font-size: 26px; font-weight: 800; color: var(--color-ink); margin: 8px 0 4px 0;">${kpi.value}</div>
          <span style="font-size: 12px; font-weight: 600; color: ${kpi.isPositive ? '#10b981' : '#ef4444'};">${kpi.change}</span>
        </div>
      `).join('')}
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
      <div style="background: var(--color-surface-alt); border: 1px solid var(--color-line); border-radius: var(--radius-md, 8px); padding: 20px;">
        <h4 style="font-size: 14px; font-weight: 700; margin: 0 0 16px 0; color: var(--color-ink);">${view.trendTitle}</h4>
        ${renderSVGLineChart(view.trendData)}
      </div>

      <div style="background: var(--color-surface-alt); border: 1px solid var(--color-line); border-radius: var(--radius-md, 8px); padding: 20px;">
        <h4 style="font-size: 14px; font-weight: 700; margin: 0 0 16px 0; color: var(--color-ink);">${view.breakdownTitle}</h4>
        ${renderBarBreakdown(view.breakdownData)}
      </div>
    </div>
  `;
}

export function renderDashboard(container, projectId) {
  const data = getProjectData(projectId);
  const filterNames = Object.keys(data.filters);
  const defaultFilter = filterNames[0];

  container.innerHTML = `
    <div
      class="dashboard-wrapper"
      style="
        background: var(--color-surface);
        border: 1px solid var(--color-line);
        border-radius: var(--radius-lg, 12px);
        padding: var(--space-6, 24px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        width: 100%;
        box-sizing: border-box;
        transition: opacity 0.3s ease;
      "
      id="dashboard-main-container"
    >

      <div
        style="
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin: calc(var(--space-6, 24px) * -1);
          margin-bottom: 24px;
          padding: var(--space-4, 16px) var(--space-6, 24px);
          border-bottom: 1px solid var(--color-line);
          background: var(--color-surface);
        "
      >
        <div>
          <h3
            style="
              font-size: var(--text-lg, 20px);
              font-weight: 700;
              margin: 0;
              color: var(--color-ink);
            "
          >
            ${data.title}
          </h3>

          <p
            style="
              font-size: var(--text-sm, 14px);
              color: var(--color-muted);
              margin: 4px 0 0 0;
            "
          >
            ${data.subtitle}
          </p>
        </div>

        <div style="display: flex; align-items: center; gap: 12px;">
          <select
            id="dashboard-filter-select"
            aria-label="Filter dashboard data"
            style="
              padding: 8px 14px;
              border-radius: var(--radius-md, 6px);
              border: 1px solid var(--color-line);
              background: var(--color-surface-alt);
              color: var(--color-ink);
              font-size: 13px;
              font-weight: 600;
              outline: none;
              cursor: pointer;
            "
          >
            ${filterNames.map(f => `<option value="${f}">${f}</option>`).join('')}
          </select>
        </div>
      </div>

      <div
        id="dashboard-content-area"
        style="
          transition: opacity 0.3s ease;
          padding-top: 4px;
        "
      >
        ${renderDashboardBody(data.filters[defaultFilter])}
      </div>

    </div>
  `;

  const filterSelect = container.querySelector('#dashboard-filter-select');
  const contentArea = container.querySelector('#dashboard-content-area');

  if (filterSelect && contentArea) {
    filterSelect.addEventListener('change', (e) => {
      const selectedView = data.filters[e.target.value];

      if (!selectedView) return;

      contentArea.style.opacity = '0.3';

      setTimeout(() => {
        contentArea.innerHTML = renderDashboardBody(selectedView);
        contentArea.style.opacity = '1';
      }, 300);
    });
  }
}
