import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

import {
  Avatar,
  Button,
  Text,
  Badge,
  Spacer,
  Tooltip,
} from '@nextui-org/react';
import { UserCard } from './UserCard';
import Tilt from 'react-parallax-tilt';

export default function Sidebar({}) {
  return (
    <div className='flex flex-col items-center'>
      <Tooltip
        placement='left'
        content={
          <UserCard
            avatarUrl={undefined}
            avatarProps={undefined}
            css={undefined}
            onClick={undefined}
          />
        }
        hideArrow
        trigger='click'
      >
        <Badge
          content='👨🏿‍💻'
          color='secondary'
          disableOutline
          placement='top-right'
          size='lg'
        >
          <Avatar
            css={{ mw: '600px', height: '22vh', width: '22vh' }}
            zoomed
            size='xl'
            src='images/profile.webp'
            color='gradient'
            bordered
            className='flex mx-auto rounded-full md:w-full cursor-none'
            pointer
          />
        </Badge>
      </Tooltip>

      <Tilt>
        <Text
          size={35}
          css={{
            textGradient: '45deg, $yellow900 -20%, $purple700 100%',
          }}
          weight='bold'
          className='my-4 text-3xl font-medium tracking-wider'
        >
          <span>DESHON </span>
          DIXON
        </Text>
      </Tilt>
      <div className='flex justify-center'>
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
        <a
          href='https://docs.google.com/uc?id=1d73IepzRX6SZyfnCu0iAI34jGwQhwu2G&export=download'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            rounded
            shadow
            color='gradient'
            auto
            className='text-center focus:outline-none'
          >
            <AiOutlineCloudDownload className='p-1 w-7 h-7' /> Resume
          </Button>
        </a>
      </div>
      <div className='flex w-9/12 mx-auto my-5 text-green-400 justify-evenly md:w-full'>
        <Tilt>
          <a
            href='https://github.com/deshondixon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillGithub className='w-12 h-12 cursor-pointer' />
          </a>
        </Tilt>
        <Tilt>
          <a
            href='https://www.linkedin.com/in/deshondixon/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillLinkedin className='w-12 h-12 cursor-pointer' />
          </a>
        </Tilt>
      </div>
      <div
        className='py-4 my-5'
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
            className='my-2 '
          >
            deshondixon@gmail.com
          </Text>
        </Tilt>
        <Tilt>
          <Text
            css={{
              textGradient: '45deg, $yellow600 -20%, $red600 100%',
            }}
            weight='bold'
            className='my-2 '
          >
            253-878-0685{' '}
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
          onClick={() => window.open('mailto:deshondixon@gmail.com')}
        >
          <AiOutlineMail className='w-6 h-6 p-1' /> Email
        </Button>
      </div>
    </div>
  );
}
