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

const FEATURED_SERVICES = [
  {
    icon: <PencilSquareIcon className='size-6 text-white' />,
    title: 'User Experience Design',
    description:
      "Great UX isn't just about how things look — it's about how easily people can use your product.",
    link: '/services#user-experience-design',
  },
  {
    icon: <Cog6ToothIcon className='size-6 text-white' />,
    title: 'Service Design',
    description:
      'Service Design looks beyond the screen — it maps and improves the full journey across people, systems, and touchpoints.',
    link: '/services#service-design',
  },
  {
    icon: <CommandLineIcon className='size-6 text-white' />,
    title: 'Web Development',
    description:
      "I build fast, modern websites tailored to your goals — whether that's selling products, generating leads, or just telling your story clearly.",
    link: '/services#development',
  },
];

interface FeaturedServicesProps {
  id?: string;
}

export function FeaturedServices({ id }: FeaturedServicesProps) {
  return (
    <section
      id={id}
      className='py-16'
    >
      <div className='max-w-4xl mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-8 text-white'>
          What Can I Do For You?
        </h2>
        <p className='text-muted-foreground mb-12 px-16 text-left'>
          I&rsquo;ve worn a lot of hats: designer, developer, photographer,
          producer, writer, tech support, strategist, builder, fixer. Every
          challenge I&rsquo;ve encountered has sharpened a different blade in my
          arsenal, and every project another tool to the belt. If you need
          something done — and done well — chances are I&rsquo;ve done it, or
          I&rsquo;ll learn it fast.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
          {FEATURED_SERVICES.map((service) => (
            <Card
              key={service.title}
              className='bg-zinc-900 border-zinc-800 text-left flex flex-col h-full'
            >
              <CardHeader className='flex flex-row items-center'>
                <span className='bg-zinc-800 p-2 rounded-lg'>
                  {service.icon}
                </span>
              </CardHeader>
              <CardContent className='flex-1'>
                <CardTitle className='text-lg text-white mb-4'>
                  {service.title}
                </CardTitle>
                <CardDescription className='text-muted-foreground'>
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant='link'
                  className='mt-auto w-full justify-end text-white'
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
      </div>
    </section>
  );
}
