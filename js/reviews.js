/* =========================================================
   Lhawta — Avis clients (hybride : Worker + seeds locaux)
   ========================================================= */

const REVIEWS_API_URL = 'https://lhawta-reviews.samia-touile.workers.dev/reviews';

const SEED_REVIEWS = [
  {
    title: "Service au top, livraison rapide",
    text: "J'ai commandé une chemise vintage, livrée le jour même à Casa. Qualité au rendez-vous.",
    name: "Yassine B.",
    city: "Casablanca",
    rating: 5,
    item: "Chemise vintage rayée"
  },
  {
    title: "Rassurée et bien servie",
    text: "J'étais hésitante de payer à l'avance depuis Rabat, mais le service client est top. Reçu en 48h.",
    name: "Salma E.",
    city: "Rabat",
    rating: 5,
    item: "Veste denim"
  },
  {
    title: "100% authentique",
    text: "Drari Lhawta connaissent leur truc. Les pièces sont propres, pas de fake. Je recommande à 100%.",
    name: "Ayoub M.",
    city: "Casablanca",
    rating: 5,
    item: "Blouson noir oversize"
  }
];

let LIVE_REVIEWS = [];

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderReviewCard(review) {
  const stars = '★'.repeat(review.rating);
  return `
    <article class="lhw-review-card">
      <div class="lhw-review-stars">${stars}</div>
      <h3 class="lhw-review-title">${escapeHtml(review.title)}</h3>
      <p class="lhw-review-text">${escapeHtml(review.text)}</p>
      <div class="lhw-review-footer">
        <div class="lhw-review-avatar">${escapeHtml(getInitials(review.name))}</div>
        <div class="lhw-review-author">
          <strong>${escapeHtml(review.name)}</strong>
          <span>${escapeHtml(review.city)}${review.item ? ' · ' + escapeHtml(review.item) : ''}</span>
        </div>
      </div>
    </article>
  `;
}

function getAllReviews() {
  return [...LIVE_REVIEWS, ...SEED_REVIEWS];
}

function getAverageRating() {
  const all = getAllReviews();
  if (all.length === 0) return '5.0';
  const total = all.reduce((sum, r) => sum + r.rating, 0);
  return (total / all.length).toFixed(1);
}

function renderReviewsCarousel() {
  const all = getAllReviews();
  document.querySelectorAll('.lhw-reviews-track').forEach(track => {
    track.innerHTML = all.map(renderReviewCard).join('');
  });
  document.querySelectorAll('.lhw-reviews-avg').forEach(el => {
    el.textContent = getAverageRating();
  });
  document.querySelectorAll('.lhw-reviews-count').forEach(el => {
    el.textContent = all.length;
  });
}

async function fetchLiveReviews() {
  try {
    const res = await fetch(REVIEWS_API_URL, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });
    if (!res.ok) throw new Error('Worker error');
    const data = await res.json();
    if (Array.isArray(data.reviews)) {
      LIVE_REVIEWS = data.reviews.sort((a, b) =>
        new Date(b.date || 0) - new Date(a.date || 0)
      );
      renderReviewsCarousel();
    }
  } catch (err) {
    console.warn('[Lhawta] Live reviews unavailable, using seed only.', err);
  }
}

function scrollReviews(direction) {
  const track = document.querySelector('.lhw-reviews-track');
  if (!track) return;
  const card = track.querySelector('.lhw-review-card');
  if (!card) return;
  const scrollAmount = card.offsetWidth + 20;
  track.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
}

function addReviewLocally(review) {
  LIVE_REVIEWS.unshift(review);
  renderReviewsCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
  renderReviewsCarousel();
  fetchLiveReviews();
});
