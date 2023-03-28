import React from 'react';

export default function Nav() {
  return (
    <>
      <div className='flex flex-row items-center justify-start p-8 text-xl'>
        <div>
          <h1 className='text-5xl font-bold text-'>DD</h1>
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
