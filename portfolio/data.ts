import { IService, ISkill } from './type';
import { FaServer } from 'react-icons/fa';
import { BsCircleFill } from 'react-icons/bs';
import { RiComputerLine } from 'react-icons/ri';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      '<b>HTML</b>, <b>CSS</b>, <b>Javascript</b>, <b>Typescript</b>, <b>Tailwind</b>, <b>Bootstrap</b>, <b>React.js</b>, <b>React Native</b>, <b>Next.js</b>, <b>Chakra UI</b>, and <b>Astro</b>',
  },
  {
    Icon: FaServer,
    title: 'Backend Development',
    about: 'Python, Django, Flask, Node.js, Express.js, Golang',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about:
      'I can develop robust REST APIs using <b>django-rest-api</b> & <b>Node API</b> ',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX Design',
    about:
      'Stunning user interface design using <b>Figma</b> and <b>Framer</b>',
  },
];

export const languages: ISkill[] = [
  {
    name: 'Python',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    Icon: BsCircleFill,
    name: 'JavaScript',
    level: '60%',
  },
  {
    Icon: BsCircleFill,
    name: 'Python',
    level: '70%',
  },
  {
    Icon: BsCircleFill,
    name: 'Python',
    level: '70%',
  },
  {
    Icon: BsCircleFill,
    name: 'Python',
    level: '70%',
  },
];
