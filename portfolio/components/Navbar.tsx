import { FunctionComponent, useEffect, useState } from 'react';
import { Switch, useTheme, Button, Text, Badge } from '@nextui-org/react';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { useRouter } from 'next/router';

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <Text
        size={18}
        css={{
          textGradient: '45deg, $yellow600 -20%, $red600 100%',
        }}
        weight='bold'
        className='text-3xl font-medium tracking-wider'
      >
        <span onClick={() => setActiveItem(name)}>{name}</span>
      </Text>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActiveItem('About');
    if (pathname === '/projects') setActiveItem('Projects');
    if (pathname === '/resume') setActiveItem('Resume');
  }, []);

  return (
    <div>
      <Text
        size={40}
        css={{
          textGradient: '45deg, $yellow600 -20%, $red600 100%',
        }}
        weight='bold'
        className='my-4 text-3xl font-medium tracking-wider'
      >
        {activeItem}
      </Text>

      <div className='flex space-x-3'>
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='About'
          route='/'
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Projects'
          route='/projects'
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name='Resume'
          route='/resume'
        />
      </div>
    </div>
  );
};

export default Navbar;
