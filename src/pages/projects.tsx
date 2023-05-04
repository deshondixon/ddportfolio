import ProjectCard from '../../components/ProjectCard';
import ProjectsNavbar from '../../components/ProjectsNavbar';
import { projects as projectsData } from '../data';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Category } from '../type';
import { fadeInUp, stagger } from '../animations';

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState('all');

  const handlerFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((projects) =>
      projects.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className='px-5 py-2 overflow-y-scroll' style={{ height: '65vh' }}>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div
        className='relative grid grid-cols-12 gap-4 my-3'
        variants={stagger}
        initial='initial'
        animate='animate'
      >
        {projects.map((project) => (
          <motion.div
            className='col-span-12 p-2 glassProjectCard sm:col-span-6 lg:col-span-4'
            key={project.name}
            variants={fadeInUp}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
