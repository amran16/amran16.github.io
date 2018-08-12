import React from 'react';
import '../Styles/projectsListItem.css';


const ProjectsListItem  = ({ project }) => {

  const { name, image, url, detail } = project;

  return (
     <li className='list-item'>
      <img className='list-image' src={image} alt={name} /> 
      <div className='list-content'>
        <h1>{name}</h1>
        <p>{detail}</p>
       <div className='list-links-container'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            Site
        </a>
      </div>
    </div>
   </li>

  );
};

export default ProjectsListItem;


