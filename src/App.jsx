import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/ui/Preloader';
import Login from './pages/auth/Login';

export default function App() {
  const [loading, setLoading] = useState(true);

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
        <Login key="login-page" />
      )}
    </AnimatePresence>
  );
}