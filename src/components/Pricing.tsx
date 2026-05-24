import { motion, Variants } from 'framer-motion';

// Framer Motion variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const plans = [
  {
    name: "Sprout",
    price: "Enquire Now",
    duration: "",
    subtitle: "Kickstart your journey",
    description: "Perfect for individuals looking to build foundational healthy habits and gain momentum.",
    features: ["Customized Meal Plan", "Basic Grocery List", "Weekly Email Check-in", "Community Group Access"],
    isPopular: false,
  },
  {
    name: "Thrive",
    price: "Enquire Now",
    duration: "",
    subtitle: "Total Transformation",
    description: "A comprehensive disease reversal protocol with close monitoring and holistic coaching.",
    features: ["Advanced Clinical Diet", "Daily WhatsApp Support", "Bi-weekly 1-on-1 Call", "Personalized Recipe Book", "Progress Analytics"],
    isPopular: true,
  },
  {
    name: "Flourish",
    price: "Enquire Now",
    duration: "",
    subtitle: "Holistic Mentorship",
    description: "Ultimate hand-holding for long-term lifestyle optimization and sustainable disease reversal.",
    features: ["Everything in Thrive", "Complete Bloodwork Analysis", "Mindset & Sleep Coaching", "24/7 Priority Access", "Post-Program Maintenance"],
    isPopular: false,
  }
];

export default function Pricing() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#FAFAFA] font-sans selection:bg-[#7AC943] selection:text-white overflow-hidden">
      {/* Background Texture & Organic Blobs */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-[#7AC943]/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-[#7AC943]/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center justify-center gap-2 text-[#7AC943] font-bold text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-[2px] bg-[#7AC943] rounded-full"></span>
            Invest in Your Health
            <span className="w-8 h-[2px] bg-[#7AC943] rounded-full"></span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-extrabold text-black leading-tight tracking-tight mb-6">
          Choose Your Wellness <span className="text-[#7AC943]">Plan</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-500 font-medium">
            Choose the path that best supports your journey to disease reversal and holistic wellness.
          </motion.p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              variants={fadeUp}
              className={`relative flex flex-col p-8 sm:p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${
                plan.isPopular 
                  ? "bg-[#7AC943] text-white shadow-[0_20px_40px_rgba(122,201,67,0.3)] lg:-mt-8 lg:mb-8" 
                  : "bg-white text-black shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-gray-100"
              }`}
            >
              {/* "Popular" Organic Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full inline-flex items-center gap-1 shadow-xl">
                  <svg className="w-3 h-3 text-[#7AC943]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-extrabold mb-2 ${plan.isPopular ? "text-white" : "text-black"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm font-medium ${plan.isPopular ? "text-white/80" : "text-[#7AC943]"}`}>
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-8">
                <a 
                  href={`https://wa.me/918223800785?text=Hello!%20I%20would%20like%20to%20enquire%20about%20the%20${plan.name}%20plan.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 font-bold text-lg rounded-full shadow-md hover:shadow-xl transition-all duration-300 ease-out overflow-hidden ${
                    plan.isPopular 
                      ? "bg-white text-[#7AC943] hover:-translate-y-1" 
                      : "bg-[#7AC943] text-white hover:-translate-y-1"
                  }`}
                >
                  <span className="relative z-10">{plan.price}</span>
                  <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 ${plan.isPopular ? "bg-gray-100" : "bg-black/10"}`}></div>
                </a>
              </div>

              <p className={`mb-8 leading-relaxed ${plan.isPopular ? "text-white/90" : "text-gray-500"}`}>
                {plan.description}
              </p>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${plan.isPopular ? "bg-white/20 text-white" : "bg-[#7AC943]/10 text-[#7AC943]"}`}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`font-medium ${plan.isPopular ? "text-white" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}