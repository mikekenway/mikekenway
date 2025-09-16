'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';

import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBg, setShowBg] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Show background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowBg(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-50 flex items-center justify-between text-white px-8 p-4 transition-all duration-300 ${
        showBg ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
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
            {/* Services */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/services'
                className='px-4 py-2'
              >
                Services
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

            <Link
              href='https://github.com/mikekenway'
              className='px-4 py-2 mr-2 border-transparent transition-all duration-200 hover:border-white border-1 rounded-md'
              target='_blank'
            >
              <FaGithub className='size-4' />
            </Link>

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
          <XMarkIcon className='size-6' />
        ) : (
          <Bars3Icon className='size-6' />
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
