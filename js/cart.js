/* =========================================================
   Lhawta — Panier + livraison Casa / Hors Casa
   Livraison GRATUITE à partir de 500 DH d'achat
   ========================================================= */

const CART_KEY = 'lhawta_cart_v1';
const IG_USERNAME = 'lhawta.casablanca';
const FREE_SHIPPING_THRESHOLD = 500;

const SHIPPING = {
  casa:      { label: 'Casablanca',      price: 20, payment: 'Cash à la livraison' },
  hors_casa: { label: 'Hors Casablanca', price: 50, payment: 'Virement / Cash Plus / WafaCash à l\'avance' }
};

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  if (product.status === 'Vendu') {
    showToast('Cette pièce est déjà vendue 😢');
    return;
  }
  const cart = getCart();
  if (cart.find(item => item.id === productId)) {
    showToast('Cette pièce est déjà dans ton panier ✓');
    return;
  }
  cart.push({
    id: product.id,
    reference: product.reference,
    name: product.name,
    price: product.price,
    size: product.size,
    image: product.image,
  });
  saveCart(cart);
  showToast(`✓ ${product.name} ajouté au panier`);
}

function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
  if (typeof renderCartPage === 'function') renderCartPage();
}

function clearCart() {
  saveCart([]);
  if (typeof renderCartPage === 'function') renderCartPage();
}

function getCartSubtotal() {
  return getCart().reduce((sum, item) => sum + item.price, 0);
}

function getCartTotal() {
  return getCartSubtotal();
}

function isFreeShipping() {
  return getCartSubtotal() >= FREE_SHIPPING_THRESHOLD;
}

function getShippingPrice(zone) {
  if (isFreeShipping()) return 0;
  return SHIPPING[zone] ? SHIPPING[zone].price : 0;
}

function getRemainingForFreeShipping() {
  const remaining = FREE_SHIPPING_THRESHOLD - getCartSubtotal();
  return remaining > 0 ? remaining : 0;
}

function getGrandTotal(zone) {
  return getCartSubtotal() + getShippingPrice(zone);
}

function updateCartBadge() {
  const count = getCart().length;
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

function showToast(message) {
  let toast = document.getElementById('lhw-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'lhw-toast';
    toast.className = 'lhw-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function buildInstagramMessage(zone) {
  const cart = getCart();
  if (cart.length === 0) return '';

  const shipping = SHIPPING[zone];
  const lines = cart.map(item =>
    `• ${item.reference} — ${item.name} (Taille ${item.size}) — ${item.price} DH`
  ).join('\n');

  const subtotal = getCartSubtotal();
  const shipPrice = getShippingPrice(zone);
  const total = subtotal + shipPrice;
  const shipDisplay = shipPrice === 0
    ? 'GRATUITE 🎁 (commande > 500 DH)'
    : `${shipPrice} DH`;

  return `Salam Lhawta 👋

Je veux commander :
${lines}

Sous-total : ${subtotal} DH
Livraison (${shipping.label}) : ${shipDisplay}
TOTAL : ${total} DH

Ma zone : ${shipping.label}
Mode de paiement : ${shipping.payment}
Ma ville exacte : (à préciser)

Merci !`;
}

function orderInstagram(zone) {
  const cart = getCart();
  if (cart.length === 0) {
    showToast('Ton panier est vide 🛒');
    return;
  }
  if (!SHIPPING[zone]) {
    showToast('Zone de livraison invalide');
    return;
  }
  showOrderModal(zone);
}

function showOrderModal(zone) {
  const existing = document.getElementById('lhw-modal');
  if (existing) existing.remove();

  const shipping = SHIPPING[zone];
  const subtotal = getCartSubtotal();
  const shipPrice = getShippingPrice(zone);
  const total = subtotal + shipPrice;
  const message = buildInstagramMessage(zone);
  const shipDisplay = shipPrice === 0 ? '🎁 GRATUITE' : `${shipPrice} DH`;

  const modal = document.createElement('div');
  modal.id = 'lhw-modal';
  modal.className = 'lhw-modal';
  modal.innerHTML = `
    <div class="lhw-modal-backdrop"></div>
    <div class="lhw-modal-box" role="dialog" aria-modal="true">
      <button class="lhw-modal-close" aria-label="Fermer">✕</button>
      <h2>Commande à ${shipping.label}</h2>
      <div class="lhw-modal-totals">
        <div class="lhw-totals-row"><span>Sous-total</span><span>${subtotal} DH</span></div>
        <div class="lhw-totals-row"><span>Livraison (${shipping.label})</span><span>${shipDisplay}</span></div>
        <div class="lhw-totals-row lhw-totals-grand"><span>TOTAL</span><span>${total} DH</span></div>
      </div>
      <ol class="lhw-modal-steps">
        <li><strong>Copie</strong> le message ci-dessous</li>
        <li><strong>Ouvre</strong> Instagram</li>
        <li><strong>Colle</strong> dans le DM et envoie</li>
      </ol>
      <pre class="lhw-modal-message" id="lhw-modal-msg"></pre>
      <div class="lhw-modal-actions">
        <button class="btn btn-outline btn-block" id="lhw-modal-copy">📋 Copier le message</button>
        <button class="btn btn-primary btn-block" id="lhw-modal-open">📩 Ouvrir Instagram</button>
      </div>
      <p class="lhw-modal-hint small muted">⚠️ Instagram n'autorise pas l'envoi automatique. Une fois sur le DM, fais "Coller" (appui long sur mobile, Cmd/Ctrl+V sur desktop) puis Envoie.</p>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('lhw-modal-msg').textContent = message;

  navigator.clipboard.writeText(message).catch(() => {});

  const close = () => modal.remove();
  modal.querySelector('.lhw-modal-close').addEventListener('click', close);
  modal.querySelector('.lhw-modal-backdrop').addEventListener('click', close);

  document.getElementById('lhw-modal-copy').addEventListener('click', () => {
    navigator.clipboard.writeText(message).then(() => {
      showToast('✓ Message copié dans le presse-papier');
    }).catch(() => {
      const pre = document.getElementById('lhw-modal-msg');
      const range = document.createRange();
      range.selectNode(pre);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      showToast('Sélectionne le texte et fais Cmd/Ctrl + C');
    });
  });

  document.getElementById('lhw-modal-open').addEventListener('click', () => {
    window.open(`https://ig.me/m/${IG_USERNAME}`, '_blank');
  });
}

