import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className=''>
      <Image
        src='https://media.licdn.com/dms/image/D5603AQG8ud8c-q7WHg/profile-displayphoto-shrink_800_800/0/1672429025757?e=2147483647&v=beta&t=MATrpoJPnAcYw5NFzME5TINvD6-iTWL431yoAy88clQ'
        alt='avatar'
      />
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
