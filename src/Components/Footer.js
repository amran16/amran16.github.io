import React from 'react';
import { Icon } from 'semantic-ui-react'
import '../Styles/footer.css'
//import { FaBeer } from 'react-icons/fa';

const Footer = props => {
  return (
    <div>
    <div className='footer-container'>
     <div className='footer-links'>
        
      <a   href='mailto:maryamg99@gmail.com'
            rel='noopener'
            
      >
      <Icon  name='mail' size='big'/>
      <br />
      </a>
          <a
            href='https://github.com/amran16'
            target='blank'
            rel='noopener'
            
          >
           <Icon  name='github square' size='big'/>
           <br /> 
          </a>
        <a  
           href='https://www.linkedin.com/in/maryamgulaid/'
            target="blank"
            rel='noopener'
          >
           <Icon name='linkedin' size='big'/>
           <br /> 
          </a>
          
      </div>
       
     
    
    </div>
    <div className='copy'> &copy; 2018 Maryam Gulaid</div>
    
     </div>
  )
}

export default Footer;
