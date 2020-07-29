import React from 'react';
import './App.css';

import Home from './portfolio-site/Home';
import Header from './portfolio-site/Header.js';
import Portfolio from './portfolio-site/Portfolio.js';
import NavBar from './portfolio-site/Header.js';

import { Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <>
      <CssBaseline />
      {/* <Header /> */}
      {/* <NavBar /> */}
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/portfolio" component={Portfolio} /> */}
      {/* <Route path="/portfolio" component={Portfolio} /> */}
    </>
  );
}

export default App;