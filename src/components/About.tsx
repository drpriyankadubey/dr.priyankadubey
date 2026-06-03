import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeatureCards from './FeatureCards'; // Import the new component

const timelineItems = [
  {
    period: 'Current',
    title: 'Pure Plates',
    role: 'Founder',
    description: 'Leading a holistic health revolution focusing on organic, personalized nutrition strategies.',
    icon: 'apartment'
  },
  {
    period: 'Fellowship',
    title: 'Breach Candy Hospital',
    role: 'Clinical Fellow',
    description: 'Advanced clinical fellowship specializing in complex metabolic disease reversal.',
    icon: 'medical_services'
  },
  {
    period: 'Academic',
    title: 'Mayo Clinic',
    role: 'Lecturer',
    description: 'Educating peers on advanced nutrigenomics and lifestyle intervention frameworks.',
    icon: 'school'
  },
  {
    period: 'Industry',
    title: 'Nestlé India',
    role: 'Strategic Advisor',
    description: 'Strategic advisor for medical nutrition product development and clinical validation.',
    icon: 'corporate_fare'
  }
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % timelineItems.length);
    }, 4000); // 4 seconds total cycle (wait + transition)
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FAFAFA] relative overflow-hidden selection:bg-[#7AC943] selection:text-white">
      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-[#7AC943]/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* Glassmorphic Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[url('/images/ingredients/spinach.png')] bg-contain bg-center bg-no-repeat opacity-20 blur-[4px] -rotate-12 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-[url('/images/ingredients/orange-slice.png')] bg-contain bg-center bg-no-repeat opacity-20 blur-[6px] rotate-45 pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-[60%] w-56 h-56 bg-[url('/images/ingredients/basil.png')] bg-contain bg-center bg-no-repeat opacity-30 blur-[2px] rotate-90 pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[15%] w-64 h-64 bg-[url('/images/ingredients/tomato.png')] bg-contain bg-center bg-no-repeat opacity-20 blur-[4px] pointer-events-none z-0"></div>
      <div className="absolute top-[5%] right-[20%] w-48 h-48 bg-[url('/images/ingredients/fresh-veg.png')] bg-contain bg-center bg-no-repeat opacity-15 blur-[3px] pointer-events-none z-0"></div>

      {/* 1. Static Title */}
      <div className="max-w-[1200px] mx-auto px-8 w-full relative z-10 mb-12">
        <div className="flex flex-col justify-center text-center w-full">
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-playfair font-black text-gray-900 tracking-tight">
            A Journey of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7AC943] to-[#5a9c30]">Scientific Rigor</span>
          </h2>
        </div>
      </div>
      
      {/* 2. Auto-Cycling Timeline Card */}
      <div className="relative w-full z-10 py-4 flex flex-col items-center">
        <div className="h-[380px] sm:h-[300px] w-full flex items-center justify-center relative">
          <AnimatePresence>
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-[90%] max-w-[650px] bg-white/80 backdrop-blur-2xl p-8 sm:p-10 rounded-[2.5rem] border border-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex flex-col sm:flex-row gap-6 sm:gap-8 items-center text-center sm:text-left"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#7AC943]/10 flex items-center justify-center shrink-0 border border-[#7AC943]/20 text-[#7AC943] mb-2 sm:mb-0">
                 {/* Fallback svg icons for material symbols */}
                 {currentIndex === 0 && <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                 {currentIndex === 1 && <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                 {currentIndex === 2 && <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                 {currentIndex === 3 && <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              </div>
              <div className="flex-1">
                <span className="text-[#7AC943] font-bold text-sm tracking-widest uppercase mb-2 block font-inter">{timelineItems[currentIndex].period}</span>
                <h3 className="text-3xl font-playfair font-black text-gray-900 mb-2">{timelineItems[currentIndex].title}</h3>
                <p className="text-[#7AC943] font-inter font-bold mb-3">{timelineItems[currentIndex].role}</p>
                <p className="text-gray-500 leading-relaxed font-inter font-medium text-base sm:text-lg">{timelineItems[currentIndex].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-6 sm:mt-8 relative z-20">
          {timelineItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-[#7AC943]" : "w-2.5 bg-gray-300 hover:bg-[#7AC943]/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
