import HeroSection from '@/components/home-page/hero-section';
import { FeaturedServices } from '@/components/home-page/featured-services';
import FeaturedCaseStudy from '@/components/home-page/featured-case-study';
import ContactSection from '@/components/home-page/contact-section';

export default function Home() {
  return (
    <div className='relative z-10'>
      <HeroSection />
      <FeaturedServices />
      <FeaturedCaseStudy />
      <ContactSection />  
    </div>
  );
}
