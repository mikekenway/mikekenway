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

export default function HeroSection() {
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
    <div className='relative overflow-hidden'>
      <div className='container mx-auto px-4 md:px-6 2xl:max-w-[1200px] py-24 md:py-32'>
        <div className='mx-auto max-w-3xl text-center mb-10 md:mb-16'>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
            Hi! I&apos;m{' '}
            <span className='relative inline-flex text-primary'>Kenway</span>
          </h1>
          <p className='mt-6 text-xl text-muted-foreground'>
            I&apos;m a designer and developer who loves helping people bring
            their ideas to life. Whether you need thoughtful design, clear
            strategy, or both, I&apos;m here to help shape projects that connect
            and make an impact.
          </p>
          <div className='mt-10 flex flex-col mb-10 sm:flex-row justify-center gap-4'>
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

        {/* Left side animated tabs */}
        <div className='grid gap-2 lg:grid-cols-[1fr_500px] items-center'>
          <div className='order-2 lg:order-1'>
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

            <div className='mt-6 rounded-xl border p-6'>
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

              <div className='mt-4 space-y-4'>
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

          {/* Right Side */}
          <div className='order-1 lg:order-2 flex justify-center'>
            <div className='relative w-full max-w-md aspect-square mb-12'>
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
        </div>
      </div>

      {/* Background decoration */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent'></div>
    </div>
  );
}
