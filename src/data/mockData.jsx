// src/data/mockData.js

export const mockShops = [
  { id: 1, name: "Nouvelle Ère Tech", type: "Grossiste", city: "Douala", quarter: "Akwa", verified: true, rating: 4.9, initials: "NÈ", banner: "from-blue-600 to-indigo-900" },
  { id: 2, name: "Sana Cosmétiques", type: "Grossiste", city: "Douala", quarter: "Marché Central", verified: true, rating: 4.7, initials: "SC", banner: "from-pink-500 to-rose-700" },
  { id: 3, name: "Boutique Horizon", type: "Vendeur Simple", city: "Yaoundé", quarter: "Mokolo", verified: false, rating: 4.2, initials: "BH", banner: "from-amber-500 to-orange-600" },
  { id: 4, name: "Cereal Trust Africa", type: "Grossiste", city: "Douala", quarter: "Bonabéri", verified: true, rating: 4.8, initials: "CT", banner: "from-emerald-600 to-teal-800" },
  { id: 5, name: "Alpha Gadgets", type: "Vendeur Simple", city: "Douala", quarter: "Bastos (Showroom)", verified: true, rating: 4.5, initials: "AG", banner: "from-purple-600 to-purple-900" },
  { id: 6, name: "Friperie Crème Mely", type: "Vendeur Simple", city: "Yaoundé", quarter: "Mvan", verified: false, rating: 4.4, initials: "FC", banner: "from-red-500 to-orange-500" },
  { id: 7, name: "Maison du Pagne", type: "Grossiste", city: "Douala", quarter: "Marché Congo", verified: true, rating: 4.9, initials: "MP", banner: "from-yellow-600 to-amber-800" },
  { id: 8, name: "Youndé Shoes Hub", type: "Vendeur Simple", city: "Yaoundé", quarter: "Poste Centrale", verified: true, rating: 4.6, initials: "YS", banner: "from-slate-700 to-slate-900" },
  { id: 9, name: "Bio-Nature Cameroun", type: "Vendeur Simple", city: "Bafoussam", quarter: "Marché A", verified: false, rating: 4.1, initials: "BN", banner: "from-green-500 to-emerald-700" },
  { id: 10, name: "Krys Électroménager", type: "Grossiste", city: "Douala", quarter: "Nkololoun", verified: true, rating: 4.7, initials: "KÉ", banner: "from-cyan-600 to-blue-800" },
];

