import { IService, ISkill } from './type';
import { FaFigma, FaPython, FaReact, FaServer } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { RiComputerLine } from 'react-icons/ri';
import { SiDjango, SiFramer, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
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
    Icon: FaPython,
    name: 'Python',
    level: '70%',
  },
  {
    Icon: TbBrandJavascript,
    name: 'JavaScript',
    level: '85%',
  },
  {
    Icon: FaReact,
    name: 'React',
    level: '70%',
  },
  {
    Icon: SiDjango,
    name: 'Django',
    level: '80%',
  },
  {
    Icon: SiTailwindcss,
    name: 'Tailwind',
    level: '80%',
  },
];

export const tools: ISkill[] = [
  {
    name: 'Figma',
    level: '85%',
    Icon: FaFigma,
  },
  {
    Icon: SiFramer,
    name: 'Framer',
    level: '45%',
  },
  {
    Icon: SiNextdotjs,
    name: 'Next UI',
    level: '70%',
  },
];
