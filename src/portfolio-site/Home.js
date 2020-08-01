import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from './NavBar.js';
import Header from './Header.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Header />
        <CssBaseline />
        <NavBar />
      </div>
    </>
  );
}

export default Home;