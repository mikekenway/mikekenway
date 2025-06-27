'use client';

import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, TimerIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type CaseStudyProps = {
  value: string;
  title: string;
  summary: string;
  duration: string;
  year: string;
  challenge: string;
  process: string;
  solution: string;
  results: string[];
  testimonial: {
    quote: string;
    author: string;
  };
  image: {
    src: string;
    alt: string;
  };
  tools: string[];
  caseStudyLink: string;
};

export function CaseStudyAccordionItem({
  value,
  title,
  summary,
  duration,
  year,
  challenge,
  process,
  solution,
  results,
  testimonial,
  image,
  tools,
  caseStudyLink,
}: CaseStudyProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between w-full text-left gap-2'>
          <div className='flex flex-col'>
            <span className='text-base font-medium text-white'>{title}</span>
            <span className='text-sm text-muted-foreground'>{summary}</span>
          </div>
          <div className='flex items-center gap-4 text-sm text-muted-foreground mt-2 md:mt-0'>
            <div className='flex items-center gap-1'>
              <TimerIcon className='size-6' />
              {duration}
            </div>
            <div className='flex items-center gap-1'>
              <CalendarIcon className='size-5' />
              {year}
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className='grid md:grid-cols-3 gap-6 pt-4'>
          {/* Left Column */}
          <div className='md:col-span-2 space-y-6'>
            <div>
              <h3 className='font-semibold text-white mb-1'>The Challenge</h3>
              <p className='text-sm text-muted-foreground'>{challenge}</p>
            </div>
            <div>
              <h3 className='font-semibold text-white mb-1'>The Process</h3>
              <p className='text-sm text-muted-foreground'>{process}</p>
            </div>
            <div>
              <h3 className='font-semibold text-white mb-1'>The Solution</h3>
              <p className='text-sm text-muted-foreground'>{solution}</p>
            </div>
            <div>
              <h3 className='font-semibold text-white mb-2'>Key Results</h3>
              <ul className='text-sm text-muted-foreground space-y-2 list-decimal list-inside'>
                {results.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className='bg-zinc-800 p-4 rounded-md border border-zinc-700'>
              <p className='text-sm italic text-white mb-2'>{testimonial.quote}</p>
              <p className='text-sm text-muted-foreground'>— {testimonial.author}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className='space-y-4'>
            <div className='relative w-full h-64 rounded-lg overflow-hidden'>
              <Image src={image.src} alt={image.alt} fill className='object-cover' />
            </div>
            <div>
              <h4 className='font-semibold text-white mb-3'>Tools & Technologies</h4>
              <div className='flex flex-wrap gap-2 mb-8'>
                {tools.map((tool, i) => (
                  <Badge
                    key={i}
                    variant='outline'
                    className='bg-zinc-900 border-white text-muted-foreground'
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            <Button variant='secondary' className='w-full'>
              <Link href={caseStudyLink}>View Full Case Study →</Link>
            </Button>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
