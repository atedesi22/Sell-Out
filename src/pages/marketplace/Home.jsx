// import React, { useEffect, useState } from 'react';
// import { Search, SlidersHorizontal, MapPin, Store, ArrowRight, Truck, PlusCircle, CheckCircle, Flame, Megaphone, Bike, X, Sparkles } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState('');
  
//   // États pour la publicité Pop-up Interstitielle NovaVerse
//   const [showNovaAd, setShowNovaAd] = useState(false);
//   const [adCountdown, setAdCountdown] = useState(5); // Aligné sur les 5 secondes non-passables
//   const [canCloseAd, setCanCloseAd] = useState(false);

//   // Déclenchement automatique de la pub NovaVerse après 15 secondes d'init, puis toutes les 5 minutes
//   useEffect(() => {
//     const initialTimer = setTimeout(() => {
//       setAdCountdown(5);
//       setCanCloseAd(false);
//       setShowNovaAd(true);
//     }, 15000); // 15 secondes initiales

//     const recurrentInterval = setInterval(() => {
//       setAdCountdown(5);
//       setCanCloseAd(false);
//       setShowNovaAd(true);
//     }, 300000); // Toutes les 5 minutes

//     return () => {
//       clearTimeout(initialTimer);
//       clearInterval(recurrentInterval);
//     };
//   }, []);

//   // Gestion rigoureuse du compte à rebours de la pub
//   useEffect(() => {
//     let countdownInterval;
//     if (showNovaAd && adCountdown > 0) {
//       countdownInterval = setInterval(() => {
//         setAdCountdown((prev) => prev - 1);
//       }, 1000);
//     } else if (showNovaAd && adCountdown === 0) {
//       setCanCloseAd(true);
//     }
//     return () => clearInterval(countdownInterval);
//   }, [showNovaAd, adCountdown]);

//   // Données locales
//   const adsBanners = [
//     { id: 1, title: "Arrivages Multi-Boutiques !", subtitle: "Électronique & Mode à Douala", bg: "bg-gradient-to-r from-[#0046FF] to-indigo-900", badge: "Sponsorisé" },
//     { id: 2, title: "Frais de livraison réduits", subtitle: "Via nos livreurs partenaires à Yaoundé", bg: "bg-gradient-to-r from-[#FF6B00] to-amber-600", badge: "Promo PWA" }
//   ];

//   const topShops = [
//     { id: 1, name: "Nouvelle Ère Tech", location: "Akwa, Douala", rating: 4.9, sales: 340, avatar: "📱", verified: true },
//     { id: 2, name: "Maison de la Mode Kamers", location: "Mvan, Yaoundé", rating: 4.8, sales: 210, avatar: "👗", verified: true },
//     { id: 3, name: "Bando Électro Center", location: "Marché Central", rating: 4.7, sales: 185, avatar: "⚡", verified: false },
//   ];

//   const deliveryRequests = [
//     { id: 1, from: "Bonapriso", to: "Logbessou", package: "Colis Vêtements", price: "1 500 XAF" },
//     { id: 2, from: "Mokolo", to: "Bastos", package: "Écran PC Gamer", price: "2 500 XAF" },
//   ];

//   const topProducts = [
//     { id: 1, title: "iPhone 13 Pro Max (Occasion d'Europe)", price: "450 000 XAF", shop: "Nouvelle Ère Tech", badge: "Momo/OM", image: "📱", label: "Top Vente" },
//     { id: 2, title: "Chaussures Richelieu en Cuir", price: "35 000 XAF", shop: "Maison de la Mode", badge: "Momo", image: "👞", label: "Populaire" },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 pb-28 antialiased w-full relative font-sans">
      
//       {/* --- HEADER FIXE AVEC RECHERCHE --- */}
//       <header className="bg-white px-4 md:px-8 pt-6 pb-4 border-b border-slate-100 sticky top-0 z-40 shadow-sm">
//         <div className="max-w-7xl mx-auto flex flex-col gap-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0046FF] to-indigo-600 text-white flex items-center justify-center font-black text-sm">
//                 SO
//               </div>
//               <span className="text-xl font-black text-slate-900 tracking-tight">
//                 Sell <span className="text-[#FF6B00]">Out</span>
//               </span>
//             </div>
            
//             <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
//               <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
//               Cameroun
//             </div>
//           </div>

