import React, { Component } from 'react';
import '../Styles/app.css';
import Home from "./Home";
import Projects from './Projects'
import Footer from './Footer';


class App extends Component {
  render() {
    return (
        <div className='Site'>
          <div className='Site-content'>
            <div className=''>
              <Home />
              <Projects />
            </div>
          </div>
         <Footer />
        </div>
    );
  }
}

export default App;
