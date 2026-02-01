import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSelector } from '@/components/ui/LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#work', label: t.nav.solutions },
    { href: '#services', label: t.nav.differentials },
    { href: '#pricing', label: t.nav.plans },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hasScrolled ? 'bg-background/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              className="relative z-[60]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl font-display font-bold text-foreground tracking-tight">
                suinit<span className="text-accent">.</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-12">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/70 hover:text-foreground font-display font-medium transition-colors text-sm uppercase tracking-widest link-underline"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Right side: Language + CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <LanguageSelector />
              <motion.a
                href="#contact"
                className="btn-primary text-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.nav.cta}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-[60] w-12 h-12 flex items-center justify-center text-foreground"
              whileTap={{ scale: 0.95 }}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-background z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 z-[60] w-12 h-12 flex items-center justify-center text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close menu"
            >
              <X size={28} />
            </motion.button>

            <div className="flex flex-col items-start justify-center h-full gap-8 px-12">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-display font-bold text-foreground hover:text-accent transition-colors"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="mt-8"
              >
                <LanguageSelector />
              </motion.div>

              <motion.a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary mt-4 text-lg"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                {t.nav.cta}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
