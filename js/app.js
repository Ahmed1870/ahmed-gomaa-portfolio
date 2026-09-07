import { renderCommandPalette } from "../components/command-palette.js";
import { renderNavigation } from "../components/navigation.js";
import { renderHero } from "../components/hero.js";
import { renderAbout } from "../components/about.js";
import { renderProjects } from "../components/projects.js";
import { renderServices } from "../components/services.js";
import { renderProcess } from "../components/process.js";
import { renderContact } from "../components/contact.js";
import { renderStickyCV } from "../components/sticky-cv.js";
import { renderSectionProgress } from "../components/section-progress.js";
import { initProjectInteractions } from "./interactions.js";

function initScrollReveal() {
  const items = document.querySelectorAll('main > section:not(#hero)');

  items.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavigation();
  renderCommandPalette();

  renderHero();
  renderAbout();
  renderProjects();
  renderServices();
  renderProcess();
  renderContact();
  renderStickyCV();
  renderSectionProgress();

  setTimeout(() => {
    initProjectInteractions();
    initScrollReveal();
  }, 100);
});
