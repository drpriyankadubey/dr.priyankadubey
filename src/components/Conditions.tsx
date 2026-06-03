import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Moon, Zap, Brain, Heart, Activity, Stethoscope, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const conditions = [
  {
    icon: Monitor,
    title: 'IT Professional Health Reset',
    shortDescription: 'Tailored nutrition and lifestyle protocols for sedentary IT professionals.',
    detailedDescription: 'Designed for desk-job professionals to improve energy, posture, digestion, sleep, and sustainable weight management despite long screen hours.',
    media: [
      { type: 'video', src: '/video/it.mp4' }
    ]
  },
  {
    icon: Moon,
    title: 'Night Shift Wellness Program',
    shortDescription: 'Circadian rhythm alignment and energy management for night shift workers.',
    detailedDescription: 'Helps night workers balance hormones, improve sleep quality, reduce fatigue, and maintain healthy eating patterns during irregular schedules.',
    media: [
      { type: 'video', src: '/video/ns.mp4' }
    ]
  },
  {
    icon: Zap,
    title: 'Executive Energy & Performance Reset',
    shortDescription: 'High-performance nutrition for executives to sustain peak mental and physical energy.',
    detailedDescription: 'A premium wellness program focused on boosting stamina, focus, productivity, stress resilience, and overall peak performance for leaders and executives.',
    media: [
      { type: 'image', src: '/img/15.jpg' },
      { type: 'video', src: '/video/2.mp4' }
    ]
  },
  {
    icon: Brain,
    title: 'Stress & Lifestyle Management Program',
    shortDescription: 'Holistic approaches to reduce cortisol and manage chronic stress effectively.',
    detailedDescription: 'Supports professionals in managing stress, emotional eating, burnout, poor sleep, and unhealthy lifestyle habits through practical wellness strategies.',
    media: [
      { type: 'video', src: '/video/st.mp4' }
    ]
  },
  {
    icon: Heart,
    title: 'Women’s Corporate Wellness Program',
    shortDescription: 'Specialized programs addressing hormonal balance and wellness for corporate women.',
    detailedDescription: 'Tailored for working women to balance hormones, manage weight, improve energy, reduce PCOS/thyroid-related issues, and support holistic wellness.',
    media: [
      { type: 'image', src: '/img/2.jpeg' },
 
    ]
  },
  {
    icon: Activity,
    title: 'Metabolic Health & Belly Fat Reset',
    shortDescription: 'Targeted metabolic resets to reduce visceral fat and improve metabolic flexibility.',
    detailedDescription: 'Focused on reducing belly fat, improving metabolism, balancing blood sugar, and enhancing overall body composition naturally and sustainably.',
    media: [
      { type: 'image', src: '/img/4.jpeg' },
  
    ]
  },
  {
    icon: Stethoscope,
    title: 'Diabetes & Preventive Health Program',
    shortDescription: 'Comprehensive protocols for reversing and preventing type 2 diabetes.',
    detailedDescription: 'A preventive wellness approach to help manage blood sugar, improve lifestyle habits, reduce health risks, and support long-term metabolic health.',
    media: [
      { type: 'image', src: '/img/12.jpg' },
      { type: 'image', src: '/img/9.jpg' },
      { type: 'image', src: '/img/10.jpg' },
      { type: 'image', src: '/img/3.jpeg' }
    ]
  },
];

