import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ isLoading }) {
  // Configuration des variantes pour les animations
  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      y: -20,
      transition: { ease: 'easeInOut', duration: 0.5 }
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: [1, 1.05, 1], // Conserve ton effet de pulsation infini
      opacity: 1,
      transition: { 
        scale: {
          repeat: Infinity, 
          duration: 2, 
          ease: "easeInOut"
        },
        opacity: {
          duration: 0.6,
          ease: [0.34, 1.56, 0.64, 1] // Ton effet élastique customisé au démarrage
        }
      }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.3, duration: 0.4 }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          variants={containerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-between p-8"
        >
          <div className="my-auto flex flex-col items-center space-y-6">
            {/* Logo Sell Out Animé avec tes variantes */}
            <motion.div 
              variants={logoVariants}
              initial="initial"
              animate="animate"
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0046FF] to-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-xl shadow-[#0046FF]/20"
            >
              SO
            </motion.div>
            
            {/* Nom de la Marque */}
            <div className="text-center">
              <motion.h1 
                variants={contentVariants}
                initial="initial"
                animate="animate"
                className="text-3xl font-black text-white tracking-tight"
              >
                Sell <span className="text-[#FF6B00]">Out</span>
              </motion.h1>
              <p className="text-xs text-slate-400 font-bold tracking-widest uppercase mt-1">
                Le Hub B2B Multi-Boutiques
              </p>
            </div>

            {/* Ligne de chargement aux couleurs de la marque */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-[#0046FF] to-[#FF6B00]"
              />
            </div>
          </div>

          {/* Footer du Preloader */}
          <div className="text-center space-y-1">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              Powered by NovaVerse Ecosystem
            </p>
            <p className="text-[9px] text-slate-600 font-medium">
              Cameroun
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}