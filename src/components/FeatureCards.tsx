import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeatureCards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        }
      });

      tl.fromTo(
        '.feature-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      ).fromTo(
        '.feature-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-white/10 overflow-hidden">
      {/* Glassmorphic Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[url('/images/ingredients/spinach.png')] bg-contain bg-center bg-no-repeat opacity-30 blur-[6px] -rotate-12 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-[url('/images/ingredients/orange-slice.png')] bg-contain bg-center bg-no-repeat opacity-30 blur-[8px] rotate-45 pointer-events-none z-0"></div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-16 feature-title">
          <span className="inline-block text-[#7AC943] font-bold text-sm tracking-widest uppercase mb-3 font-inter">Our Foundation</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-black text-gray-900 tracking-tight mb-4">
            Built on <span className="text-[#7AC943]">Science & Care</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Combining rigorous clinical research with compassionate, holistic healing to provide the ultimate metabolic restoration.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl">
          <div className="feature-card bg-white/30 backdrop-blur-2xl p-8 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(122,201,67,0.2)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#7AC943]/10 rounded-full flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:bg-[#7AC943] transition-all duration-500 text-[#7AC943] group-hover:text-white shadow-sm border border-[#7AC943]/20">
              <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h4 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 sm:mb-3 tracking-tight">Research Driven</h4>
            <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">Evidence-based protocols exclusively designed to target physiological root causes.</p>
          </div>
          
          <div className="feature-card bg-white/30 backdrop-blur-2xl p-8 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(122,201,67,0.2)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center group">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#7AC943]/10 rounded-full flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:bg-[#7AC943] transition-all duration-500 text-[#7AC943] group-hover:text-white shadow-sm border border-[#7AC943]/20">
              <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 sm:mb-3 tracking-tight">Holistic Care</h4>
            <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">Comprehensive focus on root-cause reversal through complete metabolic restoration.</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}