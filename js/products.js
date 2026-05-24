/* =========================================================
   Lhawta — Données produits (multilingue)
   name/description/condition : objets { 'fr-ma', 'fr', 'en' }
   Pour le rendu, utiliser tProduct(p, field)
   ========================================================= */

const PRODUCTS = [
  {
    id: 1,
    reference: "LHW-001",
    name: {
      'fr-ma': "Chemise vintage rayée",
      'fr':    "Chemise vintage rayée",
      'en':    "Striped vintage shirt"
    },
    category: "chemise",
    size: "M",
    price: 120,
    condition: {
      'fr-ma': "Très bon état",
      'fr':    "Très bon état",
      'en':    "Very good condition"
    },
    status: "Disponible",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=750&fit=crop",
    styleTags: ["vintage", "minimal"],
    occasionTags: ["quotidien", "école", "sortie"],
    description: {
      'fr-ma': "Chemise légère, coupe clean, parfaite pour un look vintage.",
      'fr':    "Chemise légère à la coupe épurée, parfaite pour un look vintage.",
      'en':    "Light shirt with a clean cut, perfect for a vintage look."
    }
  },
  {
    id: 2,
    reference: "LHW-002",
    name: {
      'fr-ma': "Blouson noir oversize",
      'fr':    "Blouson noir oversize",
      'en':    "Black oversize jacket"
    },
    category: "blouson",
    size: "L",
    price: 280,
    condition: {
      'fr-ma': "Comme neuf",
      'fr':    "Comme neuf",
      'en':    "Like new"
    },
    status: "Disponible",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=750&fit=crop",
    styleTags: ["streetwear", "oversize"],
    occasionTags: ["quotidien", "sortie", "événement"],
    description: {
      'fr-ma': "Blouson noir coupe oversize, idéal pour un look streetwear.",
      'fr':    "Blouson noir à la coupe oversize, idéal pour un look streetwear.",
      'en':    "Black oversize jacket, ideal for a streetwear look."
    }
  },
  {
    id: 3,
    reference: "LHW-003",
    name: {
      'fr-ma': "T-shirt baseball",
      'fr':    "T-shirt baseball",
      'en':    "Baseball t-shirt"
    },
    category: "t-shirt",
    size: "M",
    price: 90,
    condition: {
      'fr-ma': "Très bon état",
      'fr':    "Très bon état",
      'en':    "Very good condition"
    },
    status: "Disponible",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&h=750&fit=crop",
    styleTags: ["vintage", "streetwear"],
    occasionTags: ["quotidien", "école"],
    description: {
      'fr-ma': "T-shirt baseball manches contrastées, esprit vintage US.",
      'fr':    "T-shirt baseball à manches contrastées, esprit vintage américain.",
      'en':    "Baseball t-shirt with contrasting sleeves, vintage American vibe."
    }
  },
  {
    id: 4,
    reference: "LHW-004",
    name: {
      'fr-ma': "Chemise beige casual",
      'fr':    "Chemise beige casual",
      'en':    "Beige casual shirt"
    },
    category: "chemise",
    size: "L",
    price: 150,
    condition: {
      'fr-ma': "Neuf",
      'fr':    "Neuf",
      'en':    "New"
    },
    status: "Vendu",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=750&fit=crop",
    styleTags: ["chic casual", "minimal"],
    occasionTags: ["travail", "sortie", "événement"],
    description: {
      'fr-ma': "Chemise beige neuve, coupe régulière, indispensable du dressing.",
      'fr':    "Chemise beige neuve à la coupe régulière, un essentiel du dressing.",
      'en':    "New beige shirt with regular cut, a wardrobe essential."
    }
  },
  {
    id: 5,
    reference: "LHW-005",
    name: {
      'fr-ma': "Pull vintage vert",
      'fr':    "Pull vintage vert",
      'en':    "Green vintage sweater"
    },
    category: "pull",
    size: "M",
    price: 180,
    condition: {
      'fr-ma': "Bon état",
      'fr':    "Bon état",
      'en':    "Good condition"
    },
    status: "Disponible",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=750&fit=crop",
    styleTags: ["vintage", "chic casual"],
    occasionTags: ["quotidien", "école", "travail"],
    description: {
      'fr-ma': "Pull vert olive, maille épaisse, vibe 90's authentique.",
      'fr':    "Pull vert olive en maille épaisse, ambiance 90s authentique.",
      'en':    "Olive green sweater, thick knit, authentic 90s vibe."
    }
  },
  {
    id: 6,
    reference: "LHW-006",
    name: {
      'fr-ma': "Pantalon cargo",
      'fr':    "Pantalon cargo",
      'en':    "Cargo pants"
    },
    category: "pantalon",
    size: "L",
    price: 220,
    condition: {
      'fr-ma': "Très bon état",
      'fr':    "Très bon état",
      'en':    "Very good condition"
    },
    status: "Disponible",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=750&fit=crop",
    styleTags: ["streetwear", "oversize"],
    occasionTags: ["quotidien", "sortie"],
    description: {
      'fr-ma': "Cargo multipoches, coupe ample, parfait pour le quotidien.",
      'fr':    "Pantalon cargo multipoches à coupe ample, parfait au quotidien.",
      'en':    "Multi-pocket cargo pants with loose fit, perfect for daily wear."
    }
  },
  {
    id: 7,
    reference: "LHW-007",
    name: {
      'fr-ma': "Veste denim",
      'fr':    "Veste en jean",
      'en':    "Denim jacket"
    },
    category: "veste",
    size: "M",
    price: 250,
    condition: {
      'fr-ma': "Très bon état",
      'fr':    "Très bon état",
      'en':    "Very good condition"
    },
    status: "Disponible",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600&h=750&fit=crop",
    styleTags: ["vintage", "streetwear"],
    occasionTags: ["quotidien", "sortie", "école"],
    description: {
      'fr-ma': "Trucker en denim brut, le classique intemporel.",
      'fr':    "Veste trucker en jean brut, le classique intemporel.",
      'en':    "Raw denim trucker jacket, a timeless classic."
    }
  },
  {
    id: 8,
    reference: "LHW-008",
    name: {
      'fr-ma': "T-shirt blanc minimal",
      'fr':    "T-shirt blanc minimaliste",
      'en':    "Minimal white t-shirt"
    },
    category: "t-shirt",
    size: "S",
    price: 60,
    condition: {
      'fr-ma': "Neuf",
      'fr':    "Neuf",
      'en':    "New"
    },
    status: "Disponible",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
    styleTags: ["minimal", "chic casual"],
    occasionTags: ["quotidien", "travail", "école"],
    description: {
      'fr-ma': "T-shirt blanc, coton épais, base parfaite de tout look.",
      'fr':    "T-shirt blanc en coton épais, la base parfaite de tout look.",
      'en':    "White t-shirt in thick cotton, the perfect base for any outfit."
    }
  },
  {
    id: 9,
    reference: "LHW-009",
    name: {
      'fr-ma': "Blouson coupe-vent",
      'fr':    "Blouson coupe-vent",
      'en':    "Windbreaker jacket"
    },
    category: "blouson",
    size: "XL",
    price: 200,
    condition: {
      'fr-ma': "Bon état",
      'fr':    "Bon état",
      'en':    "Good condition"
    },
    status: "Vendu",
    image: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&h=750&fit=crop",
    styleTags: ["streetwear", "oversize"],
    occasionTags: ["quotidien", "sortie"],
    description: {
      'fr-ma': "Coupe-vent léger, parfait pour la mi-saison.",
      'fr':    "Coupe-vent léger, parfait pour la mi-saison.",
      'en':    "Lightweight windbreaker, perfect for mid-season."
    }
  },
  {
    id: 10,
    reference: "LHW-010",
    name: {
      'fr-ma': "Chemise premium",
      'fr':    "Chemise premium",
      'en':    "Premium shirt"
    },
    category: "chemise",
    size: "L",
    price: 300,
    condition: {
      'fr-ma': "Neuf",
      'fr':    "Neuf",
      'en':    "New"
    },
    status: "Disponible",
    image: "https://images.unsplash.com/photo-1602810316693-3667c854239a?w=600&h=750&fit=crop",
    styleTags: ["chic casual", "minimal"],
    occasionTags: ["travail", "événement", "sortie"],
    description: {
      'fr-ma': "Chemise premium, tissu noble, finitions impeccables.",
      'fr':    "Chemise premium en tissu noble avec finitions impeccables.",
      'en':    "Premium shirt in fine fabric with impeccable finishings."
    }
  },
  {
    id: 11,
    reference: "LHW-011",
    name: {
      'fr-ma': "Pull oversize gris",
      'fr':    "Pull oversize gris",
      'en':    "Grey oversize sweater"
    },
    category: "pull",
    size: "XL",
    price: 170,
    condition: {
      'fr-ma': "Très bon état",
      'fr':    "Très bon état",
      'en':    "Very good condition"
    },
    status: "Disponible",
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=600&h=750&fit=crop",
    styleTags: ["oversize", "streetwear"],
    occasionTags: ["quotidien", "école"],
    description: {
      'fr-ma': "Pull oversize confort maximal, idéal pour les jours froids.",
      'fr':    "Pull oversize au confort maximal, idéal pour les jours froids.",
      'en':    "Maximum comfort oversize sweater, ideal for cold days."
    }
  },
  {
    id: 12,
    reference: "LHW-012",
    name: {
      'fr-ma': "Pantalon chino beige",
      'fr':    "Pantalon chino beige",
      'en':    "Beige chino pants"
    },
    category: "pantalon",
    size: "M",
    price: 160,
    condition: {
      'fr-ma': "Neuf",
      'fr':    "Neuf",
      'en':    "New"
    },
    status: "Disponible",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=750&fit=crop",
    styleTags: ["chic casual", "minimal"],
    occasionTags: ["travail", "événement", "école"],
    description: {
      'fr-ma': "Chino beige, coupe slim, pour un look propre et passe-partout.",
      'fr':    "Pantalon chino beige à coupe slim, pour un look soigné et polyvalent.",
      'en':    "Beige chino with slim cut, for a clean and versatile look."
    }
  }
];

/* ---------- Helper : récupère un champ multilingue du produit ---------- */
function tProduct(p, field) {
  if (!p || !p[field]) return '';
  const val = p[field];
  if (typeof val === 'string') return val;
  if (typeof val === 'object') {
    const locale = (typeof getCurrentLocale === 'function') ? getCurrentLocale() : 'fr-ma';
    return val[locale] || val['fr-ma'] || val['fr'] || val['en'] || Object.values(val)[0] || '';
  }
  return '';
}

/* ---------- Helper : retourne le 'status' traduit ---------- */
function tStatus(status) {
  if (typeof t !== 'function') return status;
  if (status === 'Vendu') return t('shop.badge.sold');
  if (status === 'Disponible') return t('shop.badge.available');
  return status;
}
