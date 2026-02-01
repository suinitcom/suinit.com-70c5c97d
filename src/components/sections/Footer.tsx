import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Linkedin, Github } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { useLanguage } from '@/i18n/LanguageContext';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/suinitcom', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/suinitcom', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/suinitcom', label: 'GitHub' },
  ];

  const links = [
    { label: t.nav.solutions, href: '#solucoes' },
    { label: t.nav.differentials, href: '#diferenciais' },
    { label: t.nav.plans, href: '#planos' },
    { label: t.nav.saas, href: '#saas' },
  ];

  return (
    <footer ref={ref} className="relative overflow-hidden">
      {/* Top section with CTA */}
      <div className="section-dark py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t.footer.cta.title1}
              <br />
              <span className="font-display italic text-primary-glow">{t.footer.cta.title2}</span>?
            </h2>
            
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              {t.footer.cta.description}
            </p>

            <MagneticButton strength={0.2}>
              <motion.a
                href="https://wa.me/5511933336922"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-white text-primary font-bold px-10 py-5 text-lg transition-all duration-300 hover:bg-primary-glow hover:text-white"
              >
                {t.footer.cta.button}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUpRight className="w-6 h-6" />
                </motion.span>
              </motion.a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Bottom section with info */}
      <div className="bg-foreground py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl font-bold text-white mb-4">
                suinit<span className="text-primary-glow">.</span>
              </div>
              <p className="text-white/50 text-sm mb-4">
                {t.footer.brand}
              </p>
              <p className="text-white/40 text-sm">
                @suinitcom
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{t.footer.navigation}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-white/50 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{t.footer.contact}</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contato@suinit.com">contato@suinit.com</a>
                </li>
                <li className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <a href="https://wa.me/5511933336922" target="_blank" rel="noopener noreferrer">
                    +55 11 93333-6922
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/50 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  São Paulo, Brasil
                </li>
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{t.footer.followUs}</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
              <p className="text-white/40 text-sm mt-4">
                @suinitcom
              </p>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Suinit. {t.footer.rights}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