export default function Conditions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCondition, setSelectedCondition] = useState<typeof conditions[0] | null>(null);
  const [fullScreenIndex, setFullScreenIndex] = useState<number | null>(null);

  useEffect(() => {
    // Lock body scroll when popup or fullscreen is open
    if (selectedCondition || fullScreenIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedCondition, fullScreenIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.condition-card',
        { y: 40, opacity: 0, rotateX: 10 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.conditions-grid',
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.to('.condition-icon-float', {
        y: -8,
        duration: 2.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.3, from: 'random' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="conditions"
      className="relative pt-8 pb-24 lg:pb-32 overflow-hidden bg-white/10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-sage-green/5 to-white/10" />

      {/* Glassmorphic Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[url('/images/ingredients/spinach.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] -rotate-12 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-[url('/images/ingredients/orange-slice.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[8px] rotate-45 pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-[60%] w-56 h-56 bg-[url('/images/ingredients/basil.png')] bg-contain bg-center bg-no-repeat opacity-50 blur-[4px] rotate-90 pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[15%] w-64 h-64 bg-[url('/images/ingredients/tomato.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] pointer-events-none z-0"></div>
      <div className="absolute top-[5%] right-[20%] w-48 h-48 bg-[url('/images/ingredients/fresh-veg.png')] bg-contain bg-center bg-no-repeat opacity-30 blur-[4px] pointer-events-none z-0"></div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <span className="reveal-up inline-block text-sm font-semibold text-sage-green tracking-widest uppercase mb-4 font-inter">
            Conditions
          </span>
          <h2 className="reveal-up text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-dark-olive tracking-tight">
            Conditions <span className="text-primary">Treated</span>
          </h2>
          <p className="reveal-up mt-4 text-lg text-dark-600 max-w-2xl mx-auto">
            Reversing chronic conditions at their root — not just managing
            symptoms.
          </p>
        </div>

        <div className="conditions-grid flex flex-wrap justify-center gap-4 md:gap-6">
          {conditions.map((condition, i) => {
            const Icon = condition.icon;
            const mainMedia = condition.media[0];
            return (
              <div
                key={i}
                onClick={() => setSelectedCondition(condition)}
                className="condition-card relative flex flex-col items-center w-[calc(100%-1rem)] sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)] aspect-[4/5] rounded-3xl overflow-hidden text-center group hover:-translate-y-2 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(122,201,67,0.3)] transition-all duration-500 cursor-pointer"
              >
                {/* Background Media */}
                <div className="absolute inset-0 z-0">
                  {mainMedia.type === 'video' ? (
                    <video src={mainMedia.src} autoPlay loop muted playsInline className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <img src={mainMedia.src} alt={condition.title} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                  )}
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-between h-full w-full p-6">
                  <div className="flex flex-col items-center">
                    <div className="condition-icon-float w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-4 shadow-lg">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 shadow-black/50 drop-shadow-md leading-snug">
                      {condition.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4 w-full">
                    <p className="text-sm text-gray-200 line-clamp-3 font-medium drop-shadow-md hidden sm:block">
                      {condition.shortDescription}
                    </p>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedCondition(condition); }}
                      className="w-full py-3 bg-white/20 hover:bg-[#7AC943] backdrop-blur-md border border-white/30 text-white rounded-xl font-bold text-sm transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      View All Media
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedCondition && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedCondition(null);
              setFullScreenIndex(null);
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAFAFA] rounded-[2rem] overflow-hidden max-w-4xl w-full shadow-2xl relative flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => {
                  setSelectedCondition(null);
                  setFullScreenIndex(null);
                }}
                className="absolute top-4 right-4 z-20 bg-white border border-gray-200 hover:bg-gray-100 text-gray-900 rounded-full p-2 transition-all shadow-sm"
              >
                <X size={24} />
              </button>
              
              <div className="p-6 sm:p-10 overflow-y-auto w-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pr-10">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="p-4 bg-[#7AC943]/10 rounded-2xl shrink-0 w-fit">
                      <selectedCondition.icon size={36} className="text-[#7AC943]" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold font-playfair leading-tight text-gray-900">
                      {selectedCondition?.title}
                    </h3>
                  </div>
                  
                  <a 
                    href={`https://wa.me/918223800785?text=Hello!%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(selectedCondition?.title || '')}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 bg-[#7AC943] text-white rounded-xl font-bold hover:bg-[#68B332] shadow-[0_10px_20px_rgba(122,201,67,0.3)] hover:shadow-[0_15px_30px_rgba(122,201,67,0.4)] transition-all duration-300 w-full sm:w-fit text-base sm:text-lg shrink-0 whitespace-nowrap"
                  >
                    Connect
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
                
                <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-medium mb-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  {selectedCondition?.detailedDescription}
                </p>

                <h4 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-6 h-1 bg-[#7AC943] rounded-full"></span>
                  Media Gallery
                </h4>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {selectedCondition?.media.map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setFullScreenIndex(idx)}
                      className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 bg-black/5"
                    >
                      {item.type === 'video' ? (
                        <video src={item.src} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" autoPlay loop muted playsInline />
                      ) : (
                        <img src={item.src} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center z-10">
                         <div className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm text-black text-sm font-bold px-4 py-2 rounded-full transition-all shadow-lg translate-y-4 group-hover:translate-y-0">
                           View Full
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {fullScreenIndex !== null && selectedCondition && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setFullScreenIndex(null)}
          >
            <button 
              onClick={() => setFullScreenIndex(null)} 
              className="absolute top-6 right-6 text-white/70 hover:text-white z-[110] transition-colors p-2"
            >
              <X size={36} />
            </button>

            {selectedCondition.media.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); setFullScreenIndex((prev) => (prev! - 1 + selectedCondition.media.length) % selectedCondition.media.length); }} 
                  className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-[110] p-3 transition-transform hover:scale-110 bg-white/10 hover:bg-white/20 rounded-full"
                >
                  <ChevronLeft size={36} />
                </button>

                <button 
                  onClick={(e) => { e.stopPropagation(); setFullScreenIndex((prev) => (prev! + 1) % selectedCondition.media.length); }} 
                  className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-[110] p-3 transition-transform hover:scale-110 bg-white/10 hover:bg-white/20 rounded-full"
                >
                  <ChevronRight size={36} />
                </button>
              </>
            )}

            <div className="relative w-full h-full p-4 sm:p-12 flex items-center justify-center pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={fullScreenIndex ?? 'empty'}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {selectedCondition.media[fullScreenIndex ?? 0]?.type === 'video' ? (
                    <video 
                      src={selectedCondition.media[fullScreenIndex ?? 0]?.src} 
                      controls autoPlay playsInline 
                      className="max-w-full max-h-full rounded-xl object-contain shadow-2xl" 
                    />
                  ) : (
                    <img 
                      src={selectedCondition.media[fullScreenIndex ?? 0]?.src} 
                      alt={selectedCondition?.title} 
                      className="max-w-full max-h-full rounded-xl object-contain shadow-2xl" 
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm font-bold tracking-widest bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md z-[110]">
              {(fullScreenIndex ?? 0) + 1} / {selectedCondition.media.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
