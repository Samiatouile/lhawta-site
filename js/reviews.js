/* =========================================================
   Lhawta — Avis clients (hybride : Worker + seeds locaux)
   ========================================================= */

const REVIEWS_API_URL = 'https://lhawta-reviews.samia-touile.workers.dev/reviews';

const SEED_REVIEWS = [
  {
    rating: 5,
    name: "Yassine B.",
    city: "Casablanca",
    title: {
      'fr-ma': "Service au top, livraison rapide",
      'fr':    "Service excellent, livraison rapide",
      'en':    "Top service, fast delivery"
    },
    text: {
      'fr-ma': "J'ai commandé une chemise vintage, livrée le jour même à Casa. Qualité au rendez-vous.",
      'fr':    "J'ai commandé une chemise vintage, livrée le jour même à Casablanca. La qualité est au rendez-vous.",
      'en':    "I ordered a vintage shirt, delivered the same day in Casablanca. Great quality."
    },
    item: {
      'fr-ma': "Chemise vintage rayée",
      'fr':    "Chemise vintage rayée",
      'en':    "Striped vintage shirt"
    }
  },
  {
    rating: 5,
    name: "Salma E.",
    city: "Rabat",
    title: {
      'fr-ma': "Rassurée et bien servie",
      'fr':    "Rassurée et bien accompagnée",
      'en':    "Reassured and well served"
    },
    text: {
      'fr-ma': "J'étais hésitante de payer à l'avance depuis Rabat, mais le service client est top. Reçu en 48h.",
      'fr':    "J'hésitais à payer à l'avance depuis Rabat, mais le service client est excellent. Reçu en 48h.",
      'en':    "I was hesitant to pay in advance from Rabat, but customer service is excellent. Received in 48h."
    },
    item: {
      'fr-ma': "Veste denim",
      'fr':    "Veste en jean",
      'en':    "Denim jacket"
    }
  },
  {
    rating: 5,
    name: "Ayoub M.",
    city: "Casablanca",
    title: {
      'fr-ma': "100% authentique",
      'fr':    "100% authentique",
      'en':    "100% authentic"
    },
    text: {
      'fr-ma': "Drari Lhawta connaissent leur truc. Les pièces sont propres, pas de fake. Je recommande à 100%.",
      'fr':    "L'équipe Lhawta s'y connaît vraiment. Les pièces sont impeccables, aucune contrefaçon. Je recommande à 100%.",
      'en':    "The Lhawta team really knows their stuff. Pieces are pristine, no fakes. I recommend 100%."
    },
    item: {
      'fr-ma': "Blouson noir oversize",
      'fr':    "Blouson noir oversize",
      'en':    "Black oversize jacket"
    }
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

  const getLocalized = (val) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (typeof val === 'object') {
      const locale = (typeof getCurrentLocale === 'function') ? getCurrentLocale() : 'fr-ma';
      return val[locale] || val['fr-ma'] || val['fr'] || val['en'] || Object.values(val)[0] || '';
    }
    return '';
  };

  const title = getLocalized(review.title);
  const text  = getLocalized(review.text);
  const item  = getLocalized(review.item);

  return `
    <article class="lhw-review-card">
      <div class="lhw-review-stars">${stars}</div>
      <h3 class="lhw-review-title">${escapeHtml(title)}</h3>
      <p class="lhw-review-text">${escapeHtml(text)}</p>
      <div class="lhw-review-footer">
        <div class="lhw-review-avatar">${escapeHtml(getInitials(review.name))}</div>
        <div class="lhw-review-author">
          <strong>${escapeHtml(review.name)}</strong>
          <span>${escapeHtml(review.city)}${item ? ' · ' + escapeHtml(item) : ''}</span>
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
