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

function Portfolio() {
  return (
    <Box>
      <NavBar />
      <Grid container justify="center" alignItems="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card>
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
    </Box>
  );
}

export default Portfolio;