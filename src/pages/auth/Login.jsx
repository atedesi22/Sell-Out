import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ShieldCheck, ArrowRight, RefreshCw, Smartphone, AlertCircle } from 'lucide-react';

export default function Login() {
  const [step, setStep] = useState(1); // 1: Numéro, 2: OTP
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const otpRefs = useRef([]);

  // Gestion du compte à rebours pour le renvoi de l'OTP
  useEffect(() => {
    let timer;
    if (step === 2 && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [step, countdown]);

  // Analyse dynamique des préfixes du Cameroun (9 chiffres)
  const getOperatorDetails = (num) => {
    if (!num) return { name: null, color: 'border-slate-200 focus-within:ring-[#0046FF]/20' };
    
    // Orange Cameroun : 69, 655-659
    if (/^6(5[5-9]|9)/.test(num)) {
      return { name: 'Orange Money', color: 'border-orange-500 ring-2 ring-orange-500/10 text-orange-600 bg-orange-50/30' };
    }
    // MTN Cameroun : 67, 68, 650-654
    if (/^6(7|8|5[0-4])/.test(num)) {
      return { name: 'MTN MoMo', color: 'border-yellow-500 ring-2 ring-yellow-500/10 text-yellow-700 bg-yellow-50/30' };
    }
    // Camtel : 242, 243, 620
    if (/^(242|243|620)/.test(num)) {
      return { name: 'Camtel Blue', color: 'border-blue-500 ring-2 ring-blue-500/10 text-blue-600 bg-blue-50/30' };
    }
    
    return { name: 'Inconnu', color: 'border-slate-300 focus-within:ring-[#0046FF]/20' };
  };

  const operator = getOperatorDetails(phone);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length < 9) return;
    setIsLoading(true);
    setHasError(false);

    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      setCountdown(60);
    }, 1200);
  };

  const handleOtpChange = (value, index) => {
    if (isNaN(value)) return;
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setHasError(false);

    // Focus automatique sur la case suivante
    if (value !== '' && index < 3) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Retour arrière pour corriger la case précédente
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOtp = () => {
    setIsLoading(true);
    const enteredCode = otp.join('');

    setTimeout(() => {
      setIsLoading(false);
      if (enteredCode === '1234') {
        alert('Authentification réussie ! Redirection...');
      } else {
        // Déclenche l'effet secousse (shake)
        setHasError(true);
        setOtp(['', '', '', '']);
        otpRefs.current[0].focus();
      }
    }, 1200);
  };

  const handleResendOtp = () => {
    if (countdown > 0) return;
    setCountdown(60);
    setHasError(false);
    // Logique réseau de renvoi ici
  };

  return (
    <div className="relative flex flex-col justify-between max-w-md min-h-screen mx-auto overflow-hidden shadow-2xl bg-slate-50 border-x border-slate-200">
      
      {/* Éléments de fond décoratifs de la charte */}
      <div className="absolute top-[-20%] left-[-20%] w-72 h-72 rounded-full bg-[#0046FF]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 rounded-full bg-[#FF6B00]/10 blur-3xl pointer-events-none" />

      {/* Header avec Logo / Identité */}
      <div className="z-10 px-6 pt-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-2xl font-black tracking-wider text-white shadow-xl rounded-2xl bg-gradient-to-br from-[#0046FF] to-indigo-700 shadow-[#0046FF]/20">
          SO
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Sell <span className="text-[#FF6B00]">Out</span>
        </h1>
        <p className="mt-2 text-sm font-medium text-slate-500">
          La billetterie connectée et sécurisée du futur
        </p>
      </div>

      {/* Conteneur principal avec les formulaires animés */}
      <div className="z-10 flex flex-col justify-center flex-1 px-6 py-8">
        <AnimatePresence mode="wait">
          
          {step === 1 ? (
            /* --- ÉTAPE 1 : NUMÉRO DE TÉLÉPHONE & SMART-DETECTION --- */
            <motion.div
              key="phone-step"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-slate-800">Ravi de vous revoir !</h2>
                <p className="text-xs leading-relaxed text-slate-500">
                  Entrez votre numéro de téléphone (Orange, MTN, Camtel) pour recevoir instantanément votre code d'accès sécurisé.
                </p>
              </div>

              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className={`relative flex items-center bg-white border rounded-xl overflow-hidden transition-all duration-300 shadow-sm ${operator.color}`}>
                  <span className="pl-4 pr-3 text-sm font-bold border-r select-none text-slate-400 border-slate-100">
                    +237
                  </span>
                  <input
                    type="tel"
                    placeholder="6xx xxx xxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    maxLength={9}
                    className="w-full pl-3 pr-10 py-3.5 bg-transparent font-semibold tracking-wide outline-none text-slate-800 placeholder:text-slate-300 placeholder:font-normal"
                    required
                  />
                  <div className="absolute flex items-center pointer-events-none right-4">
                    <Phone className="w-5 h-5 text-slate-300" />
                  </div>
                </div>

                {/* Badge contextuel de l'opérateur détecté */}
                <div className="h-5 transition-all">
                  {operator.name && phone.length >= 2 && (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="inline-flex items-center text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      Réseau détecté : <span className="ml-1 underline text-slate-900 decoration-2 decoration-indigo-400">{operator.name}</span>
                    </motion.span>
                  )}
                </div>
{/* sd */}
                <button
                  type="submit"
                  disabled={isLoading || phone.length < 9}
                  className="w-full bg-[#FF6B00] active:bg-white disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none text-white font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B00]/20 transition-all transform active:scale-[0.98]"
                >
                  {isLoading ? (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Continuer par SMS
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-slate-200" />
                <span className="flex-shrink mx-4 text-xs font-bold tracking-wider uppercase select-none text-slate-400">OU</span>
                <div className="flex-grow border-t border-slate-200" />
              </div>

              {/* Connexion Écosystème NovaVerse */}
              <button
                type="button"
                onClick={() => alert('Authentification unifiée NovaVerse active')}
                className="w-full bg-white hover:bg-slate-50 border border-[#0046FF]/30 text-[#0046FF] font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-3 shadow-md shadow-[#0046FF]/5 transition-all transform active:scale-[0.98]"
              >
                <div className="w-5 h-5 rounded-md bg-[#0046FF] text-white flex items-center justify-center text-[10px] font-black">N</div>
                Connexion rapide NovaVerse
              </button>
            </motion.div>
          ) : (
            /* --- ÉTAPE 2 : CODE OTP AVEC SHAKE ANIMATION SI ERREUR --- */
            <motion.div
              key="otp-step"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-slate-800">Vérification de sécurité</h2>
                <p className="text-xs leading-relaxed text-slate-500">
                  Saisissez le code d'activation envoyé au <span className="font-bold text-slate-700">+237 {phone}</span>. (Simulez <span className="px-1 font-mono rounded bg-slate-100 text-[#0046FF]">1234</span>)
                </p>
              </div>

              {/* Effet Secousse (shake) en cas de mauvais code */}
              <motion.div 
                animate={hasError ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="flex justify-between gap-3 py-2"
              >
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (otpRefs.current[index] = el)}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`w-16 h-16 bg-white border-2 rounded-xl text-center text-2xl font-black text-[#0046FF] outline-none transition-all shadow-sm ${
                      hasError ? 'border-red-500 bg-red-50/50' : 'border-slate-200 focus:border-[#0046FF] focus:ring-4 focus:ring-[#0046FF]/10'
                    }`}
                  />
                ))}
              </motion.div>

              {hasError && (
                <div className="flex items-center gap-2 p-3 text-xs font-semibold text-red-600 border border-red-100 bg-red-50 rounded-xl">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Code incorrect. Veuillez réessayer ou demander un nouveau code.
                </div>
              )}

              <button
                onClick={handleVerifyOtp}
                disabled={isLoading || otp.includes('')}
                className="w-full bg-[#0046FF] hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none text-white font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#0046FF]/20 transition-all transform active:scale-[0.98]"
              >
                {isLoading ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    Vérifier le code
                  </>
                )}
              </button>

              <div className="flex flex-col items-center gap-4 pt-2 text-center">
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={countdown > 0}
                  className={`text-xs font-bold transition-all ${
                    countdown > 0 ? 'text-slate-400 cursor-not-allowed' : 'text-[#FF6B00] hover:underline'
                  }`}
                >
                  {countdown > 0 ? `Renvoyer le SMS d'ici (${countdown}s)` : "Je n'ai pas reçu de SMS"}
                </button>

                <button 
                  type="button"
                  onClick={() => { setStep(1); setOtp(['', '', '', '']); setHasError(false); }} 
                  className="text-xs font-bold underline text-slate-400 hover:text-slate-600 underline-offset-4"
                >
                  Changer de numéro
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Footer / Mention légale */}
      <div className="z-10 p-6 text-center border-t border-slate-100 bg-white/80 backdrop-blur-md">
        <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
          En continuant, vous acceptez les conditions d'utilisation de Sell Out et la protection des données par l'écosystème cryptographique du protocole de NovaDonnées.
        </p>
      </div>

    </div>
  );
}