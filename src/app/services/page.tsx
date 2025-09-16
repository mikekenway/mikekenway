'use client';

import { Accordion } from '@/components/ui/accordion';
import { ServiceItem } from './_components/service-item';
import { serviceIcons } from './_components/service-icons';
import servicesData from '@/data/services.json';

export default function ServicesPage() {
  const services = servicesData.map((service) => ({
    ...service,
    icon: serviceIcons[service.id],
  }));

  return (
    <main className='min-h-screen py-12 px-4 flex flex-col items-center '>
      <h1 className='text-4xl font-bold mb-4 text-white text-center'>
        All Services
      </h1>
      <p className='text-lg text-muted-foreground p-4 mb-8 max-w-2xl text-left'>
        From day one, I&apos;ve always said &quot;if I can&apos;t do it,
        I&apos;ll figure out how&quot; and that&apos;s set me on a path of
        continuous learning that I use to bring value to my clients each
        and every day.
        <br />
        <br />
        Here are some of the most common ways I can help you:
      </p>
      <div className='w-full max-w-3xl'>
        <div className='max-w-3xl mx-auto text-white'>
          <Accordion
            type='single'
            defaultValue='analytics'
            className='w-full space-y-2'
          >
            {services.map((service) => (
              <ServiceItem
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                image={service.image}
                imageAlt={service.imageAlt}
                description={service.description}
                features={service.features}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  );
}
