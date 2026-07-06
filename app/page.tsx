import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import About from '@/components/About';
import Products from '@/components/Products';
import Export from '@/components/Export';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <Products />
      <Export />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
