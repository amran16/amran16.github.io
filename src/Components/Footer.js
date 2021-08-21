import React from 'react';
import { Icon } from 'semantic-ui-react'
import '../Styles/footer.css'


const Footer = () => {
  return (
    <div>
    <div className='footer-container'>
     <div className='footer-links'>
      <a   href='mailto:maryamg99@gmail.com'
           rel='noopener noreferrer' 
      >
      <Icon  name='mail' size='big'/>
      </a>
          <a
            href='https://github.com/amran16'
            target='blank'
            rel='noopener noreferrer' 
          >
           <Icon  name='github square' size='big'/>
          
          </a>
        <a  
           href='https://www.linkedin.com/in/maryamgulaid/'
            target="blank"
            rel='noopener noreferrer'
          >
           <Icon name='linkedin' size='big'/>
          </a>
      </div>
     </div>
   </div>
  )
}

export default Footer;
