import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Linkedin, Github } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const links = [
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Planos', href: '#planos' },
    { label: 'SaaS', href: '#saas' },
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
              Vamos criar algo
              <br />
              <span className="font-display italic text-primary-glow">extraordinário</span>?
            </h2>
            
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Entre em contato e descubra como podemos transformar sua ideia em um sistema que gera resultados reais.
            </p>

            <MagneticButton strength={0.2}>
              <motion.a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-white text-primary font-bold px-10 py-5 text-lg transition-all duration-300 hover:bg-primary-glow hover:text-white"
              >
                Iniciar Conversa
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
              <p className="text-white/50 text-sm">
                Desenvolvimento web premium com foco em ROI e escalabilidade.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Navegação</h3>
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
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/50 text-sm">
                  <Mail className="w-4 h-4" />
                  contato@suinit.com
                </li>
                <li className="flex items-center gap-3 text-white/50 text-sm">
                  <Phone className="w-4 h-4" />
                  +55 (00) 00000-0000
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
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Siga-nos</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Suinit. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
