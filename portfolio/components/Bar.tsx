import React from 'react';
import { FunctionComponent } from 'react';
import { ISkill } from '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/type';

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  return (
    <div className='my-2 bg-gray-500 rounded-full'>
      <div
        className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-red-600 to-yellow-300 '
        style={{ width: level }}
      >
        <Icon className='mr-3' />
        {name}
      </div>
      <div></div>
    </div>
  );
};

export default Bar;
