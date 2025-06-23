import { Cog6ToothIcon, CommandLineIcon, ComputerDesktopIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative w-full min-h-[80vh] flex items-center justify-center text-white overflow-hidden'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-16 relative z-10'>
        {/* Left Side */}
        <div className='flex flex-col items-start gap-6 max-w-xl'>
          {/* Badge
          <span className='inline-block rounded-full bg-gray-800/80 px-4 py-1 text-xs font-medium mb-2 border border-gray-700'>
            Just released: Enhanced customization and new components
          </span>
          */}

          {/* Heading */}
          <h1 className='text-4xl md:text-6xl font-extrabold leading-tight mb-2'>
            What Can I
            <br />
            Do For You?
          </h1>
          {/* Subheading */}
          <p className='text-lg text-gray-300 mb-4'>
            I love helping people bring their ideas to life. Whether you need
            thoughtful design, clear strategy, or both, I&rsquo;m here to help
            shape projects that connect and make an impact.
          </p>
          {/* Features */}
          <ul className='space-y-1 mb-6'>
            <li className='flex items-center gap-2 text-gray-200 text-base'>
              <PencilSquareIcon className='size-6' />
              User Experience Design
            </li>
            <li className='flex items-center gap-2 text-gray-200 text-base'>
              <Cog6ToothIcon className='size-6' />
              Service Design && Strategy
            </li>
            <li className='flex items-center gap-2 text-gray-200 text-base'>
              <CommandLineIcon className='size-6' />
              Full Stack Development (Next.js)
            </li>
            <li className='flex items-center gap-2 text-gray-200 text-base'>
              <ComputerDesktopIcon className='size-6' />
              Graphic/UI Design
            </li>
          </ul>
          {/* Buttons */}
          <div className='flex gap-4 mb-8'>
            <button className='px-6 py-2 rounded-md bg-white text-black font-semibold shadow hover:bg-gray-200 transition'>
              Get Started
            </button>
            <button className='px-6 py-2 rounded-md bg-gray-800 text-white font-semibold border border-gray-700 hover:bg-gray-700 transition flex items-center gap-2'>
              View Documentation
              <span
                role='img'
                aria-label='document'
              >
                📄
              </span>
            </button>
          </div>
          {/* Trusted by */}
          <div className='flex flex-col gap-2'>
            <span className='text-xs text-gray-500'>Trusted by teams at:</span>
            <div className='flex gap-6 opacity-80'>
              <Image
                src='/images/logos/grainger.png'
                width={100}
                height={25}
                className=''
                alt='Grainger Logo'
              />
              <Image
                src='/images/logos/bac.png'
                width={50}
                height={50}
                className=''
                alt='Boone & Crockett Logo'
              />
              <div className='brightness-200'>
                <Image
                  src='/images/logos/nwm.png'
                  width={125}
                  height={50}
                  className=''
                  alt='Northwestern Mutual Logo'
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className='flex items-center justify-center'>
          {/* Abstract geometric background */}
          <div className='relative w-full max-w-[400px] aspect-square flex items-center justify-center'>
            {/* Dots background */}
            <div
              className='absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700'
              style={{
                backgroundImage:
                  'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }}
            />

            {/* Main photo */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <Image
                src='/images/home-page/hero-photo.jpg'
                alt='Hero'
                fill
                className='rounded-xl shadow-lg border-4 border-black object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Subtle grid background */}
      <div
        className='pointer-events-none absolute inset-0 z-0'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
    </section>
  );
}
