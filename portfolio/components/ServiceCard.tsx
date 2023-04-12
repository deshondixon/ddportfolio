import React, { FunctionComponent } from 'react';
import { IService } from '../type';
import { Text } from '@nextui-org/react';

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className='flex items-center p-2 space-x-7'>
      <Icon className='w-16 h-16' />
      <div className='items-center'>
        <Text
          size={18}
          css={{
            textGradient: '45deg, $yellow600 -20%, $red600 100%',
          }}
          weight='bold'
          className='text-3xl font-medium tracking-wider'
        >
          {title}
        </Text>
        <Text
          dangerouslySetInnerHTML={createMarkup()}
          size={14}
          weight='extrabold'
          className='text-3xl font-medium tracking-wide'
        />
      </div>
    </div>
  );
};

export default ServiceCard;
