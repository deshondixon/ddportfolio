// @ts-ignore
import { FunctionComponent } from 'react';
import { ISkill } from '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/type';
import { Progress } from '@nextui-org/react';

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  return (
    <div className='my-2'>
      <div className='flex items-center px-4 py-1 '>
        <Progress
          value={70}
          color='gradient'
          size='xl'
          status='secondary'
          shadow
        >
          {name}
          <Icon className='mr-3' />
        </Progress>
      </div>
    </div>
  );
};

export default Bar;
