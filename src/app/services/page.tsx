'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  CameraIcon,
  Cog6ToothIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid';
import { CheckCircleIcon, ServerStackIcon } from '@heroicons/react/24/solid';
import { CommandLineIcon } from '@heroicons/react/24/solid';
import { SwatchIcon } from '@heroicons/react/24/solid';
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { FaShopify } from 'react-icons/fa';
import { IoTelescopeSharp } from 'react-icons/io5';

export default function ServicesPage() {
  return (
    <main className='min-h-screen py-12 px-4 flex flex-col items-center '>
      <h1 className='text-4xl font-bold mb-4 text-white text-center'>
        All Services
      </h1>
      <p className='text-lg text-muted-foreground p-4 mb-8 max-w-2xl text-left'>
        From day one, I&apos;ve always said &quot;if I can&apos;t do it,
        I&apos;ll figure out how&quot; and that&apos;s set me on a path of
        continuous learning that I use to bring value to my clients each and
        every day. Here are some of the most common ways I can help you.
      </p>
      <div className='w-full max-w-3xl'>
        <div className='max-w-3xl mx-auto text-white'>
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
                </div>
              </AccordionTrigger>
              <AccordionContent
                image='/images/services/ux-design.webp'
                imageAlt='Analytics dashboard showing charts and data visualization'
              >
                <p className='text-sm mb-4 text-muted-foreground'>
                  Great UX isn&apos;t just about how things look — it&apos;s
                  about how easily people can use your product. I focus on
                  clarity, speed, and simplicity to create interfaces that
                  reduce friction, boost engagement, and build long-term trust.
                </p>
                <ul className='space-y-2 text-sm'>
                  {[
                    'Faster Task Completion',
                    'Fewer Support Requests',
                    'Increased Customer Loyalty',
                    'Stronger Brand Trust',
                    'Foundational Support for your Product',
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

            {/* Service Design */}
            <AccordionItem value='service-design'>
              <AccordionTrigger>
                <div className='flex items-center gap-2'>
                  <Cog6ToothIcon className='size-6' />
                  <span>Service Design</span>
                </div>
              </AccordionTrigger>
              <AccordionContent
                image='/images/services/service-design.webp'
                imageAlt='Service design process illustration'
              >
                <p className='text-sm mb-4 text-muted-foreground'>
                  Service Design looks beyond the screen — it maps and improves
                  the full journey across people, systems, and touchpoints. I
                  identify friction, uncover gaps, and design processes that
                  make every interaction feel intentional and seamless. I&apos;m
                  a big fan of the &quot;human-centered design&quot; approach,
                  which means I always start with the user and work backwards to
                  the solution.
                </p>
                <ul className='space-y-2 text-sm'>
                  {[
                    'Seamless experiences across every touchpoint',
                    'Operational clarity for teams and systems',
                    'Fewer gaps in the customer journey',
                    'More scalable service delivery',
                    'Better alignment between business goals and user needs',
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

            {/* Web Development */}
            <AccordionItem value='development'>
              <AccordionTrigger>
                <div className='flex items-center gap-2'>
                  <CommandLineIcon className='size-6' />
                  <span>Web Development</span>
                </div>
              </AccordionTrigger>
              <AccordionContent
                image='/images/services/web-development.webp'
                imageAlt='Workflow automation and process optimization'
              >
                <p className='text-sm mb-4 text-muted-foreground'>
                  I build fast, modern websites tailored to your goals — whether
                  that&apos;s selling products, generating leads, or just
                  telling your story clearly. From strategy to launch, I handle
                  the design, development, and integrations that help your
                  business run smarter.
                </p>
                <ul className='space-y-2 text-sm'>
                  {[
                    'Custom-built sites for brands, stores, and creators',
                    'Responsive layouts that look great on any device',
                    'SEO-ready foundations and fast load times',
                    'Easy-to-edit content and long-term maintainability',
                    'Integrations with Shopify, Klaviyo, and more',
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

            {/* Shopify Partner */}
            <AccordionItem value='shopify'>
              <AccordionTrigger>
                <div className='flex items-center gap-2'>
                  <FaShopify className='size-6' />
                  <span>Shopify Partner</span>
                </div>
              </AccordionTrigger>
              <AccordionContent
                image='/images/services/shopify-partner.webp'
                imageAlt='Team collaboration and communication'
              >
                <p className='text-sm mb-4 text-muted-foreground'>
                  As a long-time Shopify Partner, I&apos;ve helped countless
                  brands launch, scale, and fine-tune their stores — including
                  my own. I know the platform inside and out, and I bring that
                  hands-on experience to every client I work with.
                </p>
                <ul className='space-y-2 text-sm'>
                  {[
                    'Years of experience as a verified Shopify Partner',
                    'End-to-end store builds, redesigns, and migrations',
                    'Deep knowledge of Shopify themes, Liquid, and metafields',
                    'Work with a theme or build headless from scratch',
                    'Direct Experience from daily hands-on management of my own Shopify storefront',
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

            {/* Klaviyo Partner */}
            <AccordionItem value='klaviyo'>
              <AccordionTrigger>
                <div className='flex items-center gap-2'>
                  <Image
                    src='/images/services/klaviyo-icon.webp'
                    alt='Klaviyo logo'
                    width={24}
                    height={24}
                  />
                  <span>Klaviyo Partner</span>
                </div>
              </AccordionTrigger>
              <AccordionContent
                image='/images/services/klaviyo-partner.webp'
                imageAlt='Team collaboration and communication'
              >
                <p className='text-sm mb-4 text-muted-foreground'>
                  As a Klaviyo Partner, I design and build email flows that
                  connect with your audience, drive revenue, and scale with your
                  brand. From technical setup to campaign strategy, I&apos;ll
                  help you get the most out of every send.
                </p>
                <ul className='space-y-2 text-sm'>
                  {[
                    'Automated flows for welcome, abandonment, and post-purchase',
                    'Custom-designed templates that reflect your brand',
                    'Audience segmentation and smart personalization',
                    'Campaign strategy, copywriting, and performance review',
                    'Deep integrations with Shopify, Stripe, and other platforms',
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

            {/* Creative Direction */}
            <AccordionItem value='creative-direction'>
              <AccordionTrigger>
                <div className='flex items-center gap-2'>
                  <IoTelescopeSharp className='size-6' />
                  <span>Creative Direction</span>
                </div>
              </AccordionTrigger>
              <AccordionContent
                image='/images/services/creative-direction.webp'
                imageAlt='AI and machine learning technology'
              >
                <p className='text-sm mb-4 text-muted-foreground'>
                  Creative Direction isn&apos;t just about making things look
                  good — it&apos;s about crafting a vision that aligns every
                  visual, word, and moment with your brand&apos;s goals. I guide
                  the look, feel, and voice of your brand to create a clear
                  identity, inspire connection, and drive cohesive execution
                  across all platforms.
                </p>
                <ul className='space-y-2 text-sm'>
                  {[
                    'Unified Brand Identity',
                    'Clear Visual and Verbal Communication',
                    'Improved Content Consistency Across Teams',
                    'Higher Engagement Across Channels',
                    'Vision-Driven Decision Making',
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

            {/* UI Design */}
            <AccordionItem value='ui-design'>
              <AccordionTrigger>
                <div className='flex items-center gap-2'>
                  <CodeBracketSquareIcon className='size-6' />
                  <span>UI Design</span>
                </div>
              </AccordionTrigger>
              <AccordionContent
                image='/images/services/ui-design.webp'
                imageAlt='AI and machine learning technology'
              >
                <p className='text-sm mb-4 text-muted-foreground'>
                  UI Design isn&apos;t just about aesthetics — it&apos;s about
                  guiding attention, creating rhythm, and making digital spaces
                  feel intuitive and inviting. I design clean, purposeful
                  interfaces that support usability, align with your brand, and
                  enhance every user interaction from the first click to the
                  final conversion.
                </p>
                <ul className='space-y-2 text-sm'>
                  {[
                    'Consistent, Polished Interfaces',
                    'Improved Usability and Accessibility',
                    'Higher User Satisfaction',
                    'More Effective Visual Hierarchy',
                    'Conversion-Focused Design Choices',
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

            {/* Product Photography */}
            <AccordionItem value='product-photography'>
              <AccordionTrigger>
                <div className='flex items-center gap-2'>
                  <CameraIcon className='size-6' />
                  <span>Product Photography</span>
                </div>
              </AccordionTrigger>
              <AccordionContent
                image='/images/services/product-photography.webp'
                imageAlt='Product photography process illustration'
              >
                <p className='text-sm mb-4 text-muted-foreground'>
                  Strong product photography builds trust, shows off the
                  details, and sets the tone for your entire brand. I shoot
                  clean, professional images that make your products shine —
                  whether it&apos;s for your store, social, or next launch
                  campaign.
                </p>
                <ul className='space-y-2 text-sm'>
                  {[
                    'Studio-lit photos with crisp, true-to-life detail',
                    'Styled shoots for lifestyle and brand storytelling',
                    'Optimized for web, social, and print',
                    'Fast turnaround and consistent editing',
                    'Great for Shopify, Etsy, and DTC brands',
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

            {/* Graphic Design */}
            <AccordionItem value='graphic-design'>
              <AccordionTrigger>
                <div className='flex items-center gap-2'>
                  <SwatchIcon className='size-6' />
                  <span>Graphic Design</span>
                </div>
              </AccordionTrigger>
              <AccordionContent
                image='/images/services/graphic-design.webp'
                imageAlt='Graphic design process illustration'
              >
                <p className='text-sm mb-4 text-muted-foreground'>
                  Graphic Design isn&apos;t just about making things look good —
                  it&apos;s about crafting a vision that aligns every visual,
                  word, and moment with your brand&apos;s goals. I guide the
                  look, feel, and voice of your brand to create a clear
                  identity, inspire connection, and drive cohesive execution
                  across all platforms.
                </p>
                <ul className='space-y-2 text-sm'>
                  {[
                    'Branding systems, logos, and visual identities',
                    'Marketing assets for web, email, and social',
                    'Print-ready designs for packaging and merch',
                    'Editable templates for long-term use',
                    'Creative direction that ties it all together',
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

            {/* IT, Network, and Infrastructure Design & Management */}
            <AccordionItem value='network-management'>
              <AccordionTrigger>
                <div className='flex items-center gap-2'>
                  <ServerStackIcon className='size-6' />
                  <span>
                    IT, Network, and Infrastructure Design & Management
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent
                image='/images/services/network-management.webp'
                imageAlt='IT, Network, and Infrastructure Design & Management process illustration'
              >
                <p className='text-sm mb-4 text-muted-foreground'>
                  From server setup to day-to-day tech support, I help small
                  teams run smoothly with dependable IT systems. I manage both
                  Windows and Linux environments, handle DNS and networking, and
                  make sure your hardware, users, and data stay secure and
                  accessible.
                </p>
                <ul className='space-y-2 text-sm'>
                  {[
                    'Windows Server and Linux Server installation and management',
                    'DNS configuration, SSL, and domain control',
                    'User account creation, permissions, and policy enforcement',
                    'Office network setup with routers, switches, and access points',
                    'On-site and remote hardware installation and maintenance',
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
          </Accordion>
        </div>
      </div>
    </main>
  );
}
