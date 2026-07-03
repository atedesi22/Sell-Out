import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function Preloader({ isLoading }) {
  // Configuration des variantes pour les animations en cascade (stagger)
  const containerVariants = {
    exit: {
      opacity: 0,
      y: -20,
      transition: { ease: 'easeInOut', duration: 5 }
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.34, 1.56, 0.64, 1] // Effet élastique customisé
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={containerVariants}
          exit="exit"
           className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-between p-8"
          >
          {/* Background radial gradient subtil pour le côté premium */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,70,255,0.15)_0%,transparent_70%)] pointer-events-none" />

          {/* Élément invisible en haut pour équilibrer le flex justify-between */}
          <div className="h-4" />

          {/* Centre : Logo animé */}
          <div className="z-10 flex flex-col items-center space-y-6">
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              className="relative inline-flex items-center justify-center w-24 h-24 text-4xl font-black tracking-wider text-white shadow-2xl rounded-3xl bg-gradient-to-br from-[#0046FF] to-indigo-700 shadow-[#0046FF]/30"
            >
              SO
              {/* Cercle d'impulsion radar en arrière-plan */}
              <motion.div 
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 border pointer-events-none rounded-3xl border-[#0046FF]/40"
              />
            </motion.div>

            {/* Texte de la marque avec un effet de scintillement textuel (Shimmer) */}
            <div className="space-y-2 text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl font-black tracking-tight text-white"
              >
                Sell <span className="text-[#FF6B00]">Out</span>
                <p className="text-xs text-slate-400 font-bold tracking-widest uppercase mt-1">Le Hub B2B local Multi-Boutiques</p>
              </motion.h1>
              
              {/* Barre de progression fluide simulée */}
              <div className="w-32 h-1 mx-auto mt-4 overflow-hidden rounded-full bg-slate-800">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="w-full h-full bg-gradient-to-r from-[#0046FF] to-[#FF6B00]"
                />
              </div>
            </div>
          </div>

          {/* Bas : Mention de sécurité de l'écosystème */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="z-10 flex items-center gap-2 text-slate-400"
          >
            <Shield className="w-4 h-4 text-[#0046FF]" />
            <span className="text-xs font-semibold tracking-wide uppercase">
              Powered and secured by NovaVerse
            </span>
          </motion.div>
        </motion.div>
        )}
    </AnimatePresence>
    

    // <AnimatePresence>
    //     {isLoading && (
    //       <motion.div 
    //         initial={{ opacity: 1 }}
    //         exit={{ opacity: 0, y: -20 }}
    //         transition={{ duration: 0.5, ease: "easeInOut" }}
    //         className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-between p-8"
    //       >
    //         <div className="my-auto flex flex-col items-center space-y-6">
    //           {/* Logo Sell Out Animé */}
    //           <motion.div 
    //             initial={{ scale: 0.8, opacity: 0 }}
    //             animate={{ scale: [1, 1.05, 1], opacity: 1 }}
    //             transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    //             className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0046FF] to-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-xl shadow-[#0046FF]/20"
    //           >
    //             SO
    //           </motion.div>
              
    //           {/* Nom de la Marque */}
    //           <div className="text-center">
    //             <motion.h1 
    //               initial={{ opacity: 0, y: 10 }}
    //               animate={{ opacity: 1, y: 0 }}
    //               transition={{ delay: 0.3 }}
    //               className="text-3xl font-black text-white tracking-tight"
    //             >
    //               Sell <span className="text-[#FF6B00]">Out</span>
    //             </motion.h1>
    //             <p className="text-xs text-slate-400 font-bold tracking-widest uppercase mt-1">Le Hub B2B Multi-Boutiques</p>
    //           </div>

    //           {/* Ligne de chargement aux couleurs de la marque */}
    //           <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
    //             <motion.div 
    //               initial={{ x: "-100%" }}
    //               animate={{ x: "100%" }}
    //               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    //               className="w-full h-full bg-gradient-to-r from-[#0046FF] to-[#FF6B00]"
    //             />
    //           </div>
    //         </div>

    //         <div className="text-center space-y-1">
    //           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Powered by NovaVerse Ecosystem</p>
    //           <p className="text-[9px] text-slate-600 font-medium">Douala • Yaoundé • Canada</p>
    //         </div>
    //       </motion.div>
    //     )}
    //   </AnimatePresence>

  );
}