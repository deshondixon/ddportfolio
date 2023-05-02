import { projects } from '../data';

const Projects = () => {
  return (
    <div>
      <div className='px-6 py-2'>
        <nav>Navbar</nav>
      </div>
      {projects.map((projects) => (
        <div>
          <ProjectCard />
        </div>
      ))}
    </div>
  );
};

export default Projects;
