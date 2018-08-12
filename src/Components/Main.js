import React, { Component } from 'react';
import {Switch, Route } from "react-router-dom";
import Home from "./Home";
import Projects from './Projects'
import '../Styles/main.css'


class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/Projects" component={Projects} />
        </Switch>
      </div>
    );
  }
}

export default Main;
