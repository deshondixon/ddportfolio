import { Text } from '@nextui-org/react';

const resume = () => {
  return (
    <div className='p-4'>
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <Text className='my-3 text-lg tracking-normal' weight='normal'>
            Education
          </Text>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default resume;
