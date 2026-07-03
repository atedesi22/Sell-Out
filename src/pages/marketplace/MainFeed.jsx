// src/components/MainFeed.jsx
import React, { useState } from 'react';
// import { mockShops, mockProducts } from '../data/mockData';
import { Star, CheckCircle2, MapPin, TrendingUp, Award, ShoppingBag, MessageSquare, Flame } from 'lucide-react';
import { mockProducts, mockShops } from '../../data/mockData';

export default function MainFeed({ onSelectProduct }) {
  const [activeCity, setActiveCity] = useState('Tous');

  // LOGIQUE 1 : Sélection des "Meilleures Boutiques" (Note > 4.5 + triées par réputation)
  const topShops = mockShops
    .filter(shop => shop.rating >= 4.5 && (activeCity === 'Tous' || shop.city === activeCity))
    .slice(0, 5); // On prend le top 5 pour le bandeau horizontal

  // LOGIQUE 2 : Sélection des "Meilleures Ventes / Offres Phares"
  // Pour l'illustration, on prend des produits stratégiques de ces meilleures boutiques
  const premiumProducts = mockProducts.filter(product => {
    const shop = mockShops.find(s => s.id === product.shopId);
    const matchesCity = activeCity === 'Tous' || shop?.city === activeCity;
    // On simule les meilleures ventes en prenant les premiers produits phares de chaque catégorie
    return matchesCity && (product.id % 2 === 1 || product.isWholesale);
  }).slice(0, 8); // On affiche les 8 meilleures offres du moment sur le flux d'accueil

  return (
    <div 
      // key={product.id}
      // onClick={() => onSelectProduct && onSelectProduct(product.id)} // <--- Déclenche l'affichage !
      className="bg-white rounded-2xl border border-slate-100 ... cursor-pointer"
    >
      
      {/* BARRE DE FILTRAGE LOCAL (Douala vs Yaoundé) */}
      <div className="flex items-center justify-between p-3 bg-white border shadow-sm rounded-2xl border-slate-100">
        <span className="pl-1 text-xs font-black tracking-wider uppercase text-slate-400">Filtrer le Hub</span>
        <div className="flex gap-1">
          {['Tous', 'Douala', 'Yaoundé'].map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`text-xs font-black px-3 py-1.5 rounded-xl transition-all ${
                activeCity === city 
                  ? 'bg-[#0046FF] text-white shadow-md shadow-[#0046FF]/20' 
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {city === 'Tous' ? 'Tout le Cameroun' : city}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION A : LES MEILLEURES BOUTIQUES (Stories / Profils Horizontaux) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#0046FF]" /> Meilleures Boutiques Certifiées
          </h2>
          <span className="text-[10px] text-[#0046FF] font-bold cursor-pointer hover:underline">Voir tout ({mockShops.length})</span>
        </div>

        {/* Scroll horizontal type Stories Instagram / Hub de confiance */}
        <div className="flex gap-4 pb-2 overflow-x-auto scrollbar-none snap-x">
          {topShops.map((shop) => (
            <div 
              key={shop.id} 
              className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm min-w-[200px] snap-start flex flex-col justify-between hover:border-slate-200 transition-all cursor-pointer group shrink-0"
            >
              <div className="flex items-start gap-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${shop.banner} text-white font-black text-xs flex items-center justify-center shadow relative shrink-0`}>
                  {shop.initials}
                  {shop.verified && (
                    <span className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                      <CheckCircle2 className="w-3 h-3 text-[#0046FF] fill-[#0046FF]/10" />
                    </span>
                  )}
                </div>
                <div className="space-y-0.5 min-w-0">
                  <h3 className="text-xs font-black text-slate-800 truncate group-hover:text-[#0046FF] transition-colors">
                    {shop.name}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold flex items-center gap-0.5">
                    <MapPin className="w-3 h-3" /> {shop.quarter}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 mt-4 bg-slate-50 rounded-xl">
                <span className="text-[9px] font-black text-slate-500 uppercase">
                  {shop.type === 'Grossiste' ? '📦 GROS' : '🛒 RETAIL'}
                </span>
                <span className="flex items-center gap-0.5 text-[10px] font-black text-amber-500">
                  <Star className="w-3 h-3 fill-amber-500" /> {shop.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION B : LES MEILLEURES VENTES & ARRIVAGES (Le Flux Principal) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-[#FF6B00]" /> Meilleures Ventes & Tendances du Marché
          </h2>
          <span className="text-[9px] bg-[#FF6B00]/10 text-[#FF6B00] font-black px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
            Lots Demandés
          </span>
        </div>

        {/* Grille Double Colonne fluide (Parfait pour le mobile et Dashboard pour tablette/web) */}
        <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4">
          {premiumProducts.map((product) => {
            const matchedShop = mockShops.find(s => s.id === product.shopId);

            return (
              <div 
                key={product.id}
                onClick={() => onSelectProduct && onSelectProduct(product.id)}
                className="flex flex-col justify-between overflow-hidden transition-all bg-white border shadow-sm rounded-2xl border-slate-100 hover:border-slate-200 hover:shadow-md group"
              >
                {/* Zone Image */}
                <div className="relative h-40 bg-slate-100">
                  <img 
                    src={product.images[0]} 
                    alt={product.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-102"
                  />
                  {/* Badge d'opportunité type de vente */}
                  <span className={`absolute top-2.5 left-2.5 text-[8px] font-black px-2 py-0.5 rounded uppercase text-white shadow-sm tracking-wider ${
                    product.isWholesale ? 'bg-[#0046FF]' : 'bg-orange-500'
                  }`}>
                    {product.isWholesale ? '📦 Vente en Gros' : '🛒 Prix Unitaire'}
                  </span>

                  {/* Badge d'attractivité Meilleure Vente */}
                  <span className="absolute top-2.5 right-2.5 bg-slate-900/70 backdrop-blur-md text-white text-[8px] font-black px-1.5 py-0.5 rounded flex items-center gap-1 uppercase tracking-wide">
                    <TrendingUp className="w-2.5 h-2.5 text-emerald-400" /> Top Vente
                  </span>
                </div>

                {/* Contenu et data de la vente */}
                <div className="flex flex-col justify-between flex-1 p-4 space-y-3">
                  <div className="space-y-1">
                    {/* Rappel de la meilleure boutique rattachée */}
                    <div className="flex items-center gap-1 text-[9px] font-black text-[#0046FF] uppercase tracking-wider">
                      <span>{matchedShop?.name}</span>
                      {matchedShop?.verified && <CheckCircle2 className="w-2.5 h-2.5 fill-[#0046FF]/10" />}
                      <span className="font-normal text-slate-300">|</span>
                      <span className="font-bold text-slate-400">{matchedShop?.city}</span>
                    </div>
                    
                    <h3 className="text-xs font-black text-slate-800 line-clamp-2 leading-snug group-hover:text-[#0046FF] transition-colors">
                      {product.title}
                    </h3>
                  </div>

                  {/* MOQ et Stock restant pour le côté "Urgence d'achat" */}
                  <div className="flex justify-between items-center text-[10px] bg-slate-50/70 border border-slate-100 p-2 rounded-xl">
                    <div className="space-y-0.5">
                      <span className="text-[8px] text-slate-400 font-bold uppercase block">Condition</span>
                      <span className="font-extrabold text-slate-700">{product.moq}</span>
                    </div>
                    <div className="text-right space-y-0.5">
                      <span className="text-[8px] text-slate-400 font-bold uppercase block">Dispo</span>
                      <span className="font-extrabold text-slate-600">{product.stock}</span>
                    </div>
                  </div>

                  {/* Footer Prix & CTA Direct */}
                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-50">
                    <div>
                      <span className="text-[8px] text-slate-400 font-bold uppercase block">Tarif</span>
                      <span className="text-xs font-black tracking-tight text-slate-900">{product.price}</span>
                    </div>
                    
                    <button 
                      onClick={() => alert(`Lancement négo pour : ${product.title}`)}
                      className="bg-slate-900 hover:bg-[#0046FF] text-white p-2 rounded-xl active:scale-95 transition-all shrink-0 flex items-center justify-center shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}