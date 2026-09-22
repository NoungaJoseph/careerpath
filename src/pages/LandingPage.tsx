import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import LogoStrip from '../components/LogoStrip';
import CategoryCarousel from '../components/CategoryCarousel';
import HowItWorks from '../components/HowItWorks';
import FeaturedGrid from '../components/FeaturedGrid';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useSEO } from '../hooks/useSEO';

export default function LandingPage() {
  useSEO({
    title: 'Fixam Career Pathways | Vocational Training & Trade Skills in Cameroon',
    description: 'Empowering young Africans & trade professionals in Cameroon with verified vocational training pathways, technical skill certifications, apprenticeship leads, and direct employment opportunities.',
    canonical: 'https://careerpath.usefixam.com/'
  });

  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <LogoStrip />
      <CategoryCarousel />
      <HowItWorks />
      <FeaturedGrid />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}
