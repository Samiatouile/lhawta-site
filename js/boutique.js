/* =========================================================
   Lhawta — Boutique (avec panier)
   ========================================================= */

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

function renderProductCard(p) {
  const isSold = p.status === 'Vendu';
  const badge = isSold
    ? `<span class="badge badge-sold">Vendu</span>`
    : `<span class="badge badge-ok">Disponible</span>`;
  const action = isSold
    ? `<button class="btn btn-outline btn-block" disabled style="opacity:.6;cursor:not-allowed;">Plus disponible</button>`
    : `<button class="btn-add-cart" onclick="addToCart(${p.id})">🛒 Ajouter au panier</button>
       <a href="https://ig.me/m/lhawta.casablanca" target="_blank" rel="noopener" style="font-size:.78rem;color:var(--color-muted);text-align:center;text-decoration:underline;display:block;margin-top:4px;">ou DM direct</a>`;
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
        <p class="product-price">${typeof formatPrice === 'function' ? formatPrice(p.price) : p.price + ' DH'}</p>
        <div class="product-actions">${action}</div>
      </div>
    </article>
  `;
}

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

function render() {
  const list = getFilteredProducts();
  list.sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status === 'Vendu' ? 1 : -1;
  });
  els.grid.innerHTML = list.map(renderProductCard).join('');
  els.count.textContent = `${list.length} pièce${list.length > 1 ? 's' : ''} trouvée${list.length > 1 ? 's' : ''}`;
  els.noResults.hidden = list.length > 0;
}

function initBudgetSlider() {
  if (!els.budget || !els.budgetVal) return;
  if (typeof PRODUCTS === 'undefined' || !Array.isArray(PRODUCTS)) return;

  const maxPrice = Math.max(...PRODUCTS.map(p => p.price));
  const minPrice = Math.min(...PRODUCTS.map(p => p.price));

  const roundedMax = Math.ceil(maxPrice / 10) * 10;
  const roundedMin = Math.floor(minPrice / 10) * 10;

  const step = (roundedMax - roundedMin) > 500 ? 50 : 10;

  els.budget.min = roundedMin;
  els.budget.max = roundedMax;
  els.budget.step = step;
  els.budget.value = roundedMax;

  els.budgetVal.textContent = roundedMax;
}

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
    const maxPrice = Math.max(...PRODUCTS.map(p => p.price));
    const roundedMax = Math.ceil(maxPrice / 10) * 10;
    els.budget.value = roundedMax;
    els.budgetVal.textContent = roundedMax;
    render();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initBudgetSlider();
  bindEvents();
  render();
});
