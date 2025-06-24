'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, TimerIcon } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <div className='px-4 py-12 md:py-20'>
      <div className='max-w-4xl mx-auto space-y-8'>
        {/* Header Block */}
        <div className='text-center space-y-2'>
          <h1 className='text-6xl font-bold text-white mb-8'>Case Studies</h1>
          <p className='px-24 mb-12 text-muted-foreground text-sm text-left md:text-base'>
            Each of these case studies represents a focused, collaborative
            engagement. I work closely with teams to create stable, scalable
            solutions that improve performance, reduce friction, and support
            business goals.
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type='single'
          collapsible
          className='w-full space-y-4'
        >
          {/* Case Study #1 */}
          <AccordionItem value='case-study-1'>
            <AccordionTrigger>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between w-full text-left gap-2'>
                <div className='flex flex-col'>
                  <span className='text-base font-medium text-white'>
                    Platform Redesign & Design System Development
                  </span>
                  <span className='text-sm text-muted-foreground'>
                    A full dashboard overhaul to improve UX and increase product
                    adoption.
                  </span>
                </div>
                <div className='flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0'>
                  <div className='flex items-center gap-1'>
                    <TimerIcon className='w-4 h-4' />
                    <span>10 weeks</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <CalendarIcon className='w-4 h-4' />
                    <span>2024</span>
                  </div>
                  <Badge variant='secondary'>UX/UI Design</Badge>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className='grid md:grid-cols-3 gap-6 pt-4'>
                {/* Left Column */}
                <div className='md:col-span-2 space-y-6'>
                  <div>
                    <h3 className='font-semibold text-white mb-1'>
                      The Challenge
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      The original dashboard was outdated, cluttered, and
                      difficult to navigate, especially for non-technical users.
                      This led to low feature adoption, frequent support
                      requests, and user frustration.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-white mb-1'>
                      The Process
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      I conducted stakeholder interviews, ran usability tests,
                      and mapped the full customer journey. Using this data, I
                      created wireframes, prototypes, and visual designs that
                      were refined over several feedback loops.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-white mb-1'>
                      The Solution
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      The final product delivers a clean, role-based interface
                      with simplified navigation, contextual onboarding, and
                      smart defaults. Time-on-task dropped, and user
                      satisfaction soared.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-white mb-2'>
                      Key Results
                    </h3>
                    <ul className='text-sm text-muted-foreground space-y-2 list-decimal list-inside'>
                      <li>38% increase in feature adoption within 60 days</li>
                      <li>72% drop in support tickets for dashboard usage</li>
                      <li>NPS score rose from 6.1 to 8.9</li>
                      <li>25% faster onboarding for new users</li>
                    </ul>
                  </div>

                  <div className='bg-zinc-800 p-4 rounded-md border border-zinc-700'>
                    <p className='text-sm italic text-white mb-2'>
                      &quot;The redesign completely changed how our clients
                      interact with the product. It feels modern, intuitive, and
                      polished — and the results speak for themselves.&quot;
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      — Jamie Lee, Product Manager
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className='space-y-4'>
                  <div className='relative w-full h-64 rounded-lg overflow-hidden'>
                    <Image
                      src='https://dummyimage.com/400x256/374151/ffffff&text=Platform+Redesign'
                      alt='Platform redesign case study preview'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <h4 className='font-semibold text-white mb-2'>
                      Tools & Technologies
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      <Badge variant='outline'>Figma</Badge>
                      <Badge variant='outline'>Hotjar</Badge>
                      <Badge variant='outline'>Notion</Badge>
                      <Badge variant='outline'>UserTesting</Badge>
                    </div>
                  </div>
                  <Button
                    variant='secondary'
                    className='w-full'
                  >
                    View Full Case Study →
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Case Study #2 */}
          <AccordionItem value='case-study-2'>
            <AccordionTrigger>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between w-full text-left gap-2'>
                <div className='flex flex-col'>
                  <span className='text-base font-medium text-white'>
                    B2B Customer Experience Overhaul
                  </span>
                  <span className='text-sm text-muted-foreground'>
                    A full dashboard overhaul to improve UX and increase product
                    adoption.
                  </span>
                </div>
                <div className='flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0'>
                  <div className='flex items-center gap-1'>
                    <TimerIcon className='w-4 h-4' />
                    <span>10 weeks</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <CalendarIcon className='w-4 h-4' />
                    <span>2024</span>
                  </div>
                  <Badge variant='secondary'>UX/UI Design</Badge>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className='grid md:grid-cols-3 gap-6 pt-4'>
                {/* Left Column */}
                <div className='md:col-span-2 space-y-6'>
                  <div>
                    <h3 className='font-semibold text-white mb-1'>
                      The Challenge
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      The original dashboard was outdated, cluttered, and
                      difficult to navigate, especially for non-technical users.
                      This led to low feature adoption, frequent support
                      requests, and user frustration.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-white mb-1'>
                      The Process
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      I conducted stakeholder interviews, ran usability tests,
                      and mapped the full customer journey. Using this data, I
                      created wireframes, prototypes, and visual designs that
                      were refined over several feedback loops.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-white mb-1'>
                      The Solution
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      The final product delivers a clean, role-based interface
                      with simplified navigation, contextual onboarding, and
                      smart defaults. Time-on-task dropped, and user
                      satisfaction soared.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-white mb-2'>
                      Key Results
                    </h3>
                    <ul className='text-sm text-muted-foreground space-y-2 list-decimal list-inside'>
                      <li>38% increase in feature adoption within 60 days</li>
                      <li>72% drop in support tickets for dashboard usage</li>
                      <li>NPS score rose from 6.1 to 8.9</li>
                      <li>25% faster onboarding for new users</li>
                    </ul>
                  </div>

                  <div className='bg-zinc-800 p-4 rounded-md border border-zinc-700'>
                    <p className='text-sm italic text-white mb-2'>
                      &quot;The redesign completely changed how our clients
                      interact with the product. It feels modern, intuitive, and
                      polished — and the results speak for themselves.&quot;
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      — Jamie Lee, Product Manager
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className='space-y-4'>
                  <div className='relative w-full h-64 rounded-lg overflow-hidden'>
                    <Image
                      src='https://dummyimage.com/400x256/374151/ffffff&text=B2B+Customer+Experience'
                      alt='B2B customer experience case study preview'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <h4 className='font-semibold text-white mb-2'>
                      Tools & Technologies
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      <Badge variant='outline'>Figma</Badge>
                      <Badge variant='outline'>Hotjar</Badge>
                      <Badge variant='outline'>Notion</Badge>
                      <Badge variant='outline'>UserTesting</Badge>
                    </div>
                  </div>
                  <Button
                    variant='secondary'
                    className='w-full'
                  >
                    View Full Case Study →
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Case Study #3 */}
          <AccordionItem value='case-study-3'>
            <AccordionTrigger>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between w-full text-left gap-2'>
                <div className='flex flex-col'>
                  <span className='text-base font-medium text-white'>
                    E-Commerce Platform Migration & Redesign
                  </span>
                  <span className='text-sm text-muted-foreground'>
                    A full dashboard overhaul to improve UX and increase product
                    adoption.
                  </span>
                </div>
                <div className='flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0'>
                  <div className='flex items-center gap-1'>
                    <TimerIcon className='w-4 h-4' />
                    <span>10 weeks</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <CalendarIcon className='w-4 h-4' />
                    <span>2024</span>
                  </div>
                  <Badge variant='secondary'>UX/UI Design</Badge>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className='grid md:grid-cols-3 gap-6 pt-4'>
                {/* Left Column */}
                <div className='md:col-span-2 space-y-6'>
                  <div>
                    <h3 className='font-semibold text-white mb-1'>
                      The Challenge
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      The original dashboard was outdated, cluttered, and
                      difficult to navigate, especially for non-technical users.
                      This led to low feature adoption, frequent support
                      requests, and user frustration.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-white mb-1'>
                      The Process
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      I conducted stakeholder interviews, ran usability tests,
                      and mapped the full customer journey. Using this data, I
                      created wireframes, prototypes, and visual designs that
                      were refined over several feedback loops.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-white mb-1'>
                      The Solution
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      The final product delivers a clean, role-based interface
                      with simplified navigation, contextual onboarding, and
                      smart defaults. Time-on-task dropped, and user
                      satisfaction soared.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-white mb-2'>
                      Key Results
                    </h3>
                    <ul className='text-sm text-muted-foreground space-y-2 list-decimal list-inside'>
                      <li>38% increase in feature adoption within 60 days</li>
                      <li>72% drop in support tickets for dashboard usage</li>
                      <li>NPS score rose from 6.1 to 8.9</li>
                      <li>25% faster onboarding for new users</li>
                    </ul>
                  </div>

                  <div className='bg-zinc-800 p-4 rounded-md border border-zinc-700'>
                    <p className='text-sm italic text-white mb-2'>
                      &quot;The redesign completely changed how our clients
                      interact with the product. It feels modern, intuitive, and
                      polished — and the results speak for themselves.&quot;
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      — Jamie Lee, Product Manager
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className='space-y-4'>
                  <div className='relative w-full h-64 rounded-lg overflow-hidden'>
                    <Image
                      src='https://dummyimage.com/400x256/374151/ffffff&text=E-Commerce+Platform'
                      alt='E-commerce platform case study preview'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <h4 className='font-semibold text-white mb-2'>
                      Tools & Technologies
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      <Badge variant='outline'>Figma</Badge>
                      <Badge variant='outline'>Hotjar</Badge>
                      <Badge variant='outline'>Notion</Badge>
                      <Badge variant='outline'>UserTesting</Badge>
                    </div>
                  </div>
                  <Button
                    variant='secondary'
                    className='w-full'
                  >
                    View Full Case Study →
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
