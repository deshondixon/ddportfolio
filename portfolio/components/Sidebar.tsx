import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

const Sidebar = () => {
  return (
    <div className=''>
      <Image src='/profile.jpg' alt='avatar' width={500} height={500} />
      <h3>
        <span>DeShon</span>
        Dixon
      </h3>
      <p>Software Engineer</p>
      <p>
        <GiTie className='w-6 h-6' /> Download Resume
      </p>
      <div>
        <div>
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
