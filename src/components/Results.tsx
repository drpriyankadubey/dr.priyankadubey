import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const showcaseData = [
  {
    title: 'Energy Restoration',
    metric: '65%',
    description: 'Increase in measurable daily energy levels through mitochondrial optimization.',
    icon: 'bolt'
  },
  {
    title: 'Sleep Architecture',
    metric: '40%',
    description: 'Better sleep quality achieved via circadian alignment and hormone regulation.',
    icon: 'sleep'
  },
  {
    title: 'Cellular Repair',
    metric: '80%',
    description: 'Significant reduction in clinical inflammation markers within 12 weeks.',
    icon: 'health_and_safety'
  }
];

export default function Results() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the whole showcase section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=300%', // 3x height to allow enough scroll for 3 slides
          pin: true,
          scrub: 1,
        },
      });

      // Parallax for the background
      tl.to(bgRef.current, { y: -50, duration: 3, ease: 'none' }, 0);
      
      // Ambient Orbs movement effect
      if (orb1Ref.current && orb2Ref.current) {
        tl.fromTo(orb1Ref.current, 
          { scale: 1, x: 0, y: 0 }, 
          { scale: 1.5, x: '20vw', y: '10vh', duration: 3, ease: 'power1.inOut' }, 0
        );
        tl.fromTo(orb2Ref.current, 
          { scale: 1, x: 0, y: 0 }, 
          { scale: 1.3, x: '-20vw', y: '-15vh', duration: 3, ease: 'power1.inOut' }, 0
        );
      }

      // Animate slides fading in and out
      slidesRef.current.forEach((slide, index) => {
        if (!slide) return;
        
        const progressCircle = slide.querySelector('.progress-circle-fill');
        const metricValue = parseInt(showcaseData[index].metric);
        const targetOffset = 100 - metricValue; // pathLength is 100
        
        // At index 0, it's already visible initially
        if (index === 0 && progressCircle) {
          tl.fromTo(progressCircle, 
            { strokeDashoffset: 100 }, 
            { strokeDashoffset: targetOffset, duration: 1.2, ease: 'power3.out' }, 
            0
          );
        }

        if (index > 0) {
          // Smooth scale and push in current slide
          tl.fromTo(slide, 
            { opacity: 0, y: 80, scale: 0.95 }, 
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }, 
            index - 0.5
          );
          if (progressCircle) {
            tl.fromTo(progressCircle,
              { strokeDashoffset: 100 },
              { strokeDashoffset: targetOffset, duration: 1.2, ease: 'power3.out' },
              index - 0.2
            );
          }
        }

        // Fade out previous slide
        if (index < slidesRef.current.length - 1) {
          tl.to(slide, 
            { opacity: 0, y: -80, scale: 1.05, duration: 0.8, ease: 'power2.inOut' }, 
            index + 0.5
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative pt-20 bg-white/10">
      {/* Glassmorphic Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[url('/images/ingredients/spinach.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] -rotate-12 pointer-events-none z-0"></div>
      <div className="absolute bottom-[40%] right-[10%] w-80 h-80 bg-[url('/images/ingredients/orange-slice.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[8px] rotate-45 pointer-events-none z-0"></div>
      <div className="absolute top-[30%] left-[60%] w-56 h-56 bg-[url('/images/ingredients/basil.png')] bg-contain bg-center bg-no-repeat opacity-50 blur-[4px] rotate-90 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-[15%] w-64 h-64 bg-[url('/images/ingredients/tomato.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] pointer-events-none z-0"></div>
      <div className="absolute top-[5%] right-[20%] w-48 h-48 bg-[url('/images/ingredients/fresh-veg.png')] bg-contain bg-center bg-no-repeat opacity-30 blur-[4px] pointer-events-none z-0"></div>
      
      {/* Bento Stats Grid - Normal Scroll */}
      <div className="max-w-[1200px] mx-auto px-8 mb-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">CLINICAL RESULTS & IMPACT</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/30 backdrop-blur-2xl p-6 md:p-10 rounded-3xl text-center border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            <div className="text-primary font-black text-6xl mb-2 flex justify-center items-center">
              1000<span className="text-3xl font-bold ml-1">+</span>
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Clients Transformed</div>
            <p className="text-sm font-medium text-gray-500">Individuals who have successfully completed the Vitality protocol globally.</p>
          </div>
          
          <div className="bg-white/30 backdrop-blur-2xl p-6 md:p-10 rounded-3xl text-center border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            <div className="text-primary font-black text-6xl mb-2 flex justify-center items-center">
              8-12<span className="text-3xl font-bold ml-1">kg</span>
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Avg. Weight Loss</div>
            <p className="text-sm font-medium text-gray-500">Sustainable body composition changes achieved within the first 12-16 weeks.</p>
          </div>
          
          <div className="bg-white/30 backdrop-blur-2xl p-6 md:p-10 rounded-3xl flex flex-col justify-between border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            <div className="mb-4">
              <div className="text-xs font-bold text-[#7AC943] uppercase tracking-widest mb-1 font-inter">Success Rate</div>
              <div className="text-2xl font-playfair font-black text-gray-900">94% Retention</div>
            </div>
            <div className="h-24 w-full flex items-end gap-2">
              <div className="bg-[#7AC943]/10 w-full rounded-t-xl h-1/2"></div>
              <div className="bg-[#7AC943]/20 w-full rounded-t-xl h-2/3"></div>
              <div className="bg-[#7AC943]/40 w-full rounded-t-xl h-3/4"></div>
              <div className="bg-[#7AC943]/60 w-full rounded-t-xl h-5/6"></div>
              <div className="bg-[#7AC943] w-full rounded-t-xl h-full shadow-[0_0_20px_rgba(122,201,67,0.4)]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Showcase - Pinned Scrollytelling */}
      <div ref={sectionRef} className="relative h-screen bg-gradient-to-br from-[#F8F5F0] to-[#E8F5E9] overflow-hidden flex items-center">
        
        {/* Ambient Glowing Background Layer */}
        <div ref={bgRef} className="absolute inset-0 z-0 overflow-hidden">
          <div ref={orb1Ref} className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-white/80 rounded-full blur-[120px]"></div>
          <div ref={orb2Ref} className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#7AC943]/20 rounded-full blur-[150px] mix-blend-multiply"></div>
          <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-yellow-100/50 rounded-full blur-[100px] mix-blend-multiply animate-pulse"></div>
          
          {/* Noise texture for premium feel */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        {/* Slides Content Layer */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="w-full max-w-4xl mx-auto relative h-[600px] md:h-[500px] flex items-center">
            {showcaseData.map((item, index) => (
              <div 
                key={index}
                ref={el => slidesRef.current[index] = el}
                className="absolute inset-0 flex flex-col justify-center w-full"
                style={{ opacity: index === 0 ? 1 : 0 }}
              >
                <div className="w-full bg-white/90 backdrop-blur-3xl border border-white p-8 md:p-14 rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.08)] relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-14">
                  {/* Subtle background decoration */}
                  <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#7AC943]/10 rounded-full blur-[80px] pointer-events-none"></div>

                  <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start relative z-10">
                    <div className="inline-flex items-center gap-3 mb-6 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-[#7AC943]/10 flex items-center justify-center text-[#7AC943]">
                        {/* SVG Icon Fallback */}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                           <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-bold tracking-widest uppercase text-xs">Quantifiable Growth</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 tracking-tight">{item.title}</h3>
                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">{item.description}</p>
                  </div>
                  
                  <div className="flex-1 w-full flex justify-center relative z-10">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 flex flex-col items-center justify-center bg-white rounded-full shadow-[0_10px_40px_rgba(122,201,67,0.15)] border border-gray-50">
                      {/* Circular Progress SVG */}
                      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90 overflow-visible">
                         <circle cx="50" cy="50" r="46" strokeWidth="6" stroke="#f3f4f6" fill="none" />
                         <circle 
                           className="progress-circle-fill" 
                           cx="50" cy="50" r="46" 
                           strokeWidth="8" 
                           stroke="url(#greenGradient)" 
                           fill="none" 
                           strokeLinecap="round" 
                           pathLength="100"
                           strokeDasharray="100"
                           strokeDashoffset="100" 
                         />
                         <defs>
                           <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                             <stop offset="0%" stopColor="#7AC943" />
                             <stop offset="100%" stopColor="#059669" /> {/* emerald-600 */}
                           </linearGradient>
                         </defs>
                      </svg>
                      <div className="relative flex items-start text-gray-900">
                        <span className="text-6xl md:text-8xl font-black tracking-tighter">
                          {item.metric.replace('%', '')}
                        </span>
                        <span className="text-2xl md:text-4xl font-bold text-[#7AC943] mt-1 md:mt-2">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
