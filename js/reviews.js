/* =========================================================
   Lhawta — Avis clients
   Pour ajouter un nouvel avis, ajoute simplement un objet
   dans le tableau REVIEWS ci-dessous.
   ========================================================= */

const REVIEWS = [
  {
    name: "Yassine B.",
    handle: "@yassineb",
    city: "Casablanca",
    rating: 5,
    text: "Wallah service au top. J'ai commandé une chemise vintage, livrée le jour même. La qualité dépasse les attentes.",
    item: "Chemise vintage rayée"
  },
  {
    name: "Salma E.",
    handle: "@salmaa.e",
    city: "Rabat",
    rating: 5,
    text: "J'étais hésitante de payer à l'avance, mais le service client est rassurant et rapide. Reçu en 48h, exactement comme sur les photos !",
    item: "Veste denim"
  },
  {
    name: "Ayoub M.",
    handle: "@ayoub.mr",
    city: "Casablanca",
    rating: 5,
    text: "Drari Lhawta connaissent leur truc. Les pièces sont propres, pas comme d'autres pages qui vendent du fake. Je recommande à 100%.",
    item: "Blouson noir oversize"
  },
  {
    name: "Imane K.",
    handle: "@imanek_",
    city: "Marrakech",
    rating: 5,
    text: "Le quiz 'Trouve ta pièce' est trop cool, ça m'a aidée à choisir un pull qui me va parfaitement. Livraison nickel à Marrakech.",
    item: "Pull vintage vert"
  },
  {
    name: "Mehdi A.",
    handle: "@mehdi_a",
    city: "Casablanca",
    rating: 5,
    text: "Haja zwina, j'ai eu une question sur la taille et ils m'ont répondu en 5 min sur Instagram. Service client 10/10.",
    item: "T-shirt baseball"
  },
  {
    name: "Nada R.",
    handle: "@nadar.style",
    city: "Tanger",
    rating: 5,
    text: "Première commande chez Lhawta et clairement pas la dernière. Pièces uniques, prix corrects, et l'emballage est soigné.",
    item: "Chemise premium"
  }
];

function renderReviewCard(review) {
  const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
  const initials = review.name.split(' ').map(n => n[0]).join('').toUpperCase();

  return `
    <article class="review-card">
      <div class="review-header">
        <div class="review-avatar">${initials}</div>
        <div class="review-meta">
          <strong class="review-name">${review.name}</strong>
          <span class="review-handle">${review.handle} · ${review.city}</span>
        </div>
        <div class="review-rating" aria-label="${review.rating} étoiles sur 5">${stars}</div>
      </div>
      <p class="review-text">"${review.text}"</p>
      <p class="review-item">Pièce achetée : <strong>${review.item}</strong></p>
    </article>
  `;
}

function getAverageRating() {
  const total = REVIEWS.reduce((sum, r) => sum + r.rating, 0);
  return (total / REVIEWS.length).toFixed(1);
}

function renderAllReviews() {
  document.querySelectorAll('.reviews-grid').forEach(grid => {
    grid.innerHTML = REVIEWS.map(renderReviewCard).join('');
  });
  document.querySelectorAll('.reviews-avg').forEach(el => {
    el.textContent = getAverageRating();
  });
  document.querySelectorAll('.reviews-count').forEach(el => {
    el.textContent = REVIEWS.length;
  });
}

document.addEventListener('DOMContentLoaded', renderAllReviews);
