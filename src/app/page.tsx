import HeroSection from '@/components/home-page/hero-section';
import ServicesSection from '@/components/home-page/services-section';

export default function Home() {
  return (
    <div className='relative z-10'>
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
