import React from 'react';
import { Home, ShoppingBag, MessageSquare, User, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BottomNavBar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Accueil', icon: Home, path: '/' },
    { id: 'marketplace', label: 'Shop', icon: ShoppingBag, path: '/marketplace' },
    { id: 'sell', label: 'Vendre', icon: PlusCircle, isCenter: true },
    { id: 'messages', label: 'Discuter', icon: MessageSquare, path: '/messages' },
    { id: 'profile', label: 'Profil', icon: User, path: '/profile/settings' },
  ];

  const handleNavigation = (item) => {
    // 1. Met à jour l'état visuel actif
    setActiveTab(item.id);
    
    // 2. Logique de redirection active
    // Si tu utilises react-router-dom plus tard, ce sera : navigate(item.path)
    console.log(`Redirection PWA vers la route : ${item.path}`);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/90 backdrop-blur-lg border-t border-slate-100 shadow-[0_-4px_24px_rgba(0,0,0,0,04)] px-4 pb-safe pt-2 z-50 flex justify-between items-center">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        // Bouton Central Flottant ("Vendre")
        if (item.isCenter) {
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              aria-label={item.label}
              className="relative -top-5 bg-[#FF6B00] text-white p-3.5 rounded-full shadow-xl shadow-[#FF6B00]/30 transform active:scale-95 transition-transform"
            >
              <Icon className="w-6 h-6 text-white" />
            </button>
          );
        }

        // Boutons de Navigation Classiques
        return (
          <button
            key={item.id}
            onClick={() => handleNavigation(item)}
            className="flex flex-col items-center justify-center flex-1 py-1 relative"
          >
            <motion.div
              animate={{ scale: isActive ? 1.15 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`${isActive ? 'text-[#0046FF]' : 'text-slate-400'}`}
            >
              <Icon className="w-5 h-5" />
            </motion.div>
            
            <span className={`text-[10px] font-bold mt-1 tracking-tight transition-colors duration-200 ${
              isActive ? 'text-[#0046FF] font-extrabold' : 'text-slate-400'
            }`}>
              {item.label}
            </span>

            {/* Micro-indicateur physique d'onglet actif */}
            {isActive && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute top-0 w-1.5 h-1.5 rounded-full bg-[#0046FF]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}