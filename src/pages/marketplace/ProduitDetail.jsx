// src/pages/ProduitDetail.jsx
import React, { useState } from 'react';
// import { mockProducts, mockShops } from '../data/mockData';
import { 
  ChevronLeft, ChevronRight, Phone, MessageSquare, ShieldCheck, 
  MapPin, ShoppingCart, Info, AlertTriangle, Check, Layers
} from 'lucide-react';
import { mockProducts, mockShops } from '../../data/mockData';

export default function ProduitDetail({ productId = 101, onBack }) {
  // Récupération du produit (par défaut l'iPhone de la boutique 1 pour illustration)
  const product = mockProducts.find(p => p.id === productId) || mockProducts[0];
  const shop = mockShops.find(s => s.id === product.shopId);

  // États pour l'interactivité de la maquette
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(product.isWholesale ? parseInt(product.moq) || 5 : 1);
  const [copiedNumber, setCopiedNumber] = useState(false);

  // Extraction de la valeur numérique brute du prix pour le calculateur (ex: "450,000 XAF/pc" -> 450000)
  const rawPrice = parseInt(product.price.replace(/[^0-9]/g, '')) || 0;
  const totalPrice = rawPrice * quantity;

  // Validation du Minimum de Commande (MOQ)
  const minOrder = product.isWholesale ? parseInt(product.moq) || 5 : 1;
  const isMoqSatisfied = quantity >= minOrder;

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const triggerCall = () => {
    setCopiedNumber(true);
    alert(`Lancement de l'appel GSM direct vers le gérant de "${shop?.name}" (+237 6xx xxx xxx)`);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  return (
    <div className="min-h-screen pb-32 bg-slate-50">
      
      {/* BARRE DE NAVIGATION SUPÉRIEURE */}
      <div className="sticky top-0 z-40 flex items-center gap-3 px-4 py-3 bg-white border-b border-slate-100">
        <button onClick={onBack} className="p-1.5 bg-slate-100 rounded-xl active:scale-95 transition-transform">
          <ChevronLeft className="w-5 h-5 text-slate-700" />
        </button>
        <div>
          <span className="text-[9px] bg-slate-100 text-slate-500 font-black px-2 py-0.5 rounded uppercase tracking-wider">
            Fiche Article #{product.id}
          </span>
          <h1 className="text-xs font-black text-slate-800 line-clamp-1">{product.title}</h1>
        </div>
      </div>

      <div className="max-w-md mx-auto md:max-w-4xl md:grid md:grid-cols-2 md:gap-8 md:p-6">
        
        {/* BLOC DE GAUCHE : CARROUSEL INTERACTIF DES 4 IMAGES */}
        <div className="space-y-3">
          <div className="relative overflow-hidden shadow-sm h-80 bg-slate-200 md:rounded-3xl md:overflow-hidden">
            <img 
              src={product.images[currentImgIndex]} 
              alt={`Illustration ${currentImgIndex + 1}`} 
              className="object-cover w-full h-full"
            />
            
            {/* Contrôles du Carrousel */}
            <button 
              onClick={prevImage} 
              className="absolute flex items-center justify-center w-8 h-8 transition-transform -translate-y-1/2 rounded-full shadow-md left-3 top-1/2 bg-white/80 backdrop-blur-sm active:scale-90"
            >
              <ChevronLeft className="w-4 h-4 text-slate-800" />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute flex items-center justify-center w-8 h-8 transition-transform -translate-y-1/2 rounded-full shadow-md right-3 top-1/2 bg-white/80 backdrop-blur-sm active:scale-90"
            >
              <ChevronRight className="w-4 h-4 text-slate-800" />
            </button>

            {/* Indicateur de position */}
            <span className="absolute bottom-3 right-3 bg-slate-900/60 backdrop-blur-sm text-white text-[9px] font-black px-2 py-0.5 rounded-lg tracking-widest">
              {currentImgIndex + 1} / {product.images.length}
            </span>

            {/* Badge Type d'Offre */}
            <span className={`absolute top-3 left-3 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wide text-white shadow ${
              product.isWholesale ? 'bg-[#0046FF]' : 'bg-orange-500'
            }`}>
              {product.isWholesale ? '📦 Vente en Gros' : '🛒 Prix Unitaire'}
            </span>
          </div>

          {/* Miniatures de prévisualisation */}
          <div className="flex justify-center gap-2 px-4 md:px-0">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImgIndex(idx)}
                className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                  currentImgIndex === idx ? 'border-[#0046FF] scale-95 shadow-sm' : 'border-transparent opacity-60'
                }`}
              >
                <img src={img} alt="" className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        </div>

        {/* BLOC DE DROITE : DÉTAILS, CALCULATEUR & ACTION CONTROLS */}
        <div className="p-4 space-y-5">
          
          {/* Titre & Catégorie */}
          <div className="space-y-1">
            <span className="text-[10px] text-[#0046FF] font-black uppercase tracking-widest flex items-center gap-1">
              <Layers className="w-3 h-3" /> {product.category}
            </span>
            <h2 className="text-lg font-black leading-snug text-slate-900">
              {product.title}
            </h2>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black tracking-tight text-slate-900">{product.price}</span>
            </div>
          </div>

          {/* BLOC DE RÉASSURANCE DE LA BOUTIQUE */}
          <div className="flex items-center justify-between p-4 bg-white border shadow-sm rounded-2xl border-slate-100 group">
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${shop?.banner} text-white font-black text-xs flex items-center justify-center shadow`}>
                {shop?.initials}
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1">
                  <h3 className="text-xs font-black text-slate-800">{shop?.name}</h3>
                  {shop?.verified && <ShieldCheck className="w-3.5 h-3.5 text-[#0046FF] fill-[#0046FF]/10" />}
                </div>
                <p className="text-[10px] text-slate-400 font-bold flex items-center gap-0.5">
                  <MapPin className="w-3 h-3 text-slate-400" /> {shop?.city} • <span className="text-[#0046FF]">{shop?.quarter}</span>
                </p>
              </div>
            </div>
            <span className="text-[10px] font-black px-2 py-1 bg-slate-50 text-slate-500 rounded-lg border border-slate-100">
              {shop?.type}
            </span>
          </div>

          {/* CALCULATEUR DYNAMIQUE DE LOTS & DEVIS */}
          <div className="p-4 space-y-4 bg-white border shadow-sm rounded-2xl border-slate-100">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#0046FF]" /> Estimation de Commande
              </h4>
              <span className="text-[10px] text-slate-400 font-bold">Dispo: {product.stock}</span>
            </div>

            <div className="flex items-center gap-3 p-2 border bg-slate-50 rounded-xl border-slate-100">
              <label className="text-[11px] font-black text-slate-500 uppercase pl-2 shrink-0">Quantité :</label>
              <input 
                type="number" 
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-black text-slate-800 focus:outline-none focus:border-[#0046FF]"
              />
            </div>

            {/* Message de restriction MOQ si non satisfait */}
            {!isMoqSatisfied && product.isWholesale && (
              <div className="bg-red-50 text-red-600 p-2.5 rounded-xl border border-red-100 flex items-start gap-2 text-[10px] font-bold">
                <AlertTriangle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                <div>
                  Attention : Ce grossiste exige un minimum de <span className="font-black">{product.moq}</span> pour valider la vente de ce lot.
                </div>
              </div>
            )}

            {/* Résumé de la valeur marchande estimée */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase">Volume total</p>
                <p className="text-xs font-black text-slate-600">{quantity} article(s)</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-slate-400 font-bold uppercase">Montant indicatif</p>
                <p className="text-base font-black text-[#0046FF] tracking-tight">
                  {totalPrice.toLocaleString('fr-FR')} XAF
                </p>
              </div>
            </div>
          </div>

          {/* CLAUSES COMPLÉMENTAIRES */}
          <div className="text-[10px] text-slate-400 font-medium leading-relaxed bg-slate-100/50 p-3 rounded-xl border border-slate-200/20">
            💡 <span className="font-bold text-slate-600">Note Sell Out :</span> Les prix affichés par les grossistes à Akwa/Mokolo restent négociables en privé. Utilisez le chat intégré pour formuler une contre-proposition ou convenir de la livraison par agence.
          </div>

        </div>
      </div>

      {/* FOOTER DES CTAS D'URGENCE (Fixé en bas de l'écran pour Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex max-w-md gap-3 p-4 mx-auto bg-white border-t shadow-lg border-slate-100 rounded-t-3xl md:max-w-xl">
        <button 
          onClick={triggerCall}
          className="flex-1 bg-slate-100 text-slate-800 font-black text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
        >
          {copiedNumber ? <Check className="w-4 h-4 text-emerald-500" /> : <Phone className="w-4 h-4 text-slate-600" />}
          {copiedNumber ? "Appel lancé" : "Appeler le Gérant"}
        </button>

        <button 
          onClick={() => alert(`Discussion ouverte sur la PWA pour négocier : ${product.title}`)}
          className="flex-[1.5] bg-[#0046FF] text-white font-black text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-[#0046FF]/20 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4" />
          Négocier sur le Chat
        </button>
      </div>

    </div>
  );
}