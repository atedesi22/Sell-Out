// src/pages/Produits.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { mockProducts, mockShops } from '../data/mockData';
import { Package, Tag, Layers, Search, MessageSquare } from 'lucide-react';

export default function Produits() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMode, setFilterMode] = useState('Tous'); // Tous, Gros, Détail

  // Logique de filtrage croisé
  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    if (filterMode === 'Gros') return matchesSearch && product.isWholesale;
    if (filterMode === 'Détail') return matchesSearch && !product.isWholesale;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen p-4 bg-slate-50 md:p-8 pb-28">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Section Top Controls */}
        <div className="flex flex-col items-center justify-between gap-3 p-4 bg-white border shadow-sm rounded-3xl border-slate-100 md:flex-row">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher parmi les 50 articles d'illustration..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-10 pr-4 py-2.5 text-xs font-medium focus:outline-none focus:border-[#0046FF]/30"
            />
          </div>
          
          <div className="flex justify-center w-full gap-1 p-1 bg-slate-100 rounded-xl md:w-auto">
            {['Tous', 'Gros', 'Détail'].map((mode) => (
              <button
                key={mode}
                onClick={() => setFilterMode(mode)}
                className={`text-xs font-black px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                  filterMode === mode ? 'bg-slate-900 text-white shadow' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {mode === 'Tous' ? 'Toutes les offres' : mode === 'Gros' ? 'Lots de Gros' : 'Vente à l\'unité'}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des 50 Produits */}
        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            // Retrouver la boutique correspondante à ce produit
            const matchedShop = mockShops.find(s => s.id === product.shopId);

            return (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col justify-between overflow-hidden transition-all bg-white border shadow-sm rounded-3xl border-slate-100 hover:border-slate-200 group"
              >
                {/* Image d'illustration principale (1 sur les 4 fournies dans l'array) */}
                <div className="relative overflow-hidden h-44 bg-slate-100">
                  <img 
                    src={product.images[0]} 
                    alt={product.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badge Type d'offre */}
                  <span className={`absolute top-3 left-3 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wide text-white backdrop-blur-md shadow-sm ${
                    product.isWholesale ? 'bg-[#0046FF]' : 'bg-orange-500'
                  }`}>
                    {product.isWholesale ? '📦 Vente en Gros' : '🛒 Prix Détail'}
                  </span>

                  {/* Indicateur multi-images miniatures simulé */}
                  <div className="absolute bottom-2 right-2 bg-slate-900/60 backdrop-blur-sm text-white text-[8px] font-black px-1.5 py-0.5 rounded tracking-widest uppercase">
                    +3 Images Illustratives
                  </div>
                </div>

                {/* Descriptif & Métriques */}
                <div className="flex flex-col justify-between flex-1 p-4 space-y-3">
                  <div className="space-y-1">
                    {/* Tag de la Boutique Parent */}
                    <p className="text-[10px] text-[#0046FF] font-black uppercase tracking-wider flex items-center gap-1">
                      <Layers className="w-3 h-3" /> {matchedShop?.name}
                    </p>
                    <h3 className="text-xs font-black text-slate-800 line-clamp-2 leading-snug group-hover:text-[#0046FF] transition-colors">
                      {product.title}
                    </h3>
                  </div>

                  {/* Conditions de vente : MOQ et Volume dispo */}
                  <div className="grid grid-cols-2 gap-2 p-2 border bg-slate-50 rounded-xl border-slate-100/50">
                    <div>
                      <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">Minimum de commande</span>
                      <span className="text-[10px] font-black text-slate-700 flex items-center gap-0.5 mt-0.5">
                        <Package className="w-3 h-3 text-[#FF6B00]" /> {product.moq}
                      </span>
                    </div>
                    <div>
                      <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">Volume en Rayon</span>
                      <span className="text-[10px] font-black text-slate-700 flex items-center gap-0.5 mt-0.5">
                        <Tag className="w-3 h-3 text-[#0046FF]" /> {product.stock}
                      </span>
                    </div>
                  </div>

                  {/* Section Tarification & Négociation */}
                  <div className="pt-2.5 border-t border-slate-50 flex items-center justify-between">
                    <div>
                      <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Tarif affiché</p>
                      <p className="text-sm font-black tracking-tight text-slate-900">{product.price}</p>
                    </div>
                    <button 
                      onClick={() => alert(`Discussion lancée avec ${matchedShop?.name} pour le produit : ${product.title}`)}
                      className="flex items-center gap-1 p-2 text-xs font-black text-white transition-transform bg-slate-900 md:px-3 md:py-2 rounded-xl active:scale-95"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> <span className="hidden md:inline">Discuter</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}