import { Text } from '@nextui-org/react';

const resume = () => {
  return (
    <div className='p-4'>
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <Text
            size={35}
            css={{
              textGradient: '45deg, $yellow600 -20%, $red600 100%',
            }}
            weight='bold'
            className='my-3 text-3xl font-medium tracking-wide'
          >
            Education
          </Text>
          <div>
            <Text size={20} weight='bold' className='my-2'>
              Advanced Software Development in Python
            </Text>
            <Text size={20} weight='bold' className='my-2'>
              Code Fellows (2022-2023)
            </Text>
            <Text className='my-3 text-lg tracking-normal' weight='normal'>
              Wrote clean, well-tested, advanced Python code using
              industry-standard software engineering patterns; studied the
              foundational structures of programming, from object-oriented
              principles to advanced topics
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