//           {/* Input de recherche */}
//           <div className="flex gap-2">
//             <div className="relative flex-1 flex items-center bg-slate-100 rounded-xl border border-slate-200/50 focus-within:border-[#0046FF]/30 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#0046FF]/5 transition-all">
//               <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
//               <input
//                 type="text"
//                 placeholder="Que recherchez-vous aujourd'hui ?"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full bg-transparent pl-12 pr-4 py-3 text-sm font-semibold text-slate-800 placeholder:text-slate-400 outline-none"
//               />
//             </div>
//             <button className="bg-[#0046FF] text-white p-3 rounded-xl active:scale-95 transition-transform shadow-md shadow-[#0046FF]/10">
//               <SlidersHorizontal className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* --- RECONSTRUCTION DE LA GRILLE RESPONSIVE --- */}
//       <main className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
//         {/* COLONNE 1 : Publicités & Boutiques */}
//         <div className="space-y-6">
//           {/* SECTION BANNIÈRES PUBLICITAIRES */}
//           <section>
//             <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-none pb-2">
//               {adsBanners.map((ad) => (
//                 <div key={ad.id} className={`${ad.bg} min-w-[92%] md:min-w-full snap-center rounded-2xl p-5 text-white flex flex-col justify-between shadow-md relative overflow-hidden h-40`}>
//                   <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider flex items-center gap-1">
//                     <Megaphone className="w-2.5 h-2.5" /> {ad.badge}
//                   </span>
//                   <div className="mt-4">
//                     <h3 className="font-black text-base leading-tight">{ad.title}</h3>
//                     <p className="text-xs text-white/80 mt-1">{ad.subtitle}</p>
//                   </div>
//                   <button className="mt-4 w-fit bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 active:scale-95 transition-transform">
//                     Découvrir <ArrowRight className="w-3.5 h-3.5" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* SECTION : BOUTIQUES CERTIFIÉES */}
//           <section className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
//                 <Store className="w-4 h-4 text-[#0046FF]" /> Boutiques Certifiées
//               </h2>
//               <span className="text-xs font-bold text-[#0046FF] cursor-pointer">Voir tout</span>
//             </div>
            
//             <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible gap-3 pb-2 md:pb-0 scrollbar-none">
//               {topShops.map((shop) => (
//                 <div key={shop.id} className="min-w-[170px] md:min-w-none bg-slate-50 md:bg-white border border-slate-100 p-4 rounded-xl flex flex-col md:flex-row items-center gap-3 text-center md:text-left relative">
//                   <div className="w-12 h-12 shrink-0 rounded-xl bg-white md:bg-slate-100 flex items-center justify-center text-xl shadow-inner">
//                     {shop.avatar}
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <h3 className="text-xs font-black text-slate-800 truncate flex items-center justify-center md:justify-start gap-1">
//                       {shop.name}
//                       {shop.verified && <CheckCircle className="w-3 h-3 text-emerald-500 fill-emerald-500" />}
//                     </h3>
//                     <p className="text-[10px] text-slate-400 font-semibold mt-0.5 flex items-center justify-center md:justify-start gap-0.5">
//                       <MapPin className="w-2.5 h-2.5 text-slate-300" /> {shop.location}
//                     </p>
//                     <div className="flex items-center gap-2 mt-2 text-[10px] font-bold justify-center md:justify-start">
//                       <span className="text-amber-500">★ {shop.rating}</span>
//                       <span className="text-slate-400">•</span>
//                       <span className="text-slate-500">{shop.sales} ventes</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>

//         {/* COLONNE 2 : Les Meilleures Ventes (Marketplace) */}
//         <div>
//           <section className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm h-full">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
//                 <Flame className="w-4 h-4 text-rose-500" /> Les Meilleures Ventes
//               </h2>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
//               {topProducts.map((product) => (
//                 <div key={product.id} className="bg-slate-50 md:bg-white rounded-xl p-3 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-3 justify-between">
//                   <div className="flex flex-col md:flex-row gap-3 items-center md:items-start flex-1 min-w-0">
//                     <div className="w-full md:w-16 h-24 md:h-16 shrink-0 bg-white rounded-lg flex items-center justify-center text-2xl shadow-inner relative">
//                       <span className="absolute top-1 left-1 bg-rose-500 text-white text-[8px] font-extrabold px-1 py-0.5 rounded">
//                         {product.label}
//                       </span>
//                       {product.image}
//                     </div>
//                     <div className="min-w-0">
//                       <h3 className="text-xs font-bold text-slate-800 line-clamp-2 md:line-clamp-1 leading-tight">{product.title}</h3>
//                       <p className="text-[10px] text-[#0046FF] font-bold mt-1 truncate">Par : {product.shop}</p>
//                       <span className="text-xs font-black text-slate-900 mt-2 block">{product.price}</span>
//                     </div>
//                   </div>
//                   <div className="md:self-end text-center md:text-right shrink-0">
//                     <span className="text-[8px] bg-amber-100 text-amber-700 font-extrabold px-1.5 py-0.5 rounded block w-max md:w-auto mx-auto">
//                       {product.badge}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>

