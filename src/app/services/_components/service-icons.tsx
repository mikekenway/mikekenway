import {
  CameraIcon,
  Cog6ToothIcon,
  PencilSquareIcon,
  ServerStackIcon,
  CommandLineIcon,
  SwatchIcon,
  CodeBracketSquareIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import { FaShopify } from 'react-icons/fa';
import { IoTelescopeSharp } from 'react-icons/io5';
import { ReactNode } from 'react';

export const serviceIcons: Record<string, ReactNode> = {
  analytics: <PencilSquareIcon className='size-6' />,
  'service-design': <Cog6ToothIcon className='size-6' />,
  development: <CommandLineIcon className='size-6' />,
  shopify: <FaShopify className='size-6' />,
  klaviyo: (
    <Image
      src='/images/services/klaviyo-icon.webp'
      alt='Klaviyo logo'
      width={24}
      height={24}
    />
  ),
  'creative-direction': <IoTelescopeSharp className='size-6' />,
  'ui-design': <CodeBracketSquareIcon className='size-6' />,
  'product-photography': <CameraIcon className='size-6' />,
  'graphic-design': <SwatchIcon className='size-6' />,
  'network-management': <ServerStackIcon className='size-6' />,
};
