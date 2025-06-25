'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between text-white px-8 p-4 transition-all duration-300 bg-transparent'>
      {/* Logo */}
      <Link
        href='/'
        className='flex items-center gap-4'
      >
        <Image
          src='/images/logo.png'
          alt='heart logo for mikekenway.com'
          height={32}
          width={32}
        />
        <div className='text-2xl font-semibold'>Mike Kenway</div>
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden lg:block'>
        <NavigationMenu className='flex font-semibold items-center p-4'>
          <NavigationMenuList className='flex items-center gap-2'>
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/'
                className='px-4 py-2'
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/services'
                className='px-4 py-2'
              >
                Services
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

            {/* Case Studies */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/case-study'
                className='px-4 py-2'
              >
                Case Studies
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* My Projects */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className='bg-transparent text-white'>
                My Projects
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-2 p-4 w-56 bg-black backdrop-blur-sm border border-gray-800 text-white rounded-lg'>
                  <li>
                    <li>
                      <NavigationMenuLink
                        href='/projects/apex-foundry'
                        className='block px-3 py-2'
                      >
                        Apex Foundry
                      </NavigationMenuLink>
                    </li>
                    <NavigationMenuLink
                      href='/projects/ghostboy'
                      className='block px-3 py-2'
                    >
                      Ghostboy Co.
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href='/projects/ghostlife'
                      className='block px-3 py-2'
                    >
                      Ghostlife
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href='/projects/third-rule'
                      className='block px-3 py-2'
                    >
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
                asChild
              >
                <Link href='/contact'>Get in Touch</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuIndicator />
          <NavigationMenuViewport className='border-none bg-transparent shadow-none' />
        </NavigationMenu>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className='lg:hidden p-2'
        aria-label='Toggle mobile menu'
      >
        {isMobileMenuOpen ? (
          <XMarkIcon className='h-6 w-6' />
        ) : (
          <Bars3Icon className='h-6 w-6' />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 lg:hidden'>
          <div className='flex flex-col p-4 space-y-4'>
            <Link
              href='/'
              className='px-4 py-2'
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href='/services'
              className='px-4 py-2'
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              href='/blog'
              className='px-4 py-2'
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <Link
              href='/case-study'
              className='px-4 py-2'
              onClick={closeMobileMenu}
            >
              Case Studies
            </Link>

            {/* Mobile Projects Dropdown */}
            <div className='px-4 py-2'>
              <div className='font-semibold mb-2'>My Projects</div>
              <div className='ml-4 space-y-2'>
                <Link
                  href='/projects/ghostlife'
                  className='block py-1'
                  onClick={closeMobileMenu}
                >
                  Ghostlife
                </Link>
                <Link
                  href='/projects/ghostboy'
                  className='block py-1'
                  onClick={closeMobileMenu}
                >
                  Ghostboy Co.
                </Link>
                <Link
                  href='/projects/apex-foundry'
                  className='block py-1'
                  onClick={closeMobileMenu}
                >
                  Apex Foundry
                </Link>
                <Link
                  href='/projects/third-rule'
                  className='block py-1'
                  onClick={closeMobileMenu}
                >
                  Third Rule Creative
                </Link>
              </div>
            </div>

            <Link
              href='/contact'
              className='px-4 py-2 bg-white text-black rounded text-center'
              onClick={closeMobileMenu}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
