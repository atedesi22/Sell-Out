import React from 'react';
import { Home, ShoppingBag, MessageSquare, User, PlusCircle, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BottomNavBar({ activeTab, setActiveTab }) {
  const menuItems = [
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
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center p-4 pointer-events-none select-none">      
    
    {/* STRUCTURE DU DOCK D'INSPIRATION APPLE (MacBook / iPad / iPhone) */}

      <motion.nav 
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 30, delay: 0.5 }}
        className="
          pointer-events-auto
          flex items-end justify-around md:justify-center gap-1 md:gap-4
          bg-white/70 dark:bg-slate-900/60 
          backdrop-blur-xl
          border border-white/20 dark:border-none
          px-3 md:px-6 py-2.5 md:py-3
          rounded-[24px] md:rounded-[32px]
          shadow-[0_20px_50px_rgba(0,0,0,0.15)]
          w-[95%] max-w-[420px] md:max-w-fit
          transition-all duration-300
        "
      >
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative group flex flex-col items-center justify-center p-2 rounded-2xl transition-all outline-none"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {/* Effet Apple de survol en PC / Amplification de l'icône */}
              <motion.div
                whileHover={{ scale: 1.18, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className={`
                  relative flex items-center justify-center 
                  w-11 h-11 md:w-12 md:h-12 rounded-xl md:rounded-2xl
                  transition-colors duration-200
                  ${isActive 
                    ? item.isPremium 
                      ? 'bg-gradient-to-tr from-[#0046FF] to-violet-600 text-white shadow-lg shadow-[#0046FF]/30' 
                      : 'bg-gradient-to-br from-[#0046FF] to-indigo-600 text-white shadow-lg shadow-[#0046FF]/20'
                    : 'text-slate-600 hover:bg-slate-200/50 dark:text-slate-400 dark:hover:bg-slate-800/40'
                  }
                `}
              >
                <Icon className={`w-5 h-5 md:w-5.5 md:h-5.5 ${isActive ? 'stroke-[2.5]' : 'stroke-[2]'}`} />

                {/* Badge NovaMap (Premium) pour capter l'œil */}
                {item.isPremium && !isActive && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                )}

                {/* Petit point indicateur style macOS Dock sous l'icône active */}
                {isActive && (
                  <motion.div 
                    layoutId="dockIndicator"
                    className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>

              {/* Tooltip textuel : S'affiche au survol sur PC / Masqué sur mobile */}
              <span className="
                hidden md:block absolute -top-10 scale-0 group-hover:scale-100 
                bg-slate-950/80 text-white font-bold text-[10px] tracking-wide uppercase
                px-2.5 py-1 rounded-md backdrop-blur-md border border-white/10
                transition-all duration-200 origin-bottom shadow-md pointer-events-none
              ">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Séparateur MacBook Pro unique avant l'accès optionnel Profil/Paramètres (Optionnel sur tablette/PC) */}
        <div className="hidden md:block w-[1px] h-8 bg-slate-300 dark:bg-slate-700 self-center mx-1" />

        {/* Bouton Raccourci NovaVerse Apps (Multi-modules) */}
        {/* <button 
          onClick={() => alert("Ouverture du tiroir de modules NovaVerse")}
          className="relative group flex flex-col items-center justify-center p-2 rounded-2xl outline-none"
        >
          <motion.div
            whileHover={{ scale: 1.18, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-slate-100 text-slate-700 hover:bg-slate-200/80"
          >
            <LayoutGrid className="w-5 h-5 stroke-[2]" />
          </motion.div>
          <span className="hidden md:block absolute -top-10 scale-0 group-hover:scale-100 bg-slate-950/80 text-white font-bold text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-md border border-white/10 transition-all duration-200 origin-bottom pointer-events-none">
            NovaModules
          </span>
        </button> */}

      </motion.nav>
    </div>
  );
}