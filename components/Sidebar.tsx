import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../src/animations';

import { Avatar, Button, Text, Badge, Tooltip } from '@nextui-org/react';
import { UserCard } from './UserCard';
import Tilt from 'react-parallax-tilt';

export default function Sidebar({}) {
  return (
    <motion.div
      className='flex flex-col items-center'
      variants={stagger}
      animate='animate'
      initial='initial'
      exit='exit'
    >
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
            src='images/a1.png'
            alt='deshon dixon'
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
            textGradient: '45deg, $white -20%, $purple700 100%',
          }}
          weight='bold'
          className='my-4 text-3xl font-medium tracking-wider'
        >
          <span> DESHON </span>
          DIXON
        </Text>
      </Tilt>
      <motion.div className='flex justify-center' variants={fadeInUp}>
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
      </motion.div>
      <motion.div className='flex justify-center p-3' variants={fadeInUp}>
        <motion.a
          variants={fadeInUp}
          href='https://drive.google.com/uc?export=download&id=1tm2TdbpvjzcjIRfo4-zBEu_qbfd-EWga'
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
        </motion.a>
      </motion.div>
      <motion.div
        className='flex w-9/12 mx-auto my-5 text-green-400 justify-evenly md:w-full'
        variants={fadeInUp}
      >
        <Tilt>
          <motion.a
            variants={fadeInUp}
            href='https://github.com/deshondixon'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Deshon Dixon GitHub Profile'
          >
            <AiFillGithub className='w-12 h-12 cursor-pointer' />
          </motion.a>
        </Tilt>
        <Tilt>
          <motion.a
            variants={fadeInUp}
            href='https://www.linkedin.com/in/deshondixon/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Deshon Dixon LinkedIn Profile'
          >
            <AiFillLinkedin className='w-12 h-12 cursor-pointer' />
          </motion.a>
        </Tilt>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
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
      </motion.div>
      <motion.div variants={fadeInUp} className='flex justify-center p-3'>
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
      </motion.div>
    </motion.div>
  );
}
