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

function MobileTimeLine() {
  const classes = useStyles();

  return (
    schoolTimeLine.map((expItem, key) => (
      <Grid item lg={5} xs={12} key={key}>
        <Paper elevation={7} className={classes.acadCard}>
          <Typography variant="h4">{expItem.schoolName}</Typography>
          <Typography variant="h5">{expItem.major}</Typography>
          <Grid
            container
            direction="column"
            style={{marginTop: '20px'}}
          >
            <Grid
              direction="row"
              container
              item
              xs={12}
            >
              <Typography inline variant="h6" component="h1" left="left" style={{flexGrow: 1}}>
                {expItem.degree}
              </Typography>
              <Typography inline variant="h6" component="h1" align="right">
                GPA: {expItem.gpa}
              </Typography>                    
            </Grid>  
            <Grid
              direction="row"
              container
              item
              xs={12}
            >
              <Typography inline variant="h6" component="h1" left="left" style={{flexGrow: 1}}>
                {expItem.location}
              </Typography>
              <Typography inline variant="h6" component="h1" align="right">
                {expItem.dateAttended}
              </Typography>                    
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    ))
  );
}

function DesktopTimeLine() {
  const classes = useStyles();

  return (
    <Timeline >
      {schoolTimeLine.map((expItem, key) => (
        <TimelineItem key={key}>
          <TimelineOppositeContent>
            <Typography variant="h5">{expItem.dateAttended}</Typography>
            <Typography variant="h6">{expItem.schoolName}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator style={{height: '220px', }}>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={7} className={classes.academicCard}>
              <Grid
                container
                direction="column"
                spacing={1}
              >
                <Grid
                  direction="row"
                  spacing={1}
                  container
                  item
                  xs={12}
                >
                  <Typography inline variant="h6" component="h1" left="left" style={{flexGrow: 1}}>
                    {expItem.dateAttended}
                  </Typography>
                  <Typography inline variant="h6" component="h1" align="right">
                    GPA: {expItem.gpa}
                  </Typography>                    
                </Grid>  
                <Grid
                  direction="row"
                  spacing={1}
                  container
                  item
                  xs={12}
                >
                  <Typography inline variant="h6" component="h1" left="left" style={{flexGrow: 1}}>
                    GPA: {expItem.gpa}
                  </Typography>
                  <Typography inline variant="h6" component="h1" align="right">
                    {expItem.location}
                  </Typography>                    
                </Grid>  
              </Grid>
              {/* <Typography>
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
              </Typography> */}
            </Paper>
              </TimelineContent>
        </TimelineItem>          
      ))}
    </Timeline>
  );
}

const width = 700;

function Education(props) {
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Grid item xs={12}>
          <Typography variant="h3" component="h1" className={styles.education}>
            Education
          </Typography>
        </Grid>
        {
          isDesktop ? (
            <Grid item lg={12}>
              <DesktopTimeLine/ >
            </Grid>
          ) : (
            <MobileTimeLine />
          )
        }
      </Grid>
    </>
  );
}

export default Education;