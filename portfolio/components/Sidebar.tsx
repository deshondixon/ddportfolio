import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme, Button, Text, Badge } from '@nextui-org/react';

export default function Sidebar({}) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <div className=''>
      <Image
        src='/profile.jpg'
        alt='avatar'
        width={500}
        height={500}
        className='mx-auto rounded-full '
      />
      <Text
        css={{
          textGradient: '45deg, $yellow600 -20%, $red600 100%',
        }}
        weight='bold'
        className='my-4 text-3xl font-medium tracking-wider'
      >
        <span>DESHON </span>
        DIXON
      </Text>
      <div className='flex justify-center p-3'>
        <Button color='error' auto className='text-center'>
          Software Engineer
        </Button>
      </div>
      <div className='flex justify-center p-3'>
        <Button color='gradient' auto className='text-center' href=''>
          <GiTie className='w-6 h-6' /> Download Resume
        </Button>
      </div>
      <div className='flex w-9/12 mx-auto my-5 text-green-400 justify-evenly md:w-full'>
        <a href=''>
          <AiFillGithub className='w-12 h-12 cursor-pointer' />
        </a>
        <a href=''>
          <AiFillLinkedin className='w-12 h-12 cursor-pointer' />
        </a>
      </div>
      <div
        className='py-4 my-5 bg-gray-700'
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation />
          <Text
            css={{
              textGradient: '45deg, $yellow600 -20%, $red600 100%',
            }}
            weight='bold'
          >
            <span className=''> Tacoma, Washington</span>
          </Text>
        </div>

        <Text
          css={{
            textGradient: '45deg, $yellow600 -20%, $red600 100%',
          }}
          weight='bold'
          className='my-2 '
        >
          deshondixon@gmail.com
        </Text>
        <Text
          css={{
            textGradient: '45deg, $yellow600 -20%, $red600 100%',
          }}
          weight='bold'
          className='my-2 '
        >
          253-878-0685{' '}
        </Text>
      </div>
      <Button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400'>
        Email Me
      </Button>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </div>
  );
}
