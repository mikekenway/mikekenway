'use client';

import { Cog6ToothIcon, PencilSquareIcon } from '@heroicons/react/24/solid';
import { CommandLineIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// --- Services Highlight Section (for Home Page) ---
const HIGHLIGHT_SERVICES = [
  {
    icon: <PencilSquareIcon className='size-6' />, // User Experience Design
    title: 'User Experience Design',
    description:
      "Great UX isn't just about how things look — it's about how easily people can use your product. I focus on clarity, speed, and simplicity to create interfaces that reduce friction, boost engagement, and build long-term trust.",
    link: '/services#analytics',
  },
  {
    icon: <Cog6ToothIcon className='size-6' />, // Service Design
    title: 'Service Design',
    description:
      'Service Design looks beyond the screen — it maps and improves the full journey across people, systems, and touchpoints. I identify friction, uncover gaps, and design processes that make every interaction feel intentional and seamless.',
    link: '/services#service-design',
  },
  {
    icon: <CommandLineIcon className='size-6' />, // Web Development
    title: 'Web Development',
    description:
      "I build fast, modern websites tailored to your goals — whether that's selling products, generating leads, or just telling your story clearly. From strategy to launch, I handle the design, development, and integrations that help your business run smarter.",
    link: '/services#development',
  },
];

export function ServicesHighlightSection() {
  return (
    <section className='py-16'>
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-2 text-white'>
          Features that set us apart
        </h2>
        <p className='text-muted-foreground mb-10'>
          Everything you need to build modern applications at scale. Built for
          developers, designed for growth.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
          {HIGHLIGHT_SERVICES.map((service) => (
            <Card
              key={service.title}
              className='bg-zinc-900 border-zinc-800 text-left flex flex-col h-full'
            >
              <CardHeader className='flex flex-row items-center gap-2 mb-2'>
                <span className='bg-zinc-800 p-2 rounded-lg'>
                  {service.icon}
                </span>
              </CardHeader>
              <CardContent className='flex-1'>
                <CardTitle className='text-lg text-white mb-2'>
                  {service.title}
                </CardTitle>
                <CardDescription className='mb-4 text-muted-foreground'>
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant='secondary'
                  className='mt-auto w-full justify-center'
                >
                  <Link
                    href={service.link}
                    className='flex items-center gap-1'
                  >
                    Learn more <ArrowRightIcon className='size-4' />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Button
          asChild
          size='lg'
          className='inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg shadow'
        >
          <Link href='/services'>
            Get Started Now <ArrowRightIcon className='size-4' />
          </Link>
        </Button>
      </div>
    </section>
  );
}
