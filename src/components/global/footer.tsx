import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=''>
      <div className=''>
        <Link href='/about'>About</Link>
        <Link href='/resume'>Resume</Link>
        <Link href='/blog'>Blog</Link>
        <a
          href='https://linkedin.com/in/yourprofile'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
        <a
          href='https://github.com/yourprofile'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
      </div>
      <div className=''>
        © 2025 Mike Kenway. All rights reserved.
      </div>
    </footer>
  );
}
