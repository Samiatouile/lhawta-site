/* =========================================================
   Lhawta — Modale "Laisser un avis"
   Envoie au Worker, publication instantanée
   ========================================================= */

const SUBMIT_API_URL = 'https://lhawta-reviews.samia-touile.workers.dev/reviews';
let formStartTime = null;

function openReviewModal() {
  const modal = document.getElementById('review-modal');
  if (!modal) return;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  formStartTime = Date.now();
  setTimeout(() => modal.classList.add('open'), 10);
  setTimeout(() => {
    const first = document.getElementById('rv-name');
    if (first) first.focus();
  }, 200);
}

function closeReviewModal() {
  const modal = document.getElementById('review-modal');
  if (!modal) return;
  modal.classList.remove('open');
  setTimeout(() => {
    modal.hidden = true;
    document.body.style.overflow = '';
    const form = document.getElementById('review-form');
    const success = document.getElementById('review-success');
    if (form && success && !success.hidden) {
      form.hidden = false;
      success.hidden = true;
      form.reset();
      const cc = document.getElementById('char-count');
      if (cc) cc.textContent = '0 / 400';
    }
  }, 250);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('review-modal');
    if (modal && !modal.hidden) closeReviewModal();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('review-form');
  if (!form) return;

  const textArea = document.getElementById('rv-text');
  const charCount = document.getElementById('char-count');
  if (textArea && charCount) {
    textArea.addEventListener('input', () => {
      charCount.textContent = `${textArea.value.length} / 400`;
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('rv-submit');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Publication en cours...';

    const formData = new FormData(form);
    const payload = {
      name:   (formData.get('name')   || '').trim(),
      city:   (formData.get('city')   || '').trim(),
      handle: (formData.get('handle') || '').trim(),
      rating: parseInt(formData.get('rating'), 10),
      title:  (formData.get('title')  || '').trim(),
      text:   (formData.get('text')   || '').trim(),
      item:   (formData.get('item')   || '').trim(),
      _gotcha: (formData.get('_gotcha') || '').trim(),
      _formStartTime: formStartTime
    };

    try {
      const response = await fetch(SUBMIT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        if (typeof addReviewLocally === 'function') {
          addReviewLocally({
            title: payload.title,
            text: payload.text,
            name: payload.name,
            city: payload.city,
            rating: payload.rating,
            item: payload.item,
            date: new Date().toISOString()
          });
        }
        form.hidden = true;
        document.getElementById('review-success').hidden = false;
      } else {
        alert('Erreur : ' + (data.error || 'Impossible de publier ton avis. Réessaie plus tard.'));
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    } catch (err) {
      alert('Erreur réseau. Vérifie ta connexion et réessaie.');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
});
