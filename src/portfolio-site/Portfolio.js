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

const drawerWidth = 500;

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

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
    left: 1000,
    color: "Yellow"
  },
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

function Portfolio() {
  const classes = useStyles();

  return (
    <>
    <div
      className="classes.mainContainer"
    >
      <NavBar />
      <Grid container spacing={8} justify="center">
        {projectDetails.map((projectItem, key) => (
          <Grid key={key} item>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={projectItem.projectImage}
                />
                <CardContent>
                  <Typography gutterBottom variant="5" className="classes.pro">
                    {projectItem.projectName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {projectItem.projectDetails}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>        
        ))}
      </Grid>
    </div>
    </>
  );
}

export default Portfolio;