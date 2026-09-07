export function renderSVGLineChart(dataPoints) {
  if (!dataPoints || dataPoints.length === 0) return '';

  const values = dataPoints.map(d => d.val);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;

  const width = 500;
  const height = 180;
  const padding = 30;

  const points = dataPoints.map((d, i) => {
    const x = padding + (i / (dataPoints.length - 1)) * (width - padding * 2);
    const y = height - padding - ((d.val - min) / range) * (height - padding * 2);
    return { x, y, label: d.label, val: d.val };
  });

  const pathD = points.reduce((acc, p, i) => i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`, '');
  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

  return `
    <svg viewBox="0 0 ${width} ${height}" style="width: 100%; height: auto; overflow: visible;">
      <line x1="${padding}" y1="${padding}" x2="${width - padding}" y2="${padding}" stroke="var(--color-line)" stroke-dasharray="4" />
      <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="var(--color-line)" />
      <path d="${areaD}" fill="var(--color-accent, #3b82f6)" opacity="0.1" />
      <path d="${pathD}" fill="none" stroke="var(--color-accent, #3b82f6)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      ${points.map(p => `
        <circle cx="${p.x}" cy="${p.y}" r="5" fill="var(--color-surface, #fff)" stroke="var(--color-accent, #3b82f6)" stroke-width="2.5" />
        <text x="${p.x}" y="${height - 8}" font-size="11" fill="var(--color-muted)" text-anchor="middle" font-weight="600">${p.label}</text>
        <text x="${p.x}" y="${p.y - 10}" font-size="11" fill="var(--color-text)" text-anchor="middle" font-weight="700">${p.val}</text>
      `).join('')}
    </svg>
  `;
}

export function renderBarBreakdown(items) {
  if (!items) return '';
  return `
    <div style="display: flex; flex-direction: column; gap: 14px; width: 100%;">
      ${items.map(item => `
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 5px;">
            <span style="color: var(--color-text);">${item.label}</span>
            <span style="color: var(--color-muted);">${item.value} (${item.pct}%)</span>
          </div>
          <div style="width: 100%; height: 8px; background: var(--color-surface-alt, #f3f4f6); border-radius: 4px; overflow: hidden;">
            <div style="width: ${item.pct}%; height: 100%; background: ${item.color}; border-radius: 4px; transition: width 0.5s ease;"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

export function renderMiniSparkline(dataPoints, color = '#3b82f6') {
  if (!dataPoints || dataPoints.length === 0) return '';

  const values = dataPoints.map(d => d.val);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;

  const width = 280;
  const height = 64;
  const padding = 6;

  const points = dataPoints.map((d, i) => {
    const x = padding + (i / (dataPoints.length - 1)) * (width - padding * 2);
    const y = height - padding - ((d.val - min) / range) * (height - padding * 2);
    return { x, y };
  });

  const pathD = points.reduce((acc, p, i) => i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`, '');
  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

  return `
    <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" style="width: 100%; height: 56px; display: block;">
      <path d="${areaD}" fill="${color}" opacity="0.12" />
      <path d="${pathD}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="3" fill="${color}" />`).join('')}
    </svg>
  `;
}
