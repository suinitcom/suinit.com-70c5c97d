import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Planos', href: '#planos' },
    { label: 'SaaS', href: '#saas' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              suinit<span className="text-primary-glow">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                className="text-white/80 hover:text-white font-medium text-sm transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-glow group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden md:flex items-center gap-2 bg-white text-primary font-semibold px-5 py-2.5 rounded-lg hover:bg-white/90 transition-all duration-300 text-sm"
          >
            Falar com Especialista
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/80 hover:text-white font-medium text-sm transition-colors duration-200 py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary font-semibold px-5 py-3 rounded-lg text-center text-sm mt-2"
              >
                Falar com Especialista
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
