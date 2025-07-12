import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export default function MarshallHomeCaseStudy() {
  return (
    <section className='px-6 py-12 max-w-6xl mx-auto text-white'>
      {/* Header */}
      <div className='flex flex-col lg:flex-row justify-between gap-10'>
        <div className='flex-1'>

          <h1 className='text-4xl font-bold mb-4'>Marshall Home Digital Overhaul</h1>

          
          <div className='text-sm text-muted-foreground space-y-1 mb-6'>
            <p>
              <strong>Client:</strong> Marshall Home Corporation
            </p>
            <p>
              <strong>Timeline:</strong> 6 months
            </p>
            <p className='mb-6'>
              <strong>Year:</strong> 2021
            </p>
          <div className='flex flex-wrap gap-2 mb-4'>
            <Badge variant='secondary'>Web Development</Badge>
            <Badge variant='secondary'>Service Design</Badge>
            <Badge variant='secondary'>UX Design</Badge>
            <Badge variant='secondary'>ERP Integration</Badge>
          </div>
          </div>

          <p className='text-lg text-muted-foreground mb-10'>
            A full transformation of Marshall Home&apos;s outdated, multi-brand eCommerce system—focused
            on unifying infrastructure, automating workflows, and improving staff + customer
            experience.
          </p>
        </div>

        <div className='flex-1'>
          <div className='rounded-lg overflow-hidden'>
            <Image
              src='/images/case-study/marshall-home/marshall-cover.png'
              alt='Marshall Home platform redesign screenshot'
              width={800}
              height={500}
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </div>

      {/* Tabbed Case Study Sections */}
      <div className='mt-16'>
        <Tabs defaultValue='challenge' className='w-full'>
          <TabsList className='flex flex-wrap justify-start gap-8 p-2 rounded-md'>
            <TabsTrigger value='challenge'>The Challenge</TabsTrigger>
            <TabsTrigger value='research'>Discovery</TabsTrigger>
            <TabsTrigger value='strategy'>Strategy</TabsTrigger>
            <TabsTrigger value='design'>Design </TabsTrigger>
            <TabsTrigger value='testing'>Testing</TabsTrigger>
            <TabsTrigger value='results'>Impact</TabsTrigger>
          </TabsList>

          <TabsContent value='challenge'>
            <h2 className='text-2xl font-semibold mt-8 mb-4'>The Challenge</h2>
            <p className='text-muted-foreground mb-4'>
              Marshall Home is a $10M+ wholesale company with six brands managed by a small admin
              team. Their digital infrastructure was deeply fragmented—six separate eCommerce
              websites, disconnected ERP and inventory systems, and entirely manual, paper-based
              workflows.
            </p>
            <ul className='list-disc list-inside text-muted-foreground space-y-1'>
              <li>Outdated websites and inconsistent brand UX</li>
              <li>Order fulfillment required printed paperwork passed between departments</li>
              <li>Inventory and customer data were not synced between systems</li>
              <li>Customers frequently called for help placing or tracking orders</li>
            </ul>
          </TabsContent>

          <TabsContent value='research'>
            <h2 className='text-2xl font-semibold mt-8 mb-4'>Discovery & Research</h2>
            <p className='text-muted-foreground'>
              Interviews with leadership and admin staff revealed core operational pain
              points—manual data entry, duplicate effort, and frequent communication breakdowns. I
              studied how similar companies handled brand hierarchies and concluded that
              consolidating all brands under a single storefront could benefit both usability and
              internal efficiency.
            </p>
          </TabsContent>

          <TabsContent value='strategy'>
            <h2 className='text-2xl font-semibold mt-8 mb-4'>Strategy & Planning</h2>
            <p className='text-muted-foreground'>
              I proposed migrating all brands to Shopify Plus, which offered user permissions,
              visual editing tools, and multi-store support. We identified a third-party partner to
              integrate Shopify with the company&apos;s ERP. Custom data mapping was done to support
              legacy logic while enabling automation and reporting improvements.
            </p>
          </TabsContent>

          <TabsContent value='design'>
            <h2 className='text-2xl font-semibold mt-8 mb-4'>Design & Prototyping</h2>
            <p className='text-muted-foreground'>
              While no formal design system was created, I developed a consistent layout using
              high-contrast, large-click UI to support the target audience (older wholesale buyers).
              Each brand received its own landing page, while the navigation included a dropdown to
              explore all brands. New arrivals, real-time stock, and high-quality imagery helped
              modernize the experience.
            </p>
          </TabsContent>

          <TabsContent value='testing'>
            <h2 className='text-2xl font-semibold mt-8 mb-4'>Testing & Iteration</h2>
            <p className='text-muted-foreground'>
              New tools were rolled out with internal training sessions. Feedback from staff
              informed refinements to the login approval system, mega menu layout, and inventory
              display. Adjustments ensured both Shopify and ERP systems remained in sync without
              requiring staff workarounds.
            </p>
          </TabsContent>

          <TabsContent value='results'>
            <h2 className='text-2xl font-semibold mt-8 mb-4'>Results & Impact</h2>
            <ul className='list-disc list-inside text-muted-foreground space-y-1'>
              <li>50% faster internal order processing</li>
              <li>3,000+ SKUs cleaned, categorized, and tagged</li>
              <li>Staff can now edit products and pages without developer help</li>
              <li>Customers self-serve for invoices, tracking, and pricing</li>
              <li>Real-time inventory module eliminated surprise backorders</li>
            </ul>
            <blockquote className='border-l-4 border-primary pl-4 text-muted-foreground italic mt-6'>
              “Before the overhaul, we were constantly playing catch-up. Now everything just works —
              customers find what they need, and we can focus on growing the business instead of
              fixing problems.”
              <br />
              <span className='not-italic font-medium block mt-2'>— Admin, Marshall Home</span>
            </blockquote>
          </TabsContent>
        </Tabs>
      </div>

      {/* Tools */}
      <div className='mt-20'>
        <h3 className='text-xl font-semibold mb-4'>Tools & Technologies Used</h3>
        <div className='flex flex-wrap gap-3'>
          <Badge variant='outline'>Shopify Plus</Badge>
          <Badge variant='outline'>ERP Integration</Badge>
          <Badge variant='outline'>Figma</Badge>
          <Badge variant='outline'>Klaviyo</Badge>
          <Badge variant='outline'>Notion</Badge>
          <Badge variant='outline'>Google Analytics</Badge>
        </div>
      </div>
    </section>
  );
}
