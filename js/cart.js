/* =========================================================
   Lhawta — Logique panier
   Stockage localStorage. Partagé entre toutes les pages.
   ========================================================= */

const CART_KEY = 'lhawta_cart_v1';
const IG_USERNAME = 'lhawta.casablanca';

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

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price, 0);
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

function buildInstagramMessage() {
  const cart = getCart();
  if (cart.length === 0) return '';
  const lines = cart.map(item =>
    `• ${item.reference} — ${item.name} (Taille ${item.size}) — ${item.price} DH`
  ).join('\n');
  const total = getCartTotal();
  return `Salam Lhawta 👋\n\nJe veux commander :\n${lines}\n\nTotal : ${total} DH\n\nMerci !`;
}

function openInstagramOrder() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast('Ton panier est vide 🛒');
    return;
  }
  const message = buildInstagramMessage();
  navigator.clipboard.writeText(message).then(() => {
    showToast('✓ Message copié ! Colle-le dans le DM');
  }).catch(() => {});
  window.open(`https://ig.me/m/${IG_USERNAME}`, '_blank');
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
