// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form handling
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
  form.reset();
  setTimeout(() => {
    formMessage.textContent = '';
  }, 5000);
});
