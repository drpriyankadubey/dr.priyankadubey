import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: 'Personal Wellness',
    description: 'One-on-one clinical consultation focusing on hormonal balance, gut health, and personalized longevity protocols based on your unique bio-markers.',
    icon: 'person',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu3maatdMV3lfWv6DPg_yhp5pQV0qoNoLX_JZWDh7aGF55j-aBZzS8ShxzjptqOMlg9518_kc5VoxgvnWuU5-mK-jRPIorxi9lqq8xWS1gEPTufW3zHVZtPtsVrY9vb6Aez9hmDMtf98rWVPt55l8fDSXcWXC83vsJtYub0Mso7NQBtubsjREqzHtaB6YLP5u9-7mEaxMVvIxBqD2PYaJJFM-p0w2ZeEsF7kn2evSE_cxi5_9z1_d7nkGNEqMuiL212vEA1xbybWQ'
  },
  {
    title: 'Corporate Wellness',
    description: 'Scalable health solutions for high-performance teams. Reducing burnout and increasing cognitive clarity through science-backed nutrition and lifestyle strategies.',
    icon: 'corporate_fare',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZVJZT65DwLhWvqa5JxvDPZ1Db6scLIkXcvElAQk8IdfiOsNy8WgJGMXPQvJqhLE2WqvDumWbmMNsIgrxUtkfIWXj7JAyUA_X1TR4-vuuDv-T_ajIIBXBmJTrD4D2k8XRW2T5i3TxBGiNr6tz7jLZ9cBOv-LErMdAipx5urZfLJ3Zf3tb8DEU5pqdfe5-4FseyZlLVyaBnpYJ05fmIK3F-VYpyXNjEXsKB5IvpTWlvOFxMt_PI6fDG0eF98M49zpfiSAJ8UHCZwTg'
  },
  {
    title: 'Workshops',
    description: 'Interactive deep-dives into bio-hacking, gut microbiome restoration, and the science of metabolic health. Live demonstrations and clinical Q&A sessions.',
    icon: 'groups',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsRE8nULRNK8TfzIMK_kt88smam6B-Qy51CGsHPndxL3OpTC7Ty39SdOXiurBuXTqoH4B5tgDKZwxtbzZrlxfxQGRwZ2o65aefVqHJxyNAx6Z44ks1cEDEnupqsxMbBw6mds4uOviqjUt0mxmkiP13tdYthCq8dw50cQPDbhK_hoOnLvocqBv5noRoeB8UbPfH29vWKSxzG25Tp_CoZaxGhCjgqBixh4k-9rZaCcS4XbCPQyHgsr5XiFw73JJrTchb7Y7mqU6e4jM'
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal of service cards
      gsap.fromTo(cardsRef.current,
        { 
          y: 100, 
          opacity: 0, 
          rotationX: 15,
          scale: 0.9 
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom bottom',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden perspective-1000 bg-white/10">
      {/* Glassmorphic Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[url('/images/ingredients/spinach.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] -rotate-12 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-[url('/images/ingredients/orange-slice.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[8px] rotate-45 pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-[60%] w-56 h-56 bg-[url('/images/ingredients/basil.png')] bg-contain bg-center bg-no-repeat opacity-50 blur-[4px] rotate-90 pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[15%] w-64 h-64 bg-[url('/images/ingredients/tomato.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] pointer-events-none z-0"></div>
      <div className="absolute top-[5%] right-[20%] w-48 h-48 bg-[url('/images/ingredients/fresh-veg.png')] bg-contain bg-center bg-no-repeat opacity-30 blur-[4px] pointer-events-none z-0"></div>

      <div className="max-w-[1200px] mx-auto px-8 mb-16 flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
        <div className="font-inter">
          <span className="text-sage-green font-bold tracking-widest text-sm uppercase block mb-2">Advanced Clinical Wellness</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-black text-gray-900 tracking-tight">Wellness Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-xl">Tailored protocols for every stage of your health journey.</p>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1200px] mx-auto px-8 preserve-3d relative z-10">
        {servicesData.map((service, index) => (
          <div 
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="flex-1 bg-white/30 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/50 flex flex-col hover:shadow-[0_30px_60px_rgba(107,142,35,0.2)] hover:-translate-y-2 transition-all duration-500 group"
          >
            <div className="bg-sage-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
               {/* SVG Fallback */}
               <svg className="w-8 h-8 text-sage-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
                  {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
                  {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
               </svg>
            </div>
            
            <h3 className="text-2xl font-playfair font-black text-gray-900 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed font-inter font-medium">{service.description}</p>
            
            <div className="relative w-full h-48 rounded-2xl overflow-hidden mt-auto">
              <div className="absolute inset-0 bg-sage-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
