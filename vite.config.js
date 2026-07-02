import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0046FF',      // Bleu Électrique NovaVerse
          orange: '#FF6B00',    // Orange Vibrant Sell Out
        },
        payment: {
          momo: '#FFCC00',      // MTN Mobile Money
          om: '#FF6600',        // Orange Money
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ou la police choisie pour l'écosystème
      },
    },
  },
  plugins: [react(),
    tailwindcss(),
    ],
})
