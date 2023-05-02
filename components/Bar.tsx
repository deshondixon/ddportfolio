import React, { FunctionComponent } from 'react';
import { ISkill } from '../src/type';
import { Progress } from '@nextui-org/react';
import Skeleton from 'react-loading-skeleton';

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  const levelNumber = level ? parseInt(level, 10) : 0; // Convert level to number or default to 0
  return (
    <div className='my-2'>
      {level ? (
        <div className='flex flex-wrap items-center px-2 py-3 pl-2 text-md'>
          <Progress
            value={levelNumber}
            color='gradient'
            size='xl'
            status='secondary'
            shadow
          />
          <div className='flex items-center mr-5'>
            <Icon className='mr-1' />
            <span>{name}</span>
          </div>
        </div>
      ) : (
        <Skeleton width='100%' height={40} />
      )}
    </div>
  );
};

export default Bar;