//         {/* COLONNE 3 : Business & Logistique Collaborative */}
//         <div className="space-y-6">
//           {/* SECTION CTA : VENDEUR */}
//           <section>
//             <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-5 text-white shadow-md relative overflow-hidden border border-white/5">
//               <div className="absolute right-[-10px] bottom-[-10px] text-6xl opacity-10">🏬</div>
//               <div className="max-w-[85%]">
//                 <span className="bg-[#FF6B00] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
//                   Opportunité Business
//                 </span>
//                 <h3 className="font-black text-base mt-2 leading-snug">Digitalisez votre commerce physique dès aujourd'hui</h3>
//                 <p className="text-slate-300 text-xs mt-1 font-medium">Créez vos boutiques en 2 minutes et encaissez par MoMo & OM.</p>
//               </div>
//               <button className="mt-4 w-full bg-[#FF6B00] text-white text-xs font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B00]/20 active:scale-[0.98] transition-transform">
//                 <PlusCircle className="w-4 h-4" /> Ouvrir ma boutique gratuite
//               </button>
//             </div>
//           </section>

//           {/* SECTION LOGISTIQUE */}
//           <section className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3">
//             <h2 className="text-sm font-black text-slate-900 flex items-center gap-1.5 mb-2">
//               <Truck className="w-4 h-4 text-[#FF6B00]" /> Logistique Collaborative
//             </h2>

//             <div className="space-y-2">
//               {deliveryRequests.map((req) => (
//                 <div key={req.id} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center">
//                   <div className="flex items-start gap-2.5 min-w-0">
//                     <div className="bg-white p-2 rounded-lg text-base shadow-sm shrink-0">📦</div>
//                     <div className="min-w-0">
//                       <h4 className="text-xs font-bold text-slate-800 truncate">{req.package}</h4>
//                       <p className="text-[10px] text-slate-400 font-semibold mt-0.5 truncate">De {req.from} à {req.to}</p>
//                     </div>
//                   </div>
//                   <div className="text-right shrink-0">
//                     <span className="text-xs font-black text-[#0046FF]">{req.price}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 rounded-xl p-3 flex items-center justify-between gap-3 shadow-sm">
//               <div className="flex items-center gap-3 min-w-0">
//                 <div className="bg-emerald-500 text-white p-2 rounded-lg shadow-md shrink-0">
//                   <Bike className="w-4 h-4" />
//                 </div>
//                 <div className="min-w-0">
//                   <h4 className="text-xs font-black text-slate-800 truncate">Rentabilisez vos trajets</h4>
//                   <p className="text-[9px] text-slate-500 font-medium mt-0.5 line-clamp-1">Devenez coursier Sell Out et gagnez de l'argent.</p>
//                 </div>
//               </div>
//               <button onClick={() => alert("Redirection vers l'inscription Livreur")} className="bg-emerald-600 text-white p-2 rounded-lg active:scale-95 transition-transform shrink-0">
//                 <ArrowRight className="w-3.5 h-3.5" />
//               </button>
//             </div>
//           </section>
//         </div>

//       </main>

//       {/* --- SECTION PARTENAIRES & INTEGRATIONS FINTECH --- */}
//       <footer className="mt-12 px-4 text-center max-w-7xl mx-auto">
//         <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Écosystème Sécurisé & Partenaires</p>
//         <div className="flex justify-center items-center gap-6 mt-3 opacity-40 grayscale contrast-200">
//           <span className="font-black text-xs">MTN MoMo</span>
//           <span className="font-black text-xs">Orange Money</span>
//           <span className="font-black text-xs">NovaVerse Inc.</span>
//         </div>
//       </footer>

