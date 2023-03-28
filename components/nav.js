import React from 'react';

export default function Nav() {
  return (
    <>
      <div className='flex flex-row items-center justify-start p-3 text-xl'>
        <div>
          <h1 className=''>DD</h1>
        </div>
        <div className='flex pl-8 justify-evenly'>
          <div className='flex justify-evenly'>HOME</div>
          <div>PROJECTS</div>
          <div>ABOUT</div>
          <div>CONTACT</div>
        </div>
      </div>
    </>
  );
}
