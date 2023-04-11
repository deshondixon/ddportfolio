import { useEffect, useState } from 'react';
import { Switch, useTheme, Button, Text, Badge } from '@nextui-org/react';
import Link from 'next/link';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  return (
    <div>
      <Text
        size={35}
        css={{
          textGradient: '45deg, $yellow600 -20%, $red600 100%',
        }}
        weight='bold'
        className='my-4 text-3xl font-medium tracking-wider'
      >
        {activeItem}
      </Text>
      <div>
        {activeItem !== 'About' && (
          <Link href='#'>
            <span onClick={() => setActiveItem('About')}>About</span>
          </Link>
        )}

        {activeItem !== 'Projects' && (
          <Link href='/projects'>
            <span onClick={() => setActiveItem('About')}>Projects</span>
          </Link>
        )}
        {activeItem !== 'Resume' && (
          <Link href='/resume'>
            <span onClick={() => setActiveItem('About')}>Resume</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
