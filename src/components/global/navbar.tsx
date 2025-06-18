import Image from 'next/image';

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
  return (
    <nav className='flex items-center justify-between p-4'>
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
            <NavigationMenuTrigger>My Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-2 p-4 w-56'>
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
            <NavigationMenuLink
              href='/contact'
              className='px-4 py-2'
            >
              Get in Touch
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>
    </nav>
  );
}
