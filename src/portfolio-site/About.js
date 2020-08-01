import React from 'react';
import NavBar from './NavBar.js';

import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Paper,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@material-ui/core';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const drawerWidth = 240;

const useStyles = makeStyles({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  root: {
    width: '640px',
    margin: '0 auto',
  },
  displayArea: {
    backgroundColor: '#73e8ff',
    marginTop: '100px',
    margin: '0 auto',
    width: '90%',
    height: '1000px',
    textAlign: 'center',
    overflow: 'auto',
  },
  testDiv: {
    backgroundColor: 'blue',
    width: '300px',
    height: '300px',
    margin: '0 auto',
  },
  timeLineCard: {
    height: '300px',
    width: '100%',
  }
});

const timeLine = [
  {
    companyName: 'Forescout Technologies',
    jobTitle: 'Research Engineering Intern',
    jobDescription: 'Worked on Device Classification',
  }, {
    companyName: 'Forescout Technologies',
    jobTitle: 'Research Engineering Intern',
    jobDescription: 'Worked on Device Classification',
  }, {
    companyName: 'Forescout Technologies',
    jobTitle: 'Research Engineering Intern',
    jobDescription: 'Worked on Device Classification',
  }
];


function About() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
// Scroll = Paper
// Back to Top
  return (
    <NavBar>
      <Timeline align="alternate">
        {timeLine.map((expItem, key) => (
          <TimelineItem key={key}>
            <TimelineSeparator style={{height: '500px'}}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={7} className={classes.timeLineCard}>
                <Typography variant="h6" component="h1">
                  {expItem.jobTitle}
                </Typography>
                <Typography>
                  {expItem.jobTitle}
                </Typography>
              </Paper>
                </TimelineContent>
          </TimelineItem>          
        ))}
      </Timeline>
    </NavBar>
  );
}

export default About;