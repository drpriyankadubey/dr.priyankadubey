import { ReactLenis } from 'lenis/react';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Conditions from './components/Conditions';
import Pillars from './components/Pillars';
import Results from './components/Results';
import ProblemSolution from './components/ProblemSolution';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  const containerRef = useScrollAnimations();

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div ref={containerRef} className="relative bg-bg">
        <main>
          <Hero />
          <About />
          <Expertise />
          <Conditions />
          <Pillars />
          <Results />
          <ProblemSolution />
          <Gallery />
          <FAQ />
          <Pricing />
          <Contact />
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;
