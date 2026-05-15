import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
  {
    icon: 'monitor_weight',
    title: 'Weight Loss',
    description: 'Metabolic recalibration focused on sustainable adipose reduction without compromising lean muscle mass.',
    bullets: ['Hormonal Balancing', 'Metabolic Testing']
  },
  {
    icon: 'bolt',
    title: 'Energy',
    description: 'Mitochondrial optimization and adrenal recovery protocols designed for high-performance lifestyles.',
    bullets: ['ATP Support', 'Circadian Alignment']
  },
  {
    icon: 'rebase_edit',
    title: 'Disease Reversal',
    description: 'Targeted nutritional interventions to reverse chronic markers and restore homeostatic health.',
    bullets: ['Biomarker Tracking', 'Inflammation Control']
  },
  {
    icon: 'microbiology',
    title: 'Gut Health',
    description: 'Microbiome reconstruction using precision pre/probiotics and gut barrier strengthening protocols.',
    bullets: ['SIBO Protocols', 'Barrier Repair']
  }
];

export default function Expertise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      // Calculate the total width to scroll
      // container.scrollWidth - window.innerWidth
      const getScrollAmount = () => {
        let containerWidth = container.scrollWidth;
        return -(containerWidth - window.innerWidth);
      };

      const tween = gsap.to(container, {
        x: getScrollAmount,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });

      // Animate individual cards as they come into view within the horizontal scroll
      cardsRef.current.forEach((card) => {
        if (!card) return;
        
        // Icon scaling
        gsap.fromTo(card.querySelector('.icon-circle'),
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: 'left center+=200',
              end: 'left center-=200',
              toggleActions: 'play reverse play reverse',
            }
          }
        );

        // Text fade in
        gsap.fromTo(card.querySelectorAll('.text-content'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: 'left center+=200',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen relative flex flex-col justify-center overflow-hidden py-20 bg-white/10">
      {/* Glassmorphic Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[url('/images/ingredients/spinach.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] -rotate-12 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-[url('/images/ingredients/orange-slice.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[8px] rotate-45 pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-[60%] w-56 h-56 bg-[url('/images/ingredients/basil.png')] bg-contain bg-center bg-no-repeat opacity-50 blur-[4px] rotate-90 pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[15%] w-64 h-64 bg-[url('/images/ingredients/tomato.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] pointer-events-none z-0"></div>
      <div className="absolute top-[5%] right-[20%] w-48 h-48 bg-[url('/images/ingredients/fresh-veg.png')] bg-contain bg-center bg-no-repeat opacity-30 blur-[4px] pointer-events-none z-0"></div>
      
      <div className="px-8 md:px-16 lg:px-24 mb-12 shrink-0 relative z-10">
        <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          Clinical Excellence
        </span>
        <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
          Clinical precision meets <br/>
          <span className="text-primary">vital restoration.</span>
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="flex gap-8 px-8 md:px-16 lg:px-24 w-[200vw] sm:w-[150vw] lg:w-[120vw] items-center relative z-10">
        {expertiseData.map((item, index) => (
          <div 
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="w-[300px] sm:w-[350px] shrink-0 bg-white/30 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] perspective-grid preserve-3d group relative"
          >
            {/* Progress bar line top */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

            <div className="icon-circle w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Since we can't use material icons easily without setup, use SVG fallback */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
            </div>
            
            <h3 className="text-content text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
            <p className="text-content text-gray-600 mb-6 font-medium leading-relaxed">{item.description}</p>
            
            <ul className="text-content space-y-3">
              {item.bullets.map((bullet, bIndex) => (
                <li key={bIndex} className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-700">
                  <svg className="w-4 h-4 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </section>
  );
}
