const COMMANDS = [
  {
    id: "about",
    type: "section",
    label: "Go to About",
    description: "Learn more about Ahmed",
    keywords: "about profile experience",
    target: "#about",
  },
  {
    id: "services",
    type: "section",
    label: "Go to Expertise",
    description: "Explore data analysis skills",
    keywords: "services expertise skills",
    target: "#services",
  },
  {
    id: "work",
    type: "section",
    label: "Go to Work",
    description: "Explore selected projects",
    keywords: "work projects portfolio",
    target: "#work",
  },
  {
    id: "process",
    type: "section",
    label: "Go to Process",
    description: "See the analytical workflow",
    keywords: "process workflow methodology",
    target: "#process",
  },
  {
    id: "contact",
    type: "section",
    label: "Go to Contact",
    description: "Start a conversation",
    keywords: "contact email hire",
    target: "#contact",
  },
  {
    id: "omnichannel",
    type: "project",
    label: "Enterprise Omnichannel Audit",
    description: "Open case study",
    keywords: "omnichannel sql power bi dax retail audit",
    project: "omnichannel",
  },
  {
    id: "hr",
    type: "project",
    label: "HR Workforce Analytics",
    description: "Open case study",
    keywords: "hr human resources excel power bi attrition",
    project: "hr",
  },
  {
    id: "rfm",
    type: "project",
    label: "RFM Customer Segmentation",
    description: "Open case study",
    keywords: "rfm python pandas customer segmentation",
    project: "rfm",
  },
  {
    id: "theme",
    type: "action",
    label: "Toggle Dark Mode",
    description: "Switch between light and dark theme",
    keywords: "dark mode light theme appearance",
    action: "theme",
  },
];

function normalize(value) {
  return value.toLowerCase().trim();
}

function getIcon(type) {
  const icons = {
    section: "→",
    project: "◆",
    action: "◐",
  };

  return icons[type] || "→";
}

function scrollToTarget(target) {
  const element = document.querySelector(target);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.getAttribute("data-theme") === "dark";

  if (isDark) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

export function renderCommandPalette() {
  if (document.querySelector("#command-palette")) return;

  const overlay = document.createElement("div");

  overlay.id = "command-palette";
  overlay.className = "command-palette";
  overlay.setAttribute("aria-hidden", "true");

  overlay.innerHTML = `
    <div
      class="command-palette__backdrop"
      data-command-close
    ></div>

    <div
      class="command-palette__modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="command-palette-title"
    >
      <div class="command-palette__header">

        <div class="command-palette__search">
          <span class="command-palette__search-icon" aria-hidden="true">
            ⌕
          </span>

          <input
            id="command-palette-input"
            type="search"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search pages, projects, actions..."
            aria-label="Search commands"
          />

          <kbd>ESC</kbd>
        </div>

        <div class="command-palette__hint" id="command-palette-title">
          Command Palette
        </div>

      </div>

      <div
        class="command-palette__results"
        id="command-palette-results"
        role="listbox"
        aria-label="Commands"
      ></div>

      <div class="command-palette__footer">
        <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
        <span><kbd>Enter</kbd> Select</span>
        <span><kbd>Esc</kbd> Close</span>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const input = overlay.querySelector("#command-palette-input");
  const results = overlay.querySelector("#command-palette-results");

  let filteredCommands = [...COMMANDS];
  let activeIndex = 0;

  function renderResults() {
    if (!filteredCommands.length) {
      results.innerHTML = `
        <div class="command-palette__empty">
          <strong>No results found</strong>
          <span>Try another search term.</span>
        </div>
      `;

      return;
    }

    results.innerHTML = filteredCommands
      .map((command, index) => `
        <button
          type="button"
          class="command-palette__item ${index === activeIndex ? "is-active" : ""}"
          data-command-id="${command.id}"
          role="option"
          aria-selected="${index === activeIndex ? "true" : "false"}"
        >
          <span class="command-palette__item-icon">
            ${getIcon(command.type)}
          </span>

          <span class="command-palette__item-content">
            <strong>${command.label}</strong>
            <small>${command.description}</small>
          </span>

          <span class="command-palette__item-type">
            ${command.type}
          </span>
        </button>
      `)
      .join("");
  }

  function filterCommands(value) {
    const query = normalize(value);

    filteredCommands = COMMANDS.filter(command => {
      if (!query) return true;

      const searchableText = normalize(`
        ${command.label}
        ${command.description}
        ${command.keywords}
      `);

      return searchableText.includes(query);
    });

    activeIndex = 0;
    renderResults();
  }

  function closePalette() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("command-palette-open");
  }

  function openPalette() {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("command-palette-open");

    input.value = "";
    filteredCommands = [...COMMANDS];
    activeIndex = 0;

    renderResults();

    requestAnimationFrame(() => {
      input.focus();
    });
  }

  function executeCommand(command) {
    if (!command) return;

    closePalette();

    if (command.type === "section") {
      setTimeout(() => {
        scrollToTarget(command.target);
      }, 80);

      return;
    }

    if (command.type === "action") {
      if (command.action === "theme") {
        toggleTheme();
      }

      return;
    }

    if (command.type === "project") {
      setTimeout(() => {
        const projectTrigger = document.querySelector(
          `[data-project="${command.project}"]`
        );

        if (projectTrigger) {
          projectTrigger.click();
        }
      }, 80);
    }
  }

  input.addEventListener("input", event => {
    filterCommands(event.target.value);
  });

  input.addEventListener("keydown", event => {
    if (!filteredCommands.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();

      activeIndex =
        activeIndex < filteredCommands.length - 1
          ? activeIndex + 1
          : 0;

      renderResults();
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      activeIndex =
        activeIndex > 0
          ? activeIndex - 1
          : filteredCommands.length - 1;

      renderResults();
    }

    if (event.key === "Enter") {
      event.preventDefault();

      executeCommand(filteredCommands[activeIndex]);
    }
  });

  results.addEventListener("click", event => {
    const button = event.target.closest("[data-command-id]");

    if (!button) return;

    const command = COMMANDS.find(
      item => item.id === button.dataset.commandId
    );

    executeCommand(command);
  });

  overlay.addEventListener("click", event => {
    if (
      event.target.matches("[data-command-close]")
    ) {
      closePalette();
    }
  });

  document.addEventListener("keydown", event => {
    const isCommandShortcut =
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "k";

    if (isCommandShortcut) {
      event.preventDefault();

      if (overlay.classList.contains("is-open")) {
        closePalette();
      } else {
        openPalette();
      }
    }

    if (
      event.key === "Escape" &&
      overlay.classList.contains("is-open")
    ) {
      event.preventDefault();
      closePalette();
    }
  });

  renderResults();
}
