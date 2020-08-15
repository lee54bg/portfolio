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
} from '@material-ui/core';

import Typed from 'react-typed';

const useStyles = makeStyles((theme) => ({
  academicCard: {
    height: '100px',
    width: '450px',
    padding: theme.spacing(3),
  },
  acadPaper: {
    flexGrow: 1,
  },
  introArea: {
    flexGrow: 1,
    marginTop: '30px',
    padding: theme.spacing(5),
  },
  introBody: {
    marginTop: '22px'
  },
  sections: {
    marginTop: '50px',
  },
  test: {
    margin: 'auto 0'
  },
  skillsCard: {
    flexGrow: 1,
    padding: theme.spacing(1),
  }
}));

// Work experience goes here
const skillsList = [
  {
    category: "Programming Language",
    skills: [
      "C/C++",
      "Java",
      "Python",
      "Bash Scripting"
    ]
  }, {
    category: "Operating Systems",
    skills: [
      "Windows",
      "Ubuntu",
      "Mac OS"
    ]
  }, {
    category: "Concepts",
    skills: [
      "Multithreading",
      "Data Structures",
      "Algorithms"
    ]
  }, {
    category: "Javascript",
    skills: [
      "ReactJS",
      "NodeJS"
    ]
  }, {
    category: "Configuration Management",
    skills: [
      "Ansible",
      "Puppet"
    ]
  }, {
    category: "SDN/NFV",
    skills: [
      "Ryu",
      "Floodlight"
    ]
  }, {
    category: "Version Control",
    skills: [
      "Git",
      "Perforce"
    ]
  }, {
    category: "Database",
    skills: [
      "MySQL",
      "MongoDB"
    ]
  }, {
    category: "Networking",
    skills: [
      "IPv4/IPv6",
      "TCP/IP"
    ]
  }
];


const width = 700;

function Skills(props) {
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
        <Grid item xs={12} justify="center" alignItems="center">
          <Typography variant="h3" component="h1" style={{borderStyle: 'none none solid none', marginBottom: '20px'}}>
            <Typed
                strings={["Skills"]}
                typeSpeed={40}
                backSpeed={60}
              />
          </Typography>
        </Grid>
        <Grid
          direction="row"
          justify="center"
          alignItems="center"  
          spacing={4}
          container
          item
          lg={6}
        >
          {
            skillsList.map((skill, key) => (
              <Grid item lg={4} xs={11} key={key}>
                <Paper className={classes.skillsCard}>
                  <Typography variant="h6">
                    {skill.category}
                  </Typography>
                  <List dense={true}>
                    {
                      skill.skills.map((item, key2) => (
                        <ListItem key={key2}>
                          <ListItemText
                            primary={item}
                          />
                        </ListItem>  
                      ))
                    }
                  </List>
                </Paper>
              </Grid>  
            ))
          }
        </Grid>
      </Grid>
    </>
  );
}

export default Skills;