import { Text } from '@nextui-org/react';

const Home = () => {
  return (
    <>
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
        <p className='flex justify-center text-xl'>
          I am a Software Developer based in Washington.
        </p>
      </div>
    </>
  );
};

export default Home;
