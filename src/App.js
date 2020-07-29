import React from 'react';
import './App.css';

import Home from './portfolio-site/Home';
import About from './portfolio-site/About.js';
import Contact from './portfolio-site/Contact.js';
import Portfolio from './portfolio-site/Portfolio.js';

import { Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </>
  );
}

export default App;