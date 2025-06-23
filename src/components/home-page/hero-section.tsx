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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6'
              >
                <path d='M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z' />
                <path d='M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z' />
              </svg>
              User Experience Design
            </li>
            <li className='flex items-center gap-2 text-gray-200 text-base'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6'
              >
                <path
                  fillRule='evenodd'
                  d='M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z'
                  clipRule='evenodd'
                />
              </svg>
              Service Design && Strategy
            </li>
            <li className='flex items-center gap-2 text-gray-200 text-base'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6'
              >
                <path
                  fillRule='evenodd'
                  d='M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z'
                  clipRule='evenodd'
                />
              </svg>
              Full Stack Development (Next.js)
            </li>
            <li className='flex items-center gap-2 text-gray-200 text-base'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6'
              >
                <path
                  fillRule='evenodd'
                  d='M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z'
                  clipRule='evenodd'
                />
              </svg>
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
                src='/images/hero-photo.jpg'
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
