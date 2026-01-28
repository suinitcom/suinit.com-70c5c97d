import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link2 } from 'lucide-react';
import Marquee from '../ui/Marquee';
import { useLanguage } from '@/i18n/LanguageContext';

const integrations = [
  {
    name: 'HubSpot',
    description: 'CRM & Marketing',
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
        <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.984v-.066A2.198 2.198 0 0 0 17.235.84h-.066a2.198 2.198 0 0 0-2.194 2.194v.066c0 .87.503 1.617 1.233 1.972v2.864a5.302 5.302 0 0 0-2.627 1.268l-7.03-5.483a2.715 2.715 0 0 0 .106-.741 2.727 2.727 0 1 0-2.727 2.727c.494 0 .95-.133 1.348-.359l6.876 5.363a5.357 5.357 0 0 0-.48 2.207c0 .863.207 1.676.569 2.398l-2.066 2.066a1.98 1.98 0 0 0-.609-.099 2.004 2.004 0 1 0 2.004 2.004c0-.218-.036-.427-.1-.623l2.024-2.024a5.345 5.345 0 0 0 3.07.967 5.37 5.37 0 0 0 5.369-5.37 5.351 5.351 0 0 0-4.039-5.187zm-.995 7.946a2.758 2.758 0 1 1 0-5.516 2.758 2.758 0 0 1 0 5.516z"/>
      </svg>
    ),
  },
  {
    name: 'Google Workspace',
    description: {
      pt: 'Produtividade',
      en: 'Productivity',
      es: 'Productividad',
    },
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp Business',
    description: {
      pt: 'Comunicação',
      en: 'Communication',
      es: 'Comunicación',
    },
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#25D366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    name: 'Stripe',
    description: {
      pt: 'Pagamentos',
      en: 'Payments',
      es: 'Pagos',
    },
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#635BFF">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
      </svg>
    ),
  },
  {
    name: 'Slack',
    description: {
      pt: 'Comunicação',
      en: 'Communication',
      es: 'Comunicación',
    },
    logo: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
        <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
        <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.522 2.521 2.528 2.528 0 0 1-2.52-2.521V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.521 2.522v6.312z"/>
        <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.522 2.527 2.527 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.521h-6.313z"/>
      </svg>
    ),
  },
];

const IntegrationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language } = useLanguage();

  const getDescription = (desc: string | { pt: string; en: string; es: string }) => {
    if (typeof desc === 'string') return desc;
    return desc[language];
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-muted/50 border-y-2 border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-muted-foreground mb-4"
          >
            <Link2 size={16} />
            <span className="text-sm font-bold uppercase tracking-wider">
              {language === 'pt' && 'Integramos com suas ferramentas favoritas'}
              {language === 'en' && 'We integrate with your favorite tools'}
              {language === 'es' && 'Integramos con tus herramientas favoritas'}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Full-width Marquee */}
      <Marquee speed={40} className="py-8">
        {integrations.map((integration) => (
          <motion.div
            key={integration.name}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-4 bg-card border-2 border-border px-6 py-4 mx-4 hover:border-primary/30 transition-colors cursor-default group"
          >
            <div className="text-muted-foreground group-hover:text-foreground transition-colors">
              {integration.logo}
            </div>
            <div>
              <div className="font-bold text-foreground">{integration.name}</div>
              <div className="text-xs text-muted-foreground">{getDescription(integration.description)}</div>
            </div>
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
};

export default IntegrationsSection;
