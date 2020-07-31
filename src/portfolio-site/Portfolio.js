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
  Typography,
  Zoom
} from '@material-ui/core';

import project1 from '../images/html-css-javascript-lg.jpg';
import project2 from '../images/javascript-fullstack.jpg';

const drawerWidth = 240;

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
  backgroundColor: 'tan',
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: drawerWidth,
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

function Portfolio() {
  const classes = useStyles();

  return (
    <Box
      style={portfolioStyle}
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
                    <Typography gutterBottom variant="h5" className="classes.pro">
                      {projectItem.projectName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {projectItem.projectDetails}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Live Demo
                    </Button>
                  </CardActions>
              </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Portfolio;