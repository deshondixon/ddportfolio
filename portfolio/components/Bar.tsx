import React from 'react';
import { FunctionComponent } from 'react';
import { ISkill } from '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/type';

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  return (
    <div>
      <div className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-yellow-300 to-red-600 '>
        <Icon className='mr-3' />
        {name}
      </div>
    </div>
  );
};

export default Bar;
