import { FunctionComponent } from 'react';
import { IProject } from '../src/type';

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  return <div>ProjectCard</div>;
};

export default ProjectCard;
