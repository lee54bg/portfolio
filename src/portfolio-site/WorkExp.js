import React, { useState, useEffect } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  List,
  Paper,
  Typography,
} from '@material-ui/core';

import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '640px',
    margin: '0 auto',
  },
  timeLineCard: {
    flexGrow: 1,    
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
    ],
    accomplishments: [
      "Ensured 95% Device Visibility on a monthly cadence",
      "Increased one of Forescouts Product Line Device Discovery by 50%",
    ],
  }, {
    companyName: 'San Jose State University Research Foundation',
    jobTitle: 'Research Assistant',
    jobDescription: 'Worked on Device Classification',
    duration: '01/19 - 05/19',
    jobTasks: [
      "abc",
      "def",
      "ghi",
    ],
    accomplishments: [],
  }, {
    companyName: 'San Jose State University',
    jobTitle: 'IT Technician',
    jobDescription: 'Worked on Device Classification',
    duration: '11/17 - 05/19',
    jobTasks: [
      "abc",
      "def",
      "ghi",
    ],
    accomplishments: [],
  }, {
    companyName: 'Ericsson Telecommunications',
    jobTitle: 'Tech Writer',
    jobDescription: 'Worked on Device Classification',
    duration: '04/15 - 04/16',
    jobTasks: [
      "abc",
      "def",
      "ghi",
    ],
    accomplishments: [],
  }
];

function MobileTimeLine() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={1}
    >
      {timeLine.map((expItem, key) => (
        <Grid item lg={8} key={key}>
          <Paper elevation={7} className={classes.timeLineCard}>
            <Typography variant="h4">{expItem.companyName}</Typography>
            <Typography variant="h5" component="h1" style={{marginTop: '10px'}}>
              {expItem.jobTitle}
            </Typography>
            <Typography variant="h6" component="h1" style={{marginTop: '10px'}}>
              Key Contributions
            </Typography>
            <List dense={true}>
              {
                expItem.jobTasks.map((taskItemText, key2) => (
                <ListItem key={key2}>
                  <ListItemIcon>
                    <ArrowForwardIosOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={taskItemText}
                  />
                </ListItem>
              ))}
            </List>
            {expItem.accomplishments.length ? 
              (
                <>
                <Typography variant="h5" component="h1">
                  Accomplishments
                </Typography>
                <List dense={true}>
                  {expItem.accomplishments.map((item, key2) => (
                    <ListItem key={key2}>
                      <ListItemIcon>
                        <ArrowForwardIosOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                      />
                    </ListItem>
                  ))}
                </List>
                </>
              )
            : null}
            <Typography variant="h5" style={{marginTop: '10px'}}>{expItem.duration}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

function DesktopTimeLine() {
  const classes = useStyles();

  return (
    <Timeline >
      {timeLine.map((expItem, key) => (
        <TimelineItem key={key}>
          <TimelineOppositeContent>
            <Typography variant="h5">{expItem.duration}</Typography>
            <Typography variant="h6">{expItem.companyName}</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Grid item lg={8}>
              <Paper elevation={7} className={classes.timeLineCard}>
                <Typography variant="h5" component="h1">
                  {expItem.jobTitle}
                </Typography>
                <Typography variant="h6" component="h1" style={{marginTop: '10px'}}>
                  Key Contributions
                </Typography>
                {/* {notes.length ? notes : <p>Default Markup</p>} */}
                <List dense={true}>
                  {
                    expItem.jobTasks.map((taskItemText, key2) => (
                    <ListItem key={key2}>
                      <ListItemIcon>
                        <ArrowForwardIosOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={taskItemText}
                      />
                    </ListItem>
                  ))}
                </List>
                {expItem.accomplishments.length ? 
                  (
                    <>
                    <Typography variant="h5" component="h1">
                      Accomplishments
                    </Typography>
                    <List dense={true}>
                      {expItem.accomplishments.map((item, key2) => (
                        <ListItem key={key2}>
                          <ListItemIcon>
                            <ArrowForwardIosOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                          />
                        </ListItem>
                      ))}
                    </List>
                    </>
                  )
                : null}
              </Paper>
            </Grid>
              </TimelineContent>
        </TimelineItem>          
      ))}
    </Timeline>
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
        <Grid item xs={6} style={{borderStyle: 'none none solid none', marginBottom: '20px'}}>
          <Typography variant="h3" component="h1" >
            Work Experience
          </Typography>
        </Grid>
      </Grid>
      {
        isDesktop ? (
          <Grid item lg={12}>
            <DesktopTimeLine/ >
          </Grid>
        ) : (
          <MobileTimeLine/>
        )
      }
    </>
  );
}

export default WorkExp;