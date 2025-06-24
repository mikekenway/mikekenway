'use client';

import { MailIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <section className='w-full bg-black px-4 py-24 mb-24 text-center'>
      <div className='max-w-2xl mx-auto space-y-6'>
        <h2 className='text-2xl md:text-3xl font-bold text-white'>
          Ready to start a conversation?
        </h2>
        <p className='text-muted-foreground text-sm md:text-base'>
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <Button
          variant='secondary'
          className='inline-flex items-center gap-2'
          asChild
        >
          <a href='/contact'>
            <MailIcon className='w-4 h-4' />
            Contact Me
          </a>
        </Button>

        <p className='text-sm text-muted-foreground'>
          You can also reach me at{' '}
          <a
            href='mailto:mike@mikekenway.com'
            className='font-medium text-zinc-300 ml-1 hover:underline'
          >
            mike [at] mikekenway [dot] com
          </a>
        </p>
      </div>
    </section>
  );
}
