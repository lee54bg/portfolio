import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Button,
  CssBaseline, 
  Grid,
  Typography,
} from '@material-ui/core';

import Typed from 'react-typed';

import NavBar from './NavBar.js';
import Header from './Header.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerArea: {
    marginTop: '100px',
    margin: '0 auto',
  },
  getStarted: {
    marginTop: '30px',
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
        <div>
          <Grid
            className={classes.headerArea}
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <Typography variant="h2">
                <Typed strings={["Brandon Lee"]} typeSpeed={40}/>
              </Typography>
            </Grid>
            <Grid item>
            <Typography variant="h4">
              <Typed
                strings={["Aspiring Software Engineer", "Life-long Learner", "Focused Problem Solver"]}
                typeSpeed={70}
                backSpeed={60}
                loop
              />
            </Typography>            
            </Grid>
            <Grid item className={classes.getStarted}>
              <Button variant="contained">Get Started</Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Home;