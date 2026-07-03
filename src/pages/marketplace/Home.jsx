

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, SlidersHorizontal, MapPin, Star, Store, ArrowRight, 
  Truck, PlusCircle, CheckCircle, Flame, Megaphone, Bike, X, Sparkles, 
  ShieldCheck, ShoppingBag, Layers
} from 'lucide-react';
import MainFeed from './MainFeed';

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

  const b2bDemands = [
  { id: 1, type: "Groupage", target: "Écrans PC Gamer", progress: 75, remaining: "2 places", savings: "-25%", status: "Presque complet" },
  { id: 2, type: "Cotation", user: "Grossiste Marché Central", item: "50 paires Chaussures Cuir", budget: "Offre à soumettre", status: "Urgent" },
  { id: 3, type: "Groupage", target: "Mèches & Perruques (Luxe)", progress: 40, remaining: "6 places", savings: "-35%", status: "En cours" },
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
    }, 4000);

    return () => clearInterval(adSliderInterval);
  }, [adsBanners.length]);

  // Gestion des Timers : Déclenchement initial à 4s + Relance toutes les 5min (300000ms)
  useEffect(() => {
    const initialTimer = setTimeout(() => {
        setCountdown(12);
        setCanCloseAd(false);
        setShowNovaAd(true);
    }, 15000);

    const recurrentInterval = setInterval(() => {
      setCountdown(12);
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
    <div className="relative w-full min-h-screen overflow-x-hidden font-sans antialiased bg-white pb-28 text-slate-950">
      
      {/* HEADER ADAPTATIF */}
      <header className="sticky top-0 z-40 px-4 pt-6 pb-4 bg-white border-b shadow-sm md:px-8 border-slate-100">
         <div className="flex flex-col gap-4 mx-auto max-w-7xl">
           <div className="flex items-center justify-between">
             <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0046FF] to-indigo-600 text-white flex items-center justify-center font-black text-sm">
                 SO
               </div>
               <span className="text-xl font-black tracking-tight text-slate-900">
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
               <Search className="absolute w-5 h-5 pointer-events-none text-slate-400 left-4" />
               <input
                 type="text"
                 placeholder="Que recherchez-vous aujourd'hui ?"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="w-full py-3 pl-12 pr-4 text-sm font-semibold bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
               />
             </div>
             <button className="bg-[#0046FF] text-white p-3 rounded-xl active:scale-95 transition-transform shadow-md shadow-[#0046FF]/10">
               <SlidersHorizontal className="w-5 h-5" />
             </button>
           </div>
         </div>
       </header>

      {/* MULTI-COLUMNS RESPONSIVE GRID */}
      <div className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-3 md:px-6">

        {/* COLONNE DROITE : Actions Métiers, Recrutements, Logistique */}
        <div className="space-y-6">
          {/* SECTION CRÉATION MULTI-BOUTIQUES */}
          <section>
             <div className="relative p-5 overflow-hidden text-white border shadow-md bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl border-white/5">
               <div className="absolute right-[-10px] bottom-[-10px] text-6xl opacity-10">🏬</div>
               <div className="max-w-[85%]">
                 <span className="bg-[#FF6B00] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                   Opportunité Business
                 </span>
                 <h3 className="mt-2 text-base font-black leading-snug">Digitalisez votre commerce physique dès aujourd'hui</h3>
                 <p className="mt-1 text-xs font-medium text-slate-300">Créez vos boutiques en 2 minutes et encaissez par MoMo & OM.</p>
               </div>
               <button className="mt-4 w-full bg-[#FF6B00] text-white text-xs font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B00]/20 active:scale-[0.98] transition-transform">
                 <PlusCircle className="w-4 h-4" /> Ouvrir ma boutique gratuite
               </button>
             </div>
           </section>

          {/* SECTION ECOSYSTÈME DEMANDES B2B & GROUPAGES LIVE */}
            <section className="space-y-3">
            <div className="flex items-center justify-between">
                <h2 className="text-base font-black text-slate-900 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#FF6B00]" /> Demandes & Groupages Gros
                </h2>
                <span className="text-[10px] bg-[#FF6B00]/10 text-[#FF6B00] font-black px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                Live Cameroun
                </span>
            </div>

            <div className="space-y-2.5">
                {b2bDemands.map((demand) => (
                <div key={demand.id} className="p-4 transition-all bg-white border shadow-sm rounded-2xl border-slate-100 hover:border-slate-200">
                    <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5">
                        <div className={`p-2 rounded-xl text-xs font-black shrink-0 ${
                        demand.type === "Groupage" 
                            ? "bg-[#0046FF]/10 text-[#0046FF]" 
                            : "bg-purple-500/10 text-purple-600"
                        }`}>
                        {demand.type === "Groupage" ? "📦 GROUP" : "💼 COTE"}
                        </div>
                        <div>
                        <h4 className="text-xs font-black leading-tight text-slate-800">
                            {demand.type === "Groupage" ? demand.target : demand.item}
                        </h4>
                        <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
                            {demand.type === "Groupage" ? `Reste : ${demand.remaining}` : demand.user}
                        </p>
                        </div>
                    </div>
                    
                    <div className="text-right shrink-0">
                        {demand.type === "Groupage" ? (
                        <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                            {demand.savings}
                        </span>
                        ) : (
                        <span className="text-[9px] bg-rose-500 text-white font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wide">
                            {demand.status}
                        </span>
                        )}
                    </div>
                    </div>

                    {/* Barre de progression visuelle uniquement pour les achats groupés */}
                    {demand.type === "Groupage" && (
                    <div className="mt-3">
                        <div className="flex justify-between text-[9px] text-slate-400 font-bold mb-1">
                        <span>Remplissage</span>
                        <span className="text-slate-600">{demand.progress}%</span>
                        </div>
                        <div className="w-full h-1 overflow-hidden rounded-full bg-slate-100">
                        <div 
                            className="h-full bg-gradient-to-r from-[#0046FF] to-emerald-500" 
                            style={{ width: `${demand.progress}%` }}
                        />
                        </div>
                    </div>
                    )}

                    <button 
                    onClick={() => alert(`Rejoindre ou répondre à l'action ${demand.id}`)}
                    className="mt-3 w-full bg-slate-50 hover:bg-slate-100 border border-slate-200/40 text-slate-700 text-[11px] font-black py-2 rounded-xl flex items-center justify-center gap-1 transition-colors"
                    >
                    {demand.type === "Groupage" ? "Rejoindre le convoi" : "Proposer un prix de gros"}
                    <ArrowRight className="w-3 h-3" />
                    </button>
                </div>
                ))}
            </div>

            {/* CTA d'engagement pour les grossistes */}
            <div className="bg-gradient-to-r from-[#0046FF]/10 to-indigo-500/5 border border-[#0046FF]/20 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-sm">
                <div className="flex items-center gap-3">
                <div className="bg-[#0046FF] text-white p-2.5 rounded-xl shadow-md">
                    <SlidersHorizontal className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="text-xs font-black text-slate-800">Un besoin spécifique en volume ?</h4>
                    <p className="text-[10px] text-slate-500 font-medium mt-0.5"> Lancez un appel d'offres anonyme aux grossistes d'Akwa et Mokolo.</p>
                </div>
                </div>
                <button onClick={() => alert("Lancer une demande")} className="bg-[#0046FF] text-white p-2 rounded-xl active:scale-95 transition-transform shrink-0">
                <PlusCircle className="w-4 h-4" />
                </button>
            </div>
            </section>
        </div>

        {/* COLONNE CENTRALE : LE FLUX PRINCIPAL B2B (Jour 3) */}
          <main className="order-1 col-span-1 lg:col-span-8 lg:order-1">
            
            <MainFeed />
          </main>
        
        {/* COLONNE GAUCHE : Flux des Ventes, Pubs et Boutiques */}
        <div className="space-y-6 lg:col-span-2">
          
          {/* BANNIÈRES PUBLICITAIRES */}
          <section className="relative overflow-hidden shadow-lg rounded-3xl">
            <div className="flex gap-4 pb-1 overflow-x-auto md:hidden snap-x snap-mandatory scrollbar-none">
              {adsBanners.map((ad) => (
                <div key={ad.id} className={`${ad.bg} min-w-[100%] snap-center rounded-3xl p-5 text-white flex flex-col justify-between relative min-h-[160px]`}>
                    
                  <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                    <Megaphone className="w-2.5 h-2.5" /> {ad.badge}
                  </span>
                  <div className="mt-4">
                    <h3 className="text-lg font-black leading-tight">{ad.title}</h3>
                    <p className="mt-1 text-xs text-white/80">{ad.subtitle}</p>
                  </div>
                  {ad.isPromoteCTA ? (
                    <button onClick={() => alert("Formulaire de régie pub")} className="flex items-center justify-center w-full gap-1 py-3 mt-4 text-xs font-black text-white transition-transform border bg-slate-900 rounded-xl active:scale-95 border-white/10">
                      Placer votre publicité <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>
                  ) : (
                    <button className="flex items-center gap-1 px-4 py-2 mt-4 text-xs font-bold transition-transform bg-white w-fit text-slate-900 rounded-xl active:scale-95">
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
                    <h3 className="text-xl font-black leading-tight lg:text-2xl">{adsBanners[currentAdIndex].title}</h3>
                    <p className="text-sm text-white/80 mt-1.5">{adsBanners[currentAdIndex].subtitle}</p>
                  </div>

                  {adsBanners[currentAdIndex].isPromoteCTA ? (
                    <button onClick={() => alert("Formulaire de régie pub")} className="flex items-center gap-2 px-6 py-3 mt-4 text-xs font-black transition-colors bg-white border w-fit text-slate-900 rounded-xl hover:bg-slate-800 border-white/10">
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
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-black text-slate-900 flex items-center gap-1.5">
                <Store className="w-4 h-4 text-[#0046FF]" /> Boutiques Certifiées
              </h2>
              <span className="text-xs font-bold text-[#0046FF] cursor-pointer">Voir tout</span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {topShops.map((shop) => (
                <div key={shop.id} className="relative flex flex-col items-center p-4 text-center transition-colors bg-white border shadow-sm border-slate-100 rounded-2xl hover:border-slate-200">
                  <div className="flex items-center justify-center w-12 h-12 mb-2 text-xl rounded-2xl bg-slate-100">{shop.avatar}</div>
                  <h3 className="flex items-center gap-1 text-xs font-black text-slate-800 line-clamp-1">
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
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-black text-slate-900 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-rose-500" /> Les Meilleures Ventes
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {topProducts.map((product) => (
                <div key={product.id} className="flex flex-col justify-between p-3 transition-colors bg-white border shadow-sm rounded-2xl border-slate-100 hover:border-slate-200">
                  <div>
                    <div className="relative flex items-center justify-center w-full mb-2 text-3xl shadow-inner aspect-square bg-slate-50 rounded-xl">
                      <span className="absolute top-2 left-2 bg-rose-500 text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded">
                        {product.label}
                      </span>
                      {product.image}
                    </div>
                    <h3 className="text-xs font-bold leading-tight text-slate-800 line-clamp-2">{product.title}</h3>
                    <p className="text-[10px] text-[#0046FF] font-bold mt-1">Par: {product.shop}</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 mt-3 border-t border-slate-50">
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
      <section className="px-4 mt-12 text-center">
        <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Partenaires Fintech Intégrés</p>
        <div className="flex justify-center items-center gap-6 mt-3 opacity-40 grayscale contrast-200 text-[11px] font-black">
          <span>MTN MoMo</span>
          <span>Orange Money</span>
          <span>NovaVerse Inc.</span>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 🌌 ENHANCED INTERSTITIEL PUBLICITAIRE : NOVAVERSE FULLSCREEN */}
      {/* ========================================================== */}
      <AnimatePresence>
        {showNovaAd && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-between p-6 overflow-y-auto bg-slate-950 lg:p-12"
          >
            {/* Background spatial abstrait subtil */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,70,255,0.15),transparent_40%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,107,0,0.1),transparent_40%)] pointer-events-none" />

            {/* Topbar Pub */}
            <div className="relative z-10 flex items-center justify-between w-full max-w-5xl mx-auto">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
                <div className="w-4 h-4 rounded bg-gradient-to-r from-[#0046FF] to-violet-600 flex items-center justify-center text-[8px] font-black text-white">N</div>
                <span className="text-[10px] text-slate-300 font-black tracking-wider uppercase">NovaVerse Ad-Network (Premium)</span>
              </div>
              
              <button 
                disabled={!canCloseAd}
                onClick={() => setShowNovaAd(false)}
                className={`p-2.5 rounded-full transition-all flex items-center justify-center ${
                  canCloseAd ? 'bg-white/10 text-white hover:bg-white/20 active:scale-95' : 'bg-white/5 text-slate-600 cursor-not-allowed'
                }`}
              >
                {canCloseAd ? <X className="w-5 h-5" /> : <span className="text-xs font-black px-1.5">{adCountdown}s</span>}
              </button>
            </div>

            {/* Corps Elargi de l'annonce */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-2xl px-4 mx-auto my-auto space-y-8 text-center">
              {/* Grand Badge NovaVerse Évolutif */}
              <motion.div 
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                className="w-28 h-28 lg:w-32 lg:h-32 rounded-[2rem] bg-gradient-to-tr from-[#0046FF] via-[#0046FF] to-violet-600 flex items-center justify-center text-5xl shadow-2xl shadow-[#0046FF]/40 text-white font-black relative"
              >
                N
                <motion.div 
                  animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-[2rem] border-2 border-[#0046FF]"
                />
              </motion.div>

              {/* Textes et Arguments Élargis */}
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1.5 bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 fill-[#FF6B00]" /> Déploiement Écosystème
                </span>
                
                <h2 className="text-3xl font-black leading-none tracking-tight text-white lg:text-5xl">
                  L'univers <span className="text-[#0046FF] bg-gradient-to-r from-[#0046FF] to-violet-400 bg-clip-text text-transparent">NovaMap</span> arrive
                </h2>
                
                <p className="max-w-xl text-sm font-medium leading-relaxed lg:text-base text-slate-400">
                  Ne restez plus jamais isolé au Cameroun. Partagez vos instants éphémères géolocalisés, basculez en mode connexion discrète et vivez des interactions ultra-fluides, sans compromis sur la sécurité.
                </p>
              </div>

              {/* Grille des fonctionnalités clefs intégrées à la pub */}
              <div className="grid w-full max-w-md grid-cols-3 gap-3 pt-2">
                <div className="flex flex-col items-center p-3 border bg-white/5 border-white/5 rounded-2xl">
                  <ShoppingBag className="w-5 h-5 text-[#0046FF] mb-1" />
                  <span className="text-[10px] text-slate-300 font-bold">Social First</span>
                </div>
                <div className="flex flex-col items-center p-3 border bg-white/5 border-white/5 rounded-2xl">
                  <ShieldCheck className="w-5 h-5 mb-1 text-emerald-500" />
                  <span className="text-[10px] text-slate-300 font-bold">NovaDonnées</span>
                </div>
                <div className="flex flex-col items-center p-3 border bg-white/5 border-white/5 rounded-2xl">
                  <Layers className="w-5 h-5 text-[#FF6B00] mb-1" />
                  <span className="text-[10px] text-slate-300 font-bold">Instants Live</span>
                </div>
              </div>

              {/* Barre de Progression Linéaire synchronisée */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden max-w-md">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 15, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-[#0046FF] to-[#FF6B00]"
                />
              </div>
            </div>

            {/* CTA d'action Elargi */}
            <div className="relative z-10 w-full max-w-md pt-4 mx-auto space-y-4">
              <button 
                onClick={() => {
                  alert("Redirection sécurisée vers l'environnement NovaMap !");
                  setShowNovaAd(false);
                }}
                className="w-full bg-gradient-to-r from-[#0046FF] to-indigo-600 text-white font-black py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-[#0046FF]/20 hover:from-[#0036D9] hover:to-indigo-700 transition-all active:scale-[0.98]"
              >
                En savoir plus sur NovaMap
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-[9px] text-center text-slate-500 font-semibold tracking-wide">
                Sécurisé et interconnecté avec ton compte Sell Out via NovaVerse Inc.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}