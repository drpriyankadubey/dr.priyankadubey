import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineItems = [
  {
    period: 'Current',
    title: 'Breach Candy Hospital',
    role: 'Senior Clinical Consultant',
    description: 'Specializing in complex metabolic disease reversal and personalized nutrition strategy.',
    icon: 'apartment'
  },
  {
    period: 'Fellowship',
    title: 'Mayo Clinic',
    role: 'Advanced Clinical Fellow',
    description: 'Advanced Clinical Fellowship focusing on nutrigenomics and lifestyle intervention research frameworks.',
    icon: 'medical_services'
  },
  {
    period: 'Industry Leadership',
    title: 'Nestlé Health Science',
    role: 'Strategic Advisor',
    description: 'Strategic advisor for medical nutrition product development and clinical validation for global health solutions.',
    icon: 'corporate_fare'
  }
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%', // 2x height scroll
          pin: true,
          scrub: 1,
        },
      });

      // Initially hide cards except the first one
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        if (index > 0) {
          gsap.set(card, { y: 100, opacity: 0 });
        }
      });

      // Animate cards sequentially on scroll
      cardsRef.current.forEach((card, index) => {
        if (!card || index === 0) return;
        
        // Previous card fades out and moves up
        const prevCard = cardsRef.current[index - 1];
        if (prevCard) {
          tl.to(prevCard, { y: -100, opacity: 0, duration: 1, scale: 0.9 }, `step${index}`);
        }
        
        // Current card fades in and moves up
        tl.to(card, { y: 0, opacity: 1, duration: 1, scale: 1 }, `step${index}`);
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="min-h-screen lg:h-screen py-24 lg:py-0 bg-white/10 relative overflow-hidden flex items-center">
      {/* Glassmorphic Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[url('/images/ingredients/spinach.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] -rotate-12 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-[url('/images/ingredients/orange-slice.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[8px] rotate-45 pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-[60%] w-56 h-56 bg-[url('/images/ingredients/basil.png')] bg-contain bg-center bg-no-repeat opacity-50 blur-[4px] rotate-90 pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[15%] w-64 h-64 bg-[url('/images/ingredients/tomato.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] pointer-events-none z-0"></div>
      <div className="absolute top-[5%] right-[20%] w-48 h-48 bg-[url('/images/ingredients/fresh-veg.png')] bg-contain bg-center bg-no-repeat opacity-30 blur-[4px] pointer-events-none z-0"></div>

      <div className="max-w-[1200px] mx-auto px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Static Left Side */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-playfair font-black text-gray-900 tracking-tight">
              A Journey of <br/>
              <span className="text-sage-green">Scientific Rigor</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-inter font-medium">
              Combining deep clinical insights from world-renowned institutions with a passion for organic vitality. Dr. Priyanka Dubey bridges the gap between sophisticated medical technology and natural health optimization.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pt-4">
              <div className="p-6 bg-white/30 backdrop-blur-2xl rounded-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                <div className="text-sage-green mb-3">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Research Driven</h4>
                <p className="text-sm text-gray-500 font-medium">Evidence-based protocols only.</p>
              </div>
              <div className="p-6 bg-white/30 backdrop-blur-2xl rounded-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                <div className="text-sage-green mb-3">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Holistic Care</h4>
                <p className="text-sm text-gray-500 font-medium">Focus on root-cause reversal.</p>
              </div>
            </div>
          </div>
          
          {/* Scrolling Right Side (Timeline Cards) */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[400px] order-1 lg:order-2">
            {timelineItems.map((item, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="absolute inset-x-0 top-0 bg-white/30 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-white/50 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-sage-green/10 flex items-center justify-center shrink-0 border border-sage-green/20 text-sage-green">
                   {/* Fallback svg icons for material symbols */}
                   {index === 0 && <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                   {index === 1 && <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                   {index === 2 && <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                </div>
                <div>
                  <span className="text-sage-green font-bold text-xs tracking-widest uppercase mb-2 block font-inter">{item.period}</span>
                  <h3 className="text-2xl font-playfair font-black text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sage-green font-inter font-medium mb-3">{item.role}</p>
                  <p className="text-gray-500 leading-relaxed font-inter font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
