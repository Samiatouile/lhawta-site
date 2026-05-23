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

  // Catégorie (25)
  if (answers.category === 'any') {
    score += 25; // pas de pénalité si "peu importe"
  } else if (product.category === answers.category) {
    score += 25;
    reasons.push("catégorie correspondante");
  }

  // Taille (20)
  if (answers.size === 'any') {
    score += 20; // pas de pénalité si "je ne sais pas"
  } else if (product.size === answers.size) {
    score += 20;
    reasons.push("taille parfaite");
  }

  // Budget (20)
  if (answers.budget === 'any') {
    score += 20;
  } else {
    const maxBudget = parseInt(answers.budget, 10);
    if (product.price <= maxBudget) {
      score += 20;
      reasons.push("budget respecté");
    }
  }

  // Style (25)
  if (product.styleTags && product.styleTags.includes(answers.style)) {
    score += 25;
    reasons.push("style assorti");
  }

  // Occasion (10)
  if (product.occasionTags && product.occasionTags.includes(answers.occasion)) {
    score += 10;
    reasons.push("adapté à l'occasion");
  }

  return { score, reasons };
}

/* ---------- Rendu d'une carte résultat ---------- */
function renderMatchCard(p, score, reasons) {
  const reasonText = reasons.length > 0
    ? `Pourquoi ? ${reasons.join(", ")}.`
    : "Ce produit est dans ta sélection.";

  return `
    <article class="product-card">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="badge badge-ok">${p.status}</span>
        <span class="badge-match">${score}% match</span>
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-meta">${p.category} · Taille ${p.size}</p>
        <p class="product-price">${p.price} DH</p>
        <p class="product-reason">${reasonText}</p>
        <button class="btn-add-cart" onclick="addToCart(${p.id})">
          🛒 Ajouter au panier
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
    summary.textContent = `${scored.length} pièce${scored.length > 1 ? 's' : ''} qui match${scored.length > 1 ? 'ent' : ''} ton profil.`;
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
