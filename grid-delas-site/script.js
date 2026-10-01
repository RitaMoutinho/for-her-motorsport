const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.querySelector('#newsletterForm');
const message = document.querySelector('#newsletterMessage');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const email = document.querySelector('#email').value.trim();
  if (!email) return;
  message.textContent = 'Cadastro demonstrativo concluído! Depois conectamos ao formulário real.';
  form.reset();
});
