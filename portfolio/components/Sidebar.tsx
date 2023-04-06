import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className=''>
      <Image src='/profile.jpg' alt='avater' width={500} height={500} />
      <h3>
        <span>DeShon</span>
        Dixon
      </h3>
      <p>Software Engineer</p>
      <p>Download Resume</p>
    </div>
  );
};

export default Sidebar;
