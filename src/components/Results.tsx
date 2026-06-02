const showcaseData = [
  {
    title: 'Energy Restoration',
    metric: '65%',
    description: 'Increase in measurable daily energy levels through mitochondrial optimization.',
    icon: 'bolt'
  },
  {
    title: 'Sleep Architecture',
    metric: '40%',
    description: 'Better sleep quality achieved via circadian alignment and hormone regulation.',
    icon: 'sleep'
  },
  {
    title: 'Cellular Repair',
    metric: '80%',
    description: 'Significant reduction in clinical inflammation markers within 12 weeks.',
    icon: 'health_and_safety'
  }
];

export default function Results() {

  return (
    <section className="relative pt-20 bg-white/10">
      {/* Glassmorphic Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[url('/images/ingredients/spinach.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] -rotate-12 pointer-events-none z-0"></div>
      <div className="absolute bottom-[40%] right-[10%] w-80 h-80 bg-[url('/images/ingredients/orange-slice.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[8px] rotate-45 pointer-events-none z-0"></div>
      <div className="absolute top-[30%] left-[60%] w-56 h-56 bg-[url('/images/ingredients/basil.png')] bg-contain bg-center bg-no-repeat opacity-50 blur-[4px] rotate-90 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-[15%] w-64 h-64 bg-[url('/images/ingredients/tomato.png')] bg-contain bg-center bg-no-repeat opacity-40 blur-[6px] pointer-events-none z-0"></div>
      <div className="absolute top-[5%] right-[20%] w-48 h-48 bg-[url('/images/ingredients/fresh-veg.png')] bg-contain bg-center bg-no-repeat opacity-30 blur-[4px] pointer-events-none z-0"></div>
      
      {/* Bento Stats Grid - Normal Scroll */}
      <div className="max-w-[1200px] mx-auto px-8 mb-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">CLINICAL RESULTS & IMPACT</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/30 backdrop-blur-2xl p-6 md:p-10 rounded-3xl text-center border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            <div className="text-primary font-black text-6xl mb-2 flex justify-center items-center">
              1000<span className="text-3xl font-bold ml-1">+</span>
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Clients Transformed</div>
            <p className="text-sm font-medium text-gray-500">Individuals who have successfully completed the Vitality protocol globally.</p>
          </div>
          
          <div className="bg-white/30 backdrop-blur-2xl p-6 md:p-10 rounded-3xl text-center border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            <div className="text-primary font-black text-6xl mb-2 flex justify-center items-center">
              8-12<span className="text-3xl font-bold ml-1">kg</span>
            </div>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Avg. Weight Loss</div>
            <p className="text-sm font-medium text-gray-500">Sustainable body composition changes achieved within the first 12-16 weeks.</p>
          </div>
          
          <div className="bg-white/30 backdrop-blur-2xl p-6 md:p-10 rounded-3xl flex flex-col justify-between border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            <div className="mb-4">
              <div className="text-xs font-bold text-[#7AC943] uppercase tracking-widest mb-1 font-inter">Success Rate</div>
              <div className="text-2xl font-playfair font-black text-gray-900">94% Retention</div>
            </div>
            <div className="h-24 w-full flex items-end gap-2">
              <div className="bg-[#7AC943]/10 w-full rounded-t-xl h-1/2"></div>
              <div className="bg-[#7AC943]/20 w-full rounded-t-xl h-2/3"></div>
              <div className="bg-[#7AC943]/40 w-full rounded-t-xl h-3/4"></div>
              <div className="bg-[#7AC943]/60 w-full rounded-t-xl h-5/6"></div>
              <div className="bg-[#7AC943] w-full rounded-t-xl h-full shadow-[0_0_20px_rgba(122,201,67,0.4)]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Showcase - Static Grid */}
      <div className="relative py-24 bg-[#FAFAFA] overflow-hidden">
        
        {/* Ambient Glowing Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Tech Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>
          
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-white/80 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[#7AC943]/20 rounded-full blur-[150px] mix-blend-multiply"></div>
          <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-yellow-100/50 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
          
          {/* Noise texture for premium feel */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        {/* Slides Content Layer */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcaseData.map((item, index) => (
              <div 
                key={index}
                className="w-full bg-white/80 backdrop-blur-3xl border border-white border-t-4 border-t-[#7AC943] md:border-t-0 md:border-l-4 md:border-l-[#7AC943] p-8 md:p-10 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2"
              >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-[20rem] h-[20rem] bg-[#7AC943]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#7AC943]/15 transition-colors duration-700 translate-x-1/3 -translate-y-1/3"></div>

                <div className="inline-flex items-center gap-3 mb-6 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm w-fit">
                  <div className="w-6 h-6 rounded-full bg-[#7AC943]/10 flex items-center justify-center text-[#7AC943]">
                    {/* SVG Icon Fallback */}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-bold tracking-widest uppercase text-[10px]">Quantifiable Impact</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed font-medium mb-8 flex-grow">{item.description}</p>
                
                <div className="w-full flex flex-col justify-end mt-auto">
                  <div className="relative flex items-baseline text-gray-900 mb-2">
                    <span className="text-5xl font-black tracking-tighter leading-none">
                      {item.metric.replace('%', '')}
                    </span>
                    <span className="text-2xl font-bold text-[#7AC943] ml-1">%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden relative">
                    <div className="h-full bg-[#7AC943] rounded-full shadow-[0_0_10px_rgba(122,201,67,0.5)]" style={{ width: item.metric }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
