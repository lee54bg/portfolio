import React from 'react';
import NavBar from './NavBar.js';

import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Chip,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Snackbar,
  Typography,
  Zoom
} from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import MuiAlert from '@material-ui/lab/Alert';

import project1 from '../images/html-css-javascript-lg.jpg';
import project2 from '../images/javascript-fullstack.jpg';

const projectDetails = [
  {
    projectName: "Project 1",
    projectDetails: "Project 1",
    projectImage: project1,
    projectStack: ["ReactJS"],
  }, {
    projectName: "Project 2",
    projectDetails: "Project 2",
    projectImage: project2,
    projectStack: ["Java"],
  }, {
    projectName: "Project 3",
    projectDetails: "Project 3",
    projectImage: project1,
    projectStack: ["Python"],
  }, {
    projectName: "Project 3",
    projectDetails: "Project 3",
    projectImage: project1,
    projectStack: ["SDN"],
  },
];

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    flexGrow: 1,
  },
  projectContainer: {
    paddingLeft: 100,
  },
  pro: {
    color: "Yellow"
  },
  chipArea: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  buttonRow: {
    marginTop: '-60px',
    marginBottom: '20px',
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function Portfolio() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [snackBar, setSnackBar] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const [category, setCategory] = React.useState(projectDetails);

  const handleSnackBar = () => {
    setSnackBar(true);
  }

  const snackBarClose = () => {
    setSnackBar(false);
  }

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const descriptionElementRef = React.useRef(null);

  function findCategory(category) {
    var newArray = [];

    switch(category) {
      case 'ReactJS':
        newArray = projectDetails.filter(item => {
          return item.projectStack.includes(category)
        });
        
        console.log(newArray);
        setCategory(newArray);

        break;
      case 'SDN':
        newArray = projectDetails.filter(item => {
          return item.projectStack.includes(category)
        });
        
        console.log(newArray);
        setCategory(newArray);

        break;
      case 'all':
        setCategory(projectDetails);
      default:
        setCategory(projectDetails);
    }
  }

  return (
    <NavBar>
      <Grid
        className={classes.buttonRow}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <Button variant="contained" onClick={() => findCategory("all")}>All</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => findCategory("ReactJS")}>
            React.js
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => findCategory("SDN")}>
            Software-Defined Networks
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            CI/CD
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Java
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Python
          </Button>
        </Grid>
      </Grid>
      <Snackbar open={snackBar} autoHideDuration={6000} onClose={snackBarClose}>
        <Alert onClose={snackBarClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(5)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </DialogContentText>
          <div className={classes.chipArea}>
            <Chip label="Basic" />
            <Chip label="Basic" />
            <Chip label="Basic" />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container spacing={7} justify="center" lg={12}>
        {category.map((projectItem, key) => (
          <Grid key={key} item lg={4}>
              <Card className={classes.cardContainer}>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={projectItem.projectImage}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" className="classes.pro">
                    {projectItem.projectName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {projectItem.projectDetails}
                  </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={handleSnackBar}>
                      GitHub
                    </Button>
                    <Button size="small" color="primary" onClick={handleClickOpen('paper')}>
                      Learn More
                    </Button>
                  </CardActions>
              </Card>
          </Grid>
        ))}
      </Grid>      
    </NavBar>
  );
}

export default Portfolio;