import { FunctionComponent, useState } from 'react';
import { IProject } from '../src/type';
import { Text } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

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
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div>
      <Image
        showSkeleton
        maxDelay={10000}
        src={image_path}
        alt={name}
        className='cursor-pointer'
        onClick={() => setShowDetail(true)}
        width={300}
        height={180}
        objectFit='fill'
      />
      <Text
        size={30}
        css={{
          textGradient: '45deg, $yellow600 -20%, $red600 100%',
        }}
        weight='bold'
        className='my-2 text-3xl font-medium tracking-wider text-center'
      >
        {name}
      </Text>

      {showDetail && (
        <div className='grid md:grid-cols-2 '>
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
          <div>
            <h2>{name}</h2>
            <h3>{description}</h3>
            <div>
              {key_techs.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
          <button onClick={() => setShowDetail(false)}>
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
