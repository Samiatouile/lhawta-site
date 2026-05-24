/* =========================================================
   Lhawta — i18n (internationalisation)
   3 versions de langue :
   - fr-ma : Maroc (français + darija écrit en latin) — VERSION ACTUELLE
   - fr    : France/Belgique/Canada (français pro neutralisé)
   - en    : International (anglais)
   ========================================================= */

const STORAGE_LOCALE_KEY  = 'lhawta_locale_v1';
const STORAGE_COUNTRY_KEY = 'lhawta_country_v1';
const STORAGE_LOCALE_EXPLICIT_KEY = 'lhawta_locale_explicit_v1';

function isLocaleExplicit() {
  return localStorage.getItem(STORAGE_LOCALE_EXPLICIT_KEY) === '1';
}
function setLocaleExplicit(flag) {
  if (flag) localStorage.setItem(STORAGE_LOCALE_EXPLICIT_KEY, '1');
  else localStorage.removeItem(STORAGE_LOCALE_EXPLICIT_KEY);
}

const COUNTRIES = {
  MA: { code: 'MA', flag: '🇲🇦', name_fr: 'Maroc',          name_en: 'Morocco',       currency: 'MAD', locale: 'fr-ma' },
  FR: { code: 'FR', flag: '🇫🇷', name_fr: 'France',         name_en: 'France',        currency: 'EUR', locale: 'fr' },
  BE: { code: 'BE', flag: '🇧🇪', name_fr: 'Belgique',       name_en: 'Belgium',       currency: 'EUR', locale: 'fr' },
  CA: { code: 'CA', flag: '🇨🇦', name_fr: 'Canada',         name_en: 'Canada',        currency: 'CAD', locale: 'fr' },
  ES: { code: 'ES', flag: '🇪🇸', name_fr: 'Espagne',        name_en: 'Spain',         currency: 'EUR', locale: 'es' },
  XX: { code: 'XX', flag: '🌍', name_fr: 'International',   name_en: 'International', currency: 'USD', locale: 'en' }
};

const CURRENCIES = {
  MAD: { symbol: 'DH', position: 'after',  rateFromMAD: 1 },
  EUR: { symbol: '€',  position: 'after',  rateFromMAD: 1/11 },
  CAD: { symbol: 'C$', position: 'before', rateFromMAD: 1/7.5 },
  USD: { symbol: '$',  position: 'before', rateFromMAD: 1/10 }
};

