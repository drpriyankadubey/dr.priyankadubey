import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useForm, ValidationError } from '@formspree/react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [state, handleSubmit] = useForm("meedyral");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Soft fade in for the whole container
      gsap.fromTo(contentRef.current,
        { opacity: 0, scale: 0.95, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      // Subtle floating elements in background
      gsap.to('.floating-blob', {
        y: -30,
        x: 20,
        rotation: 10,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 md:px-8 overflow-hidden relative bg-white/10">
      {/* Glassmorphic Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[url('/images/ingredients/spinach.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] -rotate-12 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-[url('/images/ingredients/orange-slice.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[8px] rotate-45 pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-[60%] w-56 h-56 bg-[url('/images/ingredients/basil.png')] bg-contain bg-center bg-no-repeat opacity-50 blur-[4px] rotate-90 pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[15%] w-64 h-64 bg-[url('/images/ingredients/tomato.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] pointer-events-none z-0"></div>
      <div className="absolute top-[5%] right-[20%] w-48 h-48 bg-[url('/images/ingredients/fresh-veg.png')] bg-contain bg-center bg-no-repeat opacity-30 blur-[4px] pointer-events-none z-0"></div>

      <div 
        ref={contentRef}
        className="max-w-[1200px] mx-auto bg-white/30 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] p-5 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)] z-10"
      >
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-left">
            <span className="text-[#7AC943] font-bold text-xs sm:text-sm tracking-widest block mb-3 sm:mb-4 uppercase">Ready to Transform?</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">Begin Your Clinical Journey</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 font-medium leading-relaxed max-w-lg">
              Take the first step toward peak metabolic health. Fill out the form below to request a 1:1 strategy session with Dr. Priyanka.
            </p>
            
            <div className="flex flex-col gap-4">
              {/* Phone */}
              <div className="flex items-center gap-4 sm:gap-5 bg-white/80 backdrop-blur-md px-4 py-4 sm:px-6 sm:py-5 rounded-2xl border border-white shadow-sm w-full sm:w-fit max-w-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#7AC943]/10 flex items-center justify-center text-[#7AC943] shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="overflow-hidden flex-1">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Direct Line</p>
                  <p className="text-base sm:text-lg md:text-xl font-black text-gray-900 break-words">+91 82238-00785</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 sm:gap-5 bg-white/80 backdrop-blur-md px-4 py-4 sm:px-6 sm:py-5 rounded-2xl border border-white shadow-sm w-full sm:w-fit max-w-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#7AC943]/10 flex items-center justify-center text-[#7AC943] shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="overflow-hidden flex-1">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Email</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 break-all sm:break-words">appointmentdrdubey@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 sm:gap-5 bg-white/80 backdrop-blur-md px-4 py-4 sm:px-6 sm:py-5 rounded-2xl border border-white shadow-sm w-full sm:w-fit max-w-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#7AC943]/10 flex items-center justify-center text-[#7AC943] shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="overflow-hidden flex-1">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 break-words">Indore, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-white shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col gap-5 sm:gap-6 w-full min-h-[500px] justify-center">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#7AC943]/20 text-[#7AC943] rounded-full flex items-center justify-center mb-2">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Message Sent!</h3>
                <p className="text-gray-600 font-medium text-lg">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-bold text-gray-700 ml-2">First Name</label>
                <input id="firstName" name="firstName" type="text" required placeholder="First Name" className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/80 border border-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7AC943]/50 focus:bg-white transition-all shadow-sm" />
                <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-bold text-gray-700 ml-2">Last Name</label>
                <input id="lastName" name="lastName" type="text" required placeholder="Last Name" className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/80 border border-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7AC943]/50 focus:bg-white transition-all shadow-sm" />
                <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-2">Email Address</label>
                <input id="email" name="email" type="email" required placeholder="Email Address" className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/80 border border-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7AC943]/50 focus:bg-white transition-all shadow-sm" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-bold text-gray-700 ml-2">Phone Number</label>
                <input id="phone" name="phone" type="tel" placeholder="Phone Number" className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/80 border border-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7AC943]/50 focus:bg-white transition-all shadow-sm" />
                <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-2">Message</label>
              <textarea id="message" name="message" required rows={4} placeholder="Your Message" className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl bg-white/80 border border-white text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7AC943]/50 focus:bg-white transition-all shadow-sm resize-none"></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            
            <button type="submit" disabled={state.submitting} className="mt-2 group relative w-full inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-[#7AC943] text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-[0_10px_25px_rgba(122,201,67,0.35)] hover:shadow-[0_15px_35px_rgba(122,201,67,0.5)] hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed">
              <span className="relative z-10">{state.submitting ? 'SENDING...' : 'SEND'}</span>
              {!state.submitting && (
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              )}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </button>
              </>
            )}
          </form>

        </div>
        
        {/* Decorative Floating Blobs */}
        <div className="floating-blob absolute -bottom-20 -left-20 w-80 h-80 bg-[#7AC943]/15 rounded-full blur-[80px] mix-blend-multiply"></div>
        <div className="floating-blob absolute -top-20 -right-20 w-80 h-80 bg-yellow-200/20 rounded-full blur-[80px] mix-blend-multiply"></div>
      </div>
    </section>
  );
}
