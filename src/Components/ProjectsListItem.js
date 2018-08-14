import React from 'react';
import '../Styles/projectsListItem.css';


const ProjectsListItem  = ({ project }) => {

  const { name, image, url, github, description } = project;

  return (
     <li className='list-item'>
      <img className='list-image' src={image} alt={name} /> 
      <div className='list-content'>
        <h1>{name}</h1>
        <p>{description}</p>
       <div className='list-links-container'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            Site 
          </a>
          |
          <a href={github} target='_blank' rel='noopener noreferrer'>
            Source
          </a>
      </div>
    </div>
   </li>

  );
};

export default ProjectsListItem;


