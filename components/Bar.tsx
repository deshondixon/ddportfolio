import React, { FunctionComponent } from 'react';
import { ISkill } from '../src/type';
import { Progress } from '@nextui-org/react';
import Skeleton from 'react-loading-skeleton';
import { motion } from 'framer-motion';

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  const levelNumber = level ? parseInt(level, 10) : 0;

  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: `${levelNumber}%`,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className='my-2'>
      {level ? (
        <motion.div
          className='flex flex-wrap items-center px-2 py-3 pl-2 text-md'
          variants={variants}
          initial='initial'
          animate='animate'
        >
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
        </motion.div>

     
      )}
    </div>
  );
};

export default Bar;
