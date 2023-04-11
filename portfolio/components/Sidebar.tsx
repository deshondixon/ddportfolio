import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

const Sidebar = () => {
  return (
    <div className=''>
      <Image
        src='/profile.jpg'
        alt='avatar'
        width={500}
        height={500}
        className='mx-auto rounded-full '
      />
      <h3 className='my-4 text-3xl font-medium tracking-wider'>
        <span>DESHON </span>
        DIXON
      </h3>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>
        Software Engineer
      </p>
      <a
        className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'
        href=''
        download='name'
      >
        <GiTie className='w-6 h-6' /> Download Resume
      </a>
      <div className='flex w-9/12 mx-auto my-5 text-green-500 justify-evenly md:w-full'>
        <a href=''>
          <AiFillGithub className='w-20 h-20 cursor-pointer' />
        </a>
        <a href=''>
          <AiFillLinkedin className='w-20 h-20 cursor-pointer' />
        </a>
      </div>
      <div
        className='py-4 my-5 bg-gray-200'
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div>
          <GoLocation />
          <span> Tacoma, Washington</span>
        </div>
        <p>deshondixon@gmail.com</p>
        <p>253-878-0685</p>
      </div>
      <button>Email Me</button>
      <button>Toggle Theme</button>
    </div>
  );
};

export default Sidebar;