const TRANSLATIONS = {
  /* ========== FRANÇAIS MAROC (darija mix) ========== */
  'fr-ma': {
    'nav.home': 'Accueil',
    'nav.shop': 'Boutique',
    'nav.find': 'Trouve ta pièce',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.shipping': 'Livraison',
    'nav.instagram': 'Instagram',

    'hero.title': 'Koulchi y lbes l Original',
    'hero.subtitle': 'Pièces neuves & seconde main, sélectionnées à Casablanca.',
    'hero.cta.shop': 'Voir la boutique',
    'hero.cta.find': 'Trouve ta pièce',

    'home.new.title': 'Nouveautés',
    'home.new.subtitle': 'Les dernières pièces ajoutées à la sélection.',
    'home.new.cta': 'Voir toute la boutique',
    'home.why.title': 'Pourquoi Lhawta ?',
    'home.why.f1.title': 'Pièces authentiques',
    'home.why.f1.desc': '100% original. Pas de copies, pas de fakes.',
    'home.why.f2.title': 'Sélection clean',
    'home.why.f2.desc': 'Chaque pièce est triée et inspectée à la main.',
    'home.why.f3.title': 'Prix accessibles',
    'home.why.f3.desc': 'Du bon style sans casser le portefeuille.',
    'home.why.f4.title': 'Commande rapide par DM',
    'home.why.f4.desc': "Un message Instagram et c'est réservé.",
    'home.cta.title': 'Tu veux réserver une pièce ?',
    'home.cta.subtitle': 'DM-nous sur Instagram avec la référence du produit.',
    'home.cta.btn': 'DM sur Instagram',

    'shop.title': 'Boutique',
    'shop.subtitle': 'Toute la sélection Lhawta. Filtre selon ton style et ton budget.',
    'shop.filters': 'Filtres',
    'shop.filter.category': 'Catégorie',
    'shop.filter.size': 'Taille',
    'shop.filter.budget': 'Budget',
    'shop.filter.status': 'Disponibilité',
    'shop.filter.all': 'Toutes',
    'shop.filter.reset': 'Réinitialiser',
    'shop.results.count': 'pièce(s) trouvée(s)',
    'shop.empty': "Aucun produit ne correspond à tes filtres. Essaie d'élargir ta recherche.",
    'shop.badge.available': 'Disponible',
    'shop.badge.sold': 'Vendu',
    'shop.btn.addcart': '🛒 Ajouter au panier',
    'shop.btn.dm': 'ou DM direct',
    'shop.btn.unavailable': 'Plus disponible',
    'shop.promo': "🎁 Livraison OFFERTE à partir de 500 DH d'achat — partout au Maroc",

    'quiz.title': 'Trouve ta pièce',
    'quiz.subtitle': 'Réponds à 5 questions rapides. On te sort les meilleurs matchs de la boutique.',
    'quiz.q1': 'Pour quelle occasion tu cherches une pièce ?',
    'quiz.q2': 'Quel style tu préfères ?',
    'quiz.q3': 'Quelle catégorie ?',
    'quiz.q4': 'Quelle taille ?',
    'quiz.q5': 'Budget maximum ?',
    'quiz.submit': 'Voir mes matchs',
    'quiz.reset': 'Effacer',
    'quiz.results.title': 'Tes meilleurs matchs',
    'quiz.results.empty': 'Aucune pièce ne match parfaitement. Essaie avec un budget plus large ou une catégorie différente.',
    'quiz.match': 'match',
    'quiz.reason.prefix': 'Pourquoi ?',

    'cart.title': 'Mon panier',
    'cart.subtitle': "Vérifie tes pièces avant d'envoyer ta commande sur Instagram.",
    'cart.empty.title': 'Ton panier est vide',
    'cart.empty.subtitle': 'Va faire un tour à la boutique pour ajouter des pièces.',
    'cart.empty.cta': 'Voir la boutique',
    'cart.summary': 'Récap',
    'cart.articles': 'Articles',
    'cart.subtotal': 'Sous-total',
    'cart.shipping': 'Livraison',
    'cart.total': 'Total',
    'cart.free_shipping_progress': 'Plus que {amount} pour la livraison gratuite 🎁',
    'cart.free_shipping_achieved': '🎁 Livraison GRATUITE débloquée !',
    'cart.choose_zone': '👇 Choisis ta zone pour finaliser',
    'cart.btn.casa': 'Commander à Casablanca',
    'cart.btn.hors_casa': 'Commander hors Casablanca',
    'cart.btn.empty_cart': 'Vider le panier',
    'cart.casa.detail': 'Livraison +20 DH · Cash à la livraison',
    'cart.hors.detail': "Livraison +50 DH · Paiement à l'avance",
    'cart.free.detail_casa': '🎁 Livraison GRATUITE · Cash à la livraison',
    'cart.free.detail_hors': "🎁 Livraison GRATUITE · Paiement à l'avance",
    'cart.confirm_empty': 'Vider le panier ?',
    'cart.dm_intro': "Le message sera copié et Instagram s'ouvrira ✨",
    'cart.preview_label': 'Aperçu du message DM (Casa)',

    'contact.title': 'Contact',
    'contact.subtitle': 'Pour commander, envoie-nous le nom ou la référence de la pièce en DM.',
    'contact.casa': 'Casablanca, Maroc',
    'contact.casa.note': 'Livraison sur tout le Maroc, retrait possible sur Casa.',
    'contact.form.title': 'Prépare ton message',
    'contact.form.subtitle': "Ce formulaire t'aide à formuler ton DM. Il s'ouvrira ensuite sur Instagram.",
    'contact.form.name': 'Ton nom',
    'contact.form.ig': 'Ton Instagram',
    'contact.form.message': 'Ton message (référence du produit, taille, etc.)',
    'contact.form.submit': 'Préparer mon message',
    'contact.form.ready': 'Ton message est prêt 👇',
    'contact.form.open_ig': 'Ouvrir Instagram pour envoyer',

    'shipping.title': 'Livraison & Paiement',
    'shipping.subtitle': 'Tout ce que tu dois savoir pour recevoir ta pièce Lhawta sans souci.',

    'trust.shipping.title': 'Livraison offerte dès 500 DH',
    'trust.shipping.subtitle': 'Expédition 48h partout au Maroc',
    'trust.payment.title': "Hors Casa : paiement à l'avance",
    'trust.payment.subtitle': 'Plusieurs modes de paiement',
    'trust.support.title': 'Service client 7j/7',
    'trust.support.subtitle': 'On répond vite en DM',

    'reviews.section_title': 'Laissons nos clients parler pour nous',
    'reviews.verified_by': 'Vérifié par',
    'reviews.based_on': '/5 sur',
    'reviews.reviews_word': 'avis',
    'reviews.cta.question': 'Tu as déjà commandé chez nous ?',
    'reviews.cta.button': '⭐ Laisser un avis',
    'reviews.modal.title': '⭐ Laisse ton avis sur Lhawta',
    'reviews.modal.subtitle': 'Ton avis sera publié instantanément sur le site ✨',
    'reviews.modal.name': 'Ton prénom *',
    'reviews.modal.city': 'Ta ville *',
    'reviews.modal.handle': 'Ton Instagram',
    'reviews.modal.optional': '(optionnel)',
    'reviews.modal.rating': 'Ta note *',
    'reviews.modal.review_title': 'Titre de ton avis *',
    'reviews.modal.message': 'Ton message *',
    'reviews.modal.item': 'Pièce achetée',
    'reviews.modal.cancel': 'Annuler',
    'reviews.modal.submit': '📤 Envoyer mon avis',
    'reviews.success.title': 'Merci pour ton avis !',
    'reviews.success.message': 'Ton avis est publié sur le site. Tu peux le voir dans la section "Ils nous font confiance".',
    'reviews.success.close': 'Fermer',

    'footer.tagline': 'Casablanca · Neuf & seconde main',
    'footer.rights': '© 2026 Lhawta. Tous droits réservés.',

    "contact.ig.title": "Instagram",
    "contact.ig.desc": "Le moyen le plus rapide pour réserver.",
    "contact.wa.title": "WhatsApp",
    "contact.wa.desc": "Bientôt disponible.",
    "contact.location.title": "Casablanca",
    "contact.location.country": "Maroc",
    "contact.location.note": "Livraison sur tout le Maroc, retrait possible sur Casa.",
    "contact.ph.name": "Ex: Yassine",
    "contact.ph.ig": "@ton_pseudo",
    "contact.ph.message": "Salam, je suis intéressé(e) par la pièce LHW-001...",
    "cart.preview_summary": "Aperçu du message DM (Casa)",
    "shipping.c1.title": "🎁 Livraison GRATUITE dès 500 DH",
    "shipping.c1.p1": "Tu fais une commande de <strong>500 DH ou plus</strong> ? La livraison est <strong>offerte</strong>, peu importe ta ville au Maroc.",
    "shipping.c1.hl": "✓ Casa ou hors Casa, dès que tu atteins 500 DH d'achats, on prend la livraison à notre charge.",
    "shipping.c1.note": "Le seuil est calculé sur le sous-total des articles, hors frais éventuels.",
    "shipping.c2.title": "⚡ Expédition rapide 48h",
    "shipping.c2.p1": "Une fois ta commande confirmée en DM, on prépare ta pièce et on l'expédie sous 48h partout au Maroc.",
    "shipping.c2.li1": "<strong>Casablanca :</strong> livraison en 24-48h, souvent le jour même",
    "shipping.c2.li2": "<strong>Rabat, Marrakech, Tanger :</strong> 48 à 72h",
    "shipping.c2.li3": "<strong>Autres villes :</strong> 3 à 5 jours ouvrables max",
    "shipping.c2.note": "Les délais peuvent varier les week-ends et jours fériés.",
    "shipping.c2.bonus": "🎁 <strong>Bonus :</strong> à partir de 500 DH d'achat, la livraison est offerte partout au Maroc.",
    "shipping.c3.title": "💳 Paiement à la livraison sur Casablanca",
    "shipping.c3.p1": "Tu es à Casa ? Tu peux régler <strong>en cash directement à la livraison</strong>. Pas besoin d'avancer un dirham.",
    "shipping.c3.hl": "✓ Tu vois ta pièce, tu vérifies, tu paies. Simple et safe.",
    "shipping.c3.p2": "On accepte aussi le virement bancaire ou le paiement par appli mobile (Cash Plus, WafaCash) si tu préfères.",
    "shipping.c4.title": "🏙️ Hors Casablanca : paiement à l'avance",
    "shipping.c4.p1": "Pour toute commande <strong>hors Casablanca</strong>, le paiement se fait à l'avance avant l'expédition. C'est la seule manière qu'on a de sécuriser l'envoi pour toi comme pour nous.",
    "shipping.c4.p2": "Modes de paiement acceptés :",
    "shipping.c4.li1": "Virement bancaire (RIB envoyé en DM)",
    "shipping.c4.li2": "Cash Plus / WafaCash",
    "shipping.c4.li3": "Paiement mobile (Inwi Money, Orange Money)",
    "shipping.c4.p3": "Dès qu'on reçoit le paiement, on expédie ta pièce dans les 48h.",
    "shipping.c5.title": "🤝 Service client 7j/7",
    "shipping.c5.p1": "On est là <strong>7 jours sur 7</strong> pour répondre à tes questions, te conseiller sur une taille, ou suivre ta commande.",
    "shipping.c5.p2": "Le meilleur moyen de nous joindre : <a href=\"https://www.instagram.com/lhawta.casablanca/\" target=\"_blank\" rel=\"noopener\">DM sur Instagram</a>. On répond généralement en moins d'une heure entre 10h et 22h.",
    "shipping.c6.title": "↩️ Retours & échanges",
    "shipping.c6.p1": "Comme nos pièces sont uniques (seconde main), les retours ne sont pas automatiques. Mais si la pièce reçue ne correspond pas à la description, contacte-nous dans les 24h après réception et on trouvera une solution.",
    "shipping.c6.note": "Pour éviter tout souci, n'hésite pas à demander des photos supplémentaires ou des précisions sur les mesures avant de commander.",
    "shipping.cta.title": "Une question avant de commander ?",
    "shipping.cta.subtitle": "Notre équipe te répond rapidement sur Instagram.",
    "shipping.cta.btn": "📩 Nous contacter",

    // ===== INTERNATIONAL =====
    "intl.welcome.title": "Commandes internationales",
    "intl.welcome.p1": "Lhawta expédie ses pièces partout dans le monde. Chaque commande internationale est traitée personnellement pour vous garantir la meilleure expérience.",
    "intl.welcome.highlight": "✓ Toutes les commandes hors Maroc sont confirmées en DM, avec un devis personnalisé selon votre pays.",
    "intl.shipping.title": "Expédition et délais",
    "intl.shipping.p1": "Une fois votre commande confirmée et le paiement reçu, nous préparons et expédions votre pièce sous 48h depuis Casablanca.",
    "intl.shipping.li1": "<strong>Europe</strong> (France, Belgique, Espagne, Allemagne, etc.) : 5 à 10 jours ouvrables",
    "intl.shipping.li2": "<strong>Amérique du Nord</strong> (Canada, États-Unis) : 7 à 14 jours ouvrables",
    "intl.shipping.li3": "<strong>Reste du monde</strong> : 10 à 21 jours ouvrables selon la destination",
    "intl.shipping.note": "Les délais peuvent varier selon les douanes locales. Un numéro de suivi vous est communiqué après expédition.",
    "intl.payment.title": "Paiement",
    "intl.payment.p1": "Pour toute commande internationale, le paiement se fait <strong>intégralement à l'avance</strong>. Deux méthodes acceptées :",
    "intl.payment.li1": "<strong>Virement bancaire international (SWIFT)</strong> — nous vous communiquons notre IBAN par DM",
    "intl.payment.li2": "<strong>Western Union</strong> — rapide et disponible dans la plupart des pays",
    "intl.payment.highlight": "✓ Dès la réception du paiement, votre pièce est expédiée dans les 48h.",
    "intl.payment.note": "Les frais bancaires éventuels (virement, conversion de devise) sont à la charge du client.",
    "intl.quote.title": "Devis personnalisé en DM",
    "intl.quote.p1": "Le coût final (pièce + livraison + éventuels frais de douane) vous est communiqué <strong>avant tout paiement</strong>. Aucune surprise.",
    "intl.quote.p2": "Pour obtenir votre devis, envoyez-nous un message Instagram avec :",
    "intl.quote.li1": "La référence de la ou des pièces qui vous intéressent",
    "intl.quote.li2": "Votre pays et ville de livraison",
    "intl.quote.li3": "Votre taille (au cas où on doit confirmer la disponibilité)",
    "intl.quote.p3": "Notre équipe vous répond généralement sous 1h entre 10h et 22h (heure Maroc).",
    "intl.support.title": "Service client 7j/7",
    "intl.support.p1": "Nous sommes disponibles <strong>7 jours sur 7</strong> pour répondre à vos questions, vous conseiller sur une taille, ou faire le suivi de votre commande.",
    "intl.support.p2": "Le meilleur moyen de nous joindre : <a href=\"https://www.instagram.com/lhawta.casablanca/\" target=\"_blank\" rel=\"noopener\">DM sur Instagram</a>. Réponse rapide entre 10h et 22h (heure Maroc).",
    "intl.customs.title": "Douanes et taxes",
    "intl.customs.p1": "Les éventuels frais de douane et taxes d'importation sont à la charge du destinataire, conformément aux réglementations locales.",
    "intl.customs.p2": "Pour les commandes vers l'Europe, ces frais sont généralement négligeables pour les vêtements de seconde main. Nous restons disponibles pour vous renseigner sur les usages dans votre pays.",
    "intl.returns.title": "Retours et échanges",
    "intl.returns.p1": "Nos pièces étant uniques (seconde main), les retours ne sont pas systématiques. Toutefois, si la pièce reçue ne correspond pas à la description, contactez-nous dans les 48h après réception et nous trouverons une solution adaptée.",
    "intl.returns.note": "Pour éviter tout souci, n'hésitez pas à demander des photos supplémentaires ou des précisions sur les mesures avant de commander.",
    "intl.cta.title": "Prêt à commander ?",
    "intl.cta.subtitle": "Notre équipe vous répond rapidement sur Instagram avec un devis personnalisé.",
    "intl.cta.btn": "📩 Demander un devis",

    // ===== CART INTERNATIONAL =====
    "cart.intl.shipping_title": "Livraison internationale",
    "cart.intl.shipping_note": "Calculée sur devis personnalisé selon votre pays. Aucune surprise.",
    "cart.intl.choose_cta": "👇 Envoyez-nous votre panier pour recevoir un devis",
    "cart.intl.btn_title": "Demander un devis",
    "cart.intl.btn_detail": "Réponse rapide en DM avec total + livraison",
    "cart.intl.btn_subline": "Paiement : virement ou Western Union",
    "cart.intl.dm_intro": "Le message sera copié et Instagram s'ouvrira ✨",
    "cart.intl.preview_label": "Aperçu du message Instagram",

    // ===== AUDIT FILL (toasts, aria, quiz, modal, dm) =====
    "shop.label.size": "Taille",
    "aria.remove": "Retirer",
    "aria.close": "Fermer",
    "aria.previous": "Précédent",
    "aria.next": "Suivant",
    "aria.filters": "Filtres",
    "aria.menu": "Menu",
    "aria.cart": "Voir le panier",
    "aria.nav": "Navigation principale",
    "toast.sold": "Cette pièce est déjà vendue 😢",
    "toast.already_in_cart": "Cette pièce est déjà dans ton panier ✓",
    "toast.added": "✓ {item} ajouté au panier",
    "toast.empty": "Ton panier est vide 🛒",
    "toast.invalid_zone": "Zone de livraison invalide",
    "toast.copied": "✓ Message copié ! Colle-le dans le DM",
    "quiz.reason.category": "catégorie correspondante",
    "quiz.reason.size": "taille parfaite",
    "quiz.reason.budget": "budget respecté",
    "quiz.reason.style": "style assorti",
    "quiz.reason.occasion": "adapté à l'occasion",
    "quiz.reason.fallback": "Ce produit est dans ta sélection.",
    "quiz.results.summary": "{count} pièce(s) qui match(ent) ton profil.",
    "quiz.budget.option100": "100 DH",
    "quiz.budget.option200": "200 DH",
    "quiz.budget.option300": "300 DH",
    "quiz.budget.any": "Peu importe",
    "quiz.size.unknown": "Je ne sais pas",
    "quiz.opt.q1.daily": "Quotidien",
    "quiz.opt.q1.work": "Travail / stage",
    "quiz.opt.q1.school": "École / fac",
    "quiz.opt.q1.outing": "Sortie",
    "quiz.opt.q1.event": "Événement",
    "quiz.opt.q2.vintage": "Vintage",
    "quiz.opt.q2.streetwear": "Streetwear",
    "quiz.opt.q2.minimal": "Minimal",
    "quiz.opt.q2.chic_casual": "Chic casual",
    "quiz.opt.q2.oversize": "Oversize",
    "quiz.opt.q3.shirt": "Chemise",
    "quiz.opt.q3.tshirt": "T-shirt",
    "quiz.opt.q3.jacket": "Blouson",
    "quiz.opt.q3.sweater": "Pull",
    "quiz.opt.q3.pants": "Pantalon",
    "quiz.opt.q3.any": "Peu importe",
    "cat.shirt": "Chemise",
    "cat.tshirt": "T-shirt",
    "cat.jacket": "Blouson",
    "cat.sweater": "Pull",
    "cat.pants": "Pantalon",
    "cat.coat": "Veste",
    "condition.new": "Neuf",
    "condition.like_new": "Comme neuf",
    "condition.very_good": "Très bon état",
    "condition.good": "Bon état",
    "modal.order.title_casa": "Commande à Casablanca",
    "modal.order.title_hors": "Commande hors Casablanca",
    "modal.order.step1": "Copie",
    "modal.order.step2": "Ouvre",
    "modal.order.step3": "Colle",
    "modal.order.copy_btn": "📋 Copier le message",
    "modal.order.open_ig": "📩 Ouvrir Instagram",
    "modal.order.hint": "⚠️ Instagram n'autorise pas l'envoi automatique. Copie puis colle dans le DM.",
    "dm.ma.intro": "Salam Lhawta 👋",
    "dm.ma.want_order": "Je veux commander :",
    "dm.ma.subtotal": "Sous-total",
    "dm.ma.shipping": "Livraison",
    "dm.ma.total": "TOTAL",
    "dm.ma.zone": "Ma zone",
    "dm.ma.payment": "Mode de paiement",
    "dm.ma.city": "Ma ville exacte : (à préciser)",
    "dm.ma.thanks": "Merci !",
    "dm.ma.free_shipping": "GRATUITE 🎁 (commande > 500 DH)",
    "shipping.zone.casa": "Casablanca",
    "shipping.zone.hors_casa": "Hors Casablanca",
    "shipping.payment.cash": "Cash à la livraison",
    "shipping.payment.advance": "Virement / Cash Plus / WafaCash à l'avance",
    "contact.dm.intro": "Salam Lhawta 👋",
    "contact.dm.iam": "Je suis {name} (Instagram: {ig})",
    "contact.dm.no_message": "(aucun message)",
    "contact.dm.thanks": "Merci !",
    "reviews.submitting": "Publication en cours...",
    "reviews.error.submit": "Erreur : impossible de publier ton avis. Réessaie plus tard.",
    "reviews.error.network": "Erreur réseau. Vérifie ta connexion et réessaie.",

    // ===== FOOTER LABELS + META + TRUST INTL + ICON =====
    "footer.lang_label": "Langue :",
    "footer.country_label": "Pays :",
    "meta.index.title": "Lhawta | الهَوتة — Vêtements neufs & seconde main à Casablanca",
    "meta.index.desc": "Lhawta — Pièces neuves & seconde main, sélectionnées à Casablanca. Streetwear, vintage, chemises, blousons, t-shirts. Commande par DM Instagram.",
    "meta.shop.title": "Boutique — Lhawta | الهَوتة",
    "meta.shop.desc": "Toute la boutique Lhawta : chemises, t-shirts, blousons, pulls, pantalons. Neuf & seconde main à Casablanca.",
    "meta.quiz.title": "Trouve ta pièce — Lhawta | الهَوتة",
    "meta.quiz.desc": "Réponds au quiz Lhawta et trouve la pièce qui te correspond. Sélection personnalisée à Casablanca.",
    "meta.contact.title": "Contact — Lhawta | الهَوتة",
    "meta.contact.desc": "Contacte Lhawta sur Instagram ou WhatsApp pour commander une pièce. Casablanca.",
    "meta.cart.title": "Mon panier — Lhawta | الهَوتة",
    "meta.cart.desc": "Ton panier Lhawta : vérifie tes pièces avant d'envoyer ta commande sur Instagram.",
    "meta.shipping.title": "Livraison & Paiement — Lhawta | Casablanca & Maroc",
    "meta.shipping.desc": "Conditions de livraison Lhawta : expédition 48h partout au Maroc, paiement à la livraison sur Casablanca.",
    "trust.intl.shipping.title": "Expédition mondiale",
    "trust.intl.shipping.subtitle": "Devis en 48h, expédition sous 1-3 semaines",
    "trust.intl.payment.title": "Paiement sécurisé",
    "trust.intl.payment.subtitle": "Virement bancaire ou Western Union",
    "trust.intl.support.title": "Service client 7j/7",
    "trust.intl.support.subtitle": "Réponse rapide en DM Instagram",
    "home.why.f3.icon": "DH",

    'banner.detected': 'On a détecté que tu es en {country}',
    'banner.keep': 'Garder',
    'banner.change': 'Changer'
  },

  /* ========== FRANÇAIS NEUTRALISÉ ========== */
  'fr': {
    'nav.home': 'Accueil',
    'nav.shop': 'Boutique',
    'nav.find': 'Trouver ma pièce',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.shipping': 'Livraison',
    'nav.instagram': 'Instagram',

    'hero.title': "Que de l'authentique",
    'hero.subtitle': 'Pièces neuves & seconde main, sélectionnées à Casablanca.',
    'hero.cta.shop': 'Voir la boutique',
    'hero.cta.find': 'Trouver ma pièce',

    'home.new.title': 'Nouveautés',
    'home.new.subtitle': 'Les dernières pièces ajoutées à la sélection.',
    'home.new.cta': 'Voir toute la boutique',
    'home.why.title': 'Pourquoi Lhawta ?',
    'home.why.f1.title': 'Pièces authentiques',
    'home.why.f1.desc': '100% original. Pas de contrefaçons.',
    'home.why.f2.title': 'Sélection rigoureuse',
    'home.why.f2.desc': 'Chaque pièce est triée et inspectée à la main.',
    'home.why.f3.title': 'Prix accessibles',
    'home.why.f3.desc': 'Du style de qualité à des tarifs honnêtes.',
    'home.why.f4.title': 'Commande rapide',
    'home.why.f4.desc': "Un message Instagram et c'est réservé.",
    'home.cta.title': 'Vous souhaitez réserver une pièce ?',
    'home.cta.subtitle': 'Envoyez-nous un message sur Instagram avec la référence du produit.',
    'home.cta.btn': 'Message Instagram',

    'shop.title': 'Boutique',
    'shop.subtitle': 'Toute la sélection Lhawta. Filtrez selon votre style et votre budget.',
    'shop.filters': 'Filtres',
    'shop.filter.category': 'Catégorie',
    'shop.filter.size': 'Taille',
    'shop.filter.budget': 'Budget',
    'shop.filter.status': 'Disponibilité',
    'shop.filter.all': 'Toutes',
    'shop.filter.reset': 'Réinitialiser',
    'shop.results.count': 'pièce(s) trouvée(s)',
    'shop.empty': "Aucun produit ne correspond à vos filtres. Essayez d'élargir votre recherche.",
    'shop.badge.available': 'Disponible',
    'shop.badge.sold': 'Vendu',
    'shop.btn.addcart': '🛒 Ajouter au panier',
    'shop.btn.dm': 'ou message direct',
    'shop.btn.unavailable': 'Plus disponible',
    'shop.promo': "🎁 Livraison OFFERTE à partir de 500 DH d'achat — international",

    'quiz.title': 'Trouvez votre pièce',
    'quiz.subtitle': 'Répondez à 5 questions rapides. Nous vous proposons les meilleurs matchs.',
    'quiz.q1': 'Pour quelle occasion cherchez-vous une pièce ?',
    'quiz.q2': 'Quel style préférez-vous ?',
    'quiz.q3': 'Quelle catégorie ?',
    'quiz.q4': 'Quelle taille ?',
    'quiz.q5': 'Budget maximum ?',
    'quiz.submit': 'Voir mes résultats',
    'quiz.reset': 'Effacer',
    'quiz.results.title': 'Vos meilleurs matchs',
    'quiz.results.empty': 'Aucune pièce ne correspond parfaitement. Essayez avec un budget plus large ou une catégorie différente.',
    'quiz.match': 'match',
    'quiz.reason.prefix': 'Pourquoi ?',

    'cart.title': 'Mon panier',
    'cart.subtitle': "Vérifiez vos pièces avant d'envoyer votre commande sur Instagram.",
    'cart.empty.title': 'Votre panier est vide',
    'cart.empty.subtitle': 'Découvrez la boutique pour ajouter des pièces.',
    'cart.empty.cta': 'Voir la boutique',
    'cart.summary': 'Récapitulatif',
    'cart.articles': 'Articles',
    'cart.subtotal': 'Sous-total',
    'cart.shipping': 'Livraison',
    'cart.total': 'Total',
    'cart.free_shipping_progress': 'Encore {amount} pour la livraison gratuite 🎁',
    'cart.free_shipping_achieved': '🎁 Livraison GRATUITE débloquée !',
    'cart.choose_zone': '👇 Choisissez votre zone pour finaliser',
    'cart.btn.casa': 'Commander à Casablanca',
    'cart.btn.hors_casa': 'Commander hors Casablanca',
    'cart.btn.empty_cart': 'Vider le panier',
    'cart.casa.detail': 'Livraison +20 DH · Cash à la livraison',
    'cart.hors.detail': "Livraison +50 DH · Paiement à l'avance",
    'cart.free.detail_casa': '🎁 Livraison GRATUITE · Cash à la livraison',
    'cart.free.detail_hors': "🎁 Livraison GRATUITE · Paiement à l'avance",
    'cart.confirm_empty': 'Vider le panier ?',
    'cart.dm_intro': "Le message sera copié et Instagram s'ouvrira ✨",
    'cart.preview_label': 'Aperçu du message Instagram (Casablanca)',

    'contact.title': 'Contact',
    'contact.subtitle': 'Pour commander, envoyez-nous le nom ou la référence de la pièce par message Instagram.',
    'contact.casa': 'Casablanca, Maroc',
    'contact.casa.note': "Livraison dans tout le Maroc et à l'international.",
    'contact.form.title': 'Préparez votre message',
    'contact.form.subtitle': "Ce formulaire vous aide à formuler votre message. Il s'ouvrira ensuite sur Instagram.",
    'contact.form.name': 'Votre nom',
    'contact.form.ig': 'Votre Instagram',
    'contact.form.message': 'Votre message (référence du produit, taille, etc.)',
    'contact.form.submit': 'Préparer mon message',
    'contact.form.ready': 'Votre message est prêt 👇',
    'contact.form.open_ig': 'Ouvrir Instagram pour envoyer',

    'shipping.title': 'Livraison & Paiement',
    'shipping.subtitle': 'Tout savoir pour recevoir votre pièce Lhawta en toute sérénité.',

    'trust.shipping.title': 'Livraison offerte dès 500 DH',
    'trust.shipping.subtitle': 'Expédition sous 48h partout',
    'trust.payment.title': 'Paiement sécurisé',
    'trust.payment.subtitle': 'Plusieurs modes disponibles',
    'trust.support.title': 'Service client 7j/7',
    'trust.support.subtitle': 'Nous répondons rapidement',

    'reviews.section_title': 'Laissons nos clients parler pour nous',
    'reviews.verified_by': 'Vérifié par',
    'reviews.based_on': '/5 sur',
    'reviews.reviews_word': 'avis',
    'reviews.cta.question': 'Vous avez déjà commandé chez nous ?',
    'reviews.cta.button': '⭐ Laisser un avis',
    'reviews.modal.title': '⭐ Laissez votre avis sur Lhawta',
    'reviews.modal.subtitle': 'Votre avis sera publié instantanément sur le site ✨',
    'reviews.modal.name': 'Votre prénom *',
    'reviews.modal.city': 'Votre ville *',
    'reviews.modal.handle': 'Votre Instagram',
    'reviews.modal.optional': '(optionnel)',
    'reviews.modal.rating': 'Votre note *',
    'reviews.modal.review_title': 'Titre de votre avis *',
    'reviews.modal.message': 'Votre message *',
    'reviews.modal.item': 'Pièce achetée',
    'reviews.modal.cancel': 'Annuler',
    'reviews.modal.submit': '📤 Envoyer mon avis',
    'reviews.success.title': 'Merci pour votre avis !',
    'reviews.success.message': 'Votre avis est publié sur le site. Vous pouvez le voir dans la section "Ils nous font confiance".',
    'reviews.success.close': 'Fermer',

    'footer.tagline': 'Casablanca · Neuf & seconde main',
    'footer.rights': '© 2026 Lhawta. Tous droits réservés.',

    "contact.ig.title": "Instagram",
    "contact.ig.desc": "Le moyen le plus rapide pour réserver.",
    "contact.wa.title": "WhatsApp",
    "contact.wa.desc": "Bientôt disponible.",
    "contact.location.title": "Casablanca",
    "contact.location.country": "Maroc",
    "contact.location.note": "Livraison dans tout le Maroc et à l'international.",
    "contact.ph.name": "Ex : Marie",
    "contact.ph.ig": "@votre_pseudo",
    "contact.ph.message": "Bonjour, je suis intéressé(e) par la pièce LHW-001...",
    "cart.preview_summary": "Aperçu du message Instagram (Casablanca)",
    "shipping.c1.title": "🎁 Livraison GRATUITE dès 500 DH",
    "shipping.c1.p1": "Vous passez une commande de <strong>500 DH ou plus</strong> ? La livraison est <strong>offerte</strong>, peu importe la destination au Maroc.",
    "shipping.c1.hl": "✓ Casa ou hors Casa, dès 500 DH d'achats, la livraison est à notre charge.",
    "shipping.c1.note": "Le seuil est calculé sur le sous-total des articles, hors frais éventuels.",
    "shipping.c2.title": "⚡ Expédition rapide en 48h",
    "shipping.c2.p1": "Une fois la commande confirmée en message, nous préparons et expédions votre pièce sous 48h.",
    "shipping.c2.li1": "<strong>Casablanca :</strong> livraison en 24-48h, souvent le jour même",
    "shipping.c2.li2": "<strong>Rabat, Marrakech, Tanger :</strong> 48 à 72h",
    "shipping.c2.li3": "<strong>Autres villes :</strong> 3 à 5 jours ouvrables maximum",
    "shipping.c2.note": "Les délais peuvent varier les week-ends et jours fériés.",
    "shipping.c2.bonus": "🎁 <strong>Bonus :</strong> à partir de 500 DH d'achat, la livraison est offerte partout au Maroc.",
    "shipping.c3.title": "💳 Paiement à la livraison sur Casablanca",
    "shipping.c3.p1": "Sur Casablanca, vous pouvez régler <strong>en espèces directement à la livraison</strong>. Pas besoin d'avancer un centime.",
    "shipping.c3.hl": "✓ Vous voyez votre pièce, vous vérifiez, vous payez. Simple et rassurant.",
    "shipping.c3.p2": "Nous acceptons aussi le virement bancaire et les applis mobiles (Cash Plus, WafaCash) si vous préférez.",
    "shipping.c4.title": "🏙️ Hors Casablanca : paiement à l'avance",
    "shipping.c4.p1": "Pour toute commande <strong>hors Casablanca</strong>, le paiement se fait à l'avance avant l'expédition. C'est la seule manière de sécuriser l'envoi pour vous comme pour nous.",
    "shipping.c4.p2": "Modes de paiement acceptés :",
    "shipping.c4.li1": "Virement bancaire (RIB envoyé en message)",
    "shipping.c4.li2": "Cash Plus / WafaCash",
    "shipping.c4.li3": "Paiement mobile (Inwi Money, Orange Money)",
    "shipping.c4.p3": "Dès réception du paiement, nous expédions votre pièce sous 48h.",
    "shipping.c5.title": "🤝 Service client 7j/7",
    "shipping.c5.p1": "Nous sommes disponibles <strong>7 jours sur 7</strong> pour répondre à vos questions, vous conseiller sur une taille ou suivre votre commande.",
    "shipping.c5.p2": "Le meilleur moyen de nous joindre : <a href=\"https://www.instagram.com/lhawta.casablanca/\" target=\"_blank\" rel=\"noopener\">message Instagram</a>. Nous répondons généralement en moins d'une heure entre 10h et 22h.",
    "shipping.c6.title": "↩️ Retours et échanges",
    "shipping.c6.p1": "Nos pièces étant souvent uniques (seconde main), les retours ne sont pas automatiques. Si la pièce reçue ne correspond pas à la description, contactez-nous dans les 24h après réception et nous trouverons une solution.",
    "shipping.c6.note": "Pour éviter tout souci, n'hésitez pas à demander des photos supplémentaires ou des précisions sur les mesures avant de commander.",
    "shipping.cta.title": "Une question avant de commander ?",
    "shipping.cta.subtitle": "Notre équipe vous répond rapidement sur Instagram.",
    "shipping.cta.btn": "📩 Nous contacter",

    // ===== INTERNATIONAL =====
    "intl.welcome.title": "Commandes internationales",
    "intl.welcome.p1": "Lhawta expédie ses pièces partout dans le monde. Chaque commande internationale est traitée personnellement pour vous garantir la meilleure expérience.",
    "intl.welcome.highlight": "✓ Toutes les commandes hors Maroc sont confirmées en message direct Instagram, avec un devis personnalisé selon votre pays.",
    "intl.shipping.title": "Expédition et délais",
    "intl.shipping.p1": "Une fois votre commande confirmée et le paiement reçu, nous préparons et expédions votre pièce sous 48h depuis Casablanca.",
    "intl.shipping.li1": "<strong>Europe</strong> (France, Belgique, Espagne, Allemagne, etc.) : 5 à 10 jours ouvrables",
    "intl.shipping.li2": "<strong>Amérique du Nord</strong> (Canada, États-Unis) : 7 à 14 jours ouvrables",
    "intl.shipping.li3": "<strong>Reste du monde</strong> : 10 à 21 jours ouvrables selon la destination",
    "intl.shipping.note": "Les délais peuvent varier selon les douanes locales. Un numéro de suivi vous est communiqué après expédition.",
    "intl.payment.title": "Paiement",
    "intl.payment.p1": "Pour toute commande internationale, le paiement se fait <strong>intégralement à l'avance</strong>. Deux méthodes acceptées :",
    "intl.payment.li1": "<strong>Virement bancaire international (SWIFT)</strong> — nous vous communiquons notre IBAN par message",
    "intl.payment.li2": "<strong>Western Union</strong> — rapide et disponible dans la plupart des pays",
    "intl.payment.highlight": "✓ Dès la réception du paiement, votre pièce est expédiée dans les 48h.",
    "intl.payment.note": "Les frais bancaires éventuels (virement, conversion de devise) sont à la charge du client.",
    "intl.quote.title": "Devis personnalisé sur demande",
    "intl.quote.p1": "Le coût final (pièce + livraison + éventuels frais de douane) vous est communiqué <strong>avant tout paiement</strong>. Aucune surprise.",
    "intl.quote.p2": "Pour obtenir votre devis, envoyez-nous un message Instagram avec :",
    "intl.quote.li1": "La référence de la ou des pièces qui vous intéressent",
    "intl.quote.li2": "Votre pays et ville de livraison",
    "intl.quote.li3": "Votre taille (au cas où nous devons confirmer la disponibilité)",
    "intl.quote.p3": "Notre équipe vous répond généralement sous 1h entre 10h et 22h (heure Maroc, GMT+1).",
    "intl.support.title": "Service client 7j/7",
    "intl.support.p1": "Nous sommes disponibles <strong>7 jours sur 7</strong> pour répondre à vos questions, vous conseiller sur une taille, ou faire le suivi de votre commande.",
    "intl.support.p2": "Le meilleur moyen de nous joindre : <a href=\"https://www.instagram.com/lhawta.casablanca/\" target=\"_blank\" rel=\"noopener\">message Instagram</a>. Réponse rapide entre 10h et 22h (heure Maroc).",
    "intl.customs.title": "Douanes et taxes",
    "intl.customs.p1": "Les éventuels frais de douane et taxes d'importation sont à la charge du destinataire, conformément aux réglementations locales.",
    "intl.customs.p2": "Pour les commandes vers l'Europe, ces frais sont généralement négligeables pour les vêtements de seconde main. Nous restons disponibles pour vous renseigner sur les usages dans votre pays.",
    "intl.returns.title": "Retours et échanges",
    "intl.returns.p1": "Nos pièces étant uniques (seconde main), les retours ne sont pas systématiques. Toutefois, si la pièce reçue ne correspond pas à la description, contactez-nous dans les 48h après réception et nous trouverons une solution adaptée.",
    "intl.returns.note": "Pour éviter tout souci, n'hésitez pas à demander des photos supplémentaires ou des précisions sur les mesures avant de commander.",
    "intl.cta.title": "Prêt à commander ?",
    "intl.cta.subtitle": "Notre équipe vous répond rapidement sur Instagram avec un devis personnalisé.",
    "intl.cta.btn": "📩 Demander un devis",

    // ===== CART INTERNATIONAL =====
    "cart.intl.shipping_title": "Livraison internationale",
    "cart.intl.shipping_note": "Calculée sur devis personnalisé selon votre pays. Aucune surprise.",
    "cart.intl.choose_cta": "👇 Envoyez-nous votre panier pour recevoir un devis",
    "cart.intl.btn_title": "Demander un devis",
    "cart.intl.btn_detail": "Réponse rapide en DM avec total + livraison",
    "cart.intl.btn_subline": "Paiement : virement ou Western Union",
    "cart.intl.dm_intro": "Le message sera copié et Instagram s'ouvrira ✨",
    "cart.intl.preview_label": "Aperçu du message Instagram",

    // ===== AUDIT FILL (toasts, aria, quiz, modal, dm) =====
    "shop.label.size": "Taille",
    "aria.remove": "Retirer",
    "aria.close": "Fermer",
    "aria.previous": "Précédent",
    "aria.next": "Suivant",
    "aria.filters": "Filtres",
    "aria.menu": "Menu",
    "aria.cart": "Voir le panier",
    "aria.nav": "Navigation principale",
    "toast.sold": "Cette pièce a déjà été vendue 😢",
    "toast.already_in_cart": "Cette pièce est déjà dans votre panier ✓",
    "toast.added": "✓ {item} ajouté au panier",
    "toast.empty": "Votre panier est vide 🛒",
    "toast.invalid_zone": "Zone de livraison invalide",
    "toast.copied": "✓ Message copié ! Collez-le dans le message Instagram",
    "quiz.reason.category": "catégorie correspondante",
    "quiz.reason.size": "taille parfaite",
    "quiz.reason.budget": "budget respecté",
    "quiz.reason.style": "style correspondant",
    "quiz.reason.occasion": "adapté à l'occasion",
    "quiz.reason.fallback": "Cette pièce fait partie de la sélection.",
    "quiz.results.summary": "{count} pièce(s) correspondent à votre profil.",
    "quiz.budget.option100": "100 DH",
    "quiz.budget.option200": "200 DH",
    "quiz.budget.option300": "300 DH",
    "quiz.budget.any": "Peu importe",
    "quiz.size.unknown": "Je ne sais pas",
    "quiz.opt.q1.daily": "Quotidien",
    "quiz.opt.q1.work": "Travail / stage",
    "quiz.opt.q1.school": "École / université",
    "quiz.opt.q1.outing": "Sortie",
    "quiz.opt.q1.event": "Événement",
    "quiz.opt.q2.vintage": "Vintage",
    "quiz.opt.q2.streetwear": "Streetwear",
    "quiz.opt.q2.minimal": "Minimaliste",
    "quiz.opt.q2.chic_casual": "Chic décontracté",
    "quiz.opt.q2.oversize": "Oversize",
    "quiz.opt.q3.shirt": "Chemise",
    "quiz.opt.q3.tshirt": "T-shirt",
    "quiz.opt.q3.jacket": "Blouson",
    "quiz.opt.q3.sweater": "Pull",
    "quiz.opt.q3.pants": "Pantalon",
    "quiz.opt.q3.any": "Peu importe",
    "cat.shirt": "Chemise",
    "cat.tshirt": "T-shirt",
    "cat.jacket": "Blouson",
    "cat.sweater": "Pull",
    "cat.pants": "Pantalon",
    "cat.coat": "Veste",
    "condition.new": "Neuf",
    "condition.like_new": "Comme neuf",
    "condition.very_good": "Très bon état",
    "condition.good": "Bon état",
    "modal.order.title_casa": "Commande pour Casablanca",
    "modal.order.title_hors": "Commande hors Casablanca",
    "modal.order.step1": "Copiez",
    "modal.order.step2": "Ouvrez",
    "modal.order.step3": "Collez",
    "modal.order.copy_btn": "📋 Copier le message",
    "modal.order.open_ig": "📩 Ouvrir Instagram",
    "modal.order.hint": "⚠️ Instagram n'autorise pas l'envoi automatique. Copiez puis collez dans le message direct.",
    "dm.ma.intro": "Bonjour Lhawta 👋",
    "dm.ma.want_order": "Je souhaite commander :",
    "dm.ma.subtotal": "Sous-total",
    "dm.ma.shipping": "Livraison",
    "dm.ma.total": "TOTAL",
    "dm.ma.zone": "Ma zone",
    "dm.ma.payment": "Mode de paiement",
    "dm.ma.city": "Ma ville exacte : (à préciser)",
    "dm.ma.thanks": "Merci !",
    "dm.ma.free_shipping": "OFFERTE 🎁 (commande > 500 DH)",
    "shipping.zone.casa": "Casablanca",
    "shipping.zone.hors_casa": "Hors Casablanca",
    "shipping.payment.cash": "Paiement à la livraison",
    "shipping.payment.advance": "Paiement à l'avance (virement / Cash Plus / WafaCash)",
    "contact.dm.intro": "Bonjour Lhawta 👋",
    "contact.dm.iam": "Je suis {name} (Instagram : {ig})",
    "contact.dm.no_message": "(aucun message)",
    "contact.dm.thanks": "Merci !",
    "reviews.submitting": "Publication en cours...",
    "reviews.error.submit": "Erreur : impossible de publier votre avis. Réessayez plus tard.",
    "reviews.error.network": "Erreur réseau. Vérifiez votre connexion et réessayez.",

    // ===== FOOTER LABELS + META + TRUST INTL + ICON =====
    "footer.lang_label": "Langue :",
    "footer.country_label": "Pays :",
    "meta.index.title": "Lhawta | الهَوتة — Vêtements neufs & seconde main",
    "meta.index.desc": "Lhawta — Pièces neuves et seconde main, sélectionnées à Casablanca. Streetwear, vintage, chemises, blousons, t-shirts. Commande par message Instagram.",
    "meta.shop.title": "Boutique — Lhawta",
    "meta.shop.desc": "Toute la boutique Lhawta : chemises, t-shirts, blousons, pulls, pantalons. Neuf et seconde main, expédition internationale.",
    "meta.quiz.title": "Trouvez votre pièce — Lhawta",
    "meta.quiz.desc": "Répondez au quiz Lhawta et trouvez la pièce qui vous correspond. Sélection personnalisée.",
    "meta.contact.title": "Contact — Lhawta",
    "meta.contact.desc": "Contactez Lhawta sur Instagram pour commander une pièce. Expédition internationale.",
    "meta.cart.title": "Mon panier — Lhawta",
    "meta.cart.desc": "Votre panier Lhawta : vérifiez vos pièces avant d'envoyer votre commande.",
    "meta.shipping.title": "Livraison & Paiement — Lhawta",
    "meta.shipping.desc": "Conditions de livraison Lhawta : expédition internationale, paiement sécurisé, service client 7j/7.",
    "trust.intl.shipping.title": "Expédition mondiale",
    "trust.intl.shipping.subtitle": "Devis en 48h, expédition sous 1-3 semaines",
    "trust.intl.payment.title": "Paiement sécurisé",
    "trust.intl.payment.subtitle": "Virement bancaire ou Western Union",
    "trust.intl.support.title": "Service client 7j/7",
    "trust.intl.support.subtitle": "Réponse rapide en message Instagram",
    "home.why.f3.icon": "€",

    'banner.detected': 'Nous avons détecté que vous êtes en {country}',
    'banner.keep': 'Garder',
    'banner.change': 'Changer'
  },

  /* ========== ESPAGNOL ========== */
  'es': {
    'nav.home': 'Inicio',
    'nav.shop': 'Tienda',
    'nav.find': 'Encuentra tu pieza',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.shipping': 'Envío',
    'nav.instagram': 'Instagram',

    'hero.title': 'Solo ropa auténtica',
    'hero.subtitle': 'Piezas nuevas y de segunda mano, seleccionadas en Casablanca.',
    'hero.cta.shop': 'Ver la tienda',
    'hero.cta.find': 'Encuentra tu pieza',

    'home.new.title': 'Novedades',
    'home.new.subtitle': 'Las últimas piezas añadidas a la selección.',
    'home.new.cta': 'Ver toda la tienda',
    'home.why.title': '¿Por qué Lhawta?',
    'home.why.f1.title': 'Piezas auténticas',
    'home.why.f1.desc': '100% original. Sin falsificaciones.',
    'home.why.f2.title': 'Selección cuidada',
    'home.why.f2.desc': 'Cada pieza se revisa e inspecciona a mano.',
    'home.why.f3.title': 'Precios accesibles',
    'home.why.f3.desc': 'Estilo de calidad a precios justos.',
    'home.why.f4.title': 'Pedido rápido por DM',
    'home.why.f4.desc': 'Un mensaje de Instagram y queda reservado.',
    'home.cta.title': '¿Quieres reservar una pieza?',
    'home.cta.subtitle': 'Mándanos un DM en Instagram con la referencia del producto.',
    'home.cta.btn': 'DM en Instagram',

    'shop.title': 'Tienda',
    'shop.subtitle': 'Toda la selección Lhawta. Filtra por estilo y presupuesto.',
    'shop.filters': 'Filtros',
    'shop.filter.category': 'Categoría',
    'shop.filter.size': 'Talla',
    'shop.filter.budget': 'Presupuesto',
    'shop.filter.status': 'Disponibilidad',
    'shop.filter.all': 'Todas',
    'shop.filter.reset': 'Restablecer',
    'shop.results.count': 'pieza(s) encontrada(s)',
    'shop.empty': 'Ningún producto coincide con tus filtros. Intenta ampliar tu búsqueda.',
    'shop.badge.available': 'Disponible',
    'shop.badge.sold': 'Vendido',
    'shop.btn.addcart': '🛒 Añadir al carrito',
    'shop.btn.dm': 'o DM directo',
    'shop.btn.unavailable': 'Ya no disponible',
    'shop.promo': '🎁 Envío GRATIS a partir de 500 DH de compra — internacional',

    'quiz.title': 'Encuentra tu pieza',
    'quiz.subtitle': 'Responde a 5 preguntas rápidas. Te mostramos las mejores coincidencias.',
    'quiz.q1': '¿Para qué ocasión buscas una pieza?',
    'quiz.q2': '¿Qué estilo prefieres?',
    'quiz.q3': '¿Qué categoría?',
    'quiz.q4': '¿Qué talla?',
    'quiz.q5': '¿Presupuesto máximo?',
    'quiz.submit': 'Ver mis resultados',
    'quiz.reset': 'Borrar',
    'quiz.results.title': 'Tus mejores coincidencias',
    'quiz.results.empty': 'Ninguna pieza coincide perfectamente. Prueba con un presupuesto mayor o una categoría diferente.',
    'quiz.match': 'match',
    'quiz.reason.prefix': '¿Por qué?',

    'cart.title': 'Mi carrito',
    'cart.subtitle': 'Revisa tus piezas antes de enviar el pedido por Instagram.',
    'cart.empty.title': 'Tu carrito está vacío',
    'cart.empty.subtitle': 'Echa un vistazo a la tienda para añadir piezas.',
    'cart.empty.cta': 'Ver la tienda',
    'cart.summary': 'Resumen',
    'cart.articles': 'Artículos',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Envío',
    'cart.total': 'Total',
    'cart.free_shipping_progress': 'Faltan {amount} para el envío gratuito 🎁',
    'cart.free_shipping_achieved': '🎁 ¡Envío GRATIS desbloqueado!',
    'cart.choose_zone': '👇 Elige tu zona para finalizar',
    'cart.btn.casa': 'Pedir a Casablanca',
    'cart.btn.hors_casa': 'Pedir fuera de Casablanca',
    'cart.btn.empty_cart': 'Vaciar el carrito',
    'cart.casa.detail': 'Envío +20 DH · Pago contra reembolso',
    'cart.hors.detail': 'Envío +50 DH · Pago por adelantado',
    'cart.free.detail_casa': '🎁 Envío GRATIS · Pago contra reembolso',
    'cart.free.detail_hors': '🎁 Envío GRATIS · Pago por adelantado',
    'cart.confirm_empty': '¿Vaciar el carrito?',
    'cart.dm_intro': 'El mensaje se copiará y se abrirá Instagram ✨',
    'cart.preview_label': 'Vista previa del mensaje de Instagram (Casablanca)',

    'contact.title': 'Contacto',
    'contact.subtitle': 'Para pedir, mándanos el nombre o la referencia de la pieza por DM.',
    'contact.casa': 'Casablanca, Marruecos',
    'contact.casa.note': 'Envío por todo Marruecos e internacional.',
    'contact.form.title': 'Prepara tu mensaje',
    'contact.form.subtitle': 'Este formulario te ayuda a redactar tu DM. Después se abrirá en Instagram.',
    'contact.form.name': 'Tu nombre',
    'contact.form.ig': 'Tu Instagram',
    'contact.form.message': 'Tu mensaje (referencia del producto, talla, etc.)',
    'contact.form.submit': 'Preparar mi mensaje',
    'contact.form.ready': 'Tu mensaje está listo 👇',
    'contact.form.open_ig': 'Abrir Instagram para enviar',

    'shipping.title': 'Envío y Pago',
    'shipping.subtitle': 'Todo lo que necesitas saber para recibir tu pieza Lhawta sin problemas.',

    'trust.shipping.title': 'Envío gratis desde 500 DH',
    'trust.shipping.subtitle': 'Entrega en 48h',
    'trust.payment.title': 'Pago seguro',
    'trust.payment.subtitle': 'Varios métodos disponibles',
    'trust.support.title': 'Atención al cliente 7/7',
    'trust.support.subtitle': 'Respondemos rápido',

    'reviews.section_title': 'Dejemos hablar a nuestros clientes',
    'reviews.verified_by': 'Verificado por',
    'reviews.based_on': '/5 sobre',
    'reviews.reviews_word': 'opiniones',
    'reviews.cta.question': '¿Ya has comprado con nosotros?',
    'reviews.cta.button': '⭐ Dejar una opinión',
    'reviews.modal.title': '⭐ Deja tu opinión sobre Lhawta',
    'reviews.modal.subtitle': 'Tu opinión se publicará al instante en el sitio ✨',
    'reviews.modal.name': 'Tu nombre *',
    'reviews.modal.city': 'Tu ciudad *',
    'reviews.modal.handle': 'Tu Instagram',
    'reviews.modal.optional': '(opcional)',
    'reviews.modal.rating': 'Tu nota *',
    'reviews.modal.review_title': 'Título de tu opinión *',
    'reviews.modal.message': 'Tu mensaje *',
    'reviews.modal.item': 'Pieza comprada',
    'reviews.modal.cancel': 'Cancelar',
    'reviews.modal.submit': '📤 Enviar mi opinión',
    'reviews.success.title': '¡Gracias por tu opinión!',
    'reviews.success.message': 'Tu opinión está publicada. Puedes verla en la sección "Confían en nosotros".',
    'reviews.success.close': 'Cerrar',

    'footer.tagline': 'Casablanca · Nueva y de segunda mano',
    'footer.rights': '© 2026 Lhawta. Todos los derechos reservados.',

    "contact.ig.title": "Instagram",
    "contact.ig.desc": "La forma más rápida de reservar.",
    "contact.wa.title": "WhatsApp",
    "contact.wa.desc": "Próximamente.",
    "contact.location.title": "Casablanca",
    "contact.location.country": "Marruecos",
    "contact.location.note": "Envío por todo Marruecos e internacional.",
    "contact.ph.name": "Ej.: María",
    "contact.ph.ig": "@tu_usuario",
    "contact.ph.message": "Hola, me interesa la pieza LHW-001...",
    "cart.preview_summary": "Vista previa del mensaje de Instagram (Casablanca)",
    "shipping.c1.title": "🎁 Envío GRATIS a partir de 500 DH",
    "shipping.c1.p1": "¿Compra de <strong>500 DH o más</strong>? El envío es <strong>gratis</strong>, sin importar la ciudad de Marruecos.",
    "shipping.c1.hl": "✓ En Casa o fuera de Casa, en cuanto llegues a 500 DH, el envío corre por nuestra cuenta.",
    "shipping.c1.note": "El umbral se calcula sobre el subtotal de los artículos, sin contar gastos adicionales.",
    "shipping.c2.title": "⚡ Envío rápido en 48h",
    "shipping.c2.p1": "Una vez confirmado el pedido por DM, preparamos y enviamos la pieza en 48h por todo Marruecos.",
    "shipping.c2.li1": "<strong>Casablanca:</strong> entrega en 24-48h, a menudo el mismo día",
    "shipping.c2.li2": "<strong>Rabat, Marrakech, Tánger:</strong> 48 a 72h",
    "shipping.c2.li3": "<strong>Otras ciudades:</strong> 3 a 5 días laborables máximo",
    "shipping.c2.note": "Los plazos pueden variar en fines de semana y festivos.",
    "shipping.c2.bonus": "🎁 <strong>Bonus:</strong> a partir de 500 DH, el envío es gratis por todo Marruecos.",
    "shipping.c3.title": "💳 Pago contra reembolso en Casablanca",
    "shipping.c3.p1": "¿Estás en Casa? Puedes pagar <strong>en efectivo directamente en la entrega</strong>. No hace falta adelantar nada.",
    "shipping.c3.hl": "✓ Ves la pieza, la revisas, pagas. Sencillo y seguro.",
    "shipping.c3.p2": "También aceptamos transferencia bancaria o pago móvil (Cash Plus, WafaCash) si prefieres.",
    "shipping.c4.title": "🏙️ Fuera de Casablanca: pago por adelantado",
    "shipping.c4.p1": "Para pedidos <strong>fuera de Casablanca</strong>, el pago se hace por adelantado antes del envío. Es la única forma de asegurar el envío para ambas partes.",
    "shipping.c4.p2": "Métodos de pago aceptados:",
    "shipping.c4.li1": "Transferencia bancaria (IBAN enviado por DM)",
    "shipping.c4.li2": "Cash Plus / WafaCash",
    "shipping.c4.li3": "Pago móvil (Inwi Money, Orange Money)",
    "shipping.c4.p3": "En cuanto recibimos el pago, enviamos tu pieza en 48h.",
    "shipping.c5.title": "🤝 Atención al cliente 7/7",
    "shipping.c5.p1": "Estamos <strong>los 7 días de la semana</strong> para responder a tus preguntas, ayudarte con la talla o seguir tu pedido.",
    "shipping.c5.p2": "La mejor forma de contactar: <a href=\"https://www.instagram.com/lhawta.casablanca/\" target=\"_blank\" rel=\"noopener\">DM en Instagram</a>. Solemos responder en menos de una hora entre las 10h y las 22h.",
    "shipping.c6.title": "↩️ Devoluciones y cambios",
    "shipping.c6.p1": "Como nuestras piezas suelen ser únicas (segunda mano), las devoluciones no son automáticas. Si la pieza recibida no coincide con la descripción, contáctanos dentro de las 24h después de la recepción y buscaremos una solución.",
    "shipping.c6.note": "Para evitar problemas, no dudes en pedir más fotos o detalles de medidas antes de comprar.",
    "shipping.cta.title": "¿Una pregunta antes de pedir?",
    "shipping.cta.subtitle": "Nuestro equipo responde rápido en Instagram.",
    "shipping.cta.btn": "📩 Contactar",

    // ===== INTERNATIONAL =====
    "intl.welcome.title": "Pedidos internacionales",
    "intl.welcome.p1": "Lhawta envía sus piezas a todo el mundo. Cada pedido internacional se gestiona personalmente para garantizar la mejor experiencia.",
    "intl.welcome.highlight": "✓ Todos los pedidos fuera de Marruecos se confirman por DM de Instagram, con un presupuesto personalizado según tu país.",
    "intl.shipping.title": "Envío y plazos",
    "intl.shipping.p1": "Una vez confirmado tu pedido y recibido el pago, preparamos y enviamos tu pieza en 48h desde Casablanca.",
    "intl.shipping.li1": "<strong>Europa</strong> (Francia, Bélgica, España, Alemania, etc.): 5 a 10 días laborables",
    "intl.shipping.li2": "<strong>América del Norte</strong> (Canadá, EE.UU.): 7 a 14 días laborables",
    "intl.shipping.li3": "<strong>Resto del mundo</strong>: 10 a 21 días laborables según el destino",
    "intl.shipping.note": "Los plazos pueden variar según las aduanas locales. Tras el envío recibirás un número de seguimiento.",
    "intl.payment.title": "Pago",
    "intl.payment.p1": "Para todos los pedidos internacionales, el pago se realiza <strong>íntegramente por adelantado</strong>. Dos métodos aceptados:",
    "intl.payment.li1": "<strong>Transferencia bancaria internacional (SWIFT)</strong> — te enviamos nuestro IBAN por DM",
    "intl.payment.li2": "<strong>Western Union</strong> — rápido y disponible en la mayoría de países",
    "intl.payment.highlight": "✓ Una vez recibido el pago, tu pieza se envía en 48h.",
    "intl.payment.note": "Los gastos bancarios (transferencia, conversión de divisa) corren a cargo del cliente.",
    "intl.quote.title": "Presupuesto personalizado a petición",
    "intl.quote.p1": "El coste final (pieza + envío + posibles aranceles) se te comunica <strong>antes de cualquier pago</strong>. Sin sorpresas.",
    "intl.quote.p2": "Para recibir tu presupuesto, envíanos un mensaje de Instagram con:",
    "intl.quote.li1": "La referencia de la(s) pieza(s) que te interesan",
    "intl.quote.li2": "Tu país y ciudad de entrega",
    "intl.quote.li3": "Tu talla (para confirmar disponibilidad)",
    "intl.quote.p3": "Nuestro equipo suele responder en menos de 1h entre las 10h y las 22h (hora de Marruecos, GMT+1).",
    "intl.support.title": "Atención al cliente 7/7",
    "intl.support.p1": "Estamos disponibles <strong>los 7 días de la semana</strong> para responder a tus preguntas, asesorarte con la talla o seguir tu pedido.",
    "intl.support.p2": "La mejor forma de contactarnos: <a href=\"https://www.instagram.com/lhawta.casablanca/\" target=\"_blank\" rel=\"noopener\">DM de Instagram</a>. Respuesta rápida entre las 10h y las 22h (hora de Marruecos).",
    "intl.customs.title": "Aduanas e impuestos",
    "intl.customs.p1": "Los posibles aranceles e impuestos de importación corren a cargo del destinatario, según la normativa local.",
    "intl.customs.p2": "Para pedidos a Europa, estos gastos suelen ser insignificantes para la ropa de segunda mano. Estamos a tu disposición para informarte sobre las prácticas habituales en tu país.",
    "intl.returns.title": "Devoluciones y cambios",
    "intl.returns.p1": "Como nuestras piezas son únicas (segunda mano), las devoluciones no son sistemáticas. Si la pieza recibida no coincide con la descripción, contáctanos en las 48h siguientes a la recepción y encontraremos una solución.",
    "intl.returns.note": "Para evitar problemas, no dudes en pedir más fotos o detalles sobre las medidas antes de comprar.",
    "intl.cta.title": "¿Listo para pedir?",
    "intl.cta.subtitle": "Nuestro equipo responde rápido en Instagram con un presupuesto personalizado.",
    "intl.cta.btn": "📩 Pedir un presupuesto",

    // ===== CART INTERNATIONAL =====
    "cart.intl.shipping_title": "Envío internacional",
    "cart.intl.shipping_note": "Calculado mediante presupuesto personalizado según tu país. Sin sorpresas.",
    "cart.intl.choose_cta": "👇 Envíanos tu carrito para recibir un presupuesto",
    "cart.intl.btn_title": "Pedir un presupuesto",
    "cart.intl.btn_detail": "Respuesta rápida por DM con total + envío",
    "cart.intl.btn_subline": "Pago: transferencia o Western Union",
    "cart.intl.dm_intro": "El mensaje se copiará y se abrirá Instagram ✨",
    "cart.intl.preview_label": "Vista previa del mensaje de Instagram",

    // ===== AUDIT FILL (toasts, aria, quiz, modal, dm) =====
    "shop.label.size": "Talla",
    "aria.remove": "Quitar",
    "aria.close": "Cerrar",
    "aria.previous": "Anterior",
    "aria.next": "Siguiente",
    "aria.filters": "Filtros",
    "aria.menu": "Menú",
    "aria.cart": "Ver carrito",
    "aria.nav": "Navegación principal",
    "toast.sold": "Esta pieza ya está vendida 😢",
    "toast.already_in_cart": "Esta pieza ya está en tu carrito ✓",
    "toast.added": "✓ {item} añadido al carrito",
    "toast.empty": "Tu carrito está vacío 🛒",
    "toast.invalid_zone": "Zona de envío inválida",
    "toast.copied": "✓ ¡Mensaje copiado! Pégalo en el DM de Instagram",
    "quiz.reason.category": "categoría correspondiente",
    "quiz.reason.size": "talla perfecta",
    "quiz.reason.budget": "dentro del presupuesto",
    "quiz.reason.style": "estilo a juego",
    "quiz.reason.occasion": "apto para la ocasión",
    "quiz.reason.fallback": "Esta pieza forma parte de la selección.",
    "quiz.results.summary": "{count} pieza(s) coinciden con tu perfil.",
    "quiz.budget.option100": "100 MAD",
    "quiz.budget.option200": "200 MAD",
    "quiz.budget.option300": "300 MAD",
    "quiz.budget.any": "Sin preferencia",
    "quiz.size.unknown": "No lo sé",
    "quiz.opt.q1.daily": "Diario",
    "quiz.opt.q1.work": "Trabajo / Prácticas",
    "quiz.opt.q1.school": "Escuela / Universidad",
    "quiz.opt.q1.outing": "Salida",
    "quiz.opt.q1.event": "Evento especial",
    "quiz.opt.q2.vintage": "Vintage",
    "quiz.opt.q2.streetwear": "Streetwear",
    "quiz.opt.q2.minimal": "Minimal",
    "quiz.opt.q2.chic_casual": "Casual elegante",
    "quiz.opt.q2.oversize": "Oversize",
    "quiz.opt.q3.shirt": "Camisa",
    "quiz.opt.q3.tshirt": "Camiseta",
    "quiz.opt.q3.jacket": "Cazadora",
    "quiz.opt.q3.sweater": "Jersey",
    "quiz.opt.q3.pants": "Pantalón",
    "quiz.opt.q3.any": "Sin preferencia",
    "cat.shirt": "Camisa",
    "cat.tshirt": "Camiseta",
    "cat.jacket": "Cazadora",
    "cat.sweater": "Jersey",
    "cat.pants": "Pantalón",
    "cat.coat": "Chaqueta",
    "condition.new": "Nuevo",
    "condition.like_new": "Como nuevo",
    "condition.very_good": "Muy buen estado",
    "condition.good": "Buen estado",
    "modal.order.title_casa": "Pedido a Casablanca",
    "modal.order.title_hors": "Pedido fuera de Casablanca",
    "modal.order.step1": "Copia",
    "modal.order.step2": "Abre",
    "modal.order.step3": "Pega",
    "modal.order.copy_btn": "📋 Copiar mensaje",
    "modal.order.open_ig": "📩 Abrir Instagram",
    "modal.order.hint": "⚠️ Instagram no permite el envío automático. Copia y pega en el DM.",
    "dm.ma.intro": "Hola Lhawta 👋",
    "dm.ma.want_order": "Quisiera pedir:",
    "dm.ma.subtotal": "Subtotal",
    "dm.ma.shipping": "Envío",
    "dm.ma.total": "TOTAL",
    "dm.ma.zone": "Mi zona",
    "dm.ma.payment": "Método de pago",
    "dm.ma.city": "Mi ciudad exacta: (por especificar)",
    "dm.ma.thanks": "¡Gracias!",
    "dm.ma.free_shipping": "GRATIS 🎁 (pedido > 500 MAD)",
    "shipping.zone.casa": "Casablanca",
    "shipping.zone.hors_casa": "Fuera de Casablanca",
    "shipping.payment.cash": "Pago contra reembolso",
    "shipping.payment.advance": "Pago por adelantado (transferencia / Cash Plus / WafaCash)",
    "contact.dm.intro": "Hola Lhawta 👋",
    "contact.dm.iam": "Soy {name} (Instagram: {ig})",
    "contact.dm.no_message": "(sin mensaje)",
    "contact.dm.thanks": "¡Gracias!",
    "reviews.submitting": "Publicando...",
    "reviews.error.submit": "Error: no se pudo publicar tu opinión. Inténtalo más tarde.",
    "reviews.error.network": "Error de red. Revisa tu conexión e inténtalo de nuevo.",

    // ===== FOOTER LABELS + META + TRUST INTL + ICON =====
    "footer.lang_label": "Idioma:",
    "footer.country_label": "País:",
    "meta.index.title": "Lhawta — Ropa nueva y de segunda mano desde Casablanca",
    "meta.index.desc": "Lhawta — Piezas nuevas y de segunda mano, seleccionadas en Casablanca. Streetwear, vintage, camisas, cazadoras, camisetas. Pedido por DM de Instagram.",
    "meta.shop.title": "Tienda — Lhawta",
    "meta.shop.desc": "Toda la tienda Lhawta: camisas, camisetas, cazadoras, jerseys, pantalones. Nuevo y de segunda mano, envío internacional.",
    "meta.quiz.title": "Encuentra tu pieza — Lhawta",
    "meta.quiz.desc": "Responde al quiz Lhawta y encuentra la pieza que te corresponde. Selección personalizada.",
    "meta.contact.title": "Contacto — Lhawta",
    "meta.contact.desc": "Contacta a Lhawta por Instagram para pedir una pieza. Envío internacional.",
    "meta.cart.title": "Mi carrito — Lhawta",
    "meta.cart.desc": "Tu carrito Lhawta: revisa tus piezas antes de enviar tu pedido.",
    "meta.shipping.title": "Envío y Pago — Lhawta",
    "meta.shipping.desc": "Política de envío Lhawta: envío internacional, pago seguro, atención al cliente 7/7.",
    "trust.intl.shipping.title": "Envío mundial",
    "trust.intl.shipping.subtitle": "Presupuesto en 48h, envío en 1-3 semanas",
    "trust.intl.payment.title": "Pago seguro",
    "trust.intl.payment.subtitle": "Transferencia bancaria o Western Union",
    "trust.intl.support.title": "Atención al cliente 7/7",
    "trust.intl.support.subtitle": "Respuesta rápida por DM de Instagram",
    "home.why.f3.icon": "€",

    'banner.detected': 'Hemos detectado que estás en {country}',
    'banner.keep': 'Mantener',
    'banner.change': 'Cambiar'
  },

  /* ========== ANGLAIS ========== */
  'en': {
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.find': 'Find My Piece',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.shipping': 'Shipping',
    'nav.instagram': 'Instagram',

    'hero.title': 'Real Clothes Only',
    'hero.subtitle': 'New & secondhand pieces, hand-picked in Casablanca.',
    'hero.cta.shop': 'Shop now',
    'hero.cta.find': 'Find My Piece',

    'home.new.title': 'New Arrivals',
    'home.new.subtitle': 'The latest pieces added to our selection.',
    'home.new.cta': 'See full shop',
    'home.why.title': 'Why Lhawta?',
    'home.why.f1.title': 'Authentic pieces',
    'home.why.f1.desc': '100% original. No fakes, ever.',
    'home.why.f2.title': 'Hand-picked selection',
    'home.why.f2.desc': 'Every piece is inspected by hand.',
    'home.why.f3.title': 'Fair prices',
    'home.why.f3.desc': 'Quality style at honest prices.',
    'home.why.f4.title': 'Quick order via DM',
    'home.why.f4.desc': "One Instagram message and it's reserved.",
    'home.cta.title': 'Want to reserve a piece?',
    'home.cta.subtitle': 'DM us on Instagram with the product reference.',
    'home.cta.btn': 'DM on Instagram',

    'shop.title': 'Shop',
    'shop.subtitle': 'The full Lhawta selection. Filter by style and budget.',
    'shop.filters': 'Filters',
    'shop.filter.category': 'Category',
    'shop.filter.size': 'Size',
    'shop.filter.budget': 'Budget',
    'shop.filter.status': 'Availability',
    'shop.filter.all': 'All',
    'shop.filter.reset': 'Reset',
    'shop.results.count': 'piece(s) found',
    'shop.empty': 'No products match your filters. Try expanding your search.',
    'shop.badge.available': 'Available',
    'shop.badge.sold': 'Sold',
    'shop.btn.addcart': '🛒 Add to cart',
    'shop.btn.dm': 'or DM directly',
    'shop.btn.unavailable': 'No longer available',
    'shop.promo': '🎁 FREE shipping on orders over 500 DH — worldwide',

    'quiz.title': 'Find Your Piece',
    'quiz.subtitle': "Answer 5 quick questions. We'll show you the best matches.",
    'quiz.q1': 'What occasion are you shopping for?',
    'quiz.q2': 'Which style do you prefer?',
    'quiz.q3': 'Which category?',
    'quiz.q4': 'Which size?',
    'quiz.q5': 'Maximum budget?',
    'quiz.submit': 'See my matches',
    'quiz.reset': 'Clear',
    'quiz.results.title': 'Your best matches',
    'quiz.results.empty': 'No piece matches perfectly. Try a wider budget or different category.',
    'quiz.match': 'match',
    'quiz.reason.prefix': 'Why?',

    'cart.title': 'My cart',
    'cart.subtitle': 'Review your pieces before sending your order on Instagram.',
    'cart.empty.title': 'Your cart is empty',
    'cart.empty.subtitle': 'Browse the shop to add pieces.',
    'cart.empty.cta': 'View shop',
    'cart.summary': 'Summary',
    'cart.articles': 'Items',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.total': 'Total',
    'cart.free_shipping_progress': '{amount} more for free shipping 🎁',
    'cart.free_shipping_achieved': '🎁 FREE shipping unlocked!',
    'cart.choose_zone': '👇 Choose your zone to finalize',
    'cart.btn.casa': 'Order to Casablanca',
    'cart.btn.hors_casa': 'Order outside Casablanca',
    'cart.btn.empty_cart': 'Empty cart',
    'cart.casa.detail': 'Shipping +20 DH · Cash on delivery',
    'cart.hors.detail': 'Shipping +50 DH · Payment in advance',
    'cart.free.detail_casa': '🎁 FREE shipping · Cash on delivery',
    'cart.free.detail_hors': '🎁 FREE shipping · Payment in advance',
    'cart.confirm_empty': 'Empty cart?',
    'cart.dm_intro': 'The message will be copied and Instagram will open ✨',
    'cart.preview_label': 'Instagram message preview (Casablanca)',

    'contact.title': 'Contact',
    'contact.subtitle': 'To order, send us the name or reference of the piece via DM.',
    'contact.casa': 'Casablanca, Morocco',
    'contact.casa.note': 'Delivery across Morocco and worldwide.',
    'contact.form.title': 'Prepare your message',
    'contact.form.subtitle': 'This form helps you write your DM. It will then open on Instagram.',
    'contact.form.name': 'Your name',
    'contact.form.ig': 'Your Instagram',
    'contact.form.message': 'Your message (product reference, size, etc.)',
    'contact.form.submit': 'Prepare my message',
    'contact.form.ready': 'Your message is ready 👇',
    'contact.form.open_ig': 'Open Instagram to send',

    'shipping.title': 'Shipping & Payment',
    'shipping.subtitle': 'Everything you need to know to receive your Lhawta piece smoothly.',

    'trust.shipping.title': 'Free shipping over 500 DH',
    'trust.shipping.subtitle': 'Delivered within 48h',
    'trust.payment.title': 'Secure payment',
    'trust.payment.subtitle': 'Multiple methods available',
    'trust.support.title': '7/7 customer support',
    'trust.support.subtitle': 'We reply fast',

    'reviews.section_title': 'Let our customers speak for us',
    'reviews.verified_by': 'Verified by',
    'reviews.based_on': '/5 based on',
    'reviews.reviews_word': 'reviews',
    'reviews.cta.question': 'Already shopped with us?',
    'reviews.cta.button': '⭐ Leave a review',
    'reviews.modal.title': '⭐ Leave your Lhawta review',
    'reviews.modal.subtitle': 'Your review will be published instantly ✨',
    'reviews.modal.name': 'Your first name *',
    'reviews.modal.city': 'Your city *',
    'reviews.modal.handle': 'Your Instagram',
    'reviews.modal.optional': '(optional)',
    'reviews.modal.rating': 'Your rating *',
    'reviews.modal.review_title': 'Review title *',
    'reviews.modal.message': 'Your message *',
    'reviews.modal.item': 'Item purchased',
    'reviews.modal.cancel': 'Cancel',
    'reviews.modal.submit': '📤 Submit my review',
    'reviews.success.title': 'Thank you for your review!',
    'reviews.success.message': 'Your review is published. You can see it in the "They trust us" section.',
    'reviews.success.close': 'Close',

    'footer.tagline': 'Casablanca · New & secondhand',
    'footer.rights': '© 2026 Lhawta. All rights reserved.',

    "contact.ig.title": "Instagram",
    "contact.ig.desc": "The fastest way to reserve a piece.",
    "contact.wa.title": "WhatsApp",
    "contact.wa.desc": "Coming soon.",
    "contact.location.title": "Casablanca",
    "contact.location.country": "Morocco",
    "contact.location.note": "Delivery across Morocco and worldwide.",
    "contact.ph.name": "E.g. Sarah",
    "contact.ph.ig": "@your_handle",
    "contact.ph.message": "Hi, I'm interested in piece LHW-001...",
    "cart.preview_summary": "Instagram message preview (Casablanca)",
    "shipping.c1.title": "🎁 FREE shipping over 500 DH",
    "shipping.c1.p1": "Spending <strong>500 DH or more</strong>? Shipping is <strong>free</strong>, anywhere in Morocco.",
    "shipping.c1.hl": "✓ Casa or outside Casa — once you hit 500 DH, we cover the shipping.",
    "shipping.c1.note": "Threshold is based on the items subtotal, excluding any extra fees.",
    "shipping.c2.title": "⚡ Fast 48h shipping",
    "shipping.c2.p1": "Once your order is confirmed via DM, we prepare and ship your piece within 48h anywhere in Morocco.",
    "shipping.c2.li1": "<strong>Casablanca:</strong> 24-48h, often same-day",
    "shipping.c2.li2": "<strong>Rabat, Marrakech, Tangier:</strong> 48 to 72h",
    "shipping.c2.li3": "<strong>Other cities:</strong> 3 to 5 business days max",
    "shipping.c2.note": "Delivery times may vary on weekends and holidays.",
    "shipping.c2.bonus": "🎁 <strong>Bonus:</strong> orders over 500 DH ship free everywhere in Morocco.",
    "shipping.c3.title": "💳 Cash on delivery in Casablanca",
    "shipping.c3.p1": "In Casa? You can pay <strong>cash on delivery</strong>. No need to pay anything upfront.",
    "shipping.c3.hl": "✓ See your piece, check it, pay. Simple and safe.",
    "shipping.c3.p2": "We also accept bank transfers and mobile payments (Cash Plus, WafaCash) if you prefer.",
    "shipping.c4.title": "🏙️ Outside Casablanca: payment in advance",
    "shipping.c4.p1": "For any order <strong>outside Casablanca</strong>, payment is made in advance before shipping. It's the only way to secure the shipment for both sides.",
    "shipping.c4.p2": "Accepted payment methods:",
    "shipping.c4.li1": "Bank transfer (IBAN sent via DM)",
    "shipping.c4.li2": "Cash Plus / WafaCash",
    "shipping.c4.li3": "Mobile payment (Inwi Money, Orange Money)",
    "shipping.c4.p3": "As soon as we receive payment, we ship your piece within 48h.",
    "shipping.c5.title": "🤝 7/7 customer support",
    "shipping.c5.p1": "We're here <strong>7 days a week</strong> to answer questions, help with sizing, or track your order.",
    "shipping.c5.p2": "Best way to reach us: <a href=\"https://www.instagram.com/lhawta.casablanca/\" target=\"_blank\" rel=\"noopener\">DM on Instagram</a>. We usually reply within an hour between 10am and 10pm.",
    "shipping.c6.title": "↩️ Returns & exchanges",
    "shipping.c6.p1": "Since our pieces are often unique (secondhand), returns are not automatic. But if the piece received doesn't match the description, contact us within 24h of delivery and we'll find a solution.",
    "shipping.c6.note": "To avoid issues, feel free to ask for extra photos or measurement details before ordering.",
    "shipping.cta.title": "A question before ordering?",
    "shipping.cta.subtitle": "Our team replies fast on Instagram.",
    "shipping.cta.btn": "📩 Contact us",

    // ===== INTERNATIONAL =====
    "intl.welcome.title": "International orders",
    "intl.welcome.p1": "Lhawta ships its pieces worldwide. Every international order is handled personally to ensure the best experience.",
    "intl.welcome.highlight": "✓ All orders outside Morocco are confirmed via Instagram DM, with a personalized quote based on your country.",
    "intl.shipping.title": "Shipping and delays",
    "intl.shipping.p1": "Once your order is confirmed and payment received, we prepare and ship your piece within 48h from Casablanca.",
    "intl.shipping.li1": "<strong>Europe</strong> (France, Belgium, Spain, Germany, etc.): 5 to 10 business days",
    "intl.shipping.li2": "<strong>North America</strong> (Canada, USA): 7 to 14 business days",
    "intl.shipping.li3": "<strong>Rest of the world</strong>: 10 to 21 business days depending on destination",
    "intl.shipping.note": "Delays may vary depending on local customs. A tracking number is sent to you after shipping.",
    "intl.payment.title": "Payment",
    "intl.payment.p1": "For all international orders, payment is made <strong>entirely in advance</strong>. Two methods accepted:",
    "intl.payment.li1": "<strong>International bank transfer (SWIFT)</strong> — we share our IBAN via DM",
    "intl.payment.li2": "<strong>Western Union</strong> — fast and available in most countries",
    "intl.payment.highlight": "✓ Once payment is received, your piece is shipped within 48h.",
    "intl.payment.note": "Any bank fees (transfer, currency conversion) are at the customer's charge.",
    "intl.quote.title": "Personalized quote on request",
    "intl.quote.p1": "The final cost (item + shipping + possible customs fees) is communicated to you <strong>before any payment</strong>. No surprises.",
    "intl.quote.p2": "To get your quote, send us an Instagram message with:",
    "intl.quote.li1": "The reference of the piece(s) you're interested in",
    "intl.quote.li2": "Your country and city of delivery",
    "intl.quote.li3": "Your size (so we can confirm availability)",
    "intl.quote.p3": "Our team usually replies within 1h between 10am and 10pm (Morocco time, GMT+1).",
    "intl.support.title": "7/7 customer support",
    "intl.support.p1": "We are available <strong>7 days a week</strong> to answer your questions, advise on sizing, or follow up on your order.",
    "intl.support.p2": "Best way to reach us: <a href=\"https://www.instagram.com/lhawta.casablanca/\" target=\"_blank\" rel=\"noopener\">Instagram DM</a>. Quick reply between 10am and 10pm (Morocco time).",
    "intl.customs.title": "Customs and taxes",
    "intl.customs.p1": "Any customs duties and import taxes are at the recipient's charge, in accordance with local regulations.",
    "intl.customs.p2": "For orders to Europe, these fees are generally negligible for secondhand clothing. We remain available to inform you about the practices in your country.",
    "intl.returns.title": "Returns and exchanges",
    "intl.returns.p1": "Since our pieces are unique (secondhand), returns are not systematic. However, if the piece received does not match the description, contact us within 48h after receipt and we will find a suitable solution.",
    "intl.returns.note": "To avoid any issue, feel free to ask for additional photos or details on measurements before ordering.",
    "intl.cta.title": "Ready to order?",
    "intl.cta.subtitle": "Our team replies quickly on Instagram with a personalized quote.",
    "intl.cta.btn": "📩 Request a quote",

    // ===== CART INTERNATIONAL =====
    "cart.intl.shipping_title": "International shipping",
    "cart.intl.shipping_note": "Calculated on a personalized quote based on your country. No surprises.",
    "cart.intl.choose_cta": "👇 Send us your cart to receive a quote",
    "cart.intl.btn_title": "Request a quote",
    "cart.intl.btn_detail": "Quick DM reply with total + shipping",
    "cart.intl.btn_subline": "Payment: bank transfer or Western Union",
    "cart.intl.dm_intro": "The message will be copied and Instagram will open ✨",
    "cart.intl.preview_label": "Instagram message preview",

    // ===== AUDIT FILL (toasts, aria, quiz, modal, dm) =====
    "shop.label.size": "Size",
    "aria.remove": "Remove",
    "aria.close": "Close",
    "aria.previous": "Previous",
    "aria.next": "Next",
    "aria.filters": "Filters",
    "aria.menu": "Menu",
    "aria.cart": "View cart",
    "aria.nav": "Main navigation",
    "toast.sold": "This piece is already sold 😢",
    "toast.already_in_cart": "This piece is already in your cart ✓",
    "toast.added": "✓ {item} added to cart",
    "toast.empty": "Your cart is empty 🛒",
    "toast.invalid_zone": "Invalid shipping zone",
    "toast.copied": "✓ Message copied! Paste it into the Instagram DM",
    "quiz.reason.category": "matching category",
    "quiz.reason.size": "perfect size",
    "quiz.reason.budget": "within budget",
    "quiz.reason.style": "matching style",
    "quiz.reason.occasion": "fits the occasion",
    "quiz.reason.fallback": "This piece is in your selection.",
    "quiz.results.summary": "{count} piece(s) matching your profile.",
    "quiz.budget.option100": "100 MAD",
    "quiz.budget.option200": "200 MAD",
    "quiz.budget.option300": "300 MAD",
    "quiz.budget.any": "No preference",
    "quiz.size.unknown": "I don't know",
    "quiz.opt.q1.daily": "Daily wear",
    "quiz.opt.q1.work": "Work / Internship",
    "quiz.opt.q1.school": "School / University",
    "quiz.opt.q1.outing": "Going out",
    "quiz.opt.q1.event": "Special event",
    "quiz.opt.q2.vintage": "Vintage",
    "quiz.opt.q2.streetwear": "Streetwear",
    "quiz.opt.q2.minimal": "Minimal",
    "quiz.opt.q2.chic_casual": "Smart casual",
    "quiz.opt.q2.oversize": "Oversize",
    "quiz.opt.q3.shirt": "Shirt",
    "quiz.opt.q3.tshirt": "T-shirt",
    "quiz.opt.q3.jacket": "Jacket",
    "quiz.opt.q3.sweater": "Sweater",
    "quiz.opt.q3.pants": "Pants",
    "quiz.opt.q3.any": "No preference",
    "cat.shirt": "Shirt",
    "cat.tshirt": "T-shirt",
    "cat.jacket": "Jacket",
    "cat.sweater": "Sweater",
    "cat.pants": "Pants",
    "cat.coat": "Coat",
    "condition.new": "New",
    "condition.like_new": "Like new",
    "condition.very_good": "Very good condition",
    "condition.good": "Good condition",
    "modal.order.title_casa": "Order to Casablanca",
    "modal.order.title_hors": "Order outside Casablanca",
    "modal.order.step1": "Copy",
    "modal.order.step2": "Open",
    "modal.order.step3": "Paste",
    "modal.order.copy_btn": "📋 Copy message",
    "modal.order.open_ig": "📩 Open Instagram",
    "modal.order.hint": "⚠️ Instagram doesn't allow automatic sending. Copy then paste into the DM.",
    "dm.ma.intro": "Hello Lhawta 👋",
    "dm.ma.want_order": "I would like to order:",
    "dm.ma.subtotal": "Subtotal",
    "dm.ma.shipping": "Shipping",
    "dm.ma.total": "TOTAL",
    "dm.ma.zone": "My zone",
    "dm.ma.payment": "Payment method",
    "dm.ma.city": "My exact city: (to specify)",
    "dm.ma.thanks": "Thank you!",
    "dm.ma.free_shipping": "FREE 🎁 (order > 500 MAD)",
    "shipping.zone.casa": "Casablanca",
    "shipping.zone.hors_casa": "Outside Casablanca",
    "shipping.payment.cash": "Cash on delivery",
    "shipping.payment.advance": "Bank transfer / Cash Plus / WafaCash in advance",
    "contact.dm.intro": "Hello Lhawta 👋",
    "contact.dm.iam": "I am {name} (Instagram: {ig})",
    "contact.dm.no_message": "(no message)",
    "contact.dm.thanks": "Thank you!",
    "reviews.submitting": "Publishing...",
    "reviews.error.submit": "Error: unable to publish your review. Please try again later.",
    "reviews.error.network": "Network error. Check your connection and try again.",

    // ===== FOOTER LABELS + META + TRUST INTL + ICON =====
    "footer.lang_label": "Language:",
    "footer.country_label": "Country:",
    "meta.index.title": "Lhawta — New & secondhand clothing from Casablanca",
    "meta.index.desc": "Lhawta — New and secondhand pieces, hand-picked in Casablanca. Streetwear, vintage, shirts, jackets, t-shirts. Order via Instagram DM.",
    "meta.shop.title": "Shop — Lhawta",
    "meta.shop.desc": "The full Lhawta shop: shirts, t-shirts, jackets, sweaters, pants. New and secondhand, worldwide shipping.",
    "meta.quiz.title": "Find Your Piece — Lhawta",
    "meta.quiz.desc": "Take the Lhawta quiz and find the piece that suits you. Personalized selection.",
    "meta.contact.title": "Contact — Lhawta",
    "meta.contact.desc": "Contact Lhawta on Instagram to order a piece. Worldwide shipping.",
    "meta.cart.title": "My Cart — Lhawta",
    "meta.cart.desc": "Your Lhawta cart: review your pieces before sending your order.",
    "meta.shipping.title": "Shipping & Payment — Lhawta",
    "meta.shipping.desc": "Lhawta shipping policy: worldwide delivery, secure payment, 7/7 customer support.",
    "trust.intl.shipping.title": "Worldwide shipping",
    "trust.intl.shipping.subtitle": "Quote in 48h, shipped within 1-3 weeks",
    "trust.intl.payment.title": "Secure payment",
    "trust.intl.payment.subtitle": "Bank transfer or Western Union",
    "trust.intl.support.title": "7/7 Customer support",
    "trust.intl.support.subtitle": "Quick reply via Instagram DM",
    "home.why.f3.icon": "€",

    'banner.detected': "We detected you're in {country}",
    'banner.keep': 'Keep',
    'banner.change': 'Change'
  }
};

