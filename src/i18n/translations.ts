export type Language = 'pt' | 'en' | 'es';

export const translations = {
  pt: {
    // Header
    nav: {
      solutions: 'Soluções',
      differentials: 'Diferenciais',
      plans: 'Planos',
      saas: 'SaaS',
      cta: 'Falar com Expert',
    },
    // Hero
    hero: {
      headline1: 'Sistemas que',
      headline2: 'impulsionam',
      headline3: 'resultados',
      description: 'Desenvolvemos soluções web com foco em ROI, escalabilidade e',
      descriptionHighlight: 'zero dívida técnica',
      descriptionEnd: '. Seu negócio merece tecnologia que gera retorno.',
      ctaPrimary: 'Falar com Especialista',
      ctaSecondary: 'Ver Planos',
      stats: {
        uptime: 'Uptime',
        loadTime: 'Load Time',
      },
      marquee: [
        'Web Development',
        '✦',
        'UI/UX Design',
        '✦',
        'SaaS Solutions',
        '✦',
        'Performance',
        '✦',
        'Innovation',
        '✦',
      ],
    },
    // Stats Bar
    stats: {
      rating: 'Avaliação',
      projects: 'Satisfação',
      support: 'Suporte',
      technicalDebt: 'Dívida Técnica',
    },
    // Advantages
    advantages: {
      badge: 'Nossas Vantagens',
      title1: 'Por que escolher',
      title2: 'a Suinit',
      description: 'Veja os benefícios de trabalhar conosco e como podemos ajudar seu negócio a crescer.',
      items: [
        {
          title: 'Performance Extrema',
          description: 'Sites ultra-rápidos que carregam em menos de 1 segundo, garantindo a melhor experiência para seus usuários.',
        },
        {
          title: 'Segurança Total',
          description: 'Proteção de ponta a ponta com SSL, backups automáticos e monitoramento 24/7.',
        },
        {
          title: 'Escalabilidade',
          description: 'Infraestrutura preparada para crescer junto com seu negócio.',
        },
        {
          title: 'Código Limpo',
          description: 'Zero dívida técnica. Código documentado e fácil de manter.',
        },
        {
          title: 'SEO Otimizado',
          description: 'Estrutura otimizada para aparecer no topo do Google.',
        },
        {
          title: 'Hospedagem Edge',
          description: 'Servidores globais para latência mínima em qualquer lugar do mundo.',
        },
      ],
    },
    // Testimonials
    testimonials: {
      badge: 'Depoimentos',
      title1: 'Confiado por líderes e criativos',
      title2: 'de diversas indústrias',
      testimonial1: {
        role: 'CEO, Startup Tech',
        text: 'A Suinit transformou completamente nossa presença digital. O site ficou incrivelmente rápido e as conversões aumentaram 40%.',
      },
      testimonial2: {
        role: 'Diretora de Marketing',
        text: 'Profissionalismo e qualidade técnica impecáveis. A equipe entregou além das expectativas em tempo recorde.',
      },
      testimonial3: {
        role: 'Fundador, E-commerce',
        text: 'Finalmente encontrei uma agência que entende de performance. O suporte é excepcional e os resultados são reais.',
      },
    },
    // Pain Points
    painPoints: {
      badge: 'O Problema',
      title1: 'Cansado de',
      title2: 'promessas',
      title3: 'vazias',
      card1: {
        title: 'Atrasos Infinitos',
        description: 'Projetos que nunca terminam e prazos que viram piada.',
      },
      card2: {
        title: 'Sites Lentos',
        description: 'Performance sofrível que afasta clientes e destrói seu SEO.',
      },
      card3: {
        title: 'Sem Suporte',
        description: 'Desenvolvedores que somem após a entrega do projeto.',
      },
      card4: {
        title: 'Código Travado',
        description: 'Sistemas engessados que não evoluem com seu negócio.',
      },
      bottomTitle: 'Chega de dor de cabeça.',
      bottomDescription: 'Trabalhamos com metodologias ágeis, código limpo e comunicação transparente.',
    },
    // Differentials
    differentials: {
      badge: 'Nossa Stack',
      title1: 'Tecnologia que',
      title2: 'escala',
      description: 'Utilizamos as melhores ferramentas do mercado para garantir performance, segurança e escalabilidade.',
      cards: [
        {
          title: 'React + Vite',
          description: 'Build ultra-rápido e DX incrível',
        },
        {
          title: 'Supabase',
          description: 'Backend escalável em minutos',
        },
        {
          title: 'Edge Computing',
          description: 'Deploy global, latência mínima',
        },
      ],
      featureTitle: 'Zero Dívida Técnica',
      featureDescription: 'Código limpo, documentado e pronto para crescer.',
    },
    // Speed Comparison
    speedComparison: {
      badge: 'Performance Real',
      title1: 'Velocidade que',
      title2: 'converte',
      description: 'Um site lento custa clientes. Veja a diferença.',
      regularSite: 'Site Comum',
      suinitSite: 'Site Suinit',
      loading: 'Carregando...',
      loaded: 'Carregado!',
      runTest: 'Executar Teste',
      testing: 'Testando...',
      stats: {
        faster: 'Mais Rápido',
        conversion: 'Conversão',
        seo: 'Score SEO',
      },
    },
    // Pricing
    pricing: {
      badge: 'Planos Mensais',
      title1: 'Escolha o Plano',
      title2: 'Ideal',
      description: 'Soluções pensadas para cada estágio do seu negócio. Sem surpresas, sem custos ocultos.',
      setupNote: 'Todos os planos possuem uma Taxa de Setup Inicial (consultar de acordo com o projeto).',
      cta: 'Contratar Agora',
      learnMore: 'Saiba Mais',
      currency: 'BRL',
      plans: {
        essential: {
          name: 'Essencial',
          focus: 'Estabilidade',
          description: 'Hospedagem Edge + SSL + Suporte Crítico',
          features: [
            'Hospedagem Edge Computing',
            'Certificado SSL Premium',
            'Suporte Crítico 24/7',
            'Monitoramento Contínuo',
            'Backups Automáticos',
          ],
          expandedFeatures: [
            {
              title: 'Hospedagem Edge Computing',
              description: 'Servidores distribuídos globalmente para latência mínima.',
            },
            {
              title: 'Certificado SSL Premium',
              description: 'Criptografia de ponta a ponta e selo de segurança.',
            },
            {
              title: 'Suporte Crítico',
              description: 'Atendimento prioritário para problemas urgentes.',
            },
          ],
        },
        growth: {
          name: 'Growth',
          focus: 'Conversão',
          badge: 'Mais Popular',
          description: 'Essencial + Integração CRM + SEO On-page',
          features: [
            'Tudo do plano Essencial',
            'Integração CRM/WhatsApp',
            'SEO On-page Otimizado',
            'Dashboard de Leads',
            'Relatórios de Performance',
            'Consultoria Mensal',
          ],
          expandedFeatures: [
            {
              title: 'Integração CRM & WhatsApp',
              description: 'Conecte seu site ao HubSpot, RD Station ou similar.',
            },
            {
              title: 'SEO On-page Otimizado',
              description: 'Otimização contínua para manter seu site no topo do Google.',
            },
            {
              title: 'Dashboard de Leads',
              description: 'Painel em tempo real com todos os leads e métricas.',
            },
            {
              title: 'Consultoria Mensal',
              description: 'Reuniões para analisar métricas e planejar melhorias.',
            },
          ],
        },
        enterprise: {
          name: 'Enterprise',
          focus: 'Escala',
          description: 'Sistemas Complexos (SaaS) + Dashboard Customizado',
          priceLabel: 'Sob Consulta',
          features: [
            'Tudo do plano Growth',
            'Sistemas SaaS Complexos',
            'Dashboard Customizado',
            'Arquitetura Escalável',
            'Suporte Dedicado',
            'SLA Garantido',
          ],
          expandedFeatures: [
            {
              title: 'Sistemas SaaS Complexos',
              description: 'Desenvolvimento de plataformas escaláveis e multi-tenant.',
            },
            {
              title: 'Dashboard Customizado',
              description: 'Painéis sob medida para sua operação.',
            },
            {
              title: 'Arquitetura Escalável',
              description: 'Infraestrutura preparada para milhões de usuários.',
            },
            {
              title: 'Suporte Dedicado',
              description: 'Time exclusivo para atender sua empresa.',
            },
          ],
        },
      },
    },
    // SaaS Section
    saas: {
      badge: 'Soluções Avançadas',
      title1: 'Precisa de algo',
      title2: 'mais',
      title3: 'complexo',
      description1: 'Desenvolvemos',
      descriptionHighlight: 'sistemas Web e SaaS sob medida',
      description2: 'para necessidades específicas. Desde plataformas de gestão até marketplaces completos.',
      cases: 'Cases de sucesso:',
      cta: 'Falar sobre meu projeto',
      capabilities: [
        { text: 'Sistemas Web', description: 'Aplicações completas' },
        { text: 'Plataformas SaaS', description: 'Escaláveis e seguras' },
        { text: 'Automações', description: 'Fluxos inteligentes' },
      ],
    },
    // Integrations
    integrations: {
      badge: 'Ecossistema',
      title1: 'Integrações que',
      title2: 'potencializam',
      description: 'Conectamos seu site às melhores ferramentas do mercado.',
    },
    // Footer
    footer: {
      cta: {
        title1: 'Vamos criar algo',
        title2: 'extraordinário',
        description: 'Entre em contato e descubra como podemos transformar sua ideia em um sistema que gera resultados reais.',
        button: 'Iniciar Conversa',
      },
      brand: 'Desenvolvimento web premium com foco em ROI e escalabilidade.',
      navigation: 'Navegação',
      contact: 'Contato',
      followUs: 'Siga-nos',
      rights: 'Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso',
    },
  },
  en: {
    // Header
    nav: {
      solutions: 'Solutions',
      differentials: 'Differentials',
      plans: 'Pricing',
      saas: 'SaaS',
      cta: 'Talk to Expert',
    },
    // Hero
    hero: {
      headline1: 'Systems that',
      headline2: 'drive',
      headline3: 'results',
      description: 'We develop web solutions focused on ROI, scalability and',
      descriptionHighlight: 'zero technical debt',
      descriptionEnd: '. Your business deserves technology that delivers returns.',
      ctaPrimary: 'Talk to Specialist',
      ctaSecondary: 'See Plans',
      stats: {
        uptime: 'Uptime',
        loadTime: 'Load Time',
      },
      marquee: [
        'Web Development',
        '✦',
        'UI/UX Design',
        '✦',
        'SaaS Solutions',
        '✦',
        'Performance',
        '✦',
        'Innovation',
        '✦',
      ],
    },
    // Stats Bar
    stats: {
      rating: 'Rating',
      projects: 'Satisfaction',
      support: 'Support',
      technicalDebt: 'Technical Debt',
    },
    // Advantages
    advantages: {
      badge: 'Our Advantages',
      title1: 'Why choose',
      title2: 'Suinit',
      description: 'See the benefits of working with us and how we can help your business grow.',
      items: [
        {
          title: 'Extreme Performance',
          description: 'Ultra-fast sites that load in less than 1 second, ensuring the best experience for your users.',
        },
        {
          title: 'Total Security',
          description: 'End-to-end protection with SSL, automatic backups and 24/7 monitoring.',
        },
        {
          title: 'Scalability',
          description: 'Infrastructure ready to grow with your business.',
        },
        {
          title: 'Clean Code',
          description: 'Zero technical debt. Documented and easy to maintain code.',
        },
        {
          title: 'SEO Optimized',
          description: 'Optimized structure to appear at the top of Google.',
        },
        {
          title: 'Edge Hosting',
          description: 'Global servers for minimal latency anywhere in the world.',
        },
      ],
    },
    // Testimonials
    testimonials: {
      badge: 'Testimonials',
      title1: 'Trusted by leaders and creatives',
      title2: 'from various industries',
      testimonial1: {
        role: 'CEO, Tech Startup',
        text: 'Suinit completely transformed our digital presence. The site became incredibly fast and conversions increased by 40%.',
      },
      testimonial2: {
        role: 'Marketing Director',
        text: 'Impeccable professionalism and technical quality. The team delivered beyond expectations in record time.',
      },
      testimonial3: {
        role: 'Founder, E-commerce',
        text: 'Finally found an agency that understands performance. Support is exceptional and results are real.',
      },
    },
    // Pain Points
    painPoints: {
      badge: 'The Problem',
      title1: 'Tired of',
      title2: 'empty',
      title3: 'promises',
      card1: {
        title: 'Endless Delays',
        description: 'Projects that never end and deadlines that become jokes.',
      },
      card2: {
        title: 'Slow Sites',
        description: 'Poor performance that drives away customers and destroys SEO.',
      },
      card3: {
        title: 'No Support',
        description: 'Developers who disappear after project delivery.',
      },
      card4: {
        title: 'Locked Code',
        description: 'Rigid systems that don\'t evolve with your business.',
      },
      bottomTitle: 'No more headaches.',
      bottomDescription: 'We work with agile methodologies, clean code and transparent communication.',
    },
    // Differentials
    differentials: {
      badge: 'Our Stack',
      title1: 'Technology that',
      title2: 'scales',
      description: 'We use the best tools on the market to ensure performance, security and scalability.',
      cards: [
        {
          title: 'React + Vite',
          description: 'Ultra-fast build and amazing DX',
        },
        {
          title: 'Supabase',
          description: 'Scalable backend in minutes',
        },
        {
          title: 'Edge Computing',
          description: 'Global deploy, minimal latency',
        },
      ],
      featureTitle: 'Zero Technical Debt',
      featureDescription: 'Clean, documented code ready to grow.',
    },
    // Speed Comparison
    speedComparison: {
      badge: 'Real Performance',
      title1: 'Speed that',
      title2: 'converts',
      description: 'A slow site costs customers. See the difference.',
      regularSite: 'Regular Site',
      suinitSite: 'Suinit Site',
      loading: 'Loading...',
      loaded: 'Loaded!',
      runTest: 'Run Test',
      testing: 'Testing...',
      stats: {
        faster: 'Faster',
        conversion: 'Conversion',
        seo: 'SEO Score',
      },
    },
    // Pricing
    pricing: {
      badge: 'Monthly Plans',
      title1: 'Choose the',
      title2: 'Ideal Plan',
      description: 'Solutions designed for every stage of your business. No surprises, no hidden costs.',
      setupNote: 'All plans have an Initial Setup Fee (consult according to the project).',
      cta: 'Get Started',
      learnMore: 'Learn More',
      currency: 'USD',
      plans: {
        essential: {
          name: 'Essential',
          focus: 'Stability',
          description: 'Edge Hosting + SSL + Critical Support',
          features: [
            'Edge Computing Hosting',
            'Premium SSL Certificate',
            '24/7 Critical Support',
            'Continuous Monitoring',
            'Automatic Backups',
          ],
          expandedFeatures: [
            {
              title: 'Edge Computing Hosting',
              description: 'Globally distributed servers for minimal latency.',
            },
            {
              title: 'Premium SSL Certificate',
              description: 'End-to-end encryption and security seal.',
            },
            {
              title: 'Critical Support',
              description: 'Priority service for urgent issues.',
            },
          ],
        },
        growth: {
          name: 'Growth',
          focus: 'Conversion',
          badge: 'Most Popular',
          description: 'Essential + CRM Integration + On-page SEO',
          features: [
            'Everything in Essential',
            'CRM/WhatsApp Integration',
            'Optimized On-page SEO',
            'Leads Dashboard',
            'Performance Reports',
            'Monthly Consulting',
          ],
          expandedFeatures: [
            {
              title: 'CRM & WhatsApp Integration',
              description: 'Connect your site to HubSpot, Salesforce or similar.',
            },
            {
              title: 'Optimized On-page SEO',
              description: 'Continuous optimization to keep your site at the top of Google.',
            },
            {
              title: 'Leads Dashboard',
              description: 'Real-time panel with all leads and metrics.',
            },
            {
              title: 'Monthly Consulting',
              description: 'Meetings to analyze metrics and plan improvements.',
            },
          ],
        },
        enterprise: {
          name: 'Enterprise',
          focus: 'Scale',
          description: 'Complex Systems (SaaS) + Custom Dashboard',
          priceLabel: 'Contact Us',
          features: [
            'Everything in Growth',
            'Complex SaaS Systems',
            'Custom Dashboard',
            'Scalable Architecture',
            'Dedicated Support',
            'Guaranteed SLA',
          ],
          expandedFeatures: [
            {
              title: 'Complex SaaS Systems',
              description: 'Development of scalable and multi-tenant platforms.',
            },
            {
              title: 'Custom Dashboard',
              description: 'Tailored panels for your operation.',
            },
            {
              title: 'Scalable Architecture',
              description: 'Infrastructure prepared for millions of users.',
            },
            {
              title: 'Dedicated Support',
              description: 'Exclusive team to serve your company.',
            },
          ],
        },
      },
    },
    // SaaS Section
    saas: {
      badge: 'Advanced Solutions',
      title1: 'Need something',
      title2: 'more',
      title3: 'complex',
      description1: 'We develop',
      descriptionHighlight: 'custom Web and SaaS systems',
      description2: 'for specific needs. From management platforms to complete marketplaces.',
      cases: 'Success cases:',
      cta: 'Talk about my project',
      capabilities: [
        { text: 'Web Systems', description: 'Complete applications' },
        { text: 'SaaS Platforms', description: 'Scalable and secure' },
        { text: 'Automations', description: 'Smart workflows' },
      ],
    },
    // Integrations
    integrations: {
      badge: 'Ecosystem',
      title1: 'Integrations that',
      title2: 'empower',
      description: 'We connect your site to the best tools on the market.',
    },
    // Footer
    footer: {
      cta: {
        title1: 'Let\'s create something',
        title2: 'extraordinary',
        description: 'Get in touch and discover how we can transform your idea into a system that generates real results.',
        button: 'Start Conversation',
      },
      brand: 'Premium web development focused on ROI and scalability.',
      navigation: 'Navigation',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
  },
  es: {
    // Header
    nav: {
      solutions: 'Soluciones',
      differentials: 'Diferenciales',
      plans: 'Precios',
      saas: 'SaaS',
      cta: 'Hablar con Experto',
    },
    // Hero
    hero: {
      headline1: 'Sistemas que',
      headline2: 'impulsan',
      headline3: 'resultados',
      description: 'Desarrollamos soluciones web enfocadas en ROI, escalabilidad y',
      descriptionHighlight: 'cero deuda técnica',
      descriptionEnd: '. Tu negocio merece tecnología que genera retorno.',
      ctaPrimary: 'Hablar con Especialista',
      ctaSecondary: 'Ver Planes',
      stats: {
        uptime: 'Uptime',
        loadTime: 'Load Time',
      },
      marquee: [
        'Web Development',
        '✦',
        'UI/UX Design',
        '✦',
        'SaaS Solutions',
        '✦',
        'Performance',
        '✦',
        'Innovation',
        '✦',
      ],
    },
    // Stats Bar
    stats: {
      rating: 'Calificación',
      projects: 'Satisfacción',
      support: 'Soporte',
      technicalDebt: 'Deuda Técnica',
    },
    // Advantages
    advantages: {
      badge: 'Nuestras Ventajas',
      title1: 'Por qué elegir',
      title2: 'Suinit',
      description: 'Mira los beneficios de trabajar con nosotros y cómo podemos ayudar a tu negocio a crecer.',
      items: [
        {
          title: 'Rendimiento Extremo',
          description: 'Sitios ultra-rápidos que cargan en menos de 1 segundo, garantizando la mejor experiencia para tus usuarios.',
        },
        {
          title: 'Seguridad Total',
          description: 'Protección de extremo a extremo con SSL, backups automáticos y monitoreo 24/7.',
        },
        {
          title: 'Escalabilidad',
          description: 'Infraestructura preparada para crecer junto con tu negocio.',
        },
        {
          title: 'Código Limpio',
          description: 'Cero deuda técnica. Código documentado y fácil de mantener.',
        },
        {
          title: 'SEO Optimizado',
          description: 'Estructura optimizada para aparecer en el top de Google.',
        },
        {
          title: 'Hosting Edge',
          description: 'Servidores globales para latencia mínima en cualquier lugar del mundo.',
        },
      ],
    },
    // Testimonials
    testimonials: {
      badge: 'Testimonios',
      title1: 'Confiado por líderes y creativos',
      title2: 'de diversas industrias',
      testimonial1: {
        role: 'CEO, Startup Tech',
        text: 'Suinit transformó completamente nuestra presencia digital. El sitio quedó increíblemente rápido y las conversiones aumentaron un 40%.',
      },
      testimonial2: {
        role: 'Directora de Marketing',
        text: 'Profesionalismo y calidad técnica impecables. El equipo entregó más allá de las expectativas en tiempo récord.',
      },
      testimonial3: {
        role: 'Fundador, E-commerce',
        text: 'Por fin encontré una agencia que entiende de rendimiento. El soporte es excepcional y los resultados son reales.',
      },
    },
    // Pain Points
    painPoints: {
      badge: 'El Problema',
      title1: 'Cansado de',
      title2: 'promesas',
      title3: 'vacías',
      card1: {
        title: 'Retrasos Infinitos',
        description: 'Proyectos que nunca terminan y plazos que se vuelven chistes.',
      },
      card2: {
        title: 'Sitios Lentos',
        description: 'Rendimiento pobre que aleja clientes y destruye el SEO.',
      },
      card3: {
        title: 'Sin Soporte',
        description: 'Desarrolladores que desaparecen después de entregar el proyecto.',
      },
      card4: {
        title: 'Código Bloqueado',
        description: 'Sistemas rígidos que no evolucionan con tu negocio.',
      },
      bottomTitle: 'Basta de dolores de cabeza.',
      bottomDescription: 'Trabajamos con metodologías ágiles, código limpio y comunicación transparente.',
    },
    // Differentials
    differentials: {
      badge: 'Nuestra Stack',
      title1: 'Tecnología que',
      title2: 'escala',
      description: 'Utilizamos las mejores herramientas del mercado para garantizar rendimiento, seguridad y escalabilidad.',
      cards: [
        {
          title: 'React + Vite',
          description: 'Build ultra-rápido y DX increíble',
        },
        {
          title: 'Supabase',
          description: 'Backend escalable en minutos',
        },
        {
          title: 'Edge Computing',
          description: 'Deploy global, latencia mínima',
        },
      ],
      featureTitle: 'Cero Deuda Técnica',
      featureDescription: 'Código limpio, documentado y listo para crecer.',
    },
    // Speed Comparison
    speedComparison: {
      badge: 'Rendimiento Real',
      title1: 'Velocidad que',
      title2: 'convierte',
      description: 'Un sitio lento cuesta clientes. Mira la diferencia.',
      regularSite: 'Sitio Común',
      suinitSite: 'Sitio Suinit',
      loading: 'Cargando...',
      loaded: '¡Cargado!',
      runTest: 'Ejecutar Test',
      testing: 'Probando...',
      stats: {
        faster: 'Más Rápido',
        conversion: 'Conversión',
        seo: 'Score SEO',
      },
    },
    // Pricing
    pricing: {
      badge: 'Planes Mensuales',
      title1: 'Elige el Plan',
      title2: 'Ideal',
      description: 'Soluciones pensadas para cada etapa de tu negocio. Sin sorpresas, sin costos ocultos.',
      setupNote: 'Todos los planes tienen una Tarifa de Setup Inicial (consultar según el proyecto).',
      cta: 'Contratar Ahora',
      learnMore: 'Saber Más',
      currency: 'USD',
      plans: {
        essential: {
          name: 'Esencial',
          focus: 'Estabilidad',
          description: 'Hosting Edge + SSL + Soporte Crítico',
          features: [
            'Hosting Edge Computing',
            'Certificado SSL Premium',
            'Soporte Crítico 24/7',
            'Monitoreo Continuo',
            'Backups Automáticos',
          ],
          expandedFeatures: [
            {
              title: 'Hosting Edge Computing',
              description: 'Servidores distribuidos globalmente para latencia mínima.',
            },
            {
              title: 'Certificado SSL Premium',
              description: 'Cifrado de extremo a extremo y sello de seguridad.',
            },
            {
              title: 'Soporte Crítico',
              description: 'Atención prioritaria para problemas urgentes.',
            },
          ],
        },
        growth: {
          name: 'Growth',
          focus: 'Conversión',
          badge: 'Más Popular',
          description: 'Esencial + Integración CRM + SEO On-page',
          features: [
            'Todo del plan Esencial',
            'Integración CRM/WhatsApp',
            'SEO On-page Optimizado',
            'Dashboard de Leads',
            'Reportes de Performance',
            'Consultoría Mensual',
          ],
          expandedFeatures: [
            {
              title: 'Integración CRM & WhatsApp',
              description: 'Conecta tu sitio a HubSpot, Salesforce o similar.',
            },
            {
              title: 'SEO On-page Optimizado',
              description: 'Optimización continua para mantener tu sitio en el top de Google.',
            },
            {
              title: 'Dashboard de Leads',
              description: 'Panel en tiempo real con todos los leads y métricas.',
            },
            {
              title: 'Consultoría Mensual',
              description: 'Reuniones para analizar métricas y planificar mejoras.',
            },
          ],
        },
        enterprise: {
          name: 'Enterprise',
          focus: 'Escala',
          description: 'Sistemas Complejos (SaaS) + Dashboard Personalizado',
          priceLabel: 'A Consultar',
          features: [
            'Todo del plan Growth',
            'Sistemas SaaS Complejos',
            'Dashboard Personalizado',
            'Arquitectura Escalable',
            'Soporte Dedicado',
            'SLA Garantizado',
          ],
          expandedFeatures: [
            {
              title: 'Sistemas SaaS Complejos',
              description: 'Desarrollo de plataformas escalables y multi-tenant.',
            },
            {
              title: 'Dashboard Personalizado',
              description: 'Paneles a medida para tu operación.',
            },
            {
              title: 'Arquitectura Escalable',
              description: 'Infraestructura preparada para millones de usuarios.',
            },
            {
              title: 'Soporte Dedicado',
              description: 'Equipo exclusivo para atender tu empresa.',
            },
          ],
        },
      },
    },
    // SaaS Section
    saas: {
      badge: 'Soluciones Avanzadas',
      title1: '¿Necesitas algo',
      title2: 'más',
      title3: 'complejo',
      description1: 'Desarrollamos',
      descriptionHighlight: 'sistemas Web y SaaS a medida',
      description2: 'para necesidades específicas. Desde plataformas de gestión hasta marketplaces completos.',
      cases: 'Casos de éxito:',
      cta: 'Hablar sobre mi proyecto',
      capabilities: [
        { text: 'Sistemas Web', description: 'Aplicaciones completas' },
        { text: 'Plataformas SaaS', description: 'Escalables y seguras' },
        { text: 'Automatizaciones', description: 'Flujos inteligentes' },
      ],
    },
    // Integrations
    integrations: {
      badge: 'Ecosistema',
      title1: 'Integraciones que',
      title2: 'potencian',
      description: 'Conectamos tu sitio a las mejores herramientas del mercado.',
    },
    // Footer
    footer: {
      cta: {
        title1: 'Vamos a crear algo',
        title2: 'extraordinario',
        description: 'Ponte en contacto y descubre cómo podemos transformar tu idea en un sistema que genera resultados reales.',
        button: 'Iniciar Conversación',
      },
      brand: 'Desarrollo web premium enfocado en ROI y escalabilidad.',
      navigation: 'Navegación',
      contact: 'Contacto',
      followUs: 'Síguenos',
      rights: 'Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Uso',
    },
  },
} as const;

export type Translations = typeof translations;
