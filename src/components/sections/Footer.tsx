import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <span className="text-3xl font-bold tracking-tight">
              suinit<span className="text-primary-glow">.</span>
            </span>
            <p className="text-white/70 mt-4 max-w-md">
              Desenvolvimento web de alta performance para empresas que buscam 
              resultados reais. Zero dívida técnica, máxima escalabilidade.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#solucoes" className="text-white/70 hover:text-white transition-colors">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-white/70 hover:text-white transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#planos" className="text-white/70 hover:text-white transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#saas" className="text-white/70 hover:text-white transition-colors">
                  SaaS
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@suinit.com" 
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  contato@suinit.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin size={18} />
                  Brasil
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Suinit. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
