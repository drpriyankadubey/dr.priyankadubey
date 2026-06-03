import { ReactLenis } from 'lenis/react';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import Hero from './components/Hero';
import About from './components/About';
import Conditions from './components/Conditions';
import BA from './components/B&A';
import Pillars from './components/Pillars';
import Results from './components/Results';
import FeatureCards from './components/FeatureCards';
import ProblemSolution from './components/ProblemSolution';
import Pricing from './components/Pricing';
import Expertise from './components/Expertise';
import Contact from './components/Contact';

function App() {
  const containerRef = useScrollAnimations();

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div ref={containerRef} className="relative bg-bg">
        <main>
          <Hero />
          <About />
          <Conditions />
          <BA />
          <Pillars />
          <Results />
          <FeatureCards />
          <ProblemSolution />
          <Pricing />
          <Expertise />
          <Contact />
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;
