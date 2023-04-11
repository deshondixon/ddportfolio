import { RiComputerLine } from 'react-icons/ri';
import { IconType } from 'react-icons';

interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export const services: IService[] = [
  {
    title: 'Frontend Dev',
    about: 'lorem....',
    Icon: 'RiComputerLine',
  },
  {
    title: 'title',
    about: 'lorem....',
    Icon: 'RiComputerLine',
  },
];
