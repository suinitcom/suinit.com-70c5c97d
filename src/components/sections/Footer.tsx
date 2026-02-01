import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const content = {
    pt: {
      rights: 'Todos os direitos reservados.',
    },
    en: {
      rights: 'All rights reserved.',
    },
    es: {
      rights: 'Todos los derechos reservados.',
    },
  };

  const text = content[language];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/suinitcom' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/suinitcom' },
    { name: 'Twitter', href: 'https://twitter.com/suinitcom' },
  ];

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-display font-bold text-foreground"
          >
            suinit<span className="text-accent">.</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium link-underline"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Suinit. {text.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
