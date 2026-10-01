const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, 'grid-delas-site');

const people = [
  { id: 'rafaela-ferreira', name: 'Rafaela Ferreira', role: 'Pilota', cat: 'formula', photo: 'img/rafaela-ferreira.jpg', pos: 'center 20%', blurb: 'Piloto da F1 Academy pela Campos Racing, primeira mulher a vencer na F4 Brasil.' },
  { id: 'maya-weug', name: 'Maya Weug', role: 'Kart / Fórmula', cat: 'kart', photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Maya_Weug_at_Nerdland_Festival_2026.jpg", pos: 'center', blurb: 'Primeira mulher na Academia de Pilotos da Ferrari, veio do kart até a Fórmula 4.' },
  { id: 'hannah-schmitz', name: 'Hannah Schmitz', role: 'Engenharia', cat: 'tecnica', photo: 'img/hannah-schmitz.jpg', pos: 'center 20%', blurb: 'Chefe de estratégia da Red Bull Racing, primeira mulher a vencer o prêmio de Estrategista do Ano da F1.' },
  { id: 'michele-mouton', name: 'Michèle Mouton', role: 'Rally', cat: 'rally', photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Mich%C3%A8le_Mouton_-_1985_Welsh_Rally_(interview).jpg", pos: 'center', blurb: 'Única mulher a vencer uma prova do Mundial de Rali (WRC), hoje dirigente esportiva na FIA.' },
  { id: 'jamie-chadwick', name: 'Jamie Chadwick', role: 'Pilota', cat: 'formula', photo: 'img/jamie-chadwick.jpg', pos: 'center 15%', blurb: 'Tricampeã da W Series, uma das pilotas mais vitoriosas da história do automobilismo feminino.' },
  { id: 'bia-figueiredo', name: 'Bia Figueiredo', role: 'Gestão', cat: 'tecnica', photo: 'img/bia-figueiredo.jpg', pos: 'center 15%', blurb: 'Uma das pilotas brasileiras mais vitoriosas da Stock Car e IndyCar, hoje presidente da CFA.' },
  { id: 'susie-wolff', name: 'Susie Wolff', role: 'Gestão', cat: 'tecnica', photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Susie_Wolff_2022.jpg", pos: 'center', blurb: 'Ex-piloto de testes da Williams na F1, hoje dirige a F1 Academy.' },
  { id: 'leena-gade', name: 'Leena Gade', role: 'Engenharia', cat: 'endurance', photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Leena_Gade.jpg", pos: 'center', blurb: 'Primeira mulher a vencer as 24 Horas de Le Mans como engenheira de corrida — venceu três vezes.' },
  { id: 'naomi-schiff', name: 'Naomi Schiff', role: 'Mídia', cat: 'tecnica', photo: 'img/naomi-schiff.jpg', pos: 'center 15%', blurb: 'Ex-piloto de GT, hoje uma das principais vozes femininas e negras na cobertura de F1 no mundo.' },
  { id: 'laura-muller', name: 'Laura Müller', role: 'Engenharia', cat: 'tecnica', photo: 'img/laura-muller.jpg', pos: 'center 20%', blurb: 'Primeira e única engenheira de pista da F1 em 2026, trabalha com Esteban Ocon na Haas.' },
  { id: 'doriane-pin', name: 'Doriane Pin', role: 'Pilota', cat: 'formula', photo: 'img/doriane-pin.jpg', pos: 'center 20%', blurb: 'Piloto reserva da Mercedes na F1, uma das principais promessas jovens do automobilismo mundial.' },
  { id: 'mariana-becker', name: 'Mariana Becker', role: 'Mídia', cat: 'tecnica', photo: 'img/mariana-becker.jpg', pos: 'center 20%', blurb: 'Primeira mulher a cobrir a Fórmula 1 pela Globo, hoje comentarista in loco de todas as etapas.' },
  { id: 'julia-guimaraes', name: 'Julia Guimarães', role: 'Mídia', cat: 'tecnica', photo: 'img/julia-guimaraes.jpg', pos: 'center 20%', blurb: 'Repórter da Fórmula 1 pela Globo na temporada 2026.' },
  { id: 'ellie-norman', name: 'Ellie Norman', role: 'Marketing', cat: 'tecnica', photo: 'img/ellie-norman.jpg', pos: 'center 20%', blurb: 'Foi diretora global de marketing e comunicação da Fórmula 1 por 5 anos, hoje é CMO da Fórmula E.' },
  { id: 'donna-birkett-baida', name: 'Donna Birkett Baida', role: 'Marketing', cat: 'tecnica', photo: 'img/donna-birkett-baida.jpg', pos: 'center 20%', blurb: 'Diretora de marketing atual da Fórmula 1.' },
  { id: 'burcu-cetinkaya', name: 'Burcu Çetinkaya', role: 'Gestão', cat: 'rally', photo: 'img/burcu-cetinkaya.jpg', pos: 'center 20%', blurb: 'Preside a Comissão de Mulheres no Automobilismo da FIA.' },
  { id: 'claire-williams', name: 'Claire Williams', role: 'Gestão', cat: 'tecnica', photo: 'img/claire-williams.webp', pos: 'center 20%', blurb: 'Comandou a equipe Williams de F1 por anos, uma das poucas mulheres a liderar um time no grid.' },
];

const categories = [
  { slug: 'kart', label: 'Kart', desc: 'Primeiros passos, grandes sonhos.' },
  { slug: 'formula', label: 'Fórmula', desc: 'Alta performance e grandes desafios.' },
  { slug: 'rally', label: 'Rally', desc: 'Coragem em qualquer terreno.' },
  { slug: 'endurance', label: 'Endurance', desc: 'Resistência que inspira.' },
  { slug: 'tecnica', label: 'Bastidores & Técnica', desc: 'Talento que move o esporte.' },
];

function cardHtml(p) {
  return `          <article class="profile-card reveal">
            <div class="profile-photo" style="background-image:url('${p.photo}');background-size:cover;background-position:${p.pos}"></div>
            <div class="profile-gradient"></div>
            <div class="profile-content">
              <h3>${p.name}</h3>
              <p class="role">${p.role}</p>
              <p>${p.blurb}</p>
            </div>
          </article>`;
}

function pageHtml(cat) {
  const list = people.filter((p) => p.cat === cat.slug);
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="GRID DELAS — referências femininas em ${cat.label}." />
  <title>${cat.label} | GRID DELAS</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="site-header">
    <a class="brand" href="index.html" aria-label="GRID DELAS">
      <span class="brand-mark">▰▰</span>
      <span>GRID <strong>DELAS</strong></span>
    </a>
    <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">☰</button>
    <nav class="main-nav" aria-label="Navegação principal">
      <a href="index.html">Início</a>
      <a href="index.html#referencias">Referências</a>
      <a href="index.html#categorias">Categorias</a>
      <a href="index.html#historias">Histórias</a>
      <a href="index.html#noticias">Notícias</a>
      <a href="index.html#sobre">Sobre</a>
    </nav>
    <a class="header-cta" href="index.html#comunidade">Junte-se à comunidade</a>
  </header>

  <main>
    <section class="section light" style="padding-top:60px">
      <div class="container">
        <a class="text-link" href="index.html#categorias" style="display:inline-block;margin-bottom:20px">← Todas as modalidades</a>
        <div class="section-heading split">
          <div>
            <p class="eyebrow pink">MODALIDADE</p>
            <h2>${cat.label}</h2>
          </div>
          <p class="section-intro">${cat.desc}</p>
        </div>

        <div class="reference-grid">
${list.map(cardHtml).join('\n\n')}
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand footer-brand" href="index.html"><span class="brand-mark">▰▰</span><span>GRID <strong>DELAS</strong></span></a>
        <p>MAIS MULHERES.<br>MAIS HISTÓRIAS.<br>MAIS VELOCIDADE.</p>
      </div>
      <div class="footer-links"><a href="index.html">Início</a><a href="index.html#referencias">Referências</a><a href="index.html#categorias">Categorias</a></div>
      <div class="footer-links"><a href="index.html#historias">Histórias</a><a href="index.html#noticias">Notícias</a><a href="index.html#sobre">Sobre</a></div>
      <div class="footer-note">O AUTOMOBILISMO<br>TAMBÉM É DELAS.</div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
`;
}

for (const cat of categories) {
  const html = pageHtml(cat);
  fs.writeFileSync(path.join(DIR, `${cat.slug}.html`), html);
  console.log(`wrote ${cat.slug}.html`);
}
