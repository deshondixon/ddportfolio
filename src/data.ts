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
    image_path: '/images/openimg1.png',
    deployed_url: 'https://openimg.netlify.app/',
    github_url: 'https://github.com/orgs/Full-Stack-Fluency/repositories',
    category: ['react'],
    key_techs: ['react', 'mongodb', 'express', 'node'],
  },
  {
    name: 'Pigs and Bulls',
    description:
      'As a developer, I created a word-guessing game using React, JavaScript, and CSS. The game is similar to Wordle, in which the player is required to guess a 5-letter word. Upon guessing the word, the game will inform the player how many letters are correct (pigs) and how many words are correct and in the correct spot (bulls). I utilized React for the front-end of the game, allowing for a smooth and interactive user experience. The game logic was implemented using JavaScript, and the overall design and styling was achieved through the use of CSS. Overall, it was a great opportunity for me to further enhance my skills in these technologies and create a fun and engaging game for players.',
    image_path: '/images/pigs1.png',
    deployed_url: 'https://thewordgame.github.io/pigs-and-bulls/',
    github_url: 'https://github.com/thewordgame/pigs-and-bulls',
    category: ['react'],
    key_techs: ['react'],
  },
  {
    name: 'Ask Genie',
    description:
      'Ask genie any questions and an answer shall be granted. Utilizes chat-gpt api to answer any questions a user requests.',
    image_path: '/images/ask1.png',
    deployed_url: 'https://github.com/deshondixon/askgenie',
    github_url: 'https://github.com/deshondixon/askgenie',
    category: ['golang'],
    key_techs: ['golang'],
  },
  {
    name: 'Gallery of Horns',
    description:
      'User can view gallery of horned animals as well as 🖤 their favorite ones. There is also a drop down menu that allows the user to search by the amount of horns an animal has to narrow down their search. First, I decided to use React as the framework for my project because of its versatility and ability to efficiently render components. I also used JavaScript and CSS to add interactivity and styling to the project. Next, I began by setting up the basic structure of the app and creating the components that would be necessary, such as the gallery and the drop down menu. I also gathered a list of horned animals and their respective images and information that I wanted to include in the gallery. Once the basic structure was in place, I began implementing the functionality for the drop down menu. This involved adding the search functionality and handling the users input to filter the gallery accordingly. Next, I focused on styling the app to make it visually appealing and easy to navigate. This involved adding custom CSS styles and ensuring that the layout was responsive and looked good on different devices. Finally, I tested the app thoroughly to ensure that it was functioning correctly and made any necessary adjustments. Once I was satisfied with the result, I deployed the app and made it available for users to view and interact with via netlify.',
    image_path: '/images/gallery1.png',
    deployed_url: 'https://galleryofhornsdd.netlify.app',
    github_url: 'https://github.com/deshondixon/gallery-of-horns',
    category: ['react'],
    key_techs: ['react'],
  },
];
