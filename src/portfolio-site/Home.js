import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Button,
  CssBaseline, 
  Fade,
  Grid,
  Typography,
} from '@material-ui/core';

import Typed from 'react-typed';

import NavBar from './NavBar.js';

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
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };

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
            <Fade in={checked}>
            <Grid item>
              <Typography variant="h2">
                <Typed strings={["Brandon Lee"]} typeSpeed={40}/>
              </Typography>
            </Grid>
            </Fade>
            <Grid item>
            <Typography variant="h4">
              <Typed
                strings={["Aspiring Software Engineer", "Life-Long Learner", "Focused Problem Solver"]}
                typeSpeed={40}
                backSpeed={60}
                loop
              />
            </Typography>            
            </Grid>
            <Grid item className={classes.getStarted}>
              <Button variant="contained" href="/about">Get Started</Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Home;