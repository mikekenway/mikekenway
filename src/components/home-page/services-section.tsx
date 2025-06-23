'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  Shield,
  Workflow,
  Users,
  Bot,
  Code2,
  SlidersHorizontal,
} from 'lucide-react';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ServicesAccordion() {
  return (
    <div className='max-w-3xl mx-auto text-white'>
      <h2 className='text-3xl font-bold text-center mb-2'>Services I Offer</h2>
      <p className='text-left text-muted-foreground mb-6 py-4'>
        From day one, I&apos;ve always said &quot;if I can&apos;t do it,
        I&apos;ll figure out how&quot; and that&apos;s set me on a path of
        continuous learning that I use to bring value to my clients each and
        every day. Here are some of the most common ways I can help you.
      </p>

      <Accordion
        type='single'
        defaultValue='analytics'
        className='w-full space-y-2'
      >
        {/* User Experience Design */}
        <AccordionItem value='analytics'>
          <AccordionTrigger>
            <div className='flex items-center gap-2'>
              <PencilSquareIcon className='size-6' />
              <span>User Experience Design</span>
              <Badge
                variant='secondary'
                className='ml-2'
              >
                Popular
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent
            className=''
            image='/images/home-page/ux.webp'
            imageAlt='Analytics dashboard showing charts and data visualization'
          >
            <p className='text-sm mb-3 text-muted-foreground'>
              Gain deep insights into your data with our comprehensive analytics
              suite.
            </p>
            <ul className='space-y-2 text-sm'>
              {[
                'Real-time reporting and dashboards',
                'Custom metrics and KPIs',
                'Data visualization tools',
                'Export capabilities',
                'Predictive analysis',
              ].map((feature) => (
                <li
                  key={feature}
                  className='flex items-center gap-2'
                >
                  <CheckCircleIcon className='size-4 text-zinc-400' />
                  {feature}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        {/* Enterprise Security */}
        <AccordionItem value='security'>
          <AccordionTrigger>
            <div className='flex items-center gap-2'>
              <Shield className='w-5 h-5' />
              <span>Enterprise Security</span>
            </div>
          </AccordionTrigger>
          <AccordionContent
            className='pl-8'
            image='/images/design.jpg'
            imageAlt='Security and protection concept'
          >
            <p className='text-sm text-muted-foreground'>
              Keep your data secure with our industry-leading security features.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Workflow Automation */}
        <AccordionItem value='automation'>
          <AccordionTrigger>
            <div className='flex items-center gap-2'>
              <Workflow className='w-5 h-5' />
              <span>Workflow Automation</span>
              <Badge
                variant='outline'
                className='ml-2 text-green-500 border-green-500'
              >
                New
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent
            className='pl-8'
            image='/images/home-page/hero-photo.jpg'
            imageAlt='Workflow automation and process optimization'
          >
            <p className='text-sm text-muted-foreground'>
              Automate repetitive tasks and streamline your business processes.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Team Collaboration */}
        <AccordionItem value='collaboration'>
          <AccordionTrigger>
            <div className='flex items-center gap-2'>
              <Users className='w-5 h-5' />
              <span>Team Collaboration</span>
            </div>
          </AccordionTrigger>
          <AccordionContent
            className='pl-8'
            image='/images/kenway.jpg'
            imageAlt='Team collaboration and communication'
          >
            <p className='text-sm text-muted-foreground'>
              Work together seamlessly with tools designed for modern teams.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* AI Assistant */}
        <AccordionItem value='ai'>
          <AccordionTrigger>
            <div className='flex items-center gap-2'>
              <Bot className='w-5 h-5' />
              <span>AI Assistant</span>
              <Badge className='ml-2 bg-yellow-500 text-black hover:bg-yellow-600'>
                Coming Soon
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent
            className='pl-8'
            image='/images/home-page/ux.webp'
            imageAlt='AI and machine learning technology'
          >
            <p className='text-sm text-muted-foreground'>
              Leverage artificial intelligence to boost productivity and gain
              insights.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Developer API */}
        <AccordionItem value='api'>
          <AccordionTrigger>
            <div className='flex items-center gap-2'>
              <Code2 className='w-5 h-5' />
              <span>Developer API</span>
            </div>
          </AccordionTrigger>
          <AccordionContent
            className='pl-8'
            image='/images/logo.png'
            imageAlt='Developer tools and API integration'
          >
            <p className='text-sm text-muted-foreground'>
              Build custom integrations and extend platform functionality.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Advanced Customization */}
        <AccordionItem value='customization'>
          <AccordionTrigger>
            <div className='flex items-center gap-2'>
              <SlidersHorizontal className='w-5 h-5' />
              <span>Advanced Customization</span>
            </div>
          </AccordionTrigger>
          <AccordionContent
            className='pl-8'
            image='/images/design.jpg'
            imageAlt='Customization and configuration options'
          >
            <p className='text-sm text-muted-foreground'>
              Tailor the platform to your specific needs with extensive
              customization options.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
