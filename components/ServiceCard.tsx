import React, { FunctionComponent } from 'react';
import { IService } from '../src/type';
import { Text, Textarea } from '@nextui-org/react';

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className='flex items-center p-2 text-white space-x-7'>
      <Icon className='w-16 h-16' />
      <div className='items-center text-white'>
        <Text
          size={18}
          css={{
            textGradient: '45deg, $purple600 -20%, $pink600 100%',
          }}
          weight='bold'
          className='text-3xl font-medium tracking-wider text-white'
        >
          {title}
        </Text>
        <Text
          dangerouslySetInnerHTML={createMarkup()}
          size={14}
          weight='extrabold'
          className='text-3xl font-medium tracking-wide'
          css={{
            color: 'white',
          }}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
