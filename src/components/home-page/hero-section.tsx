import {
  Cog6ToothIcon,
  CommandLineIcon,
  DocumentTextIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-16 relative z-10">
        {/* Left Side */}
        <div className="flex flex-col items-start gap-6 max-w-xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-2">
            Hi! I&rsquo;m
            <br />
            <span className='text-7xl text-indigo-500'>Kenway</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-gray-300 mb-4">
            I&rsquo;m a designer and developer who loves helping people bring
            their ideas to life. Whether you need thoughtful design, clear
            strategy, or both, I&rsquo;m here to help shape projects that
            connect and make an impact.
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-gray-200 text-base">
              <PencilSquareIcon className="size-6" />
              User Experience Design
            </li>
            <li className="flex items-center gap-2 text-gray-200 text-base">
              <Cog6ToothIcon className="size-6" />
              Service Design & Strategy
            </li>
            <li className="flex items-center gap-2 text-gray-200 text-base">
              <CommandLineIcon className="size-6" />
              Full Stack Development (Next.js)
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="px-6 py-2 rounded-md bg-white text-black font-semibold shadow hover:bg-gray-200 transition">
              Get in Touch
            </button>
            <button className="px-6 py-2 rounded-md bg-gray-800 text-white font-semibold border border-gray-700 hover:bg-gray-700 transition flex items-center gap-2">
              View Resume
              <DocumentTextIcon className="size-6" />
            </button>
          </div>

          {/* Trusted by */}
          <div className="flex flex-col gap-2">
            <span className="text-xs text-gray-500">Trusted by teams at:</span>
            <div className="flex gap-2 opacity-80">
              {[
                {
                  src: '/images/logos/grainger.png',
                  alt: 'Grainger Logo',
                },
                {
                  src: '/images/logos/nwm.png',
                  alt: 'Northwestern Mutual Logo',
                },
                {
                  src: '/images/logos/caris.png',
                  alt: 'Caris Life Sciences Logo',
                },
                {
                  src: '/images/logos/bac.png',
                  alt: 'Boone & Crockett Logo',
                },
              ].map((logo) => (
                <div key={logo.alt} className="h-12 flex items-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={48}
                    className="h-12 w-auto object-contain px-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center ">
            <Image
              src="/images/home-page/hero-photo.png"
              alt="Hero"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
