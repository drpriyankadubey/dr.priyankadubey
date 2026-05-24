import { motion } from 'framer-motion';

const changeImages = [
  '/change/1.jpeg',
  '/change/2.jpeg',
  '/change/3.jpeg',
  '/change/4.jpeg',
  '/change/5.jpeg',
  '/change/6.jpeg',
  '/change/7.jpeg',
  '/change/8.jpeg',
  '/change/9.jpeg',
  '/change/10.jpeg',
];

export default function FAQ() {
  // Duplicate the images to create a seamless infinite loop
  const duplicatedImages = [...changeImages, ...changeImages];

  return (
    <section className="py-24 lg:py-32 relative bg-[#FAFAFA] font-sans selection:bg-[#7AC943] selection:text-white overflow-hidden">
      {/* Background Texture & Ambient Orbs */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#7AC943]/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-200/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <span className="inline-flex items-center justify-center gap-2 text-[#7AC943] font-bold text-sm tracking-widest uppercase mb-4">
          <span className="w-8 h-[2px] bg-[#7AC943] rounded-full"></span>
          Real Results
          <span className="w-8 h-[2px] bg-[#7AC943] rounded-full"></span>
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight tracking-tight">
          Client <span className="text-[#7AC943]">Transformations</span>
        </h2>
        <p className="mt-4 text-lg text-gray-500 font-medium max-w-2xl mx-auto px-6">
          Witness the power of metabolic healing. Real people, real clinical results.
        </p>
      </div>

      <div className="relative z-10 w-full">
        {/* Left/Right Fade Gradients for Cinematic Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-20 pointer-events-none"></div>

        <div className="flex overflow-hidden w-full py-8">
          <motion.div 
            className="flex w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          >
            {duplicatedImages.map((src, index) => (
              <div 
                key={index}
                className="relative w-64 sm:w-72 lg:w-80 m-4 sm:m-5 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(122,201,67,0.25)] overflow-hidden aspect-[4/5] bg-gray-100 shrink-0 group cursor-pointer border border-black/5 hover:-translate-y-3 transition-all duration-500"
              >
                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                
                {/* Slide-up Badge */}
                <div className="absolute bottom-6 left-6 z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="bg-white text-[#7AC943] font-bold text-xs px-4 py-2 rounded-full shadow-lg uppercase tracking-wider inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#7AC943] animate-pulse"></span>
                    Before & After
                  </span>
                </div>

                <img 
                  src={src} 
                  alt={`Transformation ${index + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
          ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}