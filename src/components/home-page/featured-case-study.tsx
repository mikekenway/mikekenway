'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function FeaturedCaseStudy() {
  return (
    <section className='w-full bg-black px-4 py-12 md:py-48'>
      <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center'>
        {/* Image */}
        <div className='relative w-full h-80 md:h-[420px] rounded-xl overflow-hidden'>
          <Image
            src='https://dummyimage.com/600x800/2a2a2a/ffffff&text=Placeholder'
            alt='Featured client'
            fill
            className='object-cover'
          />
        </div>

        {/* Testimonial Block */}
        <div className='space-y-4'>
          <p className='text-sm uppercase text-muted-foreground tracking-wide'>
            Featured Client
          </p>
          <blockquote className='text-lg mb-6 md:text-xl font-medium text-white leading-relaxed'>
            “Working with mike is always a pleasure. He is prompt, organized,
            and best of all for the sake of work he&apos;s in, he&apos;s
            innovative. Mike has helped me take one of my clients and increase
            their annual revenue by 5X from the previous year thanks to his
            knowledge in Shopify, Klaviyo, and more. While there are many people
            I have worked with, I always bring my web / eCommerce related work
            to Mike first and I suggest you to do the same.”
          </blockquote>
          <div>
            <p className='font-semibold text-white'>Oliver Kamyszew</p>
            <p className='text-sm text-muted-foreground mb-6'>
              Artist Relations · FM Music Group
            </p>
          </div>
          <Button variant='secondary'>
            Read the Case Study <ArrowRightIcon className='size-4' />
          </Button>
        </div>
      </div>
    </section>
  );
}
