import { FunctionComponent } from 'react';
import { IProject } from '../src/type';
import { Text } from '@nextui-org/react';
import Image from 'next/image';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';

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
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className='cursor-pointer'
        width={500}
        height={500}
      />
      <Text
        size={20}
        css={{
          textGradient: '45deg, $yellow600 -20%, $red600 100%',
        }}
        weight='bold'
        className='my-2 text-3xl font-medium tracking-wider text-center'
      >
        {name}
      </Text>

      <div className='grid md:grid-cols-2'>
        <div>
          <Image src={image_path} alt={name} width={500} height={500} />
          <div>
            <a href={github_url}>
              <AiFillGithub /> <span>Github</span>
            </a>
            <a href={deployed_url}>
              <AiFillProject /> <span>Project</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