// Génération automatique des 50 produits (5 produits par boutique)
export const mockProducts = [
  // --- BOUTIQUE 1: Nouvelle Ère Tech (Grossiste) ---
  ...[
    { id: 101, title: "iPhone 13 Pro Max 256Go Lot", price: "450,000 XAF/pc", isWholesale: true, moq: "5 pcs min", stock: "35 pcs" },
    { id: 102, title: "Écrans Gamer 24\" incurvé", price: "85,000 XAF/pc", isWholesale: true, moq: "3 pcs min", stock: "50 pcs" },
    { id: 103, title: "AirPods Pro Gen 2 Bulk", price: "12,000 XAF/pc", isWholesale: true, moq: "10 pcs min", stock: "120 pcs" },
    { id: 104, title: "Powerbanks 20000mAh Fast", price: "7,500 XAF/pc", isWholesale: true, moq: "20 pcs min", stock: "200 pcs" },
    { id: 105, title: "Câbles Type-C tressés (X100)", price: "40,000 XAF/lot", isWholesale: true, moq: "1 lot min", stock: "15 lots" },
  ].map((p, i) => ({ ...p, shopId: 1, category: "Électronique", images: Array(4).fill(`https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80&sig=${101+i}`) })),

  // --- BOUTIQUE 2: Sana Cosmétiques (Grossiste) ---
  ...[
    { id: 201, title: "Lait Hydratant Éclat Carton", price: "36,000 XAF/ctn", isWholesale: true, moq: "2 cartons", stock: "80 cartons" },
    { id: 202, title: "Sérum Vitamine C Pur (X24)", price: "48,000 XAF/lot", isWholesale: true, moq: "1 lot", stock: "40 lots" },
    { id: 203, title: "Gamme Huiles Capillaires Coco", price: "1,500 XAF/pc", isWholesale: true, moq: "12 pcs min", stock: "300 pcs" },
    { id: 204, title: "Savons Noirs Gommants Artisanal", price: "800 XAF/pc", isWholesale: true, moq: "50 pcs min", stock: "500 pcs" },
    { id: 205, title: "Masques Argile Boîte Pro", price: "2,500 XAF/pc", isWholesale: true, moq: "10 pcs min", stock: "150 pcs" },
  ].map((p, i) => ({ ...p, shopId: 2, category: "Cosmétiques", images: Array(4).fill(`https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&q=80&sig=${201+i}`) })),

  // --- BOUTIQUE 3: Boutique Horizon (Vendeur Simple) ---
  ...[
    { id: 301, title: "Robe d'été Fleurie Tendance", price: "12,500 XAF", isWholesale: false, moq: "Unique", stock: "3 dispo" },
    { id: 302, title: "Jean Slim Homme Premium", price: "15,000 XAF", isWholesale: false, moq: "Unique", stock: "5 dispo" },
    { id: 303, title: "Chemise Lin Unisexe", price: "10,000 XAF", isWholesale: false, moq: "Unique", stock: "8 dispo" },
    { id: 304, title: "Veste Blazer Oversize", price: "22,000 XAF", isWholesale: false, moq: "Unique", stock: "2 dispo" },
    { id: 305, title: "Jupe Plissée Élégante", price: "9,000 XAF", isWholesale: false, moq: "Unique", stock: "4 dispo" },
  ].map((p, i) => ({ ...p, shopId: 3, category: "Mode", images: Array(4).fill(`https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80&sig=${301+i}`) })),

  // --- BOUTIQUE 4: Cereal Trust Africa (Grossiste) ---
  ...[
    { id: 401, title: "Sac Riz Parfumé 25kg Nefertiti", price: "16,800 XAF/sac", isWholesale: true, moq: "10 sacs min", stock: "400 sacs" },
    { id: 402, title: "Carton Huile Raffinée 1L (X12)", price: "15,500 XAF/ctn", isWholesale: true, moq: "5 cartons", stock: "150 cartons" },
    { id: 403, title: "Sac de Sucre En Poudre 50kg", price: "31,000 XAF/sac", isWholesale: true, moq: "3 sacs min", stock: "90 sacs" },
    { id: 404, title: "Carton Spaghetti Premium (X40)", price: "14,000 XAF/ctn", isWholesale: true, moq: "5 cartons", stock: "200 cartons" },
    { id: 405, title: "Farine de Froment Sac 50kg", price: "28,500 XAF/sac", isWholesale: true, moq: "2 sacs min", stock: "110 sacs" },
  ].map((p, i) => ({ ...p, shopId: 4, category: "Alimentaire", images: Array(4).fill(`https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80&sig=${401+i}`) })),

  // --- BOUTIQUE 5: Alpha Gadgets (Vendeur Simple) ---
  ...[
    { id: 501, title: "Montre Connectée Sport Active", price: "28,000 XAF", isWholesale: false, moq: "Unique", stock: "12 dispo" },
    { id: 502, title: "Écouteurs Sans Fil Mini Pro", price: "15,000 XAF", isWholesale: false, moq: "Unique", stock: "25 dispo" },
    { id: 503, title: "Mini Projecteur LED Portable", price: "45,000 XAF", isWholesale: false, moq: "Unique", stock: "4 dispo" },
    { id: 504, title: "Trépied Ring Light RGB Salon", price: "18,500 XAF", isWholesale: false, moq: "Unique", stock: "10 dispo" },
    { id: 505, title: "Humidificateur d'air Lumineux", price: "9,000 XAF", isWholesale: false, moq: "Unique", stock: "18 dispo" },
  ].map((p, i) => ({ ...p, shopId: 5, category: "Électronique", images: Array(4).fill(`https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80&sig=${501+i}`) })),

  // --- BOUTIQUE 6: Friperie Crème Mely (Vendeur Simple) ---
  ...[
    { id: 601, title: "Haut Vintage en Soie", price: "4,500 XAF", isWholesale: false, moq: "Unique", stock: "1 dispo" },
    { id: 602, title: "Short Jean Lévis Authentique", price: "6,000 XAF", isWholesale: false, moq: "Unique", stock: "2 dispo" },
    { id: 603, title: "Pull En Maille Rétro", price: "5,500 XAF", isWholesale: false, moq: "Unique", stock: "1 dispo" },
    { id: 604, title: "Robe Fleurie Années 90", price: "7,000 XAF", isWholesale: false, moq: "Unique", stock: "1 dispo" },
    { id: 605, title: "Veste en Jean Délavée", price: "8,500 XAF", isWholesale: false, moq: "Unique", stock: "3 dispo" },
  ].map((p, i) => ({ ...p, shopId: 6, category: "Mode", images: Array(4).fill(`https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&q=80&sig=${601+i}`) })),

  // --- BOUTIQUE 7: Maison du Pagne (Grossiste) ---
  ...[
    { id: 701, title: "Pagne Wax Hollandais (Bloc 3)", price: "45,000 XAF/bloc", isWholesale: true, moq: "2 blocs min", stock: "40 blocs" },
    { id: 702, title: "Pagne Woodin Authentique Standard", price: "18,000 XAF/pièce", isWholesale: true, moq: "5 pièces min", stock: "75 pièces" },
    { id: 703, title: "Super-Wax Block Premium", price: "55,000 XAF/bloc", isWholesale: true, moq: "2 blocs min", stock: "30 blocs" },
    { id: 704, title: "Tissu Kente Qualité Supérieure", price: "25,000 XAF/pièce", isWholesale: true, moq: "4 pièces min", stock: "50 pièces" },
    { id: 705, title: "Bazin Riche Teinté Artisanal", price: "35,000 XAF/pièce", isWholesale: true, moq: "3 pièces min", stock: "60 pièces" },
  ].map((p, i) => ({ ...p, shopId: 7, category: "Mode", images: Array(4).fill(`https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80&sig=${701+i}`) })),

  // --- BOUTIQUE 8: Youndé Shoes Hub (Vendeur Simple) ---
  ...[
    { id: 801, title: "Mocassins Cuir Noir Véritable", price: "32,000 XAF", isWholesale: false, moq: "Unique", stock: "6 dispo" },
    { id: 802, title: "Sneakers Streetwear Édition", price: "25,000 XAF", isWholesale: false, moq: "Unique", stock: "14 dispo" },
    { id: 803, title: "Sandales Confort Été Miel", price: "14,500 XAF", isWholesale: false, moq: "Unique", stock: "9 dispo" },
    { id: 804, title: "Bottines Chelsea Daim Marron", price: "38,000 XAF", isWholesale: false, moq: "Unique", stock: "4 dispo" },
    { id: 805, title: "Escarpins Vernis Élégance", price: "27,000 XAF", isWholesale: false, moq: "Unique", stock: "5 dispo" },
  ].map((p, i) => ({ ...p, shopId: 8, category: "Mode", images: Array(4).fill(`https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80&sig=${801+i}`) })),

  // --- BOUTIQUE 9: Bio-Nature Cameroun (Vendeur Simple) ---
  ...[
    { id: 901, title: "Pot de Miel Pur d'Oku 1L", price: "6,500 XAF", isWholesale: false, moq: "Unique", stock: "30 dispo" },
    { id: 902, title: "Beurre de Karité Brut 500g", price: "3,500 XAF", isWholesale: false, moq: "Unique", stock: "50 dispo" },
    { id: 903, title: "Poudre de Baobab Bio Énergie", price: "4,000 XAF", isWholesale: false, moq: "Unique", stock: "20 dispo" },
    { id: 904, title: "Thé Vert de Tolé Boîte Premium", price: "2,500 XAF", isWholesale: false, moq: "Unique", stock: "45 dispo" },
    { id: 905, title: "Huile d'Avocat Pure Pression", price: "5,000 XAF", isWholesale: false, moq: "Unique", stock: "15 dispo" },
  ].map((p, i) => ({ ...p, shopId: 9, category: "Alimentaire", images: Array(4).fill(`https://images.unsplash.com/photo-1607344645866-009c320c5ab8?w=400&q=80&sig=${901+i}`) })),

  // --- BOUTIQUE 10: Krys Électroménager (Grossiste) ---
  ...[
    { id: 1001, title: "Mixeur Blender Élite Lot de 6", price: "72,000 XAF/lot", isWholesale: true, moq: "1 lot min", stock: "25 lots" },
    { id: 1002, title: "Micro-ondes Numérique Pro Bulk", price: "42,000 XAF/pc", isWholesale: true, moq: "3 pcs min", stock: "40 pcs" },
    { id: 1003, title: "Ventilateurs sur Pied (Carton de 4)", price: "48,000 XAF/ctn", isWholesale: true, moq: "2 cartons", stock: "60 cartons" },
    { id: 1004, title: "Friteuse sans Huile AirFryer", price: "35,000 XAF/pc", isWholesale: true, moq: "4 pcs min", stock: "30 pcs" },
    { id: 1005, title: "Fers à Repasser Vapeur Lot de 10", price: "65,000 XAF/lot", isWholesale: true, moq: "1 lot min", stock: "18 lots" },
  ].map((p, i) => ({ ...p, shopId: 10, category: "Électronique", images: Array(4).fill(`https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=400&q=80&sig=${1001+i}`) })),
];