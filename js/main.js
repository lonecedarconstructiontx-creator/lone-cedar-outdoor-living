// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  nav.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu on link click
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('active');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Scroll fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .about-text, .about-img, .contact-info, .contact-form').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Form submission (placeholder — swap for real endpoint)
document.getElementById('estimate-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sent! We\'ll be in touch.';
  btn.style.background = '#4a6741';
  btn.style.color = '#fff';
  btn.disabled = true;
});
