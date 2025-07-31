import HeroSection from '@/components/home-page/hero-section';
import FeaturedCaseStudy from '@/components/home-page/featured-case-study';
import ContactSection from '@/components/home-page/contact-section';

export default function Home() {
  return (
    <div className='relative w-full z-10'>
      <HeroSection id='hero' />
      <FeaturedCaseStudy id='case-studies' />
      <ContactSection id='contact' />
    </div>
  );
}
