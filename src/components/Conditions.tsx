import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Droplets, HeartPulse, Shield, CircleDot } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const conditions = [
  {
    icon: Droplets,
    title: 'Diabetes',
    description: 'Type 2 Diabetes reversal through targeted nutrition and lifestyle modification.',
  },
  {
    icon: HeartPulse,
    title: 'Cardiovascular',
    description: 'Heart health optimization with evidence-based dietary interventions.',
  },
  {
    icon: Shield,
    title: 'Thyroid',
    description: 'Thyroid balance restoration via micronutrient therapy and gut healing.',
  },
  {
    icon: CircleDot,
    title: 'PCOS',
    description: 'Hormonal harmony through anti-inflammatory nutrition protocols.',
  },
  {
    icon: Droplets,
    title: 'Fatty Liver',
    description: 'Liver recovery programs reversing NAFLD with precision nutrition.',
  },
  {
    icon: HeartPulse,
    title: 'Hypertension',
    description: 'Blood pressure normalization through DASH-style dietary protocols.',
  },
  {
    icon: Shield,
    title: 'IBS / IBD',
    description: 'Gut restoration using elimination protocols and microbiome support.',
  },
  {
    icon: CircleDot,
    title: 'Metabolic Syndrome',
    description: 'Comprehensive metabolic reset addressing insulin resistance and inflammation.',
  },
];

export default function Conditions() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      className="relative section-padding overflow-hidden bg-white/10"
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

        <div className="conditions-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {conditions.map((condition, i) => {
            const Icon = condition.icon;
            return (
              <div
                key={i}
                className="condition-card bg-white/30 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl p-6 text-center group hover:shadow-[0_0_20px_rgba(46,204,113,0.3)] transition-all duration-500 cursor-default"
              >
                <div className="condition-icon-float w-12 h-12 rounded-2xl bg-sage-green/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-sage-green/20 transition-colors duration-300">
                  <Icon size={24} className="text-sage-green" />
                </div>
                <h3 className="text-base font-bold text-dark group-hover:text-primary transition-colors">
                  {condition.title}
                </h3>
                <p className="mt-2 text-xs text-dark-400 leading-relaxed hidden md:block">
                  {condition.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
