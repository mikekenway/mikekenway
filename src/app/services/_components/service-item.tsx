import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';

interface ServiceItemProps {
  id: string;
  icon: ReactNode;
  title: string;
  image: string;
  imageAlt?: string;
  description: string;
  features: string[];
  className?: string;
}

export function ServiceItem({
  id,
  icon,
  title,
  image,
  imageAlt,
  description,
  features,
  className,
}: ServiceItemProps) {
  return (
    <AccordionItem
      value={id}
      className={className}
    >
      <AccordionTrigger>
        <div className='flex items-center gap-2'>
          {icon}
          <span>{title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent
        image={image}
        imageAlt={imageAlt || title}
      >
        <p className='text-sm mb-4 text-muted-foreground'>{description}</p>
        <ul className='space-y-2 text-sm'>
          {features.map((feature) => (
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
  );
}