//       {/* ========================================================== */}
//       {/* 🌌 MODAL POP-UP INTERSTITIEL : PUBLICITÉ MICRO-STREAM NOVAVERSE */}
//       {/* ========================================================== */}
//       <AnimatePresence>
//         {showNovaAd && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-6 max-w-md mx-auto border-x border-slate-800 md:rounded-2xl md:my-6 md:h-[calc(100vh-3rem)] md:shadow-2xl"
//           >
//             {/* Top Bar */}
//             <div className="flex justify-between items-center w-full">
//               <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
//                 <div className="w-4 h-4 rounded bg-[#0046FF] flex items-center justify-center text-[8px] font-black text-white">N</div>
//                 <span className="text-[10px] text-slate-300 font-black tracking-wider uppercase">NovaVerse Ad-Network</span>
//               </div>
              
//               {/* Bouton de Fermeture Intelligent */}
//               <button 
//                 disabled={!canCloseAd}
//                 onClick={() => setShowNovaAd(false)}
//                 className={`p-2 rounded-full transition-all ${
//                   canCloseAd ? 'bg-white/10 text-white active:scale-95' : 'bg-white/5 text-slate-600 cursor-not-allowed'
//                 }`}
//               >
//                 {canCloseAd ? <X className="w-4 h-4" /> : <span className="text-[11px] font-bold px-1">{adCountdown}s</span>}
//               </button>
//             </div>

//             {/* Contenu de la Publicité */}
//             <div className="flex flex-col items-center text-center my-auto space-y-6 px-4">
//               <motion.div 
//                 initial={{ scale: 0.9, y: 20 }}
//                 animate={{ scale: 1, y: 0 }}
//                 className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#0046FF] to-violet-600 flex items-center justify-center text-4xl shadow-2xl shadow-[#0046FF]/30 text-white font-black relative"
//               >
//                 N
//                 <motion.div 
//                   animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
//                   transition={{ repeat: Infinity, duration: 2 }}
//                   className="absolute inset-0 rounded-3xl border-2 border-[#0046FF]"
//                 />
//               </motion.div>

//               <div className="space-y-2">
//                 <span className="inline-flex items-center gap-1 bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md">
//                   <Sparkles className="w-3 h-3 fill-[#FF6B00]" /> Nouveau Module Live
//                 </span>
//                 <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
//                   Découvrez <span className="text-[#0046FF]">NovaMap</span>
//                 </h2>
//                 <p className="text-xs text-slate-400 font-medium leading-relaxed">
//                   Ne restez plus jamais seul. Partagez vos instants éphémères géolocalisés à Douala & Yaoundé, créez des vibrations réelles et connectez-vous avec fluidité avec vos proches sans aucune friction.
//                 </p>
//               </div>

//               {/* Barre de Progression en phase avec les 5 secondes */}
//               <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
//                 <motion.div 
//                   initial={{ width: "0%" }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 5, ease: "linear" }}
//                   className="h-full bg-gradient-to-r from-[#0046FF] to-[#FF6B00]"
//                 />
//               </div>
//             </div>

//             {/* CTA Bas de page */}
//             <div className="space-y-3 w-full">
//               <button 
//                 onClick={() => {
//                   alert("Redirection sécurisée vers la PWA NovaMap et capture sécurisée via NovaDonnées !");
//                   setShowNovaAd(false);
//                 }}
//                 className="w-full bg-gradient-to-r from-[#0046FF] to-indigo-600 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-[#0046FF]/20 transition-transform active:scale-[0.98]"
//               >
//                 Explorer NovaMap maintenant
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//               <p className="text-[9px] text-center text-slate-500 font-semibold">
//                 Protégé par le protocole décentralisé NovaDonnées. Autorisation en un clic.
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
      
//     </div>
//   );
// }





import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, SlidersHorizontal, MapPin, Star, Store, ArrowRight, 
  Truck, PlusCircle, CheckCircle, Flame, Megaphone, Bike, X, Sparkles 
} from 'lucide-react';

