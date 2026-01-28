import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Translations } from './translations';
import type { Language } from './translations';

export type { Language };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations[Language];
  exchangeRate: number;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectBrowserLanguage(): Language {
  const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  if (langCode === 'pt') return 'pt';
  if (langCode === 'es') return 'es';
  return 'en'; // Default to English for other languages
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('suinit-language') as Language;
    if (saved && ['pt', 'en', 'es'].includes(saved)) {
      return saved;
    }
    return detectBrowserLanguage();
  });

  const [exchangeRate, setExchangeRate] = useState<number>(5.5); // Default fallback

  useEffect(() => {
    localStorage.setItem('suinit-language', language);
  }, [language]);

  // Fetch USD to BRL exchange rate
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        if (data.rates?.BRL) {
          setExchangeRate(data.rates.BRL);
        }
      } catch (error) {
        console.warn('Failed to fetch exchange rate, using default:', error);
        // Keep default rate
      }
    };
    
    fetchExchangeRate();
  }, []);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    exchangeRate,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Helper to format price based on language
export function formatPrice(usdPrice: number, language: Language, exchangeRate: number): string {
  if (language === 'pt') {
    const brlPrice = Math.round(usdPrice * exchangeRate);
    return `R$ ${brlPrice.toLocaleString('pt-BR')}`;
  }
  return `US$ ${usdPrice}`;
}
