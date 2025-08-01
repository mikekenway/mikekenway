'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  BrainCogIcon,
  CheckIcon,
  CircleUserIcon,
  NotebookTextIcon,
  SquarePenIcon,
  SquareTerminalIcon,
} from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
  id?: string;
}

export default function HeroSection({ id }: HeroSectionProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'About Me',
      description: `I've worn a lot of hats over the years, and every new challenge I've encountered has sharpened a different blade in my arsenal. If you need something done well, chances are I've done it, or I'll learn it fast.`,
      icon: <CircleUserIcon className='size-6' />,
    },
    {
      title: 'UX Design',
      description: `Great UX isn't just about how things look; it's about creating experiences that feel effortless and intuitive. I dive deep to understand what people actually need, then craft journeys that guide them naturally toward their goals.`,
      icon: <SquarePenIcon className='size-6' />,
    },
    {
      title: 'Service Design & Strategy',
      description: `Service Design looks beyond the screen. It aims to understand the full service across people, systems, and touchpoints. I help organizations see the bigger picture, identifying pain points and opportunities that others miss by designing services that work seamlessly behind the scenes and deliver real value.`,
      icon: <BrainCogIcon className='size-6' />,
    },
    {
      title: 'Development',
      description: `I build fast, modern websites tailored to your goals. Whether that's selling products, generating leads, or just telling your story, I use the latest technologies to create sites that perform beautifully across all devices.`,
      icon: <SquareTerminalIcon className='size-6' />,
    },
  ];

  return (
    <div
      className='relative overflow-hidden'
      id={id}
    >
      <div className='px-4 w-full md:px-6 2xl:max-w-[1200px] 2xl:mx-auto py-24 md:py-32'>
        {/* Heading Section */}
        <div className='mx-auto max-w-3xl text-center mb-6 md:mb-8'>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
            Hi! I&apos;m{' '}
            <span className='relative inline-flex text-primary'>Kenway</span>
          </h1>
        </div>

        {/* Description Section */}
        <div className='mx-auto max-w-3xl text-center mb-10 md:mb-16'>
          <p className='text-xl text-muted-foreground'>
            I&apos;m a designer and developer who loves helping people bring
            their ideas to life. Whether you need thoughtful design, clear
            strategy, or both, I&apos;m here to help shape projects that connect
            and make an impact.
          </p>
        </div>

        {/* CTA Buttons Section - Desktop only: completely separate at top */}
        <div className='hidden lg:block w-full mb-6 lg:mb-10'>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Button
              size='lg'
              asChild
            >
              <Link href='/contact'>
                Get in Touch <ArrowRight className='ml-2 size-4' />
              </Link>
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='bg-zinc-950'
              asChild
            >
              <Link href='/contact'>
                View Resume <NotebookTextIcon className='ml-2 size-4' />
              </Link>
            </Button>
          </div>
        </div>

        {/* Main flex container for hero content - animated table and image side by side */}
        <div className='flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-8'>
          {/* Photo container - order-1 on mobile, right side on desktop */}
          <div className='order-1 lg:order-2 w-full lg:w-1/3 lg:flex-shrink-0'>
            <div className='relative w-full aspect-square lg:h-full'>
              <div className='w-full h-full rounded-xl bg-zinc-900 flex items-center justify-center border'>
                <Image
                  className='w-full h-full object-cover rounded-xl'
                  src='/images/home-page/hero-photo.png'
                  alt='photo of mike kenway'
                  fill
                  priority
                />
              </div>
            </div>
          </div>

          {/* CTA Buttons Section - Mobile only: order-2 */}
          <div className='order-2 lg:hidden w-full'>
            <div className='flex flex-col sm:flex-row justify-center gap-4 mb-6'>
              <Button
                size='lg'
                asChild
              >
                <Link href='/contact'>
                  Get in Touch <ArrowRight className='ml-2 size-4' />
                </Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='bg-zinc-950'
                asChild
              >
                <Link href='/contact'>
                  View Resume <NotebookTextIcon className='ml-2 size-4' />
                </Link>
              </Button>
            </div>
          </div>

          {/* Interactive content container - order-3 on mobile, left side on desktop */}
          <div className='order-3 lg:order-1 w-full lg:w-2/3 flex flex-col'>
            {/* Animated Table Section */}
            <div className='flex flex-col h-full'>
              <div className='rounded-xl border border-zinc-300 bg-zinc-900 p-1'>
                <div className='grid grid-cols-4 gap-1'>
                  {features.map((feature, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`flex flex-col items-center justify-center rounded-lg p-3 text-center transition-colors hover:bg-zinc-600 ${
                        activeFeature === index
                          ? 'bg-primary text-primary-foreground hover:bg-primary'
                          : ''
                      }`}
                    >
                      <div className='mb-2'>{feature.icon}</div>
                      <div className='text-xs font-medium'>
                        {feature.title.split(' ')[0]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className='mt-6 rounded-xl border p-6 flex-grow flex flex-col'>
                <div className='flex items-center gap-4'>
                  <div>
                    <h3 className='font-medium'>
                      {features[activeFeature].title}
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      {features[activeFeature].description}
                    </p>
                  </div>
                </div>

                <div className='mt-4 space-y-4 flex-grow'>
                  <div className='flex items-center gap-2'>
                    <CheckIcon className='size-6 text-primary' />
                    <span className='text-sm'>
                      {activeFeature === 0
                        ? '10+ Years Experience'
                        : activeFeature === 1
                          ? 'Faster Task Completion'
                          : activeFeature === 2
                            ? 'Better alignment between business goals and user needs'
                            : 'Role-based access controls'}
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckIcon className='size-6 text-primary' />
                    <span className='text-sm'>
                      {activeFeature === 0
                        ? 'Experience in both Production and Management'
                        : activeFeature === 1
                          ? 'Reduced Support Requests'
                          : activeFeature === 2
                            ? 'More scalable service delivery'
                            : 'Data encryption at rest and in transit'}
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckIcon className='size-6 text-primary' />
                    <span className='text-sm'>
                      {activeFeature === 0
                        ? 'Focus on Mentorship and Education'
                        : activeFeature === 1
                          ? 'Foundational Product Support'
                          : activeFeature === 2
                            ? 'Better alignment between business goals and user needs'
                            : 'Integrations with Shopify, Klaviyo, and more'}
                    </span>
                  </div>
                </div>

                <div className='mt-6 pt-6 border-t'>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='gap-1'
                    asChild
                  >
                    <Link href='/services#'>
                      Learn More
                      {/* {features[activeFeature].title.toLowerCase()} */}
                      <ArrowRight className='h-3 w-3' />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent'></div>
    </div>
  );
}