/* ---------- Récupération ---------- */
function getStoredCountry() { return localStorage.getItem(STORAGE_COUNTRY_KEY) || null; }
function getStoredLocale()  { return localStorage.getItem(STORAGE_LOCALE_KEY)  || null; }
function getCurrentCountry() {
  const stored = getStoredCountry();
  return stored && COUNTRIES[stored] ? COUNTRIES[stored] : COUNTRIES.MA;
}
function getCurrentLocale() {
  const stored = getStoredLocale();
  if (stored && TRANSLATIONS[stored]) return stored;
  return getCurrentCountry().locale;
}
function getCurrentCurrency() { return getCurrentCountry().currency; }

/* ---------- Setters ---------- */
function setCountry(countryCode) {
  if (!COUNTRIES[countryCode]) return;
  localStorage.setItem(STORAGE_COUNTRY_KEY, countryCode);

  // Si la langue n'a PAS été choisie explicitement, on aligne sur celle par défaut du pays
  if (!isLocaleExplicit()) {
    localStorage.setItem(STORAGE_LOCALE_KEY, COUNTRIES[countryCode].locale);
  }

  applyTranslations();
  refreshAllPrices();
  refreshSelectors();

  if (typeof render === 'function')                try { render(); } catch(e) {}
  if (typeof renderReviewsCarousel === 'function') try { renderReviewsCarousel(); } catch(e) {}
  if (typeof renderNewProducts === 'function')     try { renderNewProducts(); } catch(e) {}
  if (typeof renderCartPage === 'function') {
    setTimeout(() => { try { renderCartPage(); } catch(e) {} }, 50);
  }
}
function setLocale(localeCode) {
  if (!TRANSLATIONS[localeCode]) return;
  localStorage.setItem(STORAGE_LOCALE_KEY, localeCode);
  setLocaleExplicit(true);

  applyTranslations();
  refreshSelectors();

  if (typeof render === 'function')                try { render(); } catch(e) {}
  if (typeof renderReviewsCarousel === 'function') try { renderReviewsCarousel(); } catch(e) {}
  if (typeof renderNewProducts === 'function')     try { renderNewProducts(); } catch(e) {}
  if (typeof renderCartPage === 'function') {
    setTimeout(() => { try { renderCartPage(); } catch(e) {} }, 50);
  }
}

