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
import Link from 'next/link';

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
                    Multi-brand eCommerce redesign and operations cleanup
                  </span>
                  <span className='text-sm text-muted-foreground'>
                    A full eCommerce redesign and operations cleanup for a
                    multi-brand eCommerce store.
                  </span>
                </div>
                <div className='flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0'>
                  <div className='flex items-center gap-1'>
                    <TimerIcon className='size-6' />6 months
                  </div>
                  <div className='flex items-center gap-1'>
                    <CalendarIcon className='size-5' />
                    2021
                  </div>
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
                      Outdated systems, scattered admin tools, and a poor online
                      experience made ordering confusing for customers and
                      exhausting for staff.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-white mb-1'>
                      The Process
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      Consolidated all brands into one Shopify backend, synced
                      with ERP, and replaced paper-based workflows with digital
                      ones.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-white mb-1'>
                      The Solution
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      A unified storefront with brand selector, account tools,
                      real-time inventory, and staff-friendly editing access.
                    </p>
                  </div>

                  <div>
                    <h3 className='font-semibold text-white mb-2'>
                      Key Results
                    </h3>
                    <ul className='text-sm text-muted-foreground space-y-2 list-decimal list-inside'>
                      <li>
                        Adminstrative paperwork and order processing process
                        reduced by 50%
                      </li>
                      <li>
                        Significant decrease in staff&apos;s average time spent
                        on phone
                      </li>
                      <li>
                        Matched previous quarter email sales in First Week
                      </li>
                      <li>
                        Increase in imprint brand sales from increased brand
                        awareness
                      </li>
                    </ul>
                  </div>

                  <div className='bg-zinc-800 p-4 rounded-md border border-zinc-700'>
                    <p className='text-sm italic text-white mb-2'>
                      Before the overhaul, we were constantly playing catch-up.
                      Now everything just works. Customers find what they need,
                      and we can focus on growing the business instead of
                      shuffling order paperwork around the office.
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      — Stacey Spencer, Controller
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className='space-y-4'>
                  <div className='relative w-full h-64 rounded-lg overflow-hidden'>
                    <Image
                      src='/images/case-study/marshall-home/marshall-cover.png'
                      alt='Platform redesign case study preview'
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <h4 className='font-semibold text-white mb-3'>
                      Tools & Technologies
                    </h4>
                    <div className='flex flex-wrap gap-2 mb-8'>
                      <Badge
                        variant='outline'
                        className='bg-zinc-900 border-white text-emerald-400'
                      >
                        Shopify Plus
                      </Badge>
                      <Badge
                        variant='outline'
                        className='bg-zinc-900 border-rose-400 text-white-500'
                      >
                        Klaviyo
                      </Badge>
                      <Badge
                        variant='outline'
                        className='bg-zinc-900 border-red-700 text-zinc-300'
                      >
                        eBridge
                      </Badge>
                      <Badge
                        variant='outline'
                        className='bg-zinc-900 border-emerald-00 text-blue-300'
                      >
                        Photoshop
                      </Badge>
                      <Badge
                        variant='outline'
                        className='bg-zinc-900 border-blue-700 text-blue-200'
                      >
                        Liquid
                      </Badge>
                      <Badge
                        variant='outline'
                        className='bg-zinc-900 border-yellow-400 text-yellow-300'
                      >
                        JavaScript
                      </Badge>
                      <Badge
                        variant='outline'
                        className='bg-zinc-900 border-emerald-700 text-emerald-500'
                      >
                        SAGE 100
                      </Badge>
                    </div>
                  </div>
                    <Button
                      variant='secondary'
                      className='w-full'
                    >
                      <Link href='/case-study/marshall-home'>
                        View Full Case Study →
                      </Link>
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
                      src='/images/case-study/marshall-home/marshall-cover.png'
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
