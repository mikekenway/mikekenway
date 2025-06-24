'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <section className='w-full px-4 py-24 text-white'>
      <div className='max-w-2xl mx-auto text-center mb-12 space-y-2'>
        <h1 className='text-5xl font-bold mb-6'>Get in Touch</h1>
        <p className='text-muted-foreground px-12 text-left'>
          I&apos;m always happy to discuss new projects, creative ideas, or
          opportunities to be part of your vision. Looking forward to chatting!
        </p>
      </div>

      <div className='max-w-2xl mx-auto bg-zinc-950 border border-zinc-700 rounded-lg p-6 md:p-8 space-y-6'>
        <h2 className='text-lg font-semibold'>Fill in the form</h2>

        <form className='space-y-6'>
          {/* Grid layout */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <Label htmlFor='firstName' className='mb-3'>First Name</Label>
              <Input
                id='firstName'
                placeholder='Enter your first name'
                className='bg-black'
              />
            </div>
            <div>
              <Label htmlFor='lastName' className='mb-3'>Last Name</Label>
              <Input
                id='lastName'
                placeholder='Enter your last name'
                className='bg-black'
              />
            </div>
            <div>
              <Label htmlFor='email' className='mb-3'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='Enter your email'
                className='bg-black'
              />
            </div>
            <div>
              <Label htmlFor='phone' className='mb-3'>Phone Number</Label>
              <Input
                id='phone'
                type='tel'
                placeholder='Enter your phone'
                className='bg-black'
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <Label htmlFor='details' className='mb-3'>Details</Label>
            <Textarea
              id='details'
              placeholder='Tell us about your project'
              rows={5}
              className='bg-black min-h-32'
            />
          </div>

          <Button
            type='submit'
            className='w-full'
          >
            Send inquiry
          </Button>

          <p className='text-center text-sm text-muted-foreground'>
            I&apos;ll get back to you in 1 - 2 business days.
          </p>
        </form>
      </div>
    </section>
  );
}
