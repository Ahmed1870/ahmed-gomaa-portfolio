export function renderContact() {
  const section = document.querySelector("#contact");
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="section__header">
        <span class="section__eyebrow">06 / Connect</span>
        <h2 class="section__title">
          Let's build something <br>
          <em>impactful.</em>
        </h2>
      </div>

      <div class="grid grid--2" style="align-items: start;">
        <!-- Contact Info & Links -->
        <div class="stack stack--md">
          <p style="color: var(--color-muted); max-width: 400px;">
            Currently open for new opportunities. Whether you have a data project in mind or just want to chat about analytics, I'd love to hear from you.
          </p>

          <div class="stack stack--sm" style="margin-top: var(--space-4);">
            <a href="mailto:ahmedgomaelsayed@gmail.com" class="text-link" style="font-size: var(--text-lg);">ahmedgomaelsayed@gmail.com</a>
            <a href="https://wa.me/201019672878" target="_blank" rel="noopener noreferrer" class="text-link" style="font-size: var(--text-lg);">+20 101 967 2878</a>
          </div>

          <div class="tag-list" style="margin-top: var(--space-6);">
            <a href="https://www.linkedin.com/in/ahmed-gomaa-103b81405/" target="_blank" rel="noopener noreferrer" class="tag" style="text-decoration: none; border-color: var(--color-ink); color: var(--color-ink);">LinkedIn</a>
            <a href="https://github.com/Ahmed1870" target="_blank" rel="noopener noreferrer" class="tag" style="text-decoration: none; border-color: var(--color-ink); color: var(--color-ink);">GitHub</a>
            <a href="assets/Ahmed_Gomaa_EN.pdf" target="_blank" rel="noopener noreferrer" class="tag" style="text-decoration: none; background: var(--color-ink); color: var(--color-bg);">Download CV</a>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="card" style="padding: var(--space-5);">
          <form id="contact-form" class="stack stack--sm">
            <div class="dashboard__filter" style="width: 100%;">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your name">
            </div>

            <div class="dashboard__filter" style="width: 100%;">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="your.email@example.com">
            </div>

            <div class="dashboard__filter" style="width: 100%;">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="4" required placeholder="Tell me about the role or project..." style="min-height: 100px; border: 1px solid var(--color-line); border-radius: var(--radius-sm); background: var(--color-bg); color: var(--color-ink); padding: 0.75rem; font-family: inherit; resize: vertical;"></textarea>
            </div>

            <div class="grid grid--2" style="gap: var(--space-3); margin-top: var(--space-2);">
              <button type="submit" class="site-button" style="width: 100%;">Send Message</button>
              <button type="button" id="whatsapp-submit-btn" class="site-button site-button--secondary" style="width: 100%; border-color: var(--color-success); color: var(--color-success); cursor: pointer;">
                Send via WhatsApp
              </button>
            </div>

            <p id="form-status" style="font-size: var(--text-xs); text-align: center; margin-top: var(--space-2); display: none;"></p>
          </form>
        </div>
      </div>
    </div>
  `;

  const form = document.getElementById('contact-form');
  const statusText = document.getElementById('form-status');
  const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
  const waBtn = document.getElementById('whatsapp-submit-btn');

  if (waBtn) {
    waBtn.addEventListener('click', () => {
      const nameVal = document.getElementById('name')?.value.trim();
      const emailVal = document.getElementById('email')?.value.trim();
      const msgVal = document.getElementById('message')?.value.trim();

      let waText = "Hello Ahmed, I reached out from your portfolio.";
      if (nameVal || msgVal) {
        waText = `Hello Ahmed,\nMy Name: ${nameVal || 'N/A'}\nEmail: ${emailVal || 'N/A'}\n\nMessage: ${msgVal || ''}`;
      }

      window.open(`https://wa.me/201019672878?text=${encodeURIComponent(waText)}`, '_blank');
    });
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!statusText) return;

      statusText.style.display = 'block';
      statusText.textContent = 'Sending...';
      statusText.style.color = 'var(--color-muted)';
      if (submitBtn) submitBtn.disabled = true;

      if (typeof emailjs !== 'undefined') {
        emailjs.sendForm('service_dw5uguc', 'template_zi45y1i', this)
          .then(() => {
            statusText.textContent = 'Message sent successfully!';
            statusText.style.color = 'var(--color-success)';
            form.reset();
          })
          .catch((err) => {
            statusText.textContent = 'Something went wrong. Please try WhatsApp or email instead.';
            statusText.style.color = '#ef4444';
            console.error('EmailJS error:', err);
          })
          .finally(() => {
            if (submitBtn) submitBtn.disabled = false;
            setTimeout(() => {
              statusText.style.display = 'none';
            }, 5000);
          });
      } else {
        statusText.textContent = 'Opening email client...';
        statusText.style.color = 'var(--color-muted)';

        const name = document.getElementById('name')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const message = document.getElementById('message')?.value || '';

        const mailtoUrl = `mailto:ahmedgomaelsayed@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent("Email: " + email + "\n\n" + message)}`;
        window.location.href = mailtoUrl;

        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }
}
