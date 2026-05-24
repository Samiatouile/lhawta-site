/* =========================================================
   Lhawta — Quiz "Trouve ta pièce"
   Calcule un score sur 100 pour chaque produit disponible
   selon les réponses du quiz, puis affiche les meilleurs matchs.

   Barème :
   - Catégorie compatible : +25
   - Taille compatible    : +20
   - Budget respecté      : +20
   - Style compatible     : +25
   - Occasion compatible  : +10
   Total max : 100
   ========================================================= */

const IG_URL = "https://www.instagram.com/lhawta.casablanca/";

/* ---------- Lecture des réponses du formulaire ---------- */
function readAnswers(form) {
  const data = new FormData(form);
  return {
    occasion: data.get('occasion'),
    style:    data.get('style'),
    category: data.get('category'),
    size:     data.get('size'),
    budget:   data.get('budget'),  // "100" | "200" | "300" | "any"
  };
}

/* ---------- Scoring d'un produit ---------- */
function scoreProduct(product, answers) {
  let score = 0;
  const reasons = [];

  const _t = (k, f) => (typeof t === 'function') ? t(k) : (f || k);

  // Catégorie (25)
  if (answers.category === 'any') {
    score += 25; // pas de pénalité si "peu importe"
  } else if (product.category === answers.category) {
    score += 25;
    reasons.push(_t('quiz.reason.category', 'catégorie correspondante'));
  }

  // Taille (20)
  if (answers.size === 'any') {
    score += 20; // pas de pénalité si "je ne sais pas"
  } else if (product.size === answers.size) {
    score += 20;
    reasons.push(_t('quiz.reason.size', 'taille parfaite'));
  }

  // Budget (20)
  if (answers.budget === 'any') {
    score += 20;
  } else {
    const maxBudget = parseInt(answers.budget, 10);
    if (product.price <= maxBudget) {
      score += 20;
      reasons.push(_t('quiz.reason.budget', 'budget respecté'));
    }
  }

  // Style (25)
  if (product.styleTags && product.styleTags.includes(answers.style)) {
    score += 25;
    reasons.push(_t('quiz.reason.style', 'style assorti'));
  }

  // Occasion (10)
  if (product.occasionTags && product.occasionTags.includes(answers.occasion)) {
    score += 10;
    reasons.push(_t('quiz.reason.occasion', "adapté à l'occasion"));
  }

  return { score, reasons };
}

/* ---------- Rendu d'une carte résultat ---------- */
function renderMatchCard(p, score, reasons) {
  const _t = (k, f) => (typeof t === 'function') ? t(k) : (f || k);
  const reasonText = reasons.length > 0
    ? `${_t('quiz.reason.prefix', 'Pourquoi ?')} ${reasons.join(", ")}.`
    : _t('quiz.reason.fallback', 'Ce produit est dans ta sélection.');
  const sizeLabel = _t('shop.label.size', 'Taille');
  const matchLabel = _t('quiz.match', 'match');
  const availableLabel = _t('shop.badge.available', p.status);
  const addCartLabel = _t('shop.btn.addcart', '🛒 Ajouter au panier');

  const pName = (typeof tProduct === 'function') ? tProduct(p, 'name') : p.name;
  return `
    <article class="product-card">
      <div class="product-image">
        <img src="${p.image}" alt="${pName}" loading="lazy" />
        <span class="badge badge-ok">${availableLabel}</span>
        <span class="badge-match">${score}% ${matchLabel}</span>
      </div>
      <div class="product-body">
        <h3 class="product-name">${pName}</h3>
        <p class="product-meta">${p.category} · ${sizeLabel} ${p.size}</p>
        <p class="product-price">${typeof formatPrice === 'function' ? formatPrice(p.price) : p.price + ' DH'}</p>
        <p class="product-reason">${reasonText}</p>
        <button class="btn-add-cart" onclick="addToCart(${p.id})">
          ${addCartLabel}
        </button>
      </div>
    </article>
  `;
}

/* ---------- Soumission du quiz ---------- */
function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const answers = readAnswers(form);

  // On ne recommande que les produits disponibles
  const scored = PRODUCTS
    .filter(p => p.status === 'Disponible')
    .map(p => {
      const { score, reasons } = scoreProduct(p, answers);
      return { product: p, score, reasons };
    })
    // Seuil minimal : on garde les matchs > 50%
    .filter(item => item.score >= 50)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  // Affichage des résultats
  const resultsSection = document.getElementById('quiz-results');
  const grid           = document.getElementById('results-grid');
  const summary        = document.getElementById('quiz-summary');
  const noMatch        = document.getElementById('no-match');

  resultsSection.hidden = false;

  if (scored.length === 0) {
    grid.innerHTML = '';
    summary.textContent = '';
    noMatch.hidden = false;
  } else {
    noMatch.hidden = true;
    summary.textContent = ((typeof t === 'function') ? t('quiz.results.summary') : '{count} pièce(s) qui match(ent) ton profil.').replace('{count}', scored.length);
    grid.innerHTML = scored
      .map(item => renderMatchCard(item.product, item.score, item.reasons))
      .join('');
  }

  // Scroll auto vers les résultats
  setTimeout(() => {
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quiz-form');
  if (!form) return;
  form.addEventListener('submit', handleSubmit);

  // Cache les résultats au reset
  form.addEventListener('reset', () => {
    document.getElementById('quiz-results').hidden = true;
  });
});
