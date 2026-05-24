# 🌟 Lhawta — Site officiel

Site e-commerce vitrine de la marque streetwear marocaine **Lhawta** (vêtements neufs & seconde main, Casablanca).

## 🌐 URLs

- **Production** : https://samiatouile.github.io/lhawta-site/ (à mettre à jour quand domaine acheté)
- **Instagram** : https://www.instagram.com/lhawta.casablanca/

## 🛠️ Stack technique

- **Frontend** : HTML / CSS / JavaScript vanilla (pas de framework)
- **Hébergement** : GitHub Pages (gratuit)
- **Backend avis** : Cloudflare Worker (gratuit jusqu'à 100k req/jour)
- **Stockage avis** : GitHub Issues (label "review-approved")

## 📁 Structure des fichiers

```
lhawta-site/
├── index.html              ← Page d'accueil
├── boutique.html           ← Catalogue produits
├── trouve-ta-piece.html    ← Quiz de recommandation
├── contact.html            ← Page contact
├── panier.html             ← Panier d'achat
├── livraison.html          ← Conditions de livraison
├── css/style.css           ← Tous les styles
├── js/
│   ├── i18n.js             ← Système multilingue (FR-Maroc / FR / EN)
│   ├── products.js         ← Liste des 12 produits
│   ├── boutique.js         ← Logique boutique (filtres, panier)
│   ├── quiz.js             ← Logique du quiz
│   ├── cart.js             ← Logique panier
│   ├── reviews.js          ← Système d'avis
│   └── review-form.js      ← Formulaire d'avis
└── images/                 ← Logo et photos
```

## 🌍 Fonctionnalités

- ✅ Multilingue (FR Maroc / FR International / EN)
- ✅ Multi-devises (MAD / EUR / CAD avec conversion auto)
- ✅ Détection auto du pays par IP
- ✅ Panier intelligent (stockage localStorage)
- ✅ Système d'avis clients en temps réel
- ✅ Page livraison adaptée (Maroc / International)
- ✅ Quiz "Trouve ta pièce"
- ✅ Responsive (mobile + desktop)

## 🚀 Comment modifier le site

### Sur ordinateur

1. Cloner le repo dans VS Code
2. Faire les modifications
3. Dans le terminal :
```bash
   git add .
   git commit -m "Description du changement"
   git push
```
4. ⏱️ Attendre 1-2 min, le site est mis à jour automatiquement

### Pour ajouter un produit

Édite `js/products.js` et ajoute un objet produit avec :
- `id`, `reference`, `name` (multilingue), `category`, `size`, `price`, `condition`, `status`, `image`, etc.

## 🔐 Comptes liés

| Service | Compte | Rôle |
|---------|--------|------|
| GitHub | El Mehdi (proprio) + Samia.touile (collab admin) | Code source |
| Cloudflare | Samia.touile@gmail.com | Worker avis |
| Registrar | (à compléter quand acheté) | Nom de domaine |

## 🆘 Besoin d'aide ?

**Sam (dev)** : samia.touile@gmail.com

## 📅 Historique

- Mai 2026 : Lancement initial + chantier i18n complet (3 langues, 5 pays)
