'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between text-white px-8 p-4 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className='flex items-center gap-4'>
        <Image
          src='/images/logo.png'
          alt='heart logo for mikekenway.com'
          height={32}
          width={32}
        />
        <div className='text-2xl font-semibold'>Mike Kenway</div>
      </div>
      <NavigationMenu className='flex font-semibold items-center p-4'>
        <NavigationMenuList>
          {/* Home */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href='/'
              className='px-4 py-2'
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* About */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href='/about'
              className='px-4 py-2'
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Blog */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href='/blog'
              className='px-4 py-2'
            >
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* My Projects */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className='bg-transparent text-white'>
              My Projects
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-2 p-4 w-56 bg-black border-black text-white'>
                <li>
                  <NavigationMenuLink href='/projects/ghostlife'>
                    Ghostlife
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href='/projects/ghostboy'>
                    Ghostboy Co.
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href='/projects/apex-foundry'>
                    Apex Foundry
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href='/projects/third-rule'>
                    Third Rule Creative
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Get in Touch */}
          <NavigationMenuItem>
            <Button
              variant='default'
              className='px-4 py-2'
            >
              Get in Touch
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>
    </nav>
  );
}
