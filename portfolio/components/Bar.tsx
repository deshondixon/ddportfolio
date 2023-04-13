import React from 'react';
import { FunctionComponent } from 'react';
import { ISkill } from '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/type';

const Bar: FunctionComponent<{
  data: ISkill;
}> = ({ data: { Icon, level, name } }) => {
  return <div>{name}</div>;
};

export default Bar;
