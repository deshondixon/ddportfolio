import { IService, ISkill, IProject } from './type';
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

export const projects: IProject[] = [
  {
    name: 'CleanAir Compass',
    description:
      'A mapping interface and alert system for data from the open Purple Air network of citizen-run air quality sensors.',
    image_path: '/images/clean1.png',
    deployed_url: 'https://clean-air-compass-mzvbj.ondigitalocean.app/',
    github_url:
      'https://github.com/orgs/Oxygen-Oriented-Programming/repositories',
    category: ['python'],
    key_techs: ['python', 'react', 'django'],
  },
  {
    name: 'JobHunter',
    description:
      'An automated job application tool that uses web scraping to gather job listings from various job websites as well as utilizing regex to extract relevant information such as job title, company, and application link, and then uses remote APIs to gather information about the companies and the application process.',
    image_path: '/images/jobhunter5.png',
    deployed_url: 'https://github.com/CodingAcademics/JobHunter',
    github_url: 'https://github.com/CodingAcademics/JobHunter',
    category: ['python'],
    key_techs: ['python'],
  },
  {
    name: 'OpenImg',
    description:
      'OpenImg is an AI-powered image rendering platform that allows users to turn their creative ideas into realistic images. With OpenImg, users can simply input their desired image concept and the AI technology will generate a high-quality rendering of the image. The platform also features a login system where users can save their rendered images to their personal collection for future use or reference.',
    image_path: '/images/jobhunter5.png',
    deployed_url: 'https://github.com/CodingAcademics/JobHunter',
    github_url: 'https://github.com/orgs/Full-Stack-Fluency/repositories',
    category: ['react'],
    key_techs: ['react', 'mongodb', 'express', 'node'],
  },
];