export default function Home() {
  // --- 1. DATA SIMULÉE (Placée ici pour être accessible partout) ---
  const adsBanners = [
    { id: 1, title: "Propulsez votre entreprise ici !", subtitle: "Touchez plus de 500 000 acheteurs actifs ce mois au Cameroun.", bg: "bg-gradient-to-r from-[#FF6B00] to-red-600", badge: "Régie Pub B2B", isPromoteCTA: true },
    { id: 2, title: "Arrivages Multi-Boutiques !", subtitle: "Électronique & Mode en direct d'Akwa", bg: "bg-gradient-to-r from-[#0046FF] to-indigo-900", badge: "Sponsorisé", isPromoteCTA: false },
  ];

  const topShops = [
    { id: 1, name: "Nouvelle Ère Tech", location: "Akwa, Douala", rating: 4.9, sales: 340, avatar: "📱", verified: true },
    { id: 2, name: "Maison de la Mode Kamers", location: "Mvan, Yaoundé", rating: 4.8, sales: 210, avatar: "👗", verified: true },
    { id: 3, name: "Bando Électro Center", location: "Marché Central", rating: 4.7, sales: 185, avatar: "⚡", verified: false },
  ];

  const deliveryRequests = [
    { id: 1, from: "Bonapriso", to: "Logbessou", package: "Colis Vêtements", status: "En attente", price: "1,500 XAF" },
    { id: 2, from: "Mokolo", to: "Bastos", package: "Écran PC Gamer", status: "Urgent", price: "2,500 XAF" },
  ];

  const topProducts = [
    { id: 1, title: "iPhone 13 Pro Max (Occasion d'Europe)", price: "450,000 XAF", shop: "Nouvelle Ère Tech", badge: "MoMo/OM", image: "📱", label: "Top Vente" },
    { id: 2, title: "Chaussures Richelieu en Cuir", price: "35,000 XAF", shop: "Maison de la Mode", badge: "MoMo", image: "👞", label: "Populaire" },
    { id: 3, title: "MacBook Pro M1 16GB", price: "650,000 XAF", shop: "Nouvelle Ère Tech", badge: "MoMo/OM", image: "💻", label: "Premium" },
    { id: 4, title: "Enceinte JBL Boombox 3", price: "180,000 XAF", shop: "Bando Électro", badge: "OM", image: "🔊", label: "Nouveau" },
  ];

  // --- 2. ÉTATS (STATES) ---
  const [searchQuery, setSearchQuery] = useState('');
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  
  // États pour la publicité Pop-up Interstitielle NovaVerse
  const [showNovaAd, setShowNovaAd] = useState(false);
  const [adCountdown, setCountdown] = useState(15);
  const [canCloseAd, setCanCloseAd] = useState(false);

  // --- 3. EFFETS (USEEFFECTS) ---

  // Gestion du slider publicitaire automatique (toutes les 4 secondes)
  useEffect(() => {
    const adSliderInterval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => 
        prevIndex === adsBanners.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(adSliderInterval);
  }, [adsBanners.length]);

  // Gestion des Timers : Déclenchement initial à 4s + Relance toutes les 5min (300000ms)
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowNovaAd(true);
    }, 15000);

    const recurrentInterval = setInterval(() => {
      setCountdown(5);
      setCanCloseAd(false);
      setShowNovaAd(true);
    }, 300000); 

    return () => {
      clearTimeout(initialTimer);
      clearInterval(recurrentInterval);
    };
  }, []);

  // Gestion du compte à rebours de la publicité Interstitielle
  useEffect(() => {
    let countdownInterval;
    if (showNovaAd && adCountdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (adCountdown === 0) {
      setCanCloseAd(true);
    }
    return () => clearInterval(countdownInterval);
  }, [showNovaAd, adCountdown]);

  return (
    <div className="min-h-screen bg-white pb-28 text-slate-950 font-sans antialiased w-full relative overflow-x-hidden">
      
      {/* HEADER ADAPTATIF */}
      <header className="bg-white px-4 md:px-8 pt-6 pb-4 border-b border-slate-100 sticky top-0 z-40 shadow-sm">
         <div className="max-w-7xl mx-auto flex flex-col gap-4">
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

           {/* Input de recherche */}
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
             <button className="bg-[#0046FF] text-white p-3 rounded-xl active:scale-95 transition-transform shadow-md shadow-[#0046FF]/10">
               <SlidersHorizontal className="w-5 h-5" />
             </button>
           </div>
         </div>
       </header>

      {/* MULTI-COLUMNS RESPONSIVE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 md:px-6">

        {/* COLONNE DROITE : Actions Métiers, Recrutements, Logistique */}
        <div className="space-y-6">
          {/* SECTION CRÉATION MULTI-BOUTIQUES */}
          <section>
             <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-5 text-white shadow-md relative overflow-hidden border border-white/5">
               <div className="absolute right-[-10px] bottom-[-10px] text-6xl opacity-10">🏬</div>
               <div className="max-w-[85%]">
                 <span className="bg-[#FF6B00] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                   Opportunité Business
                 </span>
                 <h3 className="font-black text-base mt-2 leading-snug">Digitalisez votre commerce physique dès aujourd'hui</h3>
                 <p className="text-slate-300 text-xs mt-1 font-medium">Créez vos boutiques en 2 minutes et encaissez par MoMo & OM.</p>
               </div>
               <button className="mt-4 w-full bg-[#FF6B00] text-white text-xs font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B00]/20 active:scale-[0.98] transition-transform">
                 <PlusCircle className="w-4 h-4" /> Ouvrir ma boutique gratuite
               </button>
             </div>
           </section>

          {/* SECTION ECOSYSTÈME LOGISTIQUE & LIVRAISONS */}
          <section className="space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-black text-slate-900 flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#FF6B00]" /> Flux Logistique Live
              </h2>
            </div>

            <div className="space-y-2">
              {deliveryRequests.map((req) => (
                <div key={req.id} className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center hover:border-slate-200 transition-colors">
                  <div className="flex items-start gap-2.5">
                    <div className="bg-slate-100 p-2 rounded-xl text-lg">📦</div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{req.package}</h4>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5">De <span className="text-slate-600 font-bold">{req.from}</span> à <span className="text-slate-600 font-bold">{req.to}</span></p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-[#0046FF] block">{req.price}</span>
                    <span className="text-[8px] bg-slate-100 text-slate-500 font-bold px-1.5 py-0.5 rounded mt-1 inline-block">Prendre</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-500 text-white p-2.5 rounded-xl shadow-md">
                  <Bike className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-800">Rentabilisez vos trajets</h4>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">Devenez coursier indépendant Sell Out et gagnez de l'argent à chaque course urbaine.</p>
                </div>
              </div>
              <button onClick={() => alert("Inscription livreur")} className="bg-emerald-600 text-white p-2 rounded-xl active:scale-95 transition-transform shrink-0">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </div>
        
        {/* COLONNE GAUCHE : Flux des Ventes, Pubs et Boutiques */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* BANNIÈRES PUBLICITAIRES */}
          <section className="relative overflow-hidden rounded-3xl shadow-lg">
            <div className="flex md:hidden overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-none pb-1">
              {adsBanners.map((ad) => (
                <div key={ad.id} className={`${ad.bg} min-w-[100%] snap-center rounded-3xl p-5 text-white flex flex-col justify-between relative min-h-[160px]`}>
                  <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                    <Megaphone className="w-2.5 h-2.5" /> {ad.badge}
                  </span>
                  <div className="mt-4">
                    <h3 className="font-black text-lg leading-tight">{ad.title}</h3>
                    <p className="text-xs text-white/80 mt-1">{ad.subtitle}</p>
                  </div>
                  {ad.isPromoteCTA ? (
                    <button onClick={() => alert("Formulaire de régie pub")} className="mt-4 w-full bg-slate-900 text-white text-xs font-black py-3 rounded-xl flex items-center justify-center gap-1 active:scale-95 transition-transform border border-white/10">
                      Placer votre publicité <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>
                  ) : (
                    <button className="mt-4 w-fit bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 active:scale-95 transition-transform">
                      Découvrir <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden md:block relative min-h-[180px] w-full rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAdIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`${adsBanners[currentAdIndex].bg} absolute inset-0 p-6 text-white flex flex-col justify-between`}
                >
                  <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                    <Megaphone className="w-3 h-3" /> {adsBanners[currentAdIndex].badge}
                  </span>
                  
                  <div className="max-w-xl mt-2">
                    <h3 className="font-black text-xl lg:text-2xl leading-tight">{adsBanners[currentAdIndex].title}</h3>
                    <p className="text-sm text-white/80 mt-1.5">{adsBanners[currentAdIndex].subtitle}</p>
                  </div>

                  {adsBanners[currentAdIndex].isPromoteCTA ? (
                    <button onClick={() => alert("Formulaire de régie pub")} className="mt-4 w-fit bg-slate-900 text-white text-xs font-black py-3 px-6 rounded-xl flex items-center gap-2 hover:bg-slate-800 transition-colors border border-white/10">
                      Placer votre publicité <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button className="mt-4 w-fit bg-white text-slate-900 text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-1 hover:bg-slate-100 transition-colors">
                      Découvrir <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-4 right-6 flex gap-1.5 z-10">
                {adsBanners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAdIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentAdIndex === index ? 'w-4 bg-white' : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* MEILLEURES BOUTIQUES */}
          <section>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-base font-black text-slate-900 flex items-center gap-1.5">
                <Store className="w-4 h-4 text-[#0046FF]" /> Boutiques Certifiées
              </h2>
              <span className="text-xs font-bold text-[#0046FF] cursor-pointer">Voir tout</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {topShops.map((shop) => (
                <div key={shop.id} className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex flex-col items-center text-center relative hover:border-slate-200 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-xl mb-2">{shop.avatar}</div>
                  <h3 className="text-xs font-black text-slate-800 line-clamp-1 flex items-center gap-1">
                    {shop.name} {shop.verified && <CheckCircle className="w-3 h-3 text-emerald-500 fill-emerald-500" />}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{shop.location}</p>
                  <div className="flex items-center gap-2 mt-3 bg-slate-50 px-2 py-1 rounded-lg w-full justify-between text-[10px] font-bold">
                    <span className="text-amber-500">★ {shop.rating}</span>
                    <span className="text-slate-500">{shop.sales} v.</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* MEILLEURES VENTES */}
          <section>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-base font-black text-slate-900 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-rose-500" /> Les Meilleures Ventes
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              {topProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm flex flex-col justify-between hover:border-slate-200 transition-colors">
                  <div>
                    <div className="w-full aspect-square bg-slate-50 rounded-xl mb-2 flex items-center justify-center text-3xl relative shadow-inner">
                      <span className="absolute top-2 left-2 bg-rose-500 text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded">
                        {product.label}
                      </span>
                      {product.image}
                    </div>
                    <h3 className="text-xs font-bold text-slate-800 line-clamp-2 leading-tight">{product.title}</h3>
                    <p className="text-[10px] text-[#0046FF] font-bold mt-1">Par: {product.shop}</p>
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

        </div>

      </div>

      {/* FOOTER PARTENAIRES */}
      <section className="mt-12 px-4 text-center">
        <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Partenaires Fintech Intégrés</p>
        <div className="flex justify-center items-center gap-6 mt-3 opacity-40 grayscale contrast-200 text-[11px] font-black">
          <span>MTN MoMo</span>
          <span>Orange Money</span>
          <span>NovaVerse Inc.</span>
        </div>
      </section>

      {/* PUBLICITÉ NOVAVERSE */}
      <AnimatePresence>
        {showNovaAd && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-6 max-w-md mx-auto border-x border-slate-800"
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <div className="w-4 h-4 rounded bg-[#0046FF] flex items-center justify-center text-[8px] font-black text-white">N</div>
                <span className="text-[10px] text-slate-300 font-black tracking-wider uppercase">NovaVerse Ad-Network</span>
              </div>
              
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

            <div className="flex flex-col items-center text-center my-auto space-y-6 px-4">
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#0046FF] to-violet-600 flex items-center justify-center text-4xl shadow-2xl shadow-[#0046FF]/30 text-white font-black relative"
              >
                N
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 rounded-3xl border-2 border-[#0046FF]"
                />
              </motion.div>

              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 text-[9px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md">
                  <Sparkles className="w-3 h-3 fill-[#FF6B00]" /> Nouveau Module Live
                </span>
                <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
                  Découvrez <span className="text-[#0046FF]">NovaMap</span>
                </h2>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  Ne restez plus jamais seul. Partagez vos instants éphémères géolocalisés au Cameroun, créez des vibrations réelles et connectez-vous de manière fluide avec vos proches.
                </p>
              </div>

              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-[#0046FF] to-[#FF6B00]"
                />
              </div>
            </div>

            <div className="space-y-3 w-full">
              <button 
                onClick={() => {
                  alert("Redirection sécurisée vers NovaMap !");
                  setShowNovaAd(false);
                }}
                className="w-full bg-gradient-to-r from-[#0046FF] to-indigo-600 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-[#0046FF]/20 transition-transform active:scale-[0.98]"
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