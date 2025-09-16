import HeroSection from '@/app/_components/hero-section';
import FeaturedCaseStudy from '@/app/_components/featured-case-study';
import ContactSection from '@/app/_components/contact-section';

export default function Home() {
  return (
    <div className='relative w-full z-10'>
      <HeroSection />
      <FeaturedCaseStudy />
      <ContactSection />
    </div>
  );
}
