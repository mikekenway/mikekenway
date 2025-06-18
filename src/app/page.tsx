import HeroSection from '@/components/home-page/hero-section';

export default function Home() {
  return (
    <div className='relative w-full min-h-screen bg-black overflow-x-hidden'>
      {/* Indigo Gradient Splash (Top Left) */}
      <div
        className='pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] z-0'
        aria-hidden='true'
      >
        <div className='w-full h-full bg-gradient-to-br from-indigo-900 via-indigo-700 to-transparent opacity-40 blur-[90px] rounded-full' />
      </div>
      {/* Pink Gradient Splash (Bottom Right) */}
      <div
        className='pointer-events-none absolute -bottom-32 -right-32 w-[420px] h-[420px] z-0'
        aria-hidden='true'
      >
        <div className='w-full h-full bg-gradient-to-tr from-pink-900 via-pink-700 to-transparent opacity-40 blur-[90px] rounded-full' />
      </div>
      <div className='relative z-10'>
        <HeroSection />
        {/* Add more sections here as needed */}
      </div>
    </div>
  );
}