/* ---------- Message DM Instagram INTERNATIONAL ---------- */
function buildInternationalMessage() {
  const cart = getCart();
  if (cart.length === 0) return '';

  const country = (typeof getCurrentCountry === 'function')
    ? getCurrentCountry()
    : { code: 'MA', name_fr: 'Maroc', name_en: 'Morocco', currency: 'MAD' };
  const locale = (typeof getCurrentLocale === 'function') ? getCurrentLocale() : 'fr-ma';
  const subtotalMad = getCartSubtotal();
  const isEnglish = locale === 'en';

  const formatDouble = (mad) => {
    if (typeof formatPrice === 'function' && country.currency !== 'MAD') {
      return `${mad} DH (≈ ${formatPrice(mad)})`;
    }
    return `${mad} DH`;
  };

  const lines = cart.map(item =>
    `• ${item.reference} — ${item.name} (${isEnglish ? 'Size' : 'Taille'} ${item.size}) — ${formatDouble(item.price)}`
  ).join('\n');

  const countryName = isEnglish ? country.name_en : country.name_fr;
  const subtotalLine = formatDouble(subtotalMad);

  if (isEnglish) {
    return `Hello Lhawta 👋

I'd like to order from ${countryName}:

${lines}

Subtotal: ${subtotalLine}
(Shipping cost to be quoted)

My country: ${countryName}
My city: (please specify)
Preferred payment: (Bank transfer / Western Union)

Could you send me a quote with international shipping?

Thank you!`;
  }

  return `Bonjour Lhawta 👋

Je souhaite commander depuis ${countryName} :

${lines}

Sous-total : ${subtotalLine}
(Frais de livraison à devis)

Mon pays : ${countryName}
Ma ville : (à préciser)
Paiement préféré : (Virement bancaire / Western Union)

Pourriez-vous me transmettre un devis avec la livraison internationale ?

Merci !`;
}

/* ---------- Commander en mode international ---------- */
function orderInternational() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast(typeof t === 'function' ? t('cart.empty.title') : 'Ton panier est vide 🛒');
    return;
  }
  const message = buildInternationalMessage();
  navigator.clipboard.writeText(message).then(() => {
    showToast('✓ Message copié ! Colle-le dans le DM');
  }).catch(() => {});
  window.open(`https://ig.me/m/${IG_USERNAME}`, '_blank');
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
