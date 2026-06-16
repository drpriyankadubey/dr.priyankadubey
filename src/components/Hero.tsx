import { useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';

// Floating leaf configuration for parallax and idle animations
const floatingLeaves = [
  { id: 1, src: '/leaf-1.png', top: '15%', left: '5%', size: 'w-16', blur: 'blur-[2px]', depth: 0.08, rotation: 15 },
  { id: 2, src: '/leaf-2.png', top: '75%', left: '10%', size: 'w-24', blur: 'blur-0', depth: 0.15, rotation: -25 },
  { id: 3, src: '/leaf-2.png', top: '20%', right: '8%', size: 'w-20', blur: 'blur-[1px]', depth: 0.05, rotation: 45 },
  { id: 4, src: '/leaf-1.png', top: '65%', right: '15%', size: 'w-12', blur: 'blur-sm', depth: -0.1, rotation: -10 },
  { id: 5, src: '/leaf-2.png', top: '45%', left: '45%', size: 'w-10', blur: 'blur-[3px]', depth: -0.05, rotation: 80 },
];

// Framer Motion variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leafRefs = useRef<(HTMLImageElement | null)[]>([]);
  const bowlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Idle floating animation for leaves
      leafRefs.current.forEach((leaf, i) => {
        if (!leaf) return;
        gsap.to(leaf, {
          y: `+=${15 + i * 5}`,
          x: `+=${10 - i * 2}`,
          rotation: `+=${15 - i * 5}`,
          duration: 3 + i,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          delay: i * 0.2,
        });
      });

      // Subtle idle float for the main bowl
      if (bowlRef.current) {
        gsap.to(bowlRef.current, {
          y: '-=15',
          rotation: '+=2',
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });
      }

      // Mouse-follow parallax effect
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (clientX - centerX) / centerX;
        const moveY = (clientY - centerY) / centerY;

        leafRefs.current.forEach((leaf, i) => {
          if (!leaf) return;
          const depth = floatingLeaves[i].depth;
          gsap.to(leaf, {
            x: moveX * 100 * depth,
            y: moveY * 100 * depth,
            duration: 1.5,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        });

        // Very subtle parallax for the bowl
        if (bowlRef.current) {
          gsap.to(bowlRef.current, {
            x: moveX * -15,
            y: moveY * -15,
            duration: 2,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] font-sans selection:bg-[#7AC943] selection:text-white"
    >
      {/* Subtle Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Floating Organic Leaves */}
      {floatingLeaves.map((leaf, index) => (
        <img
          key={leaf.id}
          ref={(el) => (leafRefs.current[index] = el)}
          src={leaf.src}
          alt="Floating leaf"
          className={`absolute pointer-events-none z-20 object-contain drop-shadow-xl ${leaf.size} ${leaf.blur}`}
          style={{
            top: leaf.top,
            left: leaf.left,
            right: leaf.right,
            transform: `rotate(${leaf.rotation}deg)`,
            opacity: 0.85,
          }}
          // Fallback if local image doesn't exist
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955_1280.png';
          }}
        />
      ))}

      {/* Asymmetrical Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10 relative pt-20 lg:pt-0">

        {/* Left Side: Headlines (Asymmetrical) */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6 lg:space-y-8 text-center lg:text-left flex flex-col justify-center order-2 lg:order-1"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center justify-center lg:justify-start gap-2 text-[#7AC943] font-bold text-sm tracking-widest uppercase">
            <span className="w-8 h-[2px] bg-[#7AC943] rounded-full"></span>
            16+ Years of Experience
          </motion.div>

          <motion.h1 
            variants={fadeUp} 
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-black leading-[1.05] tracking-tight"
          >
            Dr. <span className="text-[#7AC943]">Priyanka Dubey</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg sm:text-xl text-gray-500 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
            Disease Reversal Through Lifestyle
          </motion.p>

          <motion.div variants={fadeUp} className="pt-4">
            <a 
              href="https://wa.me/918223800785?text=Hello!%20I%20would%20like%20to%20request%20a%20demo."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 bg-[#7AC943] text-white font-bold rounded-full shadow-[0_10px_25px_rgba(122,201,67,0.35)] hover:shadow-[0_15px_35px_rgba(122,201,67,0.5)] hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
            >
              <span className="relative z-10 text-xs sm:text-sm md:text-base text-center leading-tight">BOOK YOUR FREE CONSULTATION NOW</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Organic Bowl Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center order-1 lg:order-2 w-full max-w-lg mx-auto lg:max-w-none"
        >
          {/* Abstract Green Blob Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] lg:w-[130%] lg:h-[130%] bg-[#7AC943]/15 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] lg:w-[110%] lg:h-[110%] -z-10 text-[#7AC943] opacity-20 drop-shadow-2xl animate-[spin_60s_linear_infinite]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M45.7,-76.3C58.9,-69.3,68.9,-54.8,77.3,-40.1C85.7,-25.4,92.5,-10.4,91.3,4.2C90.2,18.8,81.1,33,70.5,44.7C59.9,56.4,47.8,65.6,34.2,72.2C20.6,78.8,5.4,82.9,-8.9,81.6C-23.2,80.3,-36.5,73.6,-48.5,64.8C-60.5,56,-71.2,45,-78.6,31.7C-86,18.4,-90.1,2.8,-87.3,-11.5C-84.5,-25.8,-74.8,-38.8,-63.4,-49.6C-52,-60.4,-39,-69,-25.4,-74.3C-11.8,-79.6,2.3,-81.6,16.5,-79.9C30.7,-78.2,45.7,-76.3,45.7,-76.3Z" transform="translate(100 100)" />
          </svg>

          {/* Logo Image with Stylish Container */}
          <div ref={bowlRef} className="relative z-10 mx-auto w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 group cursor-pointer">
            {/* Rotating dashed ring */}
            <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#7AC943]/60 animate-[spin_20s_linear_infinite] scale-110 pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:border-[#7AC943]"></div>
            
            {/* Inner glowing pulsating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#7AC943]/30 animate-pulse scale-105 shadow-[0_0_30px_rgba(122,201,67,0.4)] pointer-events-none transition-all duration-700 group-hover:shadow-[0_0_50px_rgba(122,201,67,0.6)] group-hover:border-[#7AC943]/80"></div>
            
            {/* Core Image */}
            <img 
              src="/logo.png" 
              alt="Brand Logo" 
              className="w-full h-full object-cover rounded-full border-8 border-white shadow-[0_20px_50px_rgba(122,201,67,0.3)] relative z-10 transition-transform duration-700 group-hover:scale-105 bg-white"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://freepngimg.com/thumb/salad/29505-7-salad-transparent-background.png';
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
