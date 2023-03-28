import React from 'react';
import { Text } from '@nextui-org/react';

export default function Nav() {
  return (
    <>
      <div className='flex flex-row items-center justify-start p-8 text-xl'>
        <div>
          <Text
            h1
            size={60}
            css={{
              textGradient: '45deg, $yellow600 -20%, $red600 100%',
            }}
            weight='bold'
          >
            DD
          </Text>
        </div>
        <div className='flex justify-end pl-8'>
          <div className='flex justify-end'>HOME</div>
          <div>PROJECTS</div>
          <div>ABOUT</div>
          <div>CONTACT</div>
        </div>
      </div>
    </>
  );
}
