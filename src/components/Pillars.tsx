import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Microscope, Syringe, Apple, Footprints, BrainCircuit } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: Microscope,
    title: 'Gut Health',
    description: 'The foundation of all health. Heal the gut, heal the body.',
    angle: 0,
  },
  {
    icon: Apple,
    title: 'Nutrition',
    description: 'Precision fuel for your cells. Every bite counts.',
    angle: 72,
  },
  {
    icon: Syringe,
    title: 'Hormone Balance',
    description: 'Restore the chemical messengers that run your body.',
    angle: 144,
  },
  {
    icon: Footprints,
    title: 'Lifestyle',
    description: 'Sleep, movement, and daily rhythms that compound into health.',
    angle: 216,
  },
  {
    icon: BrainCircuit,
    title: 'Mindset',
    description: 'The mental framework that sustains lasting transformation.',
    angle: 288,
  },
];

export default function Pillars() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pillar-node',
        { y: 80, opacity: 0, scale: 0.9, rotationX: -20 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          transformOrigin: '50% 100%',
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pillars"
      className="relative py-32 overflow-hidden bg-[#0A1108] font-sans selection:bg-[#7AC943] selection:text-white"
    >
      {/* High-Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0"></div>
      
      {/* Subtle Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>
      {/* Center ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] bg-gradient-to-b from-[#7AC943]/10 to-transparent rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Floating Organic Leaves (Matching Hero) */}
      <img src="/leaf-1.png" alt="" className="absolute top-[10%] left-[5%] w-24 object-contain opacity-10 blur-[2px] -rotate-12 pointer-events-none z-0 grayscale brightness-200" onError={(e) => (e.currentTarget.style.display = 'none')} />
      <img src="/leaf-2.png" alt="" className="absolute bottom-[20%] right-[5%] w-32 object-contain opacity-10 blur-[4px] rotate-45 pointer-events-none z-0 grayscale brightness-200" onError={(e) => (e.currentTarget.style.display = 'none')} />
      <img src="/leaf-3.png" alt="" className="absolute top-[40%] right-[10%] w-16 object-contain opacity-[0.05] blur-[1px] rotate-90 pointer-events-none z-0 grayscale brightness-200" onError={(e) => (e.currentTarget.style.display = 'none')} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
        <div className="text-center mb-20">
          <span className="inline-flex items-center justify-center gap-2 text-[#7AC943] font-bold text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-[2px] bg-[#7AC943] rounded-full"></span>
            Framework
            <span className="w-8 h-[2px] bg-[#7AC943] rounded-full"></span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            5 Pillars of{' '}
            <span className="text-[#7AC943]">Transformation</span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            A holistic framework that addresses every dimension of health —
            because true healing is never one-dimensional.
          </p>
        </div>

        {/* Dark Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 w-full perspective-[2000px]">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            
            // Span calculation for the bento layout
            let colSpanClass = 'lg:col-span-2 md:col-span-1'; // Default for items 3, 4, 5
            if (i === 0 || i === 1) colSpanClass = 'lg:col-span-3 md:col-span-1'; // Top row
            if (i === 2) colSpanClass = 'lg:col-span-2 md:col-span-2'; // 3rd item spans full on tablet

            return (
              <div
                key={i}
                className={`pillar-node ${colSpanClass} relative overflow-hidden rounded-[2.5rem] p-8 md:p-10 border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent hover:bg-white/[0.08] transition-all duration-700 group flex flex-col justify-between min-h-[320px] backdrop-blur-2xl shadow-xl hover:shadow-[0_20px_80px_-20px_rgba(122,201,67,0.3)] hover:-translate-y-2 hover:border-[#7AC943]/40 z-0 hover:z-10`}
              >
                {/* Massive Stroke Number Background */}
                <div className="absolute -top-10 -right-4 text-[12rem] font-black text-transparent opacity-10 group-hover:opacity-30 group-hover:-translate-y-4 group-hover:scale-110 transition-all duration-700 pointer-events-none select-none" style={{ WebkitTextStroke: '2px #7AC943' }}>
                  {i + 1}
                </div>

                {/* Top part: Floating Icon */}
                <div className="relative z-10 flex items-start mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-[#7AC943]/10 border border-[#7AC943]/20 flex items-center justify-center text-[#7AC943] group-hover:scale-110 group-hover:bg-[#7AC943] group-hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(122,201,67,0.1)] group-hover:shadow-[0_0_40px_rgba(122,201,67,0.5)]">
                    <Icon size={30} strokeWidth={2} />
                  </div>
                </div>

                {/* Bottom part: Title and Description */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#7AC943] font-mono font-bold tracking-widest text-sm">0{i+1}</span>
                    <div className="h-px bg-[#7AC943]/20 flex-1 group-hover:bg-[#7AC943]/60 transition-colors duration-500"></div>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7AC943] group-hover:to-[#A3E077] transition-all duration-500">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 font-medium text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                    {pillar.description}
                  </p>
                </div>
                
                {/* Massive Decorative Background Icon */}
                <Icon className="absolute -right-12 -bottom-12 w-64 h-64 text-white/[0.02] group-hover:text-[#7AC943]/10 group-hover:-rotate-45 group-hover:scale-125 transition-all duration-1000 ease-out pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
