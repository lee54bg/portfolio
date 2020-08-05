import React from 'react';
import NavBar from './NavBar.js';

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
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
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

import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import SchoolIcon from '@material-ui/icons/School';

import Education from './Education.js';

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

// Work experience goes here
const schoolTimeLine = [
  {
    schoolName: 'San Jose State University',
    degree: 'Masters',
    major: 'Software Engineering',
    gpa: '3.3',
    dateAttended: '01/17 - 05/19',
    location: 'San Jose, CA',
    courseWork: [
      "abc",
      "def",
      "ghi",
    ]
  }, {
    schoolName: 'DeVry University',
    degree: 'Bachelors',
    major: 'Computer Engineering Technology',
    gpa: '3.2',
    dateAttended: '08/11 - 01/15',
    location: 'Fremont, CA',
    courseWork: [
      "abc",
      "def",
      "ghi",
    ]
  }
];

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(15),
    border: '1px solid #dadde9',
  },
}))(Tooltip);


function About(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <NavBar>
      <Grid
        style={{marginTop: '-70px'}}
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item lg={6} xs={12}>
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
              I've had a variety of experiences in the tech industry ranging from being a Test Technician, to writing concise and easy to understand documentation
              as a Tech Writer, to having experience in IT Support.  I've finally steered my direction into Research during graduate school and after graduation.
              The various experiences I've had allows me to tackle problems from a variety of angles.
            </Typography>
            <Typography variant="body1" className={classes.introBody}>
              Currently, I am looking for an opportunity to grow as a Software Engineer and to contribute my efforts within the tech space.  
              I'm excited and passionate about being able to contribute my skills and efforts to not only help see the company grow but to also
              further my career within the Software Engineering space.
            </Typography>
          </Paper>
        </Grid>
        <Grid
          className={classes.tabs}
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
          item xs={8}
        >
          <Grid item>
            <Fab size="medium" color="secondary" aria-label="add">
              <WorkIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab size="medium" color="secondary" aria-label="add">
              <SchoolIcon />
            </Fab>
          </Grid>
          <Grid item>
            <Fab size="medium" color="secondary" aria-label="add">
              <BuildIcon />
            </Fab>
          </Grid>
        </Grid>
      </Grid>

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
            <TimelineSeparator style={{height: '400px', }}>
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
      
      <Education />
    </NavBar>
  );
}

export default About;