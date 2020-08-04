import React from 'react';
import NavBar from './NavBar.js';

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
import AddIcon from '@material-ui/icons/Add';

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
    height: '300px',
    width: '700px',
    padding: theme.spacing(4),
  },
  academicCard: {
    height: '250px',
    width: '700px',
    padding: theme.spacing(4),
  },
  timeLine: {
    marginRight: '200px',
  },
  tabs: {
    width: '480px',
    margin: '0 auto',
    marginTop: '-60px'
  },
  introArea: {
    marginTop: '30px',
    height: '480px',
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
  margin: {
    margin: '0 auto',
  },
}));

// Work experience goes here
const timeLine = [
  {
    companyName: 'Forescout Technologies',
    jobTitle: 'Research Engineering Intern',
    jobDescription: 'Worked on Device Classification',
    jobTasks: [
      "abc",
      "def",
      "ghi",
    ]
  }, {
    companyName: 'San Jose State University Research Foundation',
    jobTitle: 'Research Assistant',
    jobDescription: 'Worked on Device Classification',
    jobTasks: [
      "abc",
      "def",
      "ghi",
    ]
  }, {
    companyName: 'San Jose State University',
    jobTitle: 'IT Technician',
    jobDescription: 'Worked on Device Classification',
    jobTasks: [
      "abc",
      "def",
      "ghi",
    ]
  }, {
    companyName: 'San Jose State University',
    jobTitle: 'IT Technician',
    jobDescription: 'Worked on Device Classification',
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
    degree: 'Masters in Software Engineering',
    gpa: '3.3',
    dateAttended: '01/17 - 05/19',
    courseWork: [
      "abc",
      "def",
      "ghi",
    ]
  }, {
    schoolName: 'DeVry University',
    degree: 'Bachelors in Computer Engineering Technology',
    gpa: '3.2',
    dateAttended: '08/11 - 01/15',
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
      {/* <div>
        <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
        <Fab size="medium" color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </div> */}
      <Paper square className={classes.tabs}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          centered
        >
          <Tab label="Experience" />
          <Tab label="Education" />
          <Tab label="Skills" />
        </Tabs>
      </Paper>
      <Grid
        container
        direction="column"
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
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
        className={classes.sections}
      >
        <Grid item xs={6}>
          <Typography variant="h3" component="h1" >
            Work Experience
          </Typography>
        </Grid>
      </Grid>

      <Timeline >
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

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
        className={classes.sections}
      >
        <Grid item xs={6}>
          <Typography variant="h3" component="h1" >
            Education
          </Typography>
        </Grid>
      </Grid>

      <Timeline >
        {schoolTimeLine.map((expItem, key) => (
          <TimelineItem key={key}>
            <TimelineOppositeContent>
              <Typography variant="h4">{expItem.schoolName}</Typography>
              <Typography variant="h5">{expItem.degree}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator style={{height: '350px', }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={7} className={classes.academicCard}>
                <Typography variant="h6" component="h1">
                  Date Attended: {expItem.dateAttended}
                </Typography>
                <Typography variant="h6" component="h1">
                  GPA: {expItem.gpa}
                </Typography>
                <Typography>
                <List dense={true}>
                  {
                    expItem.courseWork.map((taskItemText, key2) => (
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
    </NavBar>
  );
}

export default About;