import React from 'react';
import NavBar from './NavBar.js';

import { makeStyles } from '@material-ui/core/styles';
import {
  Fab,
  Grid,
  Paper,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useScrollTrigger,
  Zoom
} from '@material-ui/core';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

import PropTypes from 'prop-types';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
    height: '350px',
    width: '800px',
  },
  timeLine: {
    marginRight: '200px',
  },
  tabs: {
    width: '400px',
    margin: '0 auto',
    marginTop: '-60px'
  },
  introArea: {
    marginTop: '30px',
    height: '480px',
    padding: theme.spacing(5),
  },
  introBody: {
    marginTop: '26px'
  }
}));

// Work experience goes here
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

function About(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <NavBar>
      <Paper square className={classes.tabs}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          centered
        >
          <Tab label="Work Experience" />
          <Tab label="Skills" />
        </Tabs>
      </Paper>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={6}>
          <Paper className={classes.introArea}>
            <Typography variant="h3">
              Brandon Lee
            </Typography>
            <Typography variant="h4">
              Software Engineering Graduate
            </Typography>
            <Typography variant="body1" className={classes.introBody}>
              Greetings, my name is Brandon.  I'm a Software Engineering Graduate seeking to further my skills in the industry.  I specialize in Networking Software
              and also like to learn more about different types of tech on my own free time.
            </Typography>
            <Typography variant="body1" className={classes.introBody}>
              I'm excited and passionate about being able to contribute my skills and efforts to not only help see the company grow but to also
              further my career within the Software Engineering space.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Timeline className={classes.timeLine}>
        {timeLine.map((expItem, key) => (
          <TimelineItem key={key}>
            <TimelineOppositeContent>
              <Typography variant="h4">{expItem.companyName}</Typography>
              <Typography variant="h5">{expItem.jobTitle}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator style={{height: '400px', }}>
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