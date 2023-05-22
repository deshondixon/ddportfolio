import React, { FunctionComponent } from 'react';
import { Category } from '../src/type';
import { Text, Badge } from '@nextui-org/react';

export const NavItem: FunctionComponent<{
  value: Category | 'all';
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className =
    'text-xl font-semibold capitalize cursor-pointer text-violet-200 hover:text-violet-400';

  if (active === value) className += 'text-violet-300';
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {' '}
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
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
      <NavItem value='java' {...props} />
      <NavItem value='springboot' {...props} />
    </div>
  );
};

export default ProjectsNavbar;
