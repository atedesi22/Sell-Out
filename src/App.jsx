import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/ui/Preloader';
import Login from './pages/auth/Login';
import BottomNavBar from './components/layout/BottomNavBar';
import Home from './pages/marketplace/Home';
// import MainFeed from './components/MainFeed';
// import ProduitDetail from './pages/ProduitDetail';
import { Search, ShoppingBag, MessageSquare, User, Bell } from 'lucide-react';
import MainFeed from './pages/marketplace/MainFeed';
import ProduitDetail from './pages/marketplace/ProduitDetail';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // On simule un temps de chargement des assets/configs de la PWA
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // États de navigation
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' ou 'detail'
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Fonction pour ouvrir un produit
  const handleSelectProduct = (productId) => {
    setSelectedProductId(productId);
    setCurrentScreen('detail');
  };

  // Fonction pour retourner à l'accueil
  const handleBackToHome = () => {
    setCurrentScreen('home');
    setSelectedProductId(null);
  };

  return (
   

    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader isLoading={loading} key="preloader" />
        ) : (
          <div className="min-h-screen bg-slate-900">
          {activeTab === 'home' && <Home />}
            {/* <Login key="login-page" /> */}

            
            <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        )}
      </AnimatePresence>

      
    </>
  );
}