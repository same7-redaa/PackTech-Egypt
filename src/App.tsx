import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-text-main flex flex-col selection:bg-accent-orange selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Clients />
          <WhyChooseUs />
          <Gallery />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
