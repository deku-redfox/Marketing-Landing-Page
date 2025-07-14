import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Star, Quote } from 'lucide-react';

import Navbar from './components/NavBar'

// Composant de fond animé avec éléments africains
const AnimatedBackground = ({ currentSection }) => {
  const backgroundRef = useRef(null);

  useGSAP(() => {
    const elements = backgroundRef.current?.querySelectorAll('.floating-element');
    if (elements) {
      elements.forEach((element, index) => {
        // Animation de flottement continue
        gsap.to(element, {
          y: "+=20",
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.5
        });

        // Rotation douce
        gsap.to(element, {
          rotation: 360,
          duration: 10 + Math.random() * 5,
          repeat: -1,
          ease: "none",
          delay: index * 0.3
        });
      });
    }
  }, [currentSection]);

  // Éléments décoratifs selon la section
  const getDecoElements = () => {
    switch (currentSection) {
      case 0: // Accueil - Symboles de prospérité
        return [
          { type: 'coin', x: '10%', y: '20%', size: '20px', color: 'text-yellow-400' },
          { type: 'diamond', x: '85%', y: '15%', size: '24px', color: 'text-blue-400' },
          { type: 'star', x: '15%', y: '70%', size: '18px', color: 'text-green-400' },
          { type: 'coin', x: '80%', y: '75%', size: '22px', color: 'text-yellow-400' },
          { type: 'arrow', x: '90%', y: '45%', size: '28px', color: 'text-purple-400' }
        ];
      case 1: // Services - Outils et croissance
        return [
          { type: 'chart', x: '12%', y: '25%', size: '26px', color: 'text-green-400' },
          { type: 'gear', x: '88%', y: '20%', size: '24px', color: 'text-blue-400' },
          { type: 'target', x: '8%', y: '65%', size: '20px', color: 'text-red-400' },
          { type: 'lightbulb', x: '85%', y: '70%', size: '22px', color: 'text-yellow-400' },
          { type: 'rocket', x: '5%', y: '45%', size: '28px', color: 'text-purple-400' }
        ];
      case 2: // Témoignages - Éléments de confiance
        return [
          { type: 'heart', x: '15%', y: '30%', size: '22px', color: 'text-pink-400' },
          { type: 'shield', x: '82%', y: '25%', size: '24px', color: 'text-blue-400' },
          { type: 'trophy', x: '10%', y: '75%', size: '26px', color: 'text-yellow-400' },
          { type: 'star', x: '88%', y: '65%', size: '20px', color: 'text-green-400' },
          { type: 'handshake', x: '5%', y: '50%', size: '28px', color: 'text-orange-400' }
        ];
      case 3: // Formation - Éducation et sagesse
        return [
          { type: 'book', x: '12%', y: '35%', size: '24px', color: 'text-blue-400' },
          { type: 'graduation', x: '85%', y: '30%', size: '28px', color: 'text-purple-400' },
          { type: 'wisdom', x: '8%', y: '70%', size: '22px', color: 'text-yellow-400' },
          { type: 'growth', x: '90%', y: '60%', size: '26px', color: 'text-green-400' },
          { type: 'crown', x: '3%', y: '55%', size: '24px', color: 'text-orange-400' }
        ];
      default:
        return [];
    }
  };

  const getIcon = (type) => {
    const icons = {
      coin: '🪙',
      diamond: '💎',
      star: '⭐',
      arrow: '🚀',
      chart: '📈',
      gear: '⚙️',
      target: '🎯',
      lightbulb: '💡',
      rocket: '🚀',
      heart: '❤️',
      shield: '🛡️',
      trophy: '🏆',
      handshake: '🤝',
      book: '📚',
      graduation: '🎓',
      wisdom: '🧠',
      growth: '🌱',
      crown: '👑'
    };
    return icons[type] || '✨';
  };

  return (
    <div ref={backgroundRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orbes de couleur flottantes */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl floating-element"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-full blur-xl floating-element"></div>
      <div className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-gradient-to-r from-red-400/20 to-pink-500/20 rounded-full blur-xl floating-element"></div>
      <div className="absolute bottom-1/3 right-1/6 w-36 h-36 bg-gradient-to-r from-purple-400/20 to-indigo-500/20 rounded-full blur-xl floating-element"></div>

      {/* Motifs géométriques africains */}
      <div className="absolute top-1/2 left-1/12 w-20 h-20 border-2 border-yellow-400/30 rotate-45 floating-element"></div>
      <div className="absolute top-1/4 right-1/12 w-16 h-16 border-2 border-green-400/30 rounded-full floating-element"></div>

      {/* Éléments décoratifs selon la section */}
      {getDecoElements().map((element, index) => (
        <div
          key={index}
          className={`absolute floating-element ${element.color} opacity-60`}
          style={{
            left: element.x,
            top: element.y,
            fontSize: element.size
          }}
        >
          {getIcon(element.type)}
        </div>
      ))}

      {/* Lignes de connexion subtiles */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        <path
          d="M50,50 Q200,100 400,50 T800,100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="floating-element"
        />
        <path
          d="M100,200 Q300,150 500,200 T900,150"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
          className="floating-element"
        />
      </svg>

      {/* Texture de fond subtile */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FCD34D 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #10B981 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}
      ></div>
    </div>
  );
};

// Section Principale
const MainSection = ({ isActive, isLeaving, direction }) => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const elements = sectionRef.current.querySelectorAll('[data-animate]');
    const expertImage = sectionRef.current.querySelector('[data-expert-image]');
    
    if (!isActive) {
      gsap.to(elements,
        { opacity: 0, y: direction === 'down' ? 100 : -100 },
      );
      gsap.to(expertImage,
        {
          opacity: 0,
          scale: 0.8,
          rotationY: direction === 'down' ? 45 : -45,
          filter: 'blur(10px)',
        },
      )
    }
    if (isActive && !isLeaving) {
      // Animation d'entrée pour les textes
      gsap.fromTo(elements,
        { opacity: 0, y: direction === 'down' ? 100 : -100 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
      );
      // Animation spéciale pour l'image de l'expert
      if (expertImage) {
        gsap.fromTo(expertImage,
          {
            opacity: 0,
            scale: 0.8,
            rotationY: direction === 'down' ? 45 : -45,
            filter: 'blur(10px)',
          },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            delay: 0.3,
            ease: "back.out(1.7)"
          }
        );

        // Animation du halo lumineux
        gsap.fromTo(expertImage.querySelector('.expert-glow'),
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, delay: 0.5, ease: "power2.out" }
        );
      }
    } else if (isLeaving) {
      // Animation de sortie
      gsap.to(elements, {
        opacity: 0,
        y: direction === 'down' ? -100 : 100,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.in"
      });

      if (expertImage) {
        gsap.to(expertImage, {
          opacity: 0,
          scale: 0.8,
          rotationY: direction === 'down' ? -45 : 45,
          filter: 'blur(5px)',
          duration: 0.6,
          ease: "power2.in"
        });
      }
    }
  }, {dependencies: [isActive, isLeaving, direction]});

  // Animation d'incrémentation rapide des nombres
  const stats = [
    { value: 500, suffix: '+', color: 'text-yellow-400', label: 'Clients satisfaits' },
    { value: 5, suffix: ' ans', color: 'text-green-400', label: "D'expérience" },
    { value: 98, suffix: '%', color: 'text-red-400', label: 'Taux de réussite' }
  ];
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isActive && !isLeaving) {
      stats.forEach((stat, idx) => {
        let start = 0;
        let end = stat.value;
        let duration = 900 + idx * 200; // ms
        let startTime = null;

        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const current = Math.floor(progress * (end - start) + start);
          setAnimatedStats(prev => {
            const copy = [...prev];
            copy[idx] = current;
            return copy;
          });
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setAnimatedStats(prev => {
              const copy = [...prev];
              copy[idx] = end;
              return copy;
            });
          }
        };
        requestAnimationFrame(step);
      });
    }
    // Mauvais UX quand on voit ca se reinitialiser
    // else if (isLeaving) {
    //   setAnimatedStats(stats.map(() => 0));
    // }
    // eslint-disable-next-line
  }, [isActive, isLeaving]);

  return (
    <section id='main-section' ref={sectionRef} className='pt-[110px] lg:pt-[90px] min-h-screen pb-[80px]'>
      <div className="container flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Section Texte */}
          <div className="lg:col-span-1 text-center lg:text-left space-y-8">
            <div data-animate className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Expert <span className='bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent'>Marketing</span>
              </h1>
              <div className="relative max-lg:-translate-x-1/2 max-lg:left-1/2 w-20 h-1 bg-gradient-to-r from-yellow-400 via-green-400 to-red-400 rounded-full"></div>
            </div>

            <p data-animate className="text-xl text-white/90 leading-relaxed">
              Boostez votre business avec des stratégies marketing et e-commerce performantes
            </p>

            <div data-animate className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-3">Résultats garantis</h3>
              <p className="text-white/80">+300% de ROI en moyenne pour nos clients</p>
            </div>

            <div data-animate className="flex justify-center lg:justify-start space-x-4">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105">
                Découvrir mes services
              </button>
            </div>
          </div>

          {/* Section Image Expert */}
          <div className="lg:col-span-1 flex justify-center">
            <div data-expert-image className="relative">
              {/* Halo lumineux animé */}
              <div className="expert-glow absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-green-400/30 to-red-400/30 rounded-full blur-2xl scale-110"></div>

              {/* Cercle décoratif externe */}
              <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-yellow-400 via-green-400 to-red-400 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border border-white/20 scale-110"></div>

              {/* Container de l'image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-yellow-400/20 via-green-400/20 to-red-400/20 backdrop-blur-sm border-4 border-white/30">
                {/* Placeholder pour l'image - À remplacer par votre image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    {/* <div className="text-6xl mb-4">👨‍💼</div>
                    <p className="text-lg font-semibold">Votre Photo Ici</p>
                    <p className="text-sm">Expert Marketing</p> */}
                    <img src="/images/hero-img.png" alt="Photo de L'expert Marketing" />
                  </div>
                </div>

                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full animate-pulse"></div>
              </div>

              {/* Badges flottants */}
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                ⭐ Expert
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce delay-300">
                🏆 Certifié
              </div>
            </div>
          </div>

          {/* Section Stats */}
          <div className="lg:col-span-1 space-y-6">
            {stats.map((stat, idx) => (
              <div key={stat.label} data-animate className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-center">
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {animatedStats[idx]}
                    {stat.suffix}
                  </div>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section Services & Présentation Expert - Version Modernisée
const ServicesSection = ({ isActive, isLeaving, direction }) => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const elements = sectionRef.current.querySelectorAll('[data-animate]');
    if (!isActive) {
      gsap.to(elements, { opacity: 0, y: 50, scale: 0.95 },)
    }
    if (isActive && !isLeaving) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: "power3.out"
        }
      );
    } else if (isLeaving) {
      gsap.to(elements, {
        opacity: 0,
        y: -30,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.in",
      });
    }
  }, {dependencies: [isActive, isLeaving]});

  const services = [
    {
      title: "Marketing Digital",
      desc: "Stratégies omnicanales personnalisées pour maximiser votre ROI",
      icon: "🎯",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/30"
    },
    {
      title: "E-commerce",
      desc: "Optimisation UX/UI et tunnel de conversion performant",
      icon: "🛒",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/30"
    },
    {
      title: "SEO/SEA",
      desc: "Visibilité maximale et acquisition de trafic qualifié",
      icon: "📈",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-400/30"
    },
    {
      title: "Analytics",
      desc: "Tableaux de bord avancés et insights data-driven",
      icon: "📊",
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/30"
    }
  ];

  const qualities = [
    { label: "Créatif", icon: "💡", color: "text-yellow-300" },
    { label: "Rigoureux", icon: "🧐", color: "text-blue-300" },
    { label: "Passionné", icon: "🔥", color: "text-red-300" },
    { label: "Orienté Résultats", icon: "🏆", color: "text-green-300" }
  ];

  return (
    <section id='service' ref={sectionRef} className="pt-[80px] pb-[80px]">
      <div className="container flex items-center justify-center relative">
        {/* Éléments décoratifs de fond */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Présentation Expert - moins de glassmorphism */}
            <div data-animate className="relative">
              <div className="flex flex-col items-center lg:items-start">
                {/* Photo plus petite avec glassmorphism */}
                <div className="relative flex-shrink-0 mb-6">
                  <div className="w-28 h-28 rounded-full overflow-hidden bg-white/10 backdrop-blur-md border-4 border-yellow-400 shadow-2xl flex items-center justify-center">
                    <img
                      src="/images/hero-img.png"
                      alt="Expert Marketing"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 w-7 h-7 bg-green-300 rounded-full border-4 shadow-lg"></div>
                </div>
                {/* Description mise en évidence */}
                <div className="w-full max-w-xl backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight text-center lg:text-left">
                    Passionné de marketing et d'innovation digitale
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed text-center lg:text-left">
                    Depuis plus de 5 ans, j'accompagne entrepreneurs et entreprises dans leur transformation digitale.<br />
                    Ma mission : transformer vos idées en succès concrets grâce à des stratégies sur-mesure, avec énergie, créativité et expertise technique.
                  </p>
                </div>
                {/* Qualités en bas de la présentation */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6">
                  {qualities.map((q, idx) => (
                    <div
                      key={idx}
                      className="group relative bg-white/5 border border-white/10 rounded-2xl px-6 py-3 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-3 transition-transform duration-300 group-hover:scale-110">{q.icon}</span>
                        <span className={`font-semibold ${q.color} text-sm`}>{q.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Compétences & Services */}
            <div>
              <div data-animate className="mb-8">
                <h3 className="text-4xl font-bold text-white mb-8 text-center lg:text-left">
                  Mes <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">compétences</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      data-animate
                      className={`group relative bg-gradient-to-br ${service.gradient} rounded-2xl p-6 border ${service.borderColor} hover:scale-105 transition-all duration-500 cursor-pointer`}
                    >
                      <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                        {service.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to action subtil */}
          <div data-animate className="text-center mt-16">
            <p className="text-white/60 text-lg">
              Prêt à transformer votre business digital ?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = ({ isActive, isLeaving, direction }) => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Amina Kone",
      role: "CEO, Kone Fashion",
      location: "Abidjan, CI",
      badge: "Reine des Leads",
      quote: "Grâce à Marcus, j'ai osé devenir visible. Mon chiffre d'affaires a triplé en 6 mois.",
      metrics: "+300% CA",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 2,
      name: "Kwame Asante",
      role: "Fondateur, Tech Solutions",
      location: "Accra, GH",
      badge: "Roi du E-commerce",
      quote: "Une stratégie digitale qui a révolutionné ma boutique en ligne.",
      metrics: "+250% Ventes",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      name: "Fatou Diallo",
      role: "Directrice, Diallo Cosmetics",
      location: "Dakar, SN",
      badge: "Maîtresse des Réseaux",
      quote: "J'ai enfin trouvé ma voix sur les réseaux sociaux. Merci Marcus !",
      metrics: "+500% Engagement",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      name: "Joseph Mbeki",
      role: "CEO, Mbeki Foods",
      location: "Lagos, NG",
      badge: "Champion des Conversions",
      quote: "Ses stratégies ont transformé mes prospects en clients fidèles.",
      metrics: "+180% Conversions",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 5,
      name: "Aicha Traoré",
      role: "Fondatrice, Traoré Textiles",
      location: "Ouagadougou, BF",
      badge: "Impératrice du Digital",
      quote: "Une approche personnalisée qui respecte nos valeurs africaines.",
      metrics: "+220% Notoriété",
      color: "from-red-500 to-rose-600"
    },
    {
      id: 6,
      name: "Emmanuel Kouassi",
      role: "Directeur, Kouassi Agro",
      location: "Yamoussoukro, CI",
      badge: "Maître de l'Innovation",
      quote: "Il a su moderniser notre approche tout en gardant notre authenticité.",
      metrics: "+150% Leads",
      color: "from-indigo-500 to-violet-600"
    }
  ];

  // Fonction pour naviguer dans le carousel
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / getItemsPerSlide()));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / getItemsPerSlide())) % Math.ceil(testimonials.length / getItemsPerSlide()));
  };

  // Fonction pour obtenir le nombre d'éléments par slide
  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 1 : 3;
    }
    return 3;
  };

  // Fonction pour obtenir les témoignages visibles
  const getVisibleTestimonials = () => {
    const itemsPerSlide = getItemsPerSlide();
    const startIndex = currentIndex * itemsPerSlide;
    return testimonials.slice(startIndex, startIndex + itemsPerSlide);
  };

  useGSAP(() => {
    const elements = sectionRef.current.querySelectorAll('[data-animate]');

    if (!isActive) {
      gsap.to(elements,
        { opacity: 0, y: 60, scale: 0.9 },
      );
      gsap.to('.testimonial-card',
        { opacity: 0, y: 80, rotationY: 45 },
      );
      gsap.to('.badge',
        { scale: 0, rotation: -180 },
      );
      gsap.to('.weave-line',
        { x: '-100%', opacity: 0 },
      );
    }

    if (isActive && !isLeaving) {
      // Animation d'entrée
      gsap.fromTo(elements,
        { opacity: 0, y: 60, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.2, ease: "power3.out" }
      );

      // Animation spécifique pour les cartes de témoignages
      gsap.fromTo('.testimonial-card',
        { opacity: 0, y: 80, rotationY: 45 },
        { opacity: 1, y: 0, rotationY: 0, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.3 }
      );

      // Animation des badges avec rotation
      gsap.fromTo('.badge',
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)", delay: 0.6 }
      );

      // Animation du motif tissé plus subtile
      gsap.to('.weave-pattern', {
        backgroundPosition: '100% 100%',
        duration: 30,
        repeat: -1,
        ease: "none"
      });

      // Animation des lignes de tissage plus subtile
      gsap.fromTo('.weave-line',
        { x: '-100%', opacity: 0 },
        { x: '100%', opacity: 0.05, duration: 12, stagger: 1, repeat: -1, ease: "none" }
      );

    } else if (isLeaving) {
      // Animation de sortie
      gsap.to(elements, {
        opacity: 0,
        y: -40,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.in"
      });

      // Animation de sortie spécifique pour les cartes
      gsap.to('.testimonial-card', {
        opacity: 0,
        y: -60,
        rotationY: -45,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.in"
      });
    }
  }, [isActive, isLeaving, direction]);

  // Animation lors du changement de slide
  useGSAP(() => {
    if (isActive) {
      gsap.fromTo('.testimonial-card',
        { opacity: 0, x: 50, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [currentIndex, isActive]);

  return (
    <section ref={sectionRef} className="pt-[110px] pb-24 relative overflow-hidden">
      {/* Motif tissé en arrière-plan - plus subtil */}
      <div className="absolute inset-0 weave-pattern opacity-1"
        style={{
          backgroundImage: `
               linear-gradient(45deg, #f59e0b 25%, transparent 25%),
               linear-gradient(-45deg, #f59e0b 25%, transparent 25%),
               linear-gradient(45deg, transparent 75%, #f59e0b 75%),
               linear-gradient(-45deg, transparent 75%, #f59e0b 75%)
             `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 0 40px, 40px -40px, -40px 0px'
        }}>
      </div>

      {/* Lignes de tissage animées - plus subtiles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="weave-line absolute h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              left: '-50%',
              width: '200%',
              transform: `rotate(${-10 + i * 5}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-20" data-animate>
          <h2 className="text-5xl font-bold text-white mb-6">
            Ils ont pris le
            <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              {" "}pouvoir digital
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Chaque client est une pièce de notre tissu de réussite. Découvrez comment ils sont devenus les héros de leur transformation digitale.
          </p>
        </div>

        {/* Carousel de témoignages */}
        <div className="relative max-w-7xl mx-auto" data-animate>
          {/* Boutons de navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            disabled={currentIndex === 0}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            disabled={currentIndex === Math.ceil(testimonials.length / getItemsPerSlide()) - 1}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Grille de témoignages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className="testimonial-card group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-amber-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 cursor-pointer"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})`,
                }}
              >
                {/* Effet d'aura au hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                {/* Badge héroïque */}
                <div className={`badge absolute -top-4 -right-4 bg-gradient-to-r ${testimonial.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
                  {testimonial.badge}
                </div>

                {/* Photo avec effet monochrome */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-4 border-slate-600 group-hover:border-amber-400 transition-colors duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                      <div className="text-2xl font-bold text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>

                  {/* Motif wax en arrière-plan */}
                  <div className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 30%, #f59e0b 2px, transparent 2px),
                                         radial-gradient(circle at 70% 70%, #f59e0b 2px, transparent 2px)`,
                      backgroundSize: '20px 20px'
                    }} />
                </div>

                {/* Citation */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 text-amber-400 w-6 h-6 opacity-50" />
                  <p className="text-slate-200 italic text-lg leading-relaxed pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Informations client */}
                <div className="text-center mb-4">
                  <h4 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  <p className="text-slate-500 text-xs">{testimonial.location}</p>
                </div>

                {/* Métrique de réussite */}
                <div className="text-center">
                  <div className={`inline-block bg-gradient-to-r ${testimonial.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {testimonial.metrics}
                  </div>
                </div>

                {/* Étoiles */}
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Effet de tissage sur les côtés */}
                <div className="absolute left-0 top-1/2 w-4 h-16 bg-gradient-to-r from-amber-400/20 to-transparent transform -translate-y-1/2 -translate-x-2 skew-y-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute right-0 top-1/2 w-4 h-16 bg-gradient-to-l from-amber-400/20 to-transparent transform -translate-y-1/2 translate-x-2 -skew-y-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Indicateurs de carousel */}
        <div className="flex justify-center mt-12 space-x-2" data-animate>
          {Array.from({ length: Math.ceil(testimonials.length / getItemsPerSlide()) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index
                ? 'bg-amber-400 scale-125'
                : 'bg-slate-600 hover:bg-slate-500'
                }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16" data-animate>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-green-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Rejoignez la communauté des héros digitaux
          </button>
        </div>
      </div>
    </section>
  );
};

const TrainingSection = ({ isActive, isLeaving, direction }) => {
  const sectionRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isUrgent, setIsUrgent] = useState(false);

  // Date de la prochaine formation (exemple : dans 5 jours)
  const trainingDate = new Date();
  trainingDate.setDate(trainingDate.getDate() + 5);
  trainingDate.setHours(14, 0, 0, 0); // 14h00

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = trainingDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });

        // Déclencher l'urgence si moins de 24h
        setIsUrgent(days === 0 && hours < 24);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsUrgent(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    const elements = sectionRef.current.querySelectorAll('[data-animate]');

    if (!isActive) {
      gsap.to(elements,
        { opacity: 0, rotationY: 90 },
      );
    }

    if (isActive && !isLeaving) {
      gsap.fromTo(elements,
        { opacity: 0, rotationY: 90 },
        { opacity: 1, rotationY: 0, duration: 0.9, stagger: 0.1, ease: "power2.out" }
      );
    } else if (isLeaving) {
      gsap.to(elements, {
        opacity: 0,
        rotationY: -90,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.in"
      });
    }
  }, [isActive, isLeaving, direction]);

  const formatDate = (date) => {
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  return (
    <section ref={sectionRef} className="pt-[90px] md:pt-[80px]">
      <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden">

        <div className="max-w-6xl mx-auto w-full flex max-lg:flex-col gap-x-10 gap-y-8 items-center relative z-10">
          {/* Colonne 1 : Urgence + Compte à rebours */}
          <div className=" flex flex-col items-center md:items-start text-center lg:text-left">
            {isUrgent && (
              <div data-animate className="inline-flex items-center bg-red-500/20 border border-red-400/30 rounded-full px-6 py-2 mb-6">
                <span className="text-red-400 text-sm font-bold animate-pulse">🚨 DERNIÈRES HEURES</span>
              </div>
            )}
            <div className="w-full rounded-2xl p-6 border border-white/20 mb-6">
              <h4 className="text-white/80 text-lg mb-4 font-semibold">
                {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0
                  ? "🔴 Formation en cours !"
                  : "⏳ Temps restant avant la Formation :"}
              </h4>
              {!(timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) && (
                <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                  {/* Jours */}
                  <div className={`bg-gradient-to-br ${isUrgent ? 'from-red-500/20 to-orange-500/20 border-red-400/30' : 'from-blue-500/20 to-purple-500/20 border-blue-400/30'} rounded-2xl p-3 border transition-all duration-300`}>
                    <div className={`text-3xl font-bold ${isUrgent ? 'text-red-400' : 'text-blue-400'} mb-1`}>
                      {timeLeft.days.toString().padStart(2, '0')}
                    </div>
                    <div className="text-white/80 text-xs font-semibold">Jours</div>
                  </div>
                  {/* Heures */}
                  <div className={`bg-gradient-to-br ${isUrgent ? 'from-red-500/20 to-orange-500/20 border-red-400/30' : 'from-purple-500/20 to-pink-500/20 border-purple-400/30'} rounded-2xl p-3 border transition-all duration-300`}>
                    <div className={`text-3xl font-bold ${isUrgent ? 'text-red-400' : 'text-purple-400'} mb-1`}>
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-white/80 text-xs font-semibold">Heures</div>
                  </div>
                  {/* Minutes */}
                  <div className={`bg-gradient-to-br ${isUrgent ? 'from-orange-500/20 to-yellow-500/20 border-orange-400/30' : 'from-green-500/20 to-emerald-500/20 border-green-400/30'} rounded-2xl p-3 border transition-all duration-300`}>
                    <div className={`text-3xl font-bold ${isUrgent ? 'text-orange-400' : 'text-green-400'} mb-1`}>
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-white/80 text-xs font-semibold">Minutes</div>
                  </div>
                  {/* Secondes */}
                  <div className={`bg-gradient-to-br ${isUrgent ? 'from-yellow-500/20 to-red-500/20 border-yellow-400/30' : 'from-yellow-500/20 to-orange-500/20 border-yellow-400/30'} rounded-2xl p-3 border transition-all duration-300 ${isUrgent ? 'animate-pulse' : ''}`}>
                    <div className={`text-3xl font-bold text-yellow-400 mb-1`}>
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-white/80 text-xs font-semibold">Secondes</div>
                  </div>
                </div>
              )}
            </div>
            <div data-animate className="w-full flex flex-col items-center md:items-start space-y-2 mt-2">
              <button
                className={`${isUrgent
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 animate-pulse'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                  } text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl w-full animate-bounce relative overflow-hidden`}
                style={{
                  animationDuration: '1s',
                  animationIterationCount: 'infinite'
                }}
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 pointer-events-none">
                  <span className="block w-full h-full">
                    <span className="absolute left-0 top-0 w-full h-full">
                      <span className="absolute left-[-60%] top-0 w-[120%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer"></span>
                    </span>
                  </span>
                </span>
                <span className="relative z-10">
                  {isUrgent ? '🚨 Réserver d\'urgence ma place' : '🎯 Réserver ma place'}
                </span>
              </button>
              <p className="text-white/60 text-sm">
                {isUrgent ? 'Places limitées - Ne ratez pas cette opportunité !' : 'Places limitées - Inscription sécurisée'}
              </p>
            </div>
            {/* Statistiques déplacées ici */}
            {/* <div className="grid grid-cols-1 gap-6 w-full mt-6">
              <div data-animate className="bg-white/10 rounded-xl p-4 border border-white/20 shadow-2xl">
                <div className="text-2xl font-bold text-white">50+</div>
                <p className="text-white/80">Techniques exclusives</p>
              </div>
              <div data-animate className="bg-white/10 rounded-xl p-4 border border-white/20 shadow-2xl">
                <div className="text-2xl font-bold text-white">Live</div>
                <p className="text-white/80">Sessions interactives</p>
              </div>
              <div data-animate className="bg-white/10 rounded-xl p-4 border border-white/20 shadow-2xl">
                <div className="text-2xl font-bold text-white">97%</div>
                <p className="text-white/80">Satisfaction client</p>
              </div>
            </div> */}
          </div>

          {/* Colonne 2 : Description & Avantages */}
          <div className="flex-1 flex flex-col items-center md:items-center">
            <div data-animate className="bg-white/10 rounded-3xl p-8 border border-white/20 mb-6 w-full shadow-2xl">
              <div className="text-6xl mb-6 text-center md:text-left">🎓</div>
              <h3 className="text-3xl font-semibold text-white mb-4 text-center md:text-left">
                Masterclass Marketing & E-commerce
              </h3>
              <p className="text-xl text-white/90 mb-6 text-center md:text-left">
                Apprenez les stratégies qui génèrent des millions
              </p>
              {/* Date et heure */}
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 mb-4">
                <div className="flex flex-col md:flex-row sm:items-center justify-center gap-4 text-white">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">📅</span>
                    <span className="font-semibold">{formatDate(trainingDate)}</span>
                  </div>
                  <div className="hidden md:block w-px h-6 bg-white/30"></div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">⏰</span>
                    <span className="font-semibold">{formatTime(trainingDate)}</span>
                  </div>
                </div>
              </div>
              {/* Avantages rapides */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-2">
                <h4 className="text-white font-semibold mb-4">Ce que vous allez apprendre :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center text-white/80">
                    <span className="text-green-400 mr-2">✓</span>
                    Stratégies Facebook/Instagram Ads
                  </div>
                  <div className="flex items-center text-white/80">
                    <span className="text-green-400 mr-2">✓</span>
                    Optimisation e-commerce avancée
                  </div>
                  <div className="flex items-center text-white/80">
                    <span className="text-green-400 mr-2">✓</span>
                    Email marketing automatisé
                  </div>
                  <div className="flex items-center text-white/80">
                    <span className="text-green-400 mr-2">✓</span>
                    Analytics et tracking ROI
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 3 : (vide, pour garder la grille sur desktop) */}
          {/* Rien ici, stats sont déplacées en bas du bouton */}
        </div>
      </div>
    </section>
  );
};

// Composant principal
const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('down');
  const containerRef = useRef(null);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [showPrevBtn, setShowPrevBtn] = useState(false);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);

  const sections = [
    { component: MainSection, gradient: 'from-gray-900 via-gray-800 to-black' },
    { component: ServicesSection, gradient: 'from-black via-gray-900 to-gray-800' },
    { component: TestimonialsSection, gradient: 'from-gray-800 via-black to-gray-900' },
    { component: TrainingSection, gradient: 'from-black via-gray-800 to-gray-900' }
  ];

  // Fonction pour changer de section depuis la navbar ou les boutons
  const handleSectionChange = (index) => {
    setDirection(index > currentSection ? 'down' : 'up');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(index);
      containerRef.current.scrollTop = 0
      setTimeout(() => setIsTransitioning(false), 400);
    }, 300);
  };

  // Animation du gradient de fond
  useGSAP(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
        duration: 1.2,
        ease: "power2.inOut"
      });

    }
  }, [currentSection]);

  // Animation GSAP pour les boutons slimmy
  useGSAP(() => {
    if (nextBtnRef.current) {
      if (showNextBtn) {
        gsap.fromTo(nextBtnRef.current,
          {
            y: 50,
            opacity: 0,
            scaleY: 0.3,
            filter: 'blur(10px)'
          },
          {
            y: 0,
            opacity: 1,
            scaleY: 1,
            filter: 'blur(0px)',
            duration: 0.6,
            ease: "back.out(1.7)"
          }
        );
      } else {
        gsap.to(nextBtnRef.current, {
          y: 50,
          opacity: 0,
          scaleY: 0.3,
          filter: 'blur(10px)',
          duration: 0.4,
          ease: "power2.in"
        });
      }
    }
  }, [showNextBtn]);

  useGSAP(() => {
    if (prevBtnRef.current) {
      if (showPrevBtn) {
        gsap.fromTo(prevBtnRef.current,
          {
            y: -50,
            opacity: 0,
            scaleY: 0.3,
            filter: 'blur(10px)'
          },
          {
            y: 0,
            opacity: 1,
            scaleY: 1,
            filter: 'blur(0px)',
            duration: 0.6,
            ease: "back.out(1.7)"
          }
        );
      } else {
        gsap.to(prevBtnRef.current, {
          y: -50,
          opacity: 0,
          scaleY: 0.3,
          filter: 'blur(10px)',
          duration: 0.4,
          ease: "power2.in"
        });
      }
    }
  }, [showPrevBtn]);

  // Gestion du scroll pour afficher les boutons
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      // Seuil pour déclencher l'apparition des boutons (90% de scroll)
      const threshold = 0.9;

      // Bouton "Suivant" - apparaît quand on scroll vers le bas près de la fin
      const shouldShowNext = currentSection < sections.length - 1 &&
        scrollTop >= (scrollHeight - clientHeight) * threshold;

      // Bouton "Précédent" - apparaît quand on scroll vers le haut près du début
      const shouldShowPrev = currentSection > 0 &&
        scrollTop <= (scrollHeight - clientHeight) * (1 - threshold);

      setShowNextBtn(shouldShowNext);
      setShowPrevBtn(shouldShowPrev);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentSection, sections.length]);

  // Gestion du bouton "Précédent" (scroll vers le haut)
  const handlePrev = () => {
    setDirection('up');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(prev => prev - 1);
      setTimeout(() => setIsTransitioning(false), 400);
    }, 300);
  };

  // Gestion du bouton "Suivant" (scroll vers le bas)
  const handleNext = () => {
    setDirection('down');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(prev => prev + 1);
      containerRef.current.scrollTop = 0
      setTimeout(() => setIsTransitioning(false), 400);
    }, 300);
  };

  return (
    <div
      ref={containerRef}
      className={`min-h-screen bg-gradient-to-br ${sections[currentSection].gradient} overflow-x-hidden overflow-y-auto relative`}
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Fond animé */}
      <AnimatedBackground currentSection={currentSection} />

      {/* Navbar */}
      <Navbar
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
        isTransitioning={isTransitioning}
      />

      {/* Indicateurs de navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${index === currentSection ? 'bg-white scale-125' : 'bg-white/30'
              }`}
            onClick={() => {
              if (!isTransitioning && index !== currentSection) {
                setDirection(index > currentSection ? 'down' : 'up');
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentSection(index);
                  setTimeout(() => setIsTransitioning(false), 400);
                }, 300);
              }
            }}
          />
        ))}
      </div>

      {/* Bouton Slimmy "Précédent" - En haut */}
      <button
        ref={prevBtnRef}
        onClick={handlePrev}
        disabled={isTransitioning}
        className="fixed bottom-10 right-6 z-50 pointer-events-auto cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-white/90 hover:text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Bouton Slimmy "Suivant" - En bas */}
      <div
        ref={nextBtnRef}
        className="fixed bottom-0 left-0 right-0 z-40 h-16 flex items-center justify-center pointer-events-none"
        style={{
          opacity: 0,
          background: 'linear-gradient(0deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)',
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="pointer-events-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-white/90 hover:text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg"
        >
          <span className="text-sm font-medium">Continuer</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Rendu des sections */}
      {sections.map((section, index) => {
        const SectionComponent = section.component;
        const isActive = index === currentSection;
        const isLeaving = isTransitioning && index === currentSection;

        return (
          <div
            key={index}
            id='section-wrapper'
            className={`${!isActive && 'max-h-screen overflow-hidden'} absolute inset-0 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
          >
            <SectionComponent
              isActive={isActive}
              isLeaving={isLeaving}
              direction={direction}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;