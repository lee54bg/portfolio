import React from 'react';
import NavBar from './NavBar.js';

// import styles from './About.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Fab,
  Grid,
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
import WorkExp from './WorkExp.js';

const useStyles = makeStyles((theme) => ({
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
  test: {
    margin: 'auto 0'
  },
}));

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
            <HtmlTooltip title="Work Experience" placement="down">
              <Fab size="medium" color="secondary" aria-label="add">
                <WorkIcon />
              </Fab>
            </HtmlTooltip>
          </Grid>
          <Grid item>
            <HtmlTooltip title="Academic" placement="down">
              <Fab size="medium" color="secondary" aria-label="add">
                <SchoolIcon />
              </Fab>
            </HtmlTooltip>
          </Grid>
          <Grid item>
            <HtmlTooltip title="Skills" placement="down">
              <Fab size="medium" color="secondary" aria-label="add">
                <BuildIcon />
              </Fab>
            </HtmlTooltip>
          </Grid>
        </Grid>
      </Grid>

      <WorkExp />
      <Education />
    </NavBar>
  );
}

export default About;