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
    projectName: "",
    projectDetails: "",
    projectImage: "",
  }
];

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 1000,
  },
  projectContainer: {
    paddingLeft: 100,
  }
});

function Portfolio() {
  const classes = useStyles();

  return (
    <Box component="div" className="classes.mainContainer">
      <NavBar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={3}>
          <Grid container justify="center" spacing={2}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="5">
                    Project 1
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Project 1
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
        </Grid>

        {/* Project 2 */}
        <Grid item xs={3}>
          <Grid container justify="center" spacing={2}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 2"
                  height="140"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="5">
                    Project 2
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Project 2
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
        </Grid>

        {/* Project 3 */}
        <Grid item xs={3}>
          <Grid container justify="center" spacing={2}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="5">
                    Project 1
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Project 1
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
        </Grid>

      </Grid>
    </Box>
  );
}

export default Portfolio;