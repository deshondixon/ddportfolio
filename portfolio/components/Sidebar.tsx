import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className=''>
      <Image src='/profile.jpg' alt='avatar' width={500} height={500} />
      <h3>
        <span>DeShon</span>
        Dixon
      </h3>
      <p>Software Engineer</p>
      <p>Download Resume</p>
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
