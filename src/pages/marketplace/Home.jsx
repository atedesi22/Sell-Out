import React, { useState } from 'react';
import { Search, SlidersHorizontal, Flame, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
          <button className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 p-3 rounded-xl transition-all active:scale-95">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* --- BANDEAU TENDANCE --- */}
      <div className="p-4">
        <div className="bg-gradient-to-r from-[#0046FF] to-indigo-900 rounded-2xl p-4 text-white relative overflow-hidden shadow-lg shadow-[#0046FF]/10">
          <div className="absolute right-[-10%] bottom-[-20%] w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="relative z-10 space-y-1 max-w-[70%]">
            <div className="inline-flex items-center gap-1 bg-white/20 text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded-md">
              <Flame className="w-3.5 h-3.5 text-[#FF6B00] fill-[#FF6B00]" /> Direct Flash
            </div>
            <h3 className="text-base font-black leading-tight">Zéro frais intermédiaires sur vos livraisons</h3>
            <p className="text-[11px] text-blue-200 font-medium">Achetez directement chez le grossiste local.</p>
          </div>
        </div>
      </div>

      {/* --- CAROUSEL HORIZONTAL DES CATÉGORIES --- */}
      <div className="space-y-3">
        <div className="px-4 flex justify-between items-center">
          <h2 className="text-sm font-black text-slate-800 uppercase tracking-wider">Catégories</h2>
        </div>
        <div className="flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-none snap-x">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all snap-center shadow-sm ${
                selectedCategory === cat.id
                  ? 'bg-[#0046FF] text-white shadow-[#0046FF]/10'
                  : 'bg-white text-slate-600 border border-slate-100 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* --- GRILLE DOUBLE COLONNE : PRODUITS RÉCENTS --- */}
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-black text-slate-800 uppercase tracking-wider">Arrivages récents</h2>
          <span className="text-xs font-bold text-[#FF6B00] underline">Voir tout</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {RECENT_PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -2 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm flex flex-col justify-between"
            >
              {/* Conteneur Image */}
              <div className="relative aspect-square bg-slate-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-md text-[10px] font-black text-slate-800 px-2 py-0.5 rounded-md shadow-sm">
                  {product.badge}
                </span>
              </div>

              {/* Détails Produit */}
              <div className="p-3 space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-slate-700 line-clamp-2 min-h-[2rem]">
                    {product.title}
                  </h3>
                  <div className="text-sm font-black text-[#0046FF] tracking-tight">
                    {product.price}
                  </div>
                </div>

                {/* Localisation et Badges Fintech */}
                <div className="pt-2 border-t border-slate-50 flex items-center justify-between text-[10px] text-slate-400 font-bold">
                  <span className="truncate max-w-[65px]">{product.location}</span>
                  <div className="flex gap-1 shrink-0">
                    {product.momo && <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" title="MTN MoMo dispo" />}
                    {product.om && <span className="w-2.5 h-2.5 rounded-full bg-orange-500" title="Orange Money dispo" />}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}