/* ---------- Traduction ---------- */
function t(key, vars) {
  const locale = getCurrentLocale();
  let str = (TRANSLATIONS[locale] && TRANSLATIONS[locale][key])
    || TRANSLATIONS['fr-ma'][key]
    || key;
  if (vars) {
    Object.keys(vars).forEach(k => {
      str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
    });
  }
  return str;
}

/* ---------- Apply translations ---------- */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (!key) return;
    el.setAttribute('placeholder', t(key));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (!key) return;
    el.innerHTML = t(key);
  });

  document.documentElement.setAttribute('lang', getCurrentLocale().split('-')[0]);

  // Meta tags multilingues
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const val = t(key);
    if (val && val !== key) {
      el.textContent = val;
      document.title = val;
    }
  });
  document.querySelectorAll('[data-i18n-meta-desc]').forEach(el => {
    const key = el.getAttribute('data-i18n-meta-desc');
    const val = t(key);
    if (val && val !== key) el.setAttribute('content', val);
  });

  // Affichage conditionnel selon le pays
  const isMaroc = getCurrentCountry().code === 'MA';
  document.querySelectorAll('.content-maroc').forEach(el => {
    el.hidden = !isMaroc;
    el.style.display = isMaroc ? '' : 'none';
  });
  document.querySelectorAll('.content-international').forEach(el => {
    el.hidden = isMaroc;
    el.style.display = isMaroc ? 'none' : '';
  });

  // Sous-titre de la page livraison adapté
  const shippingSubtitle = document.querySelector('.page-header p[data-i18n="shipping.subtitle"]');
  if (shippingSubtitle) {
    shippingSubtitle.textContent = isMaroc ? t('shipping.subtitle') : t('intl.welcome.p1');
  }
}

