import { FunctionComponent, useState } from 'react';
import { IProject } from '../src/type';
import { Image } from '@nextui-org/react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { Modal, Input, Row, Checkbox, Button, Text } from '@nextui-org/react';
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
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Image
        onClick={handler}
        showSkeleton
        maxDelay={10000}
        src={image_path}
        alt={name}
        width={300}
        height={180}
        objectFit='fill'
      />
      <Button light onPress={handler} className='p-3'>
        <Text
          size={20}
          css={{
            textGradient: '45deg, $yellow600 -20%, $red600 100%',
          }}
          weight='bold'
          className='flex items-center justify-center text-3xl font-medium tracking-wider'
        >
          {name}
        </Text>
      </Button>

      <Modal
        closeButton
        blur
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Image src={image_path} alt={name} width={500} height={500} />
        </Modal.Header>

        <Modal.Body>
          <h2>{name}</h2>
          <h3>{description}</h3>

          {key_techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <a href={github_url}>
            <AiFillGithub /> <span>Github</span>
          </a>
          <a href={deployed_url}>
            <AiFillProject /> <span>Project</span>
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectCard;
