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
            className='my-4 text-3xl font-medium tracking-wider'
          >
            Education
          </Text>
          <div>
            <Text
              size={20}
              css={{
                textGradient: '45deg, $blue600 -20%, $pink600 50%',
              }}
              weight='bold'
            >
              Advanced Software Development in Python
            </Text>
            <Text
              size={15}
              css={{
                textGradient: '45deg, $purple600 -20%, $pink600 100%',
              }}
              weight='bold'
            >
              Code Fellows (2022-2023)
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
