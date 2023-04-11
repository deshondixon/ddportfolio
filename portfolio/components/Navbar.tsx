import { useState } from 'react';
import Link from 'next/link';

export default function Navbar({}) {
  const [activeItem, setActiveItem] = useState<string>('');

  return (
    <div>
      <span>{activeItem}</span>
      <div>
        {activeItem !== 'About' && (
          <Link href='/'>
            <a>
              <span>About</span>
            </a>
          </Link>
        )}
        {activeItem !== 'Projects' && (
          <Link href='/'>
            <a>
              <span>Projects</span>
            </a>
          </Link>
        )}
        {activeItem !== 'Resume' && (
          <Link href='/'>
            <a>
              <span>Resume</span>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
