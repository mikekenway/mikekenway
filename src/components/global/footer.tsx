import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full bg-black text-white'>
      {/* Main Footer Content */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold'>Mike Kenway</h2>
            <p className='text-gray-400'>
              Crafting digital experiences that make an impact.
            </p>
            <div className='flex space-x-4'>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-400 hover:text-white'
                asChild
              >
                <a
                  href='https://github.com/yourprofile'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub Profile'
                >
                  <FaGithub className='h-5 w-5' />
                </a>
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-400 hover:text-white'
                asChild
              >
                <a
                  href='https://linkedin.com/in/yourprofile'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn Profile'
                >
                  <FaLinkedin className='h-5 w-5' />
                </a>
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='text-gray-400 hover:text-white'
                asChild
              >
                <a
                  href='https://twitter.com/yourprofile'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Twitter Profile'
                >
                  <FaTwitter className='h-5 w-5' />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Quick Links</h3>
            <nav className='space-y-2'>
              <Link
                href='/about'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                About
              </Link>
              <Link
                href='/resume'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                Resume
              </Link>
              <Link
                href='/blog'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                Blog
              </Link>
              <Link
                href='/projects'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                Projects
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Services</h3>
            <nav className='space-y-2'>
              <Link
                href='/services/web-development'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                Web Development
              </Link>
              <Link
                href='/services/ui-design'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                UI/UX Design
              </Link>
              <Link
                href='/services/consulting'
                className='block text-gray-400 hover:text-white transition-colors'
              >
                Technical Consulting
              </Link>
            </nav>
          </div>
        </div>

        <Separator className='my-12 bg-gray-800' />

        {/* Bottom Section */}
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <p className='text-center text-sm text-gray-400 md:text-left'>
            © {currentYear} Mike Kenway. All rights reserved.
          </p>
          <nav className='flex gap-6 text-sm text-gray-400'>
            <Link
              href='/privacy'
              className='hover:text-white transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms'
              className='hover:text-white transition-colors'
            >
              Terms of Service
            </Link>
            <Link
              href='/sitemap.xml'
              className='hover:text-white transition-colors'
            >
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
