import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  { problem: 'Chronic Bloating', solution: 'Gut Healing Protocol', icon: '🫧' },
  { problem: 'Sugar Cravings', solution: 'Hormone Balancing', icon: '🍬' },
  { problem: 'Constant Fatigue', solution: 'Nutrient Optimization', icon: '⚡' },
  { problem: 'Stubborn Weight', solution: 'Metabolic Reset', icon: '⚖️' },
  { problem: 'Brain Fog', solution: 'Anti-Inflammatory Nutrition', icon: '🧠' },
  { problem: 'Poor Sleep', solution: 'Circadian Rhythm Fix', icon: '🌙' },
];

export default function ProblemSolution() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.ps-row').forEach((row) => {
        const problem = row.querySelector('.ps-problem');
        const solution = row.querySelector('.ps-solution');
        const arrow = row.querySelector('.ps-arrow');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            once: true,
          },
        });

        tl.fromTo(
          problem,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
        )
          .fromTo(
            arrow,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
            '-=0.3'
          )
          .fromTo(
            solution,
            { x: 60, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
            '-=0.3'
          );
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="relative section-padding overflow-hidden bg-white/10"
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.04)_0%,transparent_60%)]" />

      {/* Glassmorphic Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[url('/images/ingredients/spinach.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] -rotate-12 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-[url('/images/ingredients/orange-slice.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[8px] rotate-45 pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-[60%] w-56 h-56 bg-[url('/images/ingredients/basil.png')] bg-contain bg-center bg-no-repeat opacity-50 blur-[4px] rotate-90 pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[15%] w-64 h-64 bg-[url('/images/ingredients/tomato.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] pointer-events-none z-0"></div>
      <div className="absolute top-[5%] right-[20%] w-48 h-48 bg-[url('/images/ingredients/fresh-veg.png')] bg-contain bg-center bg-no-repeat opacity-30 blur-[4px] pointer-events-none z-0"></div>

      <div className="relative max-w-4xl mx-auto z-10">
        <div className="text-center mb-16">
          <span className="reveal-up inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">
            Approach
          </span>
          <h2 className="reveal-up text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-dark-olive tracking-tight">
            Problem.{' '}
            <span className="text-primary">Solution.</span>
          </h2>
          <p className="reveal-up mt-4 text-lg text-dark-600 max-w-2xl mx-auto">
            Every symptom has a root cause. We don't mask — we resolve.
          </p>
        </div>

        <div className="space-y-4">
          {problems.map((item, i) => (
            <div
              key={i}
              className="ps-row flex flex-col md:flex-row items-center gap-3 md:gap-6"
            >
              {/* Problem */}
              <div className="ps-problem flex-1 bg-white/30 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl p-4 md:p-6 text-center border-l-4 border-l-red-400/60 hover:border-l-red-400 transition-all duration-300">
                <span className="text-lg md:text-xl mb-1 block">{item.icon}</span>
                <span className="text-sm md:text-base font-inter font-semibold text-dark-olive">
                  {item.problem}
                </span>
              </div>

              {/* Arrow */}
              <div className="ps-arrow flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full gradient-green flex items-center justify-center rotate-90 md:rotate-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>

              {/* Solution */}
              <div className="ps-solution flex-1 bg-white/30 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl p-4 md:p-6 text-center border-l-4 border-l-primary hover:shadow-[0_0_20px_rgba(46,204,113,0.3)] transition-all duration-300">
                <span className="text-sm md:text-base font-inter font-semibold text-sage-green">
                  {item.solution}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
