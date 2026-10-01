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

const catNames = {
  kart: 'Kart',
  formula: 'Fórmula',
  rally: 'Rally',
  endurance: 'Endurance',
  tecnica: 'Bastidores & Técnica',
};

const profileCards = document.querySelectorAll('.profile-card');
const refFilterLabel = document.querySelector('#refFilterLabel');
const resetFilter = document.querySelector('#resetFilter');

// Show how many references exist per category, right on each category button.
document.querySelectorAll('.category-card').forEach(btn => {
  const cat = btn.dataset.catFilter;
  const count = document.querySelectorAll(`.profile-card[data-cat="${cat}"]`).length;
  const countEl = btn.querySelector('.cat-count');
  if (countEl) countEl.textContent = `${count} referência${count === 1 ? '' : 's'}`;
});

function applyFilter(cat) {
  profileCards.forEach(card => {
    card.style.display = card.dataset.cat === cat ? '' : 'none';
  });
  refFilterLabel.textContent = `MODALIDADE · ${catNames[cat] || cat}`;
  resetFilter.style.display = 'inline-block';
  document.querySelector('#referencias').scrollIntoView({ behavior: 'smooth' });
}

function clearFilter() {
  profileCards.forEach(card => { card.style.display = ''; });
  refFilterLabel.textContent = 'ELAS FAZEM A DIFERENÇA';
  resetFilter.style.display = 'none';
}

document.querySelectorAll('.category-card').forEach(btn => {
  btn.addEventListener('click', () => applyFilter(btn.dataset.catFilter));
});

resetFilter?.addEventListener('click', clearFilter);

const form = document.querySelector('#newsletterForm');
const message = document.querySelector('#newsletterMessage');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const email = document.querySelector('#email').value.trim();
  if (!email) return;
  message.textContent = 'Cadastro demonstrativo concluído! Depois conectamos ao formulário real.';
  form.reset();
});
