import React from 'react';
import projects from '../Assets/projectsInfo';
import ProjectsListItem from './ProjectsListItem'
import '../Styles/projects.css';

const Projects = () => {

  const projectlist = projects.map((project) => {
    return(
       <ProjectsListItem
         key={project.name}
         project={project}
       />
    )
  })

  return (
    <div>
      <div className='projects-container'>
        <h1>Projects</h1>
      </div>
      <ul className='projects-list'>{projectlist}</ul>
    </div>
  )
}

export default Projects;
