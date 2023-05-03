import React, { FunctionComponent } from 'react';
import { Category } from '../src/type';
import { Text, Badge } from '@nextui-org/react';

export const NavItem: FunctionComponent<{
  value: Category | 'all';
  handlerFilterCategory: Function;
}> = ({ value, handlerFilterCategory }) => {
  return (
    <li
      className='text-xl font-semibold capitalize cursor-pointer text-violet-300 hover:text-violet-400'
      onClick={() => handlerFilterCategory(value)}
    >
      {' '}
      {value}
    </li>
  );
};

const ProjectsNavbar = (props) => {
  return (
    <div className='flex px-3 py-2 space-x-3 overflow-x-auto text-2xl list-none'>
      <NavItem value='all' {...props} />
      <NavItem value='react' {...props} />
      <NavItem value='python' {...props} />
      <NavItem value='django' {...props} />
      <NavItem value='golang' {...props} />
      <NavItem value='mongodb' {...props} />
      <NavItem value='express' {...props} />
      <NavItem value='node' {...props} />
    </div>
  );
};

export default ProjectsNavbar;
