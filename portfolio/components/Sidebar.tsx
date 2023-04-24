import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import { Avatar, Switch, Button, Text, Badge, Spacer } from '@nextui-org/react';

import Tilt from 'react-parallax-tilt';

export default function Sidebar({}) {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className=''>
      <Avatar
        css={{ mw: '400px', height: '13rem', width: '13rem' }}
        zoomed
        size='xl'
        src='/profile.jpg'
        color='gradient'
        bordered
        className='mx-auto rounded-full '
        pointer
      />

      <Tilt>
        <Text
          size={35}
          css={{
            textGradient: '45deg, $purple600 -20%, $pink600 100%',
          }}
          weight='bold'
          className='my-4 text-3xl font-medium tracking-wider'
        >
          <span>DESHON </span>
          DIXON
        </Text>
      </Tilt>
      <div className='flex justify-center '>
        <Tilt>
          <Text
            css={{
              textGradient: '45deg, $white -20%, $white 100%',
            }}
            weight='bold'
            className='my-2 tracking-wider text-md'
          >
            Software Engineer
          </Text>
        </Tilt>
      </div>
      <div className='flex justify-center p-3'>
        <Button
          rounded
          shadow
          color='gradient'
          auto
          className='text-center focus:outline-none'
          href='#'
        >
          <GiTie className='w-6 h-6' />
          Resume
        </Button>
      </div>
      <div className='flex w-9/12 mx-auto my-5 text-green-400 justify-evenly md:w-full'>
        <Tilt>
          <a href=''>
            <AiFillGithub className='w-12 h-12 cursor-pointer' />
          </a>
        </Tilt>
        <Tilt>
          <a href=''>
            <AiFillLinkedin className='w-12 h-12 cursor-pointer' />
          </a>
        </Tilt>
      </div>
      <div
        className='py-4 my-5 bg-gray-700'
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className='flex items-center justify-center space-x-2'>
          <Tilt>
            <GoLocation />
          </Tilt>
          <Tilt>
            <Text
              css={{
                textGradient: '45deg, $yellow600 -20%, $red600 100%',
              }}
              weight='bold'
            >
              <span className=''> Tacoma, Washington</span>
            </Text>
          </Tilt>
        </div>
        <Tilt>
          <Text
            css={{
              textGradient: '45deg, $yellow600 -20%, $red600 100%',
            }}
            weight='bold'

          color='gradient'
          auto
          className='text-center focus:outline-none'
          onClick={() => window.open('mailto:deshondixon@gmail.com')}
        >
          <AiOutlineMail className='w-6 h-6 p-1' /> Email
        </Button>
      </div>
      <Spacer />
      <Switch
        bordered
        size='xl'
        shadow
        color='primary'
        checked={theme === 'dark'}
        onChange={handleThemeChange}
      >
        {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </Switch>
    </div>
  );
}
