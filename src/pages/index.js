import React from 'react';
import Nav from '/components/nav';
import { Text, Spacer } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <Nav />
      <div className='flex flex-col justify-center'>
        <Text
          className='flex justify-center text-6xl font-bold underline'
          h1
          size={60}
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
          weight='bold'
        >
          DESHON DIXON
        </Text>
        <Text className='flex justify-center text-xl'>
          I am a Software Developer based in Washington.
        </Text>
      </div>
    </>
  );
}
