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

// Dropdown toggle
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.classList.toggle('open');
});
document.addEventListener('click', () => dropdown.classList.remove('open'));

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

document.getElementById('estimate-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const btn  = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  fetch('https://formspree.io/f/mqenoeqa', {
    method:  'POST',
    body:    new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
  .then(function (res) {
    if (res.ok) {
      btn.textContent = "Sent! We'll be in touch.";
      btn.style.background = '#4a6741';
      form.reset();
    } else {
      btn.textContent = 'Something went wrong — please call us.';
      btn.style.background = '#7a2e2e';
      btn.disabled = false;
    }
  })
  .catch(function () {
    btn.textContent = 'Something went wrong — please call us.';
    btn.style.background = '#7a2e2e';
    btn.disabled = false;
  });
});
