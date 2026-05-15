import { useEffect, useRef, useState } from 'react';
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
  const [activePillar, setActivePillar] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pillar-node',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
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
      className="relative py-32 overflow-hidden bg-[#FAFAFA] font-sans selection:bg-[#7AC943] selection:text-white"
    >
      {/* Subtle Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Floating Organic Leaves (Matching Hero) */}
      <img src="/leaf-1.png" alt="" className="absolute top-[10%] left-[5%] w-24 object-contain opacity-40 blur-[2px] -rotate-12 pointer-events-none z-0" onError={(e) => (e.currentTarget.style.display = 'none')} />
      <img src="/leaf-2.png" alt="" className="absolute bottom-[20%] right-[5%] w-32 object-contain opacity-30 blur-[4px] rotate-45 pointer-events-none z-0" onError={(e) => (e.currentTarget.style.display = 'none')} />
      <img src="/leaf-3.png" alt="" className="absolute top-[40%] right-[10%] w-16 object-contain opacity-20 blur-[1px] rotate-90 pointer-events-none z-0" onError={(e) => (e.currentTarget.style.display = 'none')} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
        <div className="text-center mb-20">
          <span className="inline-flex items-center justify-center gap-2 text-[#7AC943] font-bold text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-[2px] bg-[#7AC943] rounded-full"></span>
            Framework
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight">
            5 Pillars of{' '}
            <span className="text-[#7AC943]">Transformation</span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            A holistic framework that addresses every dimension of health —
            because true healing is never one-dimensional.
          </p>
        </div>

        {/* Interactive Expandable Accordion Layout */}
        <div className="flex flex-col lg:flex-row w-full min-h-[750px] lg:min-h-[500px] gap-4 lg:gap-6">
          {pillars.map((pillar, i) => {
            const isActive = activePillar === i;
            const Icon = pillar.icon;

            return (
              <div
                key={i}
                onMouseEnter={() => setActivePillar(i)}
                onClick={() => setActivePillar(i)}
                style={{ flex: isActive ? 4 : 1 }}
                className={`pillar-node relative overflow-hidden rounded-[2.5rem] flex flex-col justify-between p-6 lg:p-8 cursor-pointer border transition-all duration-700 ease-out group ${
                  isActive
                    ? 'bg-gradient-to-br from-white to-[#F4FCED] border-[#7AC943]/30 shadow-[0_40px_100px_-20px_rgba(122,201,67,0.25)] scale-[1.02] lg:scale-100 z-10'
                    : 'bg-white/50 border-white/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:bg-white/80 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 lg:hover:-translate-y-2 z-0'
                } backdrop-blur-xl`}
              >
                {/* Background floating icon */}
                <Icon
                  className={`absolute -right-4 -bottom-4 transition-all duration-1000 ease-out ${
                    isActive 
                      ? 'text-[#7AC943]/10 w-72 h-72 rotate-[15deg] translate-y-0 scale-110' 
                      : 'text-gray-400/5 w-32 h-32 translate-y-8 group-hover:scale-110 group-hover:text-[#7AC943]/5'
                  }`}
                />

                {/* Top part: Number and Icon */}
                <div className="flex flex-row lg:flex-col justify-between items-start gap-4 relative z-10">
                  <div className={`text-sm font-bold tracking-widest uppercase transition-colors duration-500 ${
                    isActive ? 'text-[#7AC943]' : 'text-gray-400'
                  }`}>
                    0{i + 1}
                  </div>

                  <div className={`shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center backdrop-blur-md border transition-all duration-500 ${
                    isActive ? 'bg-[#7AC943] text-white border-[#7AC943] shadow-[0_15px_30px_-5px_rgba(122,201,67,0.4)] scale-110' : 'bg-white/80 text-gray-400 border-white shadow-sm group-hover:shadow-md group-hover:text-[#7AC943]'
                  }`}>
                    <Icon size={isActive ? 28 : 24} className="transition-all duration-500" />
                  </div>
                </div>

                {/* Bottom part: Title and Description */}
                <div className="relative z-10 mt-6 lg:mt-0 flex flex-col justify-end">
                  <h3 className={`shrink-0 font-extrabold transition-all duration-500 ${
                    isActive ? 'text-2xl lg:text-3xl text-black mb-3 whitespace-normal' : 'text-base md:text-lg lg:text-xl text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis'
                  }`}>
                    {pillar.title}
                  </h3>

                  <div className={`overflow-hidden transition-all duration-500 ${
                    isActive ? 'max-h-40 opacity-100 delay-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-gray-500 font-medium text-base lg:text-lg leading-relaxed min-w-[200px] lg:min-w-[300px]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
