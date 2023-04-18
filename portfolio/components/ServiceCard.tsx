import { FunctionComponent } from 'react';
import { IService } from '../src/type';
import { Text } from '@nextui-org/react';
import Skeleton from 'react-loading-skeleton';

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
      {Icon ? (
        <Icon className='w-16 h-16' />
      ) : (
        <Skeleton circle width={64} height={64} />
      )}
      <div className='items-center'>
        {title ? (
          <Text
            size={18}
            css={{
              textGradient: '45deg, $purple600 -20%, $pink600 100%',
            }}
            weight='bold'
            className='text-3xl font-medium tracking-wider'
          >
            {title}
          </Text>
        ) : (
          <Skeleton width={200} height={24} />
        )}
        {about ? (
          <Text
            dangerouslySetInnerHTML={createMarkup()}
            size={14}
            weight='extrabold'
            className='text-3xl font-medium tracking-wide'
          />
        ) : (
          <Skeleton count={3} width={200} height={16} />
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
