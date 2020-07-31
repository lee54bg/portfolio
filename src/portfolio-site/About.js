import React from 'react';
import NavBar from './NavBar.js';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';

import project1 from '../images/html-css-javascript-lg.jpg';
import project2 from '../images/javascript-fullstack.jpg';

const projectDetails = [
  {
    projectName: "Project 1",
    projectDetails: "Project 1",
    projectImage: project1,
  }, {
    projectName: "Project 2",
    projectDetails: "Project 2",
    projectImage: project2,
  }, {
    projectName: "Project 3",
    projectDetails: "Project 3",
    projectImage: project1,
  }
];

const portfolioStyle = {
  width: '90%',
  marginLeft: '10%',
};

const useStyles = makeStyles({
  cardContainer: {
    width: 400,
  },
  projectContainer: {
    paddingLeft: 100,
  },
  pro: {
    color: "Yellow"
  }
});

function About() {
  const classes = useStyles();

  return (
    <Box
      style={portfolioStyle}
    >
      <NavBar />
      <Grid container justify="center">
        <Typography>
          Hello from project          
        </Typography>
      </Grid>
    </Box>
  );
}

export default About;