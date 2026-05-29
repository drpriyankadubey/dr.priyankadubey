import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Update these src paths to exactly match the file names you put in your public/img folder!
// Make sure the extensions (.jpg, .png, .mp4) match exactly what is in your folder.
const galleryData = [
  { id: 1, type: 'image', src: '/img/1.jpeg' },
  { id: 2, type: 'image', src: '/img/2.jpeg' },
  { id: 3, type: 'image', src: '/img/3.jpeg' },
  { id: 4, type: 'image', src: '/img/4.jpeg' },
  { id: 5, type: 'image', src: '/img/5.jpeg' },
  { id: 6, type: 'image', src: '/img/6.jpeg' },
  { id: 7, type: 'image', src: '/img/7.jpeg' },
  { id: 8, type: 'image', src: '/img/8.jpeg' },
  { id: 9, type: 'image', src: '/img/9.jpg' },
  { id: 10, type: 'image', src: '/img/10.jpg' },
  { id: 11, type: 'image', src: '/img/11.jpg' },
  { id: 12, type: 'image', src: '/img/12.jpg' },
  { id: 13, type: 'image', src: '/img/15.jpg' },
  { id: 14, type: 'image', src: '/img/16.jpg' },
  { id: 15, type: 'image', src: '/img/17.jpg' },
  { id: 16, type: 'image', src: '/img/18.jpg' },
  { id: 17, type: 'image', src: '/img/19.jpg' },
  { id: 18, type: 'image', src: '/img/20.jpg' },
  { id: 19, type: 'image', src: '/img/21.jpg' },
  { id: 20, type: 'image', src: '/img/22.jpg' },
  { id: 21, type: 'image', src: '/img/23.jpg' },

  
  // Videos
  { id: 25, type: 'video', src: '/video/1.mp4' },
  { id: 26, type: 'video', src: '/video/2.mp4' },
  { id: 27, type: 'video', src: '/video/3.mp4' },
  { id: 28, type: 'video', src: '/video/4.mp4' },
  { id: 29, type: 'video', src: '/video/5.mp4' },
  { id: 30, type: 'video', src: '/video/6.mp4' },
  { id: 31, type: 'video', src: '/video/7.mp4' },
  
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

export default function Gallery() {
  // Main states to control the popups and active items
  const [activeGalleryType, setActiveGalleryType] = useState<'image' | 'video' | null>(null);
  const [fullScreenIndex, setFullScreenIndex] = useState<number | null>(null);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(0);

  // States for the auto-changing cards
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Separate the data to show them in their respective cards
  const images = galleryData.filter(item => item.type === 'image');
  const videos = galleryData.filter(item => item.type === 'video');
  
  // Filter data for the modals based on which card was clicked
  const currentModalData = activeGalleryType === 'video' ? videos : images;

  // Lightbox container ref
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Auto-change logic using useEffect
  useEffect(() => {
    // Pause the auto-changing background images when a popup is open
    if (activeGalleryType !== null || fullScreenIndex !== null) return;
    
    const imageInterval = setInterval(() => setCurrentImageIndex((prev) => (prev + 1) % images.length), 3000);
    const videoInterval = setInterval(() => setCurrentVideoIndex((prev) => videos.length ? (prev + 1) % videos.length : 0), 4000);
    return () => { clearInterval(imageInterval); clearInterval(videoInterval); };
  }, [images.length, videos.length, activeGalleryType, fullScreenIndex]);

  // Lock body scroll when modals are open
  useEffect(() => {
    if (activeGalleryType !== null || fullScreenIndex !== null) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => { 
      document.body.style.overflow = ''; 
      document.documentElement.style.overflow = ''; 
    };
  }, [activeGalleryType, fullScreenIndex]);
  
  // Scroll to the selected image when lightbox opens
  useEffect(() => {
    if (fullScreenIndex !== null && lightboxRef.current) {
      const scrollContainer = lightboxRef.current;
      const targetLeft = fullScreenIndex * scrollContainer.clientWidth;
      // Use 'auto' behavior so it jumps immediately to the selected index on open
      scrollContainer.scrollTo({ left: targetLeft, behavior: 'auto' });
      setActiveLightboxIndex(fullScreenIndex);
    }
  }, [fullScreenIndex]);

  // Play/pause videos based on the active lightbox index
  useEffect(() => {
    if (fullScreenIndex !== null && lightboxRef.current) {
      const videos = lightboxRef.current.querySelectorAll('video');
      videos.forEach((video, idx) => {
        if (idx === activeLightboxIndex) {
          // Catch play promise errors (e.g. if user hasn't interacted with the document yet)
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }
  }, [activeLightboxIndex, fullScreenIndex]);

  // Update active index based on scroll position
  const handleScroll = () => {
    if (!lightboxRef.current) return;
    const scrollLeft = lightboxRef.current.scrollLeft;
    const width = lightboxRef.current.clientWidth;
    if (width === 0) return;
    const index = Math.round(scrollLeft / width);
    if (index >= 0 && index < currentModalData.length && index !== activeLightboxIndex) {
      setActiveLightboxIndex(index);
    }
  };

  return (
    <section className="py-24 lg:py-32 relative bg-[#FAFAFA] font-sans overflow-hidden selection:bg-[#7AC943] selection:text-white">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="inline-flex items-center justify-center gap-2 text-[#7AC943] font-bold text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-[2px] bg-[#7AC943] rounded-full"></span>
            Visual Journey
            <span className="w-8 h-[2px] bg-[#7AC943] rounded-full"></span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight tracking-tight">
            Transformation <span className="text-[#7AC943]">Gallery</span>
          </h2>
        </div>

        {/* Main Display: 2 Auto-Changing Cards */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {/* Image Card */}
          <motion.div variants={itemAnim} onClick={() => setActiveGalleryType('image')} className="relative w-full aspect-video rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-200 cursor-pointer">
            <AnimatePresence mode="wait">
              <motion.img key={currentImageIndex} src={images[currentImageIndex]?.src} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 w-full h-full object-cover object-top" />
            </AnimatePresence>
          </motion.div>

          {/* Video Card */}
          {videos.length > 0 && (
            <motion.div variants={itemAnim} onClick={() => setActiveGalleryType('video')} className="relative w-full aspect-video rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-200 cursor-pointer">
              <AnimatePresence mode="wait">
                <motion.video key={currentVideoIndex} src={videos[currentVideoIndex]?.src} autoPlay loop muted playsInline initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0 w-full h-full object-cover object-top" />
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Modal Level 1: Full Grid Popup */}
      <AnimatePresence>
        {activeGalleryType !== null && (
          <motion.div
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-[90] bg-white/95 backdrop-blur-lg overflow-y-auto overscroll-none"
          >
            {/* Close Button */}
            <button onClick={() => setActiveGalleryType(null)} className="fixed top-6 right-6 z-[100] text-black hover:text-white bg-gray-200 hover:bg-black p-3 rounded-full shadow-md transition-all">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="max-w-7xl mx-auto px-6 py-20">
              <h3 className="text-4xl font-extrabold text-center mb-10 text-black">
                {activeGalleryType === 'video' ? 'Video Collection' : 'Photo Gallery'}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4 lg:gap-6">
                {currentModalData.map((item, idx) => (
                  <div key={item.id} onClick={() => setFullScreenIndex(idx)} className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-100">
                    {item.type === 'video' ? (
                    <video src={item.src} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" muted loop playsInline onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => e.currentTarget.pause()} />
                    ) : (
                      <img src={item.src} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal: Full Screen Lightbox Overlay */}
      <AnimatePresence>
        {fullScreenIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl"
          >
            {/* Close Button (Goes back to grid) */}
            <button onClick={() => setFullScreenIndex(null)} className="fixed top-6 right-6 text-white/70 hover:text-white z-[110] transition-colors">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button onClick={(e) => { e.stopPropagation(); lightboxRef.current?.scrollBy({ left: -lightboxRef.current.clientWidth, behavior: 'smooth' }); }} className="fixed left-4 sm:left-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-[110] p-2 transition-transform hover:scale-110">
              <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button onClick={(e) => { e.stopPropagation(); lightboxRef.current?.scrollBy({ left: lightboxRef.current.clientWidth, behavior: 'smooth' }); }} className="fixed right-4 sm:right-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-[110] p-2 transition-transform hover:scale-110">
              <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scrolling Container */}
            <div 
              ref={lightboxRef}
              onScroll={handleScroll}
              className="relative w-full h-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overscroll-x-contain"
            >
              {currentModalData.map((item, idx) => (
                <div key={item.id} className="w-full h-full shrink-0 snap-center flex items-center justify-center p-4 sm:p-8 relative">
                  {item.type === 'video' ? (
                    <video src={item.src} controls autoPlay={activeLightboxIndex === idx} playsInline className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl" />
                  ) : (
                    <img src={item.src} alt={`Gallery item ${idx + 1}`} className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl" />
                  )}
                </div>
              ))}
            </div>

            {/* Position Indicator */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm font-bold tracking-widest bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md z-[110]">
              {activeLightboxIndex + 1} / {currentModalData.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}