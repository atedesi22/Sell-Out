// src/App.jsx
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/ui/Preloader';
import Login from './pages/auth/Login';
import BottomNavBar from './components/layout/BottomNavBar';
import Home from './pages/marketplace/Home';
import ProduitDetail from './pages/marketplace/ProduitDetail'; // Pense à créer ou importer ton composant détail

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  
  // NOUVEAU : Gestion de la vue active et du produit sélectionné
  const [currentView, setCurrentView] = useState('list'); // 'list' ou 'detail'
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    // On simule un temps de chargement des assets/configs de la PWA
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Handler quand on clique sur un produit dans le catalogue (Home)
  const handleSelectProduct = (productId) => {
    setSelectedProductId(productId);
    setCurrentView('detail');
  };

  // Handler pour revenir en arrière
  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedProductId(null);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader isLoading={loading} key="preloader" />
        ) : (
          <div className="relative flex flex-col min-h-screen overflow-hidden bg-slate-900">
            
            {/* ZONE DE CONTENU DYNAMIQUE */}
            <div className="relative flex-1 w-full">
              <AnimatePresence mode="wait">
                {activeTab === 'home' && (
                  <>
                    {currentView === 'list' ? (
                      // On passe le handler de sélection à Home, qui le passera ensuite à MainFeed
                      <Home onSelectProduct={handleSelectProduct} key="marketplace-home" />
                    ) : (
                      // Page indépendante avec son bouton de retour
                      <ProduitDetail 
                        productId={selectedProductId} 
                        onBack={handleBackToList} 
                        key="product-detail"
                      />
                    )}
                  </>
                )}

                {/* activeTab === 'messages' && <Messages /> */}
                {/* activeTab === 'profile' && <Profile /> */}
                {/* <Login key="login-page" /> */}
              </AnimatePresence>
            </div>

            {/* BARRE DE NAVIGATION COMMUNE (Masquée uniquement si on est au fond d'un détail produit pour gagner de la place, ou visible selon ton choix) */}
            {currentView === 'list' && (
              <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
            )}
            
          </div>
        )}
      </AnimatePresence>
    </>
  );
}