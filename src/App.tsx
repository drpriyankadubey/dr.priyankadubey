import { ReactLenis } from 'lenis/react';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Conditions from './components/Conditions';
import Pillars from './components/Pillars';
import Results from './components/Results';
import Services from './components/Services';
import ProblemSolution from './components/ProblemSolution';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const containerRef = useScrollAnimations();

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div ref={containerRef} className="relative bg-bg">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Expertise />
          <Conditions />
          <Pillars />
          <Results />
          <Services />
          <ProblemSolution />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
