import React, { FunctionComponent } from 'react';
import { ISkill } from '../src/type';
import { Progress } from '@nextui-org/react';
import Skeleton from 'react-loading-skeleton';

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  return (
    <div className='my-2'>
      {level ? (
        <div className='flex items-center px-4 py-1'>
          <Progress
            value={level}
            color='gradient'
            size='xl'
            status='secondary'
            shadow
          >
            {name}
            <Icon className='mr-3' />
          </Progress>
        </div>
      ) : (
        <Skeleton width='100%' height={40} />
      )}
    </div>
  );
};

export default Bar;
