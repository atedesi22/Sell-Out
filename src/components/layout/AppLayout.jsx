import React, { useState } from 'react';
import { Home, ShoppingBag, PlusCircle, MessageSquare, User, Store, Settings, LogOut } from 'lucide-react';
import BottomNavBar from './BottomNavBar';

export default function AppLayout({ children }) {
  const [activeTab, setActiveTab] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Accueil', icon: Home, path: '/' },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag, path: '/marketplace' },
    { id: 'sell', label: 'Créer une Boutique', icon: PlusCircle, path: '/marketplace/resell' },
    { id: 'messages', label: 'Discussions', icon: MessageSquare, path: '/messages' },
    { id: 'profile', label: 'Mon Profil', icon: User, path: '/profile/settings' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 flex font-sans antialiased">
      
      {/* 🖥️ SIDEBAR : Visible UNIQUEMENT sur Tablette et PC (md:flex) */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 sticky top-0 h-screen p-5 justify-between shrink-0 z-50 shadow-sm">
        <div className="space-y-6">
          {/* Logo */}
          <div className="px-2">
            <h1 className="text-2xl font-black tracking-tight text-[#0046FF]">
              SELL <span className="text-[#FF6B00]">OUT</span>
            </h1>
            <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded-full mt-1 inline-block border border-slate-200">
              Console Pro
            </span>
          </div>

          {/* Liens de navigation style Dashboard */}
          <nav className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#0046FF] text-white shadow-md shadow-[#0046FF]/10' 
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Sidebar (Déconnexion / Paramètres) */}
        <div className="border-t border-slate-100 pt-4 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-500 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition-colors cursor-pointer">
            <LogOut className="w-5 h-5" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* 📱 / 🖥️ CONTENU PRINCIPAL : S'adapte dynamiquement */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="w-full mx-auto max-w-7xl md:p-8 transition-all">
          {children}
        </main>

        {/* 📱 BOTTOM NAV BAR : Visible UNIQUEMENT sur Mobile (md:hidden) */}
        <div className="md:hidden">
          <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

    </div>
  );
}