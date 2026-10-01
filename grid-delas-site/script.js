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

// Show how many references exist per category, right on each category card
// (only runs on the homepage — category pages don't have .profile-card[data-cat]).
document.querySelectorAll('.category-card').forEach(link => {
  const cat = link.dataset.cat;
  const count = document.querySelectorAll(`.profile-card[data-cat="${cat}"]`).length;
  const countEl = link.querySelector('.cat-count');
  if (countEl) countEl.textContent = `${count} referência${count === 1 ? '' : 's'}`;
});

const form = document.querySelector('#newsletterForm');
const message = document.querySelector('#newsletterMessage');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const email = document.querySelector('#email').value.trim();
  if (!email) return;
  message.textContent = 'Cadastro demonstrativo concluído! Depois conectamos ao formulário real.';
  form.reset();
});