/* ---------- Prix ---------- */
function formatPrice(priceMAD) {
  const currency = CURRENCIES[getCurrentCurrency()] || CURRENCIES.MAD;
  const converted = Math.round(priceMAD * currency.rateFromMAD);
  if (currency.position === 'before') return currency.symbol + converted;
  return converted + ' ' + currency.symbol;
}

function refreshAllPrices() {
  if (typeof render === 'function')              try { render(); } catch(e) {}
  if (typeof renderCartPage === 'function')      try { renderCartPage(); } catch(e) {}
  if (typeof renderReviewsCarousel === 'function') try { renderReviewsCarousel(); } catch(e) {}

  document.querySelectorAll('[data-price-mad]').forEach(el => {
    const mad = parseInt(el.getAttribute('data-price-mad'), 10);
    if (!isNaN(mad)) el.textContent = formatPrice(mad);
  });
}

/* ---------- Selectors refresh ---------- */
function refreshSelectors() {
  const country = getCurrentCountry();
  const locale = getCurrentLocale();
  document.querySelectorAll('.country-selector-current').forEach(el => {
    if (window.innerWidth <= 720) {
      el.innerHTML = country.flag;
    } else {
      el.innerHTML = country.flag + ' ' + country.currency;
    }
  });

  // Locale selector header (drapeau + code court)
  const LOCALE_LABEL = {
    'fr-ma': { short: 'FR', long: '🇲🇦 FR' },
    'fr':    { short: 'FR', long: '🇫🇷 FR' },
    'en':    { short: 'EN', long: '🇬🇧 EN' },
    'es':    { short: 'ES', long: '🇪🇸 ES' }
  };
  const localeInfo = LOCALE_LABEL[locale] || { short: locale.toUpperCase(), long: locale.toUpperCase() };
  document.querySelectorAll('.locale-selector-current').forEach(el => {
    el.innerHTML = (window.innerWidth <= 720) ? localeInfo.short : localeInfo.long;
  });

  document.querySelectorAll('.country-option').forEach(el => {
    const code = el.getAttribute('data-country');
    el.classList.toggle('active', code === country.code);
  });
  document.querySelectorAll('.locale-option').forEach(el => {
    const code = el.getAttribute('data-locale');
    el.classList.toggle('active', code === locale);
  });
  document.querySelectorAll('.footer-country-select').forEach(el => {
    if (el.value !== country.code) el.value = country.code;
  });
  const footerSelect = document.getElementById('footer-country-select');
  if (footerSelect && footerSelect.value !== country.code) {
    footerSelect.value = country.code;
  }
}

