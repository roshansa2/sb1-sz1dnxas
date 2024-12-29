import { Navbar } from './components/Navbar';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { FutureSection } from './components/sections/FutureSection';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <Features />
        <FutureSection />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}