import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  CssBaseline, 
  Grid,
  Typography,
} from '@material-ui/core';

import Typed from 'react-typed';

import NavBar from './NavBar.js';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerArea: {
    marginTop: '60px',
    margin: '0 auto',
  },
  getStarted: {
    marginTop: '30px',
  }
}));

const Home = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <NavBar />
          <Grid
            className={classes.headerArea}
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={1}
            lg={12}
            xs={12}
          >
            <Grid item lg={3} md={5} xs={8} justify="center" alignItems="center">
              <Typography variant="h2" align='center'>
                <Typed strings={["Brandon Lee Gaerlan"]} typeSpeed={40}/>
              </Typography>
            </Grid>
            <Grid item lg={5} md={5} xs={12}>
            <Typography variant="h5">
              <Typed
                strings={["Aspiring Software Engineer", "Life-Long Learner", "Focused Problem Solver"]}
                typeSpeed={40}
                backSpeed={60}
                loop
              />
            </Typography>            
            </Grid>
            <Grid item className={classes.getStarted}>
              <Button
                variant="contained"
                component={Link}
                to="/about"            
              >Get Started</Button>
            </Grid>
          </Grid>
      </div>
    </>
  );
}

export default Home;