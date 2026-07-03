// src/pages/Boutiques.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { mockShops, mockProducts } from '../data/mockData';
import { CheckCircle2, MapPin, Store, Star, ArrowRight } from 'lucide-react';

export default function Boutiques() {
  const [filterType, setFilterType] = useState('Tous');

  const filteredShops = filterType === 'Tous' 
    ? mockShops 
    : mockShops.filter(shop => shop.type === filterType);

  return (
    <div className="min-h-screen p-4 bg-slate-50 md:p-8 pb-28">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header & Filtres Réactifs */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">Hub Boutiques Sell Out</h1>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">Découvrez les acteurs locaux du marché</p>
          </div>
          <div className="flex gap-1.5 bg-slate-200/50 p-1 rounded-xl border border-slate-200/20">
            {['Tous', 'Grossiste', 'Vendeur Simple'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`text-xs font-black px-3 py-1.5 rounded-lg transition-all ${
                  filterType === type ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {type}s
              </button>
            ))}
          </div>
        </div>

        {/* Grille des 10 Boutiques */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filteredShops.map((shop) => {
            // Compter ses produits associés dans la mockData
            const shopProductCount = mockProducts.filter(p => p.shopId === shop.id).length;

            return (
              <motion.div
                layout
                key={shop.id}
                className="flex flex-col justify-between p-5 transition-all bg-white border shadow-sm rounded-3xl border-slate-100 hover:border-slate-200 hover:shadow-md group"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar de la Boutique */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${shop.banner} text-white font-black text-base flex items-center justify-center shadow-md relative shrink-0`}>
                    {shop.initials}
                    {shop.verified && (
                      <span className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
                        <CheckCircle2 className="w-4 h-4 text-[#0046FF] fill-[#0046FF]/10" />
                      </span>
                    )}
                  </div>

                  {/* Infos Textuelles */}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-black text-slate-800 text-sm group-hover:text-[#0046FF] transition-colors line-clamp-1">
                        {shop.name}
                      </h3>
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider shrink-0 ${
                        shop.type === 'Grossiste' ? 'bg-[#0046FF]/10 text-[#0046FF]' : 'bg-orange-500/10 text-orange-600'
                      }`}>
                        {shop.type}
                      </span>
                    </div>

                    <p className="flex items-center gap-1 text-xs font-semibold text-slate-400">
                      <MapPin className="w-3.5 h-3.5" /> {shop.city} • <span className="text-slate-500">{shop.quarter}</span>
                    </p>

                    <div className="flex items-center gap-3 pt-1 text-[11px] font-bold text-slate-500">
                      <span className="flex items-center gap-0.5 text-amber-500">
                        <Star className="w-3 h-3 fill-amber-500" /> {shop.rating}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Store className="w-3 h-3" /> {shopProductCount} articles listés
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Carte d'accès */}
                <div className="flex items-center justify-between pt-3 mt-4 border-t border-slate-50">
                  <span className="text-[10px] bg-slate-50 text-slate-400 font-bold px-2 py-1 rounded-md">
                    ID Boutique: #00{shop.id}
                  </span>
                  <button className="text-xs font-black text-[#0046FF] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Visiter le showroom <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}