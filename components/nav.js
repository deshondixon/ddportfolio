import React from 'react';

export default function Nav() {
  return (
    <>
      <div className='flex flex-row text-xl justify-evenly'>
        <h1>DeShon Dixon</h1>
        <div className='flex justify-evenly'>
          <ul>HOME</ul>
          <ul>PROJECTS</ul>
          <ul>ABOUT</ul>
          <ul>CONTACT</ul>
        </div>
      </div>
    </>
  );
}
