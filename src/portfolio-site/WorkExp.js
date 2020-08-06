import React, { useState, useEffect } from 'react';
import styles from './About.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Container,
  Fab,
  Grid,
  IconButton,
  ListItemText,
  ListItem,
  List,
  Paper,
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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  root: {
    width: '640px',
    margin: '0 auto',
  },
  timeLineCard: {
    height: '300px',
    width: '700px',
    padding: theme.spacing(3),
  },
  academicCard: {
    height: '130px',
    width: '400px',
    padding: theme.spacing(4),
  },
  acadPaper: {
    flexGrow: 1,
  },
  timeLine: {
    marginRight: '200px',
  },
  tabs: {
    marginTop: '60px',
    position: 'sticky',
    position: '-webkit-sticky',
  },
  introArea: {
    flexGrow: 1,
    marginTop: '30px',
    padding: theme.spacing(5),
  },
  introBody: {
    marginTop: '22px'
  },
  workExp: {
    marginTop: '22px',
  },
  sections: {
    marginTop: '50px',
  },
  test: {
    margin: 'auto 0'
  },
  acadCard: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

// Work experience goes here
const timeLine = [
  {
    companyName: 'Forescout Technologies',
    jobTitle: 'Research Engineering Intern',
    jobDescription: 'Worked on Device Classification',
    duration: '06/19 - 06/20',
    jobTasks: [
      "abc",
      "def",
      "ghi",
    ]
  }, {
    companyName: 'San Jose State University Research Foundation',
    jobTitle: 'Research Assistant',
    jobDescription: 'Worked on Device Classification',
    duration: '01/19 - 05/19',
    jobTasks: [
      "abc",
      "def",
      "ghi",
    ]
  }, {
    companyName: 'San Jose State University',
    jobTitle: 'IT Technician',
    jobDescription: 'Worked on Device Classification',
    duration: '11/17 - 05/19',
    jobTasks: [
      "abc",
      "def",
      "ghi",
    ]
  }, {
    companyName: 'Ericsson Telecommunications',
    jobTitle: 'Tech Writer',
    jobDescription: 'Worked on Device Classification',
    duration: '04/15 - 04/16',
    jobTasks: [
      "abc",
      "def",
      "ghi",
    ]
  }
];

function MobileTimeLine() {
  const classes = useStyles();

  return (
    <div></div>
  );
}

function DesktopTimeLine() {
  const classes = useStyles();

  return (
    <div></div>
  );
}

const width = 700;

function WorkExp(props) {
  const classes = useStyles();
  const [isDesktop, setDesktop] = useState(window.innerWidth > width);
  const [value, setValue] = React.useState(0);


  const updateMedia = () => {
      setDesktop(window.innerWidth > width);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
        className={classes.sections}
      >
        <Grid item xs={6} style={{borderStyle: 'none none solid none'}}>
          <Typography variant="h3" component="h1" >
            Work Experience
          </Typography>
        </Grid>
      </Grid>
      <Timeline >
        {timeLine.map((expItem, key) => (
          <TimelineItem key={key}>
            <TimelineOppositeContent>
              <Typography variant="h5">{expItem.duration}</Typography>
              <Typography variant="h6">{expItem.companyName}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator style={{height: '350px', }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={7} className={classes.timeLineCard}>
                <Typography variant="h5" component="h1">
                  {expItem.jobTitle}
                </Typography>
                <Typography>
                <List dense={true}>
                  {
                    expItem.jobTasks.map((taskItemText, key2) => (
                    <ListItem key={key2}>
                      <ListItemText
                        primary={taskItemText}
                      />
                    </ListItem>
                  ))}
                </List>
                </Typography>
              </Paper>
                </TimelineContent>
          </TimelineItem>          
        ))}
      </Timeline>
    </>
  );
}

export default WorkExp;