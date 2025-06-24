import HeroSection from '@/components/home-page/hero-section';
import { FeaturedServices } from '@/components/home-page/featured-services';

export default function Home() {
  return (
    <div className='relative z-10'>
      <HeroSection />
      <FeaturedServices />
    </div>
  );
}
