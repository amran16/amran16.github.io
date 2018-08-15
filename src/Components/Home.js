import React from 'react';
import { Icon } from 'semantic-ui-react';
//import { FaEnvelope } from "react-icons/fa";

import '../Styles/home.css'

const Home = () => {
  return(
    <div className='home-wrapper'>
      <div className='info-container'>
        <h1 className='name'>Maryam Gulaid</h1>
        <h3 className='title'>Full Stack Developer</h3>
        <p className='about'>Hi, I am an online-taught developer thru various sources based in Oakland, CA.</p>
        <div className='social-container'>
          <a   href='mailto:maryamg99@gmail.com'
               target='_blank'
               rel='noopener noreferrer'
          >
          <Icon  name='mail' size='big'/>
          Email
        </a>
          <a
            href='https://github.com/amran16'
            target='_blank'
            rel='noopener noreferrer'
          >
           <Icon  name='github square' size='big'/>
           Github
          </a>
        <a  
           href='https://www.linkedin.com/in/maryamgulaid/'
            target="_blank"
            rel='noopener noreferrer'
          >
           <Icon name='linkedin' size='big'/>
           Linkedin
          </a>
          </div>
      </div>
    </div>
  )
}

export default Home;
