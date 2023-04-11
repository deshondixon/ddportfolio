import { useEffect, useState } from 'react';
import { Switch, useTheme, Button, Text, Badge } from '@nextui-org/react';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActiveItem('About');
  }, []);

  return (
    <div>
      <Text
        size={30}
        css={{
          textGradient: '45deg, $yellow600 -20%, $red600 100%',
        }}
        weight='bold'
        className='my-4 text-3xl font-medium tracking-wider'
      >
        {activeItem}
      </Text>

      <div className='flex space-x-3 text-red font-lg'>
        {activeItem !== 'About' && (
          <Link href='/'>
            <Text
              size={18}
              css={{
                textGradient: '45deg, $yellow600 -20%, $red600 100%',
              }}
              weight='bold'
              className='text-3xl font-medium tracking-wider'
            >
              <span onClick={() => setActiveItem('About')}>About</span>
            </Text>
          </Link>
        )}

        {activeItem !== 'Projects' && (
          <Link href='/projects'>
            <Text
              size={18}
              css={{
                textGradient: '45deg, $yellow600 -20%, $red600 100%',
              }}
              weight='bold'
              className='text-3xl font-medium tracking-wider '
            >
              <span onClick={() => setActiveItem('Projects')}>Projects</span>
            </Text>
          </Link>
        )}
        {activeItem !== 'Resume' && (
          <Link href='/resume'>
            <Text
              size={18}
              css={{
                textGradient: '45deg, $yellow600 -20%, $red600 100%',
              }}
              weight='bold'
              className='text-3xl font-medium tracking-wider'
            >
              <span onClick={() => setActiveItem('Resume')}>Resume</span>
            </Text>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
