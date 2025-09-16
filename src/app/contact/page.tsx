'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  details: string;
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setFormState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setFormState('success');
      reset();
    } catch (error) {
      setFormState('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred'
      );
    }
  };
  return (
    <TooltipProvider>
      <section className='w-full px-4 py-24 text-white'>
        <div className='max-w-2xl mx-auto text-center mb-12 space-y-2'>
          <h1 className='text-5xl font-bold mb-6'>Get in Touch</h1>
          <p className='text-muted-foreground px-12 text-left'>
            I&apos;m always happy to discuss new projects, creative ideas,
            or opportunities to be part of your vision. Looking forward to
            chatting!
          </p>
        </div>

        <div className='max-w-2xl mx-auto bg-zinc-950 border border-zinc-700 rounded-lg p-6 md:p-8 space-y-6'>
          {/* Success State */}
          {formState === 'success' && (
            <div className='bg-green-900/20 border border-green-700 rounded-lg p-6 text-center'>
              <div className='text-green-400 text-2xl mb-2'>✓</div>
              <h3 className='text-green-400 font-semibold mb-2'>
                Message Sent Successfully!
              </h3>
              <p className='text-green-300 text-sm'>
                Thank you for reaching out. I get back to most inquiries
                within 1-2 business days.
              </p>
            </div>
          )}

          {/* Error State */}
          {formState === 'error' && (
            <div className='bg-red-900/20 border border-red-700 rounded-lg p-6 text-center'>
              <div className='text-red-400 text-2xl mb-2'>✗</div>
              <h3 className='text-red-400 font-semibold mb-2'>
                Failed to Send Message
              </h3>
              <p className='text-red-300 text-sm mb-4'>
                {errorMessage ||
                  'An unexpected error occurred. Please try again.'}
              </p>
              <Button
                onClick={() => setFormState('idle')}
                variant='outline'
                className='border-red-700 text-red-400 hover:bg-red-900/20'
              >
                Try Again
              </Button>
            </div>
          )}

          {/* Form */}
          {formState !== 'success' && (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-6'
            >
              {/* Grid layout */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <Label
                    htmlFor='firstName'
                    className='mb-3'
                  >
                    First Name
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className='text-indigo-500'>*</span>
                      </TooltipTrigger>
                      <TooltipContent className='bg-black border border-zinc-700'>
                        <p>This field is required</p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <Input
                    id='firstName'
                    placeholder='Enter your first name'
                    className='bg-black'
                    {...register('firstName', {
                      required: 'First name is required',
                    })}
                  />
                  {errors.firstName && (
                    <p className='text-red-400 text-sm mt-1'>
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label
                    htmlFor='lastName'
                    className='mb-3'
                  >
                    Last Name
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className='text-indigo-500'>*</span>
                      </TooltipTrigger>
                      <TooltipContent className='bg-black border border-zinc-700'>
                        <p>This field is required</p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <Input
                    id='lastName'
                    placeholder='Enter your last name'
                    className='bg-black'
                    {...register('lastName', {
                      required: 'Last name is required',
                    })}
                  />
                  {errors.lastName && (
                    <p className='text-red-400 text-sm mt-1'>
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label
                    htmlFor='email'
                    className='mb-3'
                  >
                    Email
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className='text-indigo-500'>*</span>
                      </TooltipTrigger>
                      <TooltipContent className='bg-black border border-zinc-700'>
                        <p>This field is required</p>
                      </TooltipContent>
                    </Tooltip>
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='Enter your email'
                    className='bg-black'
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className='text-red-400 text-sm mt-1'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label
                    htmlFor='phone'
                    className='mb-3'
                  >
                    Phone Number
                  </Label>
                  <Input
                    id='phone'
                    type='tel'
                    placeholder='Enter your phone'
                    className='bg-black'
                    {...register('phone')}
                  />
                </div>
              </div>

              {/* Details */}
              <div>
                <Label
                  htmlFor='details'
                  className='mb-3'
                >
                  Details
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className='text-indigo-500'>*</span>
                    </TooltipTrigger>
                    <TooltipContent className='bg-black border border-zinc-700'>
                      <p>This field is required (minimum 50 characters)</p>
                    </TooltipContent>
                  </Tooltip>
                </Label>
                <Textarea
                  id='details'
                  placeholder='Tell me about your project'
                  rows={5}
                  className='bg-black min-h-32'
                  {...register('details', {
                    required: 'Project details are required',
                    minLength: {
                      value: 50,
                      message:
                        'Please provide at least 50 characters of detail',
                    },
                  })}
                />
                {errors.details && (
                  <p className='text-red-400 text-sm mt-1'>
                    {errors.details.message}
                  </p>
                )}
              </div>

              <Button
                type='submit'
                className='w-full'
                disabled={formState === 'submitting'}
              >
                {formState === 'submitting'
                  ? 'Sending...'
                  : 'Send inquiry'}
              </Button>

              <p className='text-center text-sm text-muted-foreground'>
                I get back to most inquiries within 1 - 2 business days.
              </p>
            </form>
          )}
        </div>
      </section>
    </TooltipProvider>
  );
}
