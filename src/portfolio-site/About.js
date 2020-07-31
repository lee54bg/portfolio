import React from 'react';
import NavBar from './NavBar.js';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    width: '30',
    position: 'fixed',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  displayArea: {
    marginTop: '100px',
    margin: '0 auto',
    width: '90%',
    height: '1000px',
    textAlign: 'center',
    overflow: 'auto',
  }
});

const portfolioStyle = {
  backgroundColor: 'tan',
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: drawerWidth,
  alignItems: 'center',
};

function About() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box style={portfolioStyle} >
      <NavBar />
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {["Introduction", "Work Experience", "Skills"].map((text, key) => (
            <Tab label={text} key={key}/>
          ))}
        </Tabs>
      </Paper>
      <Paper elevation={3} component="div" className={classes.displayArea}>
          asdfasdf
      </Paper>
    </Box>
  );
}

export default About;