import React, { useEffect, useState } from 'react';
import { Search, SlidersHorizontal, MapPin, Star, Store, ArrowRight, Truck, PlusCircle, CheckCircle, Flame, Megaphone, Bike, X, ShieldAlert, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


// Fake Data locale pour le rendu visuel
const CATEGORIES = [
  { id: 'all', label: 'Tout voir' },
  { id: 'tech', label: 'Électronique 📱' },
  { id: 'fashion', label: 'Mode & Sapes 👗' },
  { id: 'beauty', label: 'Cosmétiques ✨' },
  { id: 'appliances', label: 'Électroménager 🧊' },
];

const RECENT_PRODUCTS = [
  {
    id: 1,
    title: 'iPhone 13 Pro Max (128 Go)',
    price: '385 000 FCFA',
    location: 'Douala, Akwa',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=400&q=80',
    badge: 'Top Deal',
    momo: true,
    om: true
  },
  {
    id: 2,
    title: 'Paire de Sneakers Streetwear',
    price: '25 000 FCFA',
    location: 'Yaoundé, Bastos',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80',
    badge: 'Tendance',
    momo: true,
    om: false
  },
  {
    id: 3,
    title: 'Enceinte Bluetooth JBL Charge 5',
    price: '65 000 FCFA',
    location: 'Bafoussam',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=80',
    badge: 'Neuf',
    momo: false,
    om: true
  },
  {
    id: 4,
    title: 'Robe en Pagne Moderne Premium',
    price: '18 000 FCFA',
    location: 'Douala, Bonapriso',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80',
    badge: 'Local',
    momo: true,
    om: true
  }
];

const BEST_SHOPS = [
  { id: 1, name: 'Sanza Grossiste Élec', itemsCount: '1.2k articles', rating: '4.9', badge: 'Certifié Nova', city: 'Douala', avatar: '⚡' },
  { id: 2, name: 'Maison du Pagne B2B', itemsCount: '450 lots dispo', rating: '4.8', badge: 'Grossiste', city: 'Yaoundé', avatar: '👗' },
  { id: 3, name: 'Cameroun Import Tech', itemsCount: '2.3k articles', rating: '5.0', badge: 'Fournisseur', city: 'Douala', avatar: '🚢' },
];

const TOP_SELLS = [
  {
    id: 1,
    title: 'Carton de Smartphones Rénovés (Mix 10 pcs)',
    minOrder: 'Moins de 1 carton',
    price: '850 000 FCFA',
    oldPrice: '950 000 FCFA',
    shop: 'Cameroun Import Tech',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80',
    momo: true, om: true
  },
  {
    id: 2,
    title: 'Ballot de Sneakers Streetwear Grade A (50 paires)',
    minOrder: 'À partir de 1 ballot',
    price: '450 000 FCFA',
    oldPrice: '520 000 FCFA',
    shop: 'Sanza Grossiste Élec',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80',
    momo: true, om: false
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // États pour la publicité Pop-up Interstitielle NovaVerse
  const [showNovaAd, setShowNovaAd] = useState(false);
  const [adCountdown, setCountdown] = useState(15);
  const [canCloseAd, setCanCloseAd] = useState(false);

  // Déclenchement automatique de la pub NovaVerse après 15 secondes de navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNovaAd(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  // Compte à rebours de la pub NovaVerse
  useEffect(() => {
    let interval;
    if (showNovaAd && adCountdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (adCountdown === 0) {
      setCanCloseAd(true);
    }
    return () => clearInterval(interval);
  }, [showNovaAd, adCountdown]);

  // 1. Data Bannières Publicitaires (Monétisation)
  const adsBanners = [
    { id: 1, title: "Arrivages Multi-Boutiques !", subtitle: "Électronique & Mode à Douala", bg: "bg-gradient-to-r from-[#0046FF] to-indigo-900", badge: "Sponsorisé" },
    { id: 2, title: "Frais de livraison réduits", subtitle: "Via nos livreurs partenaires à Yaoundé", bg: "bg-gradient-to-r from-[#FF6B00] to-amber-600", badge: "Promo PWA" }
  ];

  // 2. Data Meilleures Boutiques Locales
  const topShops = [
    { id: 1, name: "Nouvelle Ère Tech", location: "Akwa, Douala", rating: 4.9, sales: 340, avatar: "📱", verified: true },
    { id: 2, name: "Maison de la Mode Kamers", location: "Mvan, Yaoundé", rating: 4.8, sales: 210, avatar: "👗", verified: true },
    { id: 3, name: "Bando Électro Center", location: "Marché Central", rating: 4.7, sales: 185, avatar: "⚡", verified: false },
  ];

  // 3. Data Demandes de Livraison (Écosystème logistique)
  const deliveryRequests = [
    { id: 1, from: "Bonapriso", to: "Logbessou", package: "Colis Vêtements", status: "En attente de coursier", price: "1,500 XAF" },
    { id: 2, from: "Mokolo", to: "Bastos", package: "Écran PC Gamer", status: "Urgent", price: "2,500 XAF" },
  ];

  // 4. Data Meilleures Ventes & Nouveautés
  const topProducts = [
    { id: 1, title: "iPhone 13 Pro Max (Occasion d'Europe)", price: "450,000 XAF", shop: "Nouvelle Ère Tech", badge: "Momo/OM", image: "📱", label: "Top Vente" },
    { id: 2, title: "Chaussures Richelieu en Cuir", price: "35,000 XAF", shop: "Maison de la Mode", badge: "Momo", image: "👞", label: "Populaire" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 max-w-md mx-auto pb-24 shadow-2xl border-x border-slate-100 overflow-y-auto">
      
      {/* --- HEADER FIXE AVEC RECHERCHE --- */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md px-4 pt-6 pb-4 border-b border-slate-100 z-40 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0046FF] to-indigo-600 text-white flex items-center justify-center font-black text-sm">
              SO
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tight">
              Sell <span className="text-[#FF6B00]">Out</span>
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
            Cameroun
          </div>
        </div>

        {/* Input de recherche stylisé */}
        <div className="flex gap-2">
          <div className="relative flex-1 flex items-center bg-slate-100 rounded-xl border border-slate-200/50 focus-within:border-[#0046FF]/30 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#0046FF]/5 transition-all">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Que recherchez-vous aujourd'hui ?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent pl-12 pr-4 py-3 text-sm font-semibold text-slate-800 placeholder:text-slate-400 outline-none"
            />
          </div>
          <button className="bg-[#0046FF] text-white p-3 rounded-2xl active:scale-95 transition-transform shadow-md shadow-[#0046FF]/10">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
        
      </div>

      {/* SECTION REGIE BANNIÈRES PUBLICITAIRES COMPLÈTE */}
      <section className="px-4 mt-4">
        <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-none">
          {adsBanners.map((ad) => (
            <div key={ad.id} className={`${ad.bg} min-w-[92%] snap-center rounded-3xl p-5 text-white flex flex-col justify-between shadow-lg relative overflow-hidden`}>
              <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                <Megaphone className="w-2.5 h-2.5" /> {ad.badge}
              </span>
              <div className="mt-4">
                <h3 className="font-black text-lg leading-tight">{ad.title}</h3>
                <p className="text-xs text-white/80 mt-1">{ad.subtitle}</p>
              </div>
              
              {ad.isPromoteCTA ? (
                <button onClick={() => alert("Ouverture du formulaire de soumission publicitaire B2B")} className="mt-4 w-full bg-slate-900 text-white text-xs font-black py-3 rounded-xl flex items-center justify-center gap-1 shadow-sm active:scale-95 transition-transform border border-white/10">
                  Contacter la régie publicitaire <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              ) : (
                <button className="mt-4 w-fit bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 active:scale-95 transition-transform">
                  Découvrir <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 1 : MEILLEURES BOUTIQUES DU PAYS (COMMERÇANTS MIS EN VALEUR) */}
      <section className="mt-6 px-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-black text-slate-900 flex items-center gap-1.5">
            <Store className="w-4 h-4 text-[#0046FF]" /> Boutiques Certifiées
          </h2>
          <span className="text-xs font-bold text-[#0046FF] cursor-pointer">Voir tout</span>
        </div>
        
        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-none">
          {topShops.map((shop) => (
            <div key={shop.id} className="min-w-[170px] bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex flex-col items-center text-center relative">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-xl shadow-inner mb-2">
                {shop.avatar}
              </div>
              <h3 className="text-xs font-black text-slate-800 line-clamp-1 flex items-center gap-1">
                {shop.name}
                {shop.verified && <CheckCircle className="w-3 h-3 text-emerald-500 fill-emerald-500" />}
              </h3>
              <p className="text-[10px] text-slate-400 font-semibold mt-0.5 flex items-center gap-0.5">
                <MapPin className="w-2.5 h-2.5 text-slate-300" /> {shop.location}
              </p>
              <div className="flex items-center gap-2 mt-3 bg-slate-50 px-2 py-1 rounded-lg w-full justify-between text-[10px] font-bold">
                <span className="text-amber-500 flex items-center gap-0.5">★ {shop.rating}</span>
                <span className="text-slate-500">{shop.sales} ventes</span>
              </div>            
            </div>
          ))}
        </div>
      </section>

      {/* SECTION CTA : DEVENIR VENDEUR & CRÉER SA BOUTIQUE */}
      <section className="mt-6 px-4">
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-5 text-white shadow-xl relative overflow-hidden border border-white/5">
          <div className="absolute right-[-20px] bottom-[-20px] text-7xl opacity-10">🏬</div>
          <div className="max-w-[75%]">
            <span className="bg-[#FF6B00] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Opportunité Business
            </span>
            <h3 className="font-black text-base mt-2 leading-snug">Digitalisez votre commerce physique dès aujourd'hui</h3>
            <p className="text-slate-300 text-xs mt-1 font-medium">Créez une ou plusieurs boutiques en 2 minutes et encaissez par MoMo & OM.</p>
          </div>
          <button className="mt-4 w-full bg-[#FF6B00] text-white text-xs font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B00]/20 active:scale-[0.98] transition-transform">
            <PlusCircle className="w-4 h-4" /> Ouvrir ma boutique gratuite
          </button>
        </div>
      </section>

      {/* SECTION LIVRAISONS COLLABORATIVES + CTA DEVENIR LIVREUR */}
      <section className="mt-6 px-4 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-black text-slate-900 flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-brand-orange" /> Logistique Collaborative
          </h2>
        </div>

        {/* Demandes Actives */}
        <div className="space-y-2">
          {deliveryRequests.map((req) => (
            <div key={req.id} className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center">
              <div className="flex items-start gap-2.5">
                <div className="bg-slate-100 p-2 rounded-xl text-lg">📦</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{req.package}</h4>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5">De {req.from} à {req.to}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-black text-brand-blue block">{req.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* BLOC UNIQUE & STYLÉ : DEVENIR LIVREUR */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 text-white p-2.5 rounded-xl shadow-md shadow-emerald-500/20">
              <Bike className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-800">Rentabilisez vos trajets quotidiens</h4>
              <p className="text-[10px] text-slate-500 font-medium mt-0.5">Devenez coursier Sell Out et gagnez de l'argent à chaque déplacement.</p>
            </div>
          </div>
          <button onClick={() => alert("Redirection vers l'inscription Livreur")} className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-xl active:scale-95 transition-transform shrink-0">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* SECTION 2 : MEILLEURES VENTES (PRODUITS DE LA MARKETPLACE) */}
      <section className="mt-6 px-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-base font-black text-slate-900 flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-rose-500" /> Les Meilleures Ventes
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {topProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-full aspect-square bg-slate-50 rounded-xl mb-2 flex items-center justify-center text-3xl shadow-inner relative">
                  <span className="absolute top-2 left-2 bg-rose-500 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-md">
                    {product.label}
                  </span>
                  {product.image}
                </div>
                <h3 className="text-xs font-bold text-slate-800 line-clamp-2 leading-tight">{product.title}</h3>
                <p className="text-[10px] text-[#0046FF] font-bold mt-1">Par : {product.shop}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-50 flex justify-between items-center">
                <span className="text-xs font-black text-slate-900">{product.price}</span>
                <span className="text-[8px] bg-amber-100 text-amber-700 font-extrabold px-1.5 py-0.5 rounded">
                  {product.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION PARTENAIRES & INTEGRATIONS FINTECH */}
      <section className="mt-8 px-4 text-center">
        <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Écosystème Sécurisé & Partenaires</p>
        <div className="flex justify-center items-center gap-6 mt-3 opacity-40 grayscale contrast-200">
          <span className="font-black text-xs">MTN MoMo</span>
          <span className="font-black text-xs">Orange Money</span>
          <span className="font-black text-xs">NovaVerse Inc.</span>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 🌌 MODAL POP-UP INTERSTITIEL : PUBLICITÉ MICRO-STREAM NOVAVERSE */}
      {/* ========================================================== */}
      <AnimatePresence>
        {showNovaAd && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-6 max-w-md mx-auto border-x border-slate-800"
          >
            {/* Top Bar de la Publicité */}
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
                <div className="w-4 h-4 rounded bg-brand-blue flex items-center justify-center text-[8px] font-black text-white">N</div>
                <span className="text-[10px] text-slate-300 font-black tracking-wider uppercase">NovaVerse Ad-Network</span>
              </div>
              
              {/* Bouton de Fermeture Intelligent */}
              <button 
                disabled={!canCloseAd}
                onClick={() => setShowNovaAd(false)}
                className={`p-2 rounded-full transition-all ${
                  canCloseAd ? 'bg-white/10 text-white active:scale-95' : 'bg-white/5 text-slate-600 cursor-not-allowed'
                }`}
              >
                {canCloseAd ? <X className="w-4 h-4" /> : <span className="text-[11px] font-bold px-1">{adCountdown}s</span>}
              </button>
            </div>

            {/* Cœur de la Publicité (Présentation du Service / Nouveauté) */}
            <div className="flex flex-col items-center text-center my-auto space-y-6 px-4">
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-brand-blue to-violet-600 flex items-center justify-center text-4xl shadow-2xl shadow-brand-blue/30 text-white font-black relative"
              >
                N
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 rounded-3xl border-2 border-brand-blue"
                />
              </motion.div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 bg-brand-orange/20 text-brand-orange border border-brand-orange/30 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md">
                  <Sparkles className="w-3 h-3 fill-brand-orange" /> Nouveau Module Live
                </span>
                <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
                  Découvrez <span className="text-brand-blue">NovaMap</span>
                </h2>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  Ne restez plus jamais seul. Partagez vos instants éphémères géolocalisés à Douala & Yaoundé, créez des vibrations réelles et connectez-vous avec fluidité avec vos proches sans aucune friction.
                </p>
              </div>

              {/* Barre de Progression Visuelle en Bas du Contenu */}
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 15, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-brand-blue to-brand-orange"
                />
              </div>
            </div>

            {/* CTA de Capture de données / Curiosité */}
            <div className="space-y-3 w-full">
              <button 
                onClick={() => {
                  alert("Redirection sécurisée vers la PWA NovaMap et capture sécurisée via NovaDonnées !");
                  setShowNovaAd(false);
                }}
                className="w-full bg-gradient-to-r from-brand-blue to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-brand-blue/20 transition-transform active:scale-[0.98]"
              >
                Explorer NovaMap maintenant
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[9px] text-center text-slate-500 font-semibold">
                Protégé par le protocole décentralisé NovaDonnées. Autorisation en un clic.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}