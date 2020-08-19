import React from 'react';
import './App.css';

import Home from './portfolio-site/Home';
import About from './portfolio-site/About.js';
import Contact from './portfolio-site/Contact.js';
import Portfolio from './portfolio-site/Portfolio.js';
import ParticlesContainer from './portfolio-site/ParticlesContainer';

import { Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch } from 'react-router-dom';
import Particles from 'react-particles-js';

// https://stackoverflow.com/questions/46586165/react-conditionally-render-based-on-viewport-size

function App() {
  return (
    <div className="App-header">
      <CssBaseline />
      <Switch>
        <Route exact path="/portfolio" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;