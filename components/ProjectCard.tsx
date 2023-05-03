import { FunctionComponent, useState } from 'react';
import { IProject } from '../src/type';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { Modal, Image, Button, Text, Spacer, Badge } from '@nextui-org/react';
import React from 'react';

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
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  return (
    <div className='flex flex-col items-center justify-center gap-2 '>
      <Image
        onClick={handler}
        showSkeleton
        maxDelay={10000}
        src={image_path}
        alt={name}
        width={300}
        height={180}
        objectFit='scale-down'
      />
      <Button light onClick={handler} className='p-3'>
        <Text
          size={20}
          css={{
            textGradient: '45deg, $yellow600 -20%, $red600 100%',
          }}
          className='flex items-center justify-center text-3xl font-medium tracking-wider'
        >
          {name}
        </Text>
      </Button>

      <Modal
        scroll
        width='800px'
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
        closeButton
        blur
        className='flex items-center'
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header id='modal-title' className='flex flex-col w-96 h-96'>
          <Text
            size={32}
            css={{
              textGradient: '45deg, $yellow600 -20%, $red600 100%',
            }}
            weight='bold'
            className='flex items-center justify-center text-3xl font-medium tracking-wider'
          >
            {name}
          </Text>
          <Image src={image_path} alt={name} width={800} height={800} />
          <div className='flex flex-row'>
            <a href={github_url}>
              <AiFillGithub className='w-8 h-8' /> <span>Github</span>
            </a>
            <Spacer />
            <a href={deployed_url}>
              <AiFillProject className='w-8 h-8' /> <span>Project</span>
            </a>
          </div>
        </Modal.Header>

        <Modal.Body>
          <Text id='modal-description'>{description}</Text>
        </Modal.Body>
        <Modal.Footer>
          <div className='flex flex-wrap text-sm '>
            {key_techs.map((tech) => (
              <Badge
                color='secondary'
                disableOutline
                className='px-2 py-1 '
                variant='flat'
                key={tech}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectCard;
