/* =========================================================
   Lhawta — Boutique
   Affichage produits + filtres : catégorie, taille, budget,
   disponibilité, et bouton "Réinitialiser".
   ========================================================= */

const IG_URL = "https://www.instagram.com/lhawta.casablanca/";

const els = {
  grid:       document.getElementById('products-grid'),
  count:      document.getElementById('results-count'),
  noResults:  document.getElementById('no-results'),
  category:   document.getElementById('filter-category'),
  size:       document.getElementById('filter-size'),
  budget:     document.getElementById('filter-budget'),
  budgetVal:  document.getElementById('budget-value'),
  status:     document.getElementById('filter-status'),
  reset:      document.getElementById('reset-filters'),
};

/* ---------- Rendu d'une carte produit ---------- */
function renderProductCard(p) {
  const isSold = p.status === 'Vendu';
  const badge = isSold
    ? `<span class="badge badge-sold">Vendu</span>`
    : `<span class="badge badge-ok">Disponible</span>`;

  const btn = isSold
    ? `<button class="btn btn-outline btn-block" disabled style="opacity:.6;cursor:not-allowed;">Plus disponible</button>`
    : `<a class="btn btn-dark btn-block" href="${IG_URL}" target="_blank" rel="noopener">
         DM pour commander · ${p.reference}
       </a>`;

  return `
    <article class="product-card ${isSold ? 'sold' : ''}">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${badge}
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-meta">${p.category} · Taille ${p.size}</p>
        <p class="product-condition">${p.condition}</p>
        <p class="product-price">${p.price} DH</p>
        ${btn}
      </div>
    </article>
  `;
}

/* ---------- Filtrage ---------- */
function getFilteredProducts() {
  const cat    = els.category.value;
  const size   = els.size.value;
  const budget = parseInt(els.budget.value, 10);
  const status = els.status.value;

  return PRODUCTS.filter(p => {
    if (cat !== 'all' && p.category !== cat) return false;
    if (size !== 'all' && p.size !== size) return false;
    if (p.price > budget) return false;
    if (status !== 'all' && p.status !== status) return false;
    return true;
  });
}

/* ---------- Affichage ---------- */
function render() {
  const list = getFilteredProducts();

  // Les vendus à la fin pour donner plus de visibilité aux dispos
  list.sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status === 'Vendu' ? 1 : -1;
  });

  els.grid.innerHTML = list.map(renderProductCard).join('');
  els.count.textContent = `${list.length} pièce${list.length > 1 ? 's' : ''} trouvée${list.length > 1 ? 's' : ''}`;
  els.noResults.hidden = list.length > 0;
}

/* ---------- Events ---------- */
function bindEvents() {
  els.category.addEventListener('change', render);
  els.size.addEventListener('change', render);
  els.status.addEventListener('change', render);

  els.budget.addEventListener('input', () => {
    els.budgetVal.textContent = els.budget.value;
    render();
  });

  els.reset.addEventListener('click', () => {
    els.category.value = 'all';
    els.size.value = 'all';
    els.status.value = 'all';
    els.budget.value = 500;
    els.budgetVal.textContent = '500';
    render();
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  bindEvents();
  render();
});
