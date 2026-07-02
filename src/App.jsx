import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/ui/Preloader';
import Login from './pages/auth/Login';
import BottomNavBar from './components/layout/BottomNavBar';
import Home from './pages/marketplace/Home';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // On simule un temps de chargement des assets/configs de la PWA
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" />
      ) : (
        <div className="bg-slate-900 min-h-screen">
        {activeTab === 'home' && <Home />}
          {/* <Login key="login-page" /> */}
          <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      )}
    </AnimatePresence>
  );
}