/* ---------- IP detection ---------- */
async function detectCountryByIP() {
  try {
    const res = await fetch('https://ipapi.co/json/');
    if (!res.ok) return null;
    const data = await res.json();
    const code = data.country_code;
    if (code && COUNTRIES[code]) return code;
    return 'XX';
  } catch (e) {
    return null;
  }
}

/* ---------- Detection banner ---------- */
function showDetectionBanner(countryCode) {
  const country = COUNTRIES[countryCode];
  if (!country) return;
  const banner = document.createElement('div');
  banner.id = 'lhw-detect-banner';
  banner.className = 'lhw-detect-banner';
  const nameKey = getCurrentLocale().startsWith('en') ? 'name_en' : 'name_fr';
  const txt = t('banner.detected').replace('{country}', country[nameKey]);
  banner.innerHTML =
    '<span>' + country.flag + ' ' + txt + '</span>' +
    '<button class="banner-btn banner-btn-keep" id="banner-keep">' + t('banner.keep') + '</button>' +
    '<button class="banner-btn banner-btn-change" id="banner-change">' + t('banner.change') + '</button>';
  document.body.appendChild(banner);
  setTimeout(() => banner.classList.add('open'), 50);

  document.getElementById('banner-keep').addEventListener('click', () => {
    setCountry(countryCode);
    closeBanner();
  });
  document.getElementById('banner-change').addEventListener('click', () => {
    closeBanner();
    openCountryPicker();
  });
}
function closeBanner() {
  const banner = document.getElementById('lhw-detect-banner');
  if (!banner) return;
  banner.classList.remove('open');
  setTimeout(() => banner.remove(), 300);
}
function openCountryPicker() {
  const dropdown = document.getElementById('country-dropdown');
  if (dropdown) dropdown.classList.add('open');
}

/* ---------- Init ---------- */
async function initI18n() {
  // Allow forcing re-detection via URL: ?reset-country=1
  if (location.search.indexOf('reset-country=1') !== -1) {
    localStorage.removeItem(STORAGE_COUNTRY_KEY);
    localStorage.removeItem(STORAGE_LOCALE_KEY);
  }

  applyTranslations();
  refreshAllPrices();
  refreshSelectors();

  if (!getStoredCountry()) {
    const detected = await detectCountryByIP();
    if (detected) {
      showDetectionBanner(detected);
    } else {
      setCountry('MA');
    }
  }
}

document.addEventListener('DOMContentLoaded', initI18n);

// Re-render le sélecteur quand on resize (mobile <-> desktop)
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(refreshSelectors, 150);
});

// Ferme les dropdowns pays + langue au clic en dehors
document.addEventListener('click', (e) => {
  const countrySelector = document.querySelector('.country-selector');
  const countryDropdown = document.getElementById('country-dropdown');
  if (countrySelector && countryDropdown && !countrySelector.contains(e.target)) {
    countryDropdown.classList.remove('open');
  }
  const localeSelector = document.querySelector('.locale-selector');
  const localeDropdown = document.getElementById('locale-dropdown');
  if (localeSelector && localeDropdown && !localeSelector.contains(e.target)) {
    localeDropdown.classList.remove('open');
  }
});
