import { renderCaseStudy } from '../components/case-study.js';

export function initProjectInteractions() {
  document.body.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-project]');
    if (!trigger) return;

    const projectId = trigger.getAttribute('data-project');
    if (!projectId) return;

    e.preventDefault();
    renderCaseStudy(projectId);
  });
}
