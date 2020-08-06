import React from 'react';
import SendIcon from '@material-ui/icons/Send';

import { makeStyles } from '@material-ui/core/styles';
import { 
  TextField,
  Typography,
  Button, 
  Grid, 
  Box, 
  withStyles
} from '@material-ui/core'

import { sizing } from '@material-ui/system';
import NavBar from './NavBar.js';
import Typed from 'react-typed';

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
  },
  messageForm: {
    height: '150px',
    width: '250px'
  },
  contactMsg: {
    borderStyle: 'none none solid none',
    marginBottom: '10px'
  }
}));

const InputField = withStyles({
})(TextField);

const onMouseOver = event => {
  const el = event.target;
  let colorhex = [
    "#7AF377",
    "#3498DB",
    "#F1C530",
    "#F29C29",
    "#8E44AD",
    "#4AA086",
    "#E74C3C",
    "#65CC71",
    "#D3541B",
    "#EB4367",
    "#74F7D9",
    "#DDA8FC"
  ];
  el.style.color = colorhex[Math.floor(Math.random() * 12)];
};

const onMouseOut = event => {
  const el = event.target;
  let black = "#000000";
  el.style.color = black;
};

// height of the TextField
const height = 200;

function Contact() {
  const classes = useStyles();

  return (
    <NavBar>
      <Grid className={classes.form}   
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid container lg={5} md={5} x={5} xs={12}>
          <div className={classes.contactMsg}>
            <Typography variant="h4">
              <Typed
                strings={["Have an idea?", "Need some assistance?"]}
                typeSpeed={40}
                backSpeed={60}
                loop
              />
            </Typography>
          </div>
          <InputField
            fullWidth={true}
            label="Full Name" 
            variant="outlined"
            margin="dense"
            size="large"
            />
          <br/>
          <InputField 
            fullWidth={true} 
            label="Email Address" 
            variant="outlined"
            margin="dense"
            size="large"/>
          <br/>
          <InputField fullWidth={true} label="Subject" variant="outlined"
            margin="dense"
            size="large"/>
          <br/>
          <InputField
            fullWidth={true} 
            label="Message"
            variant="outlined"
            margin="dense"
            size="large"
            multiline
            /* styles the input component */
            inputProps={{
              style: {
                height,
              },
            }}
          />
          <br/>
          <Button variant="contained" endIcon={<SendIcon />} color="primary">
            Contact Me
          </Button>
        </Grid>
      </Grid>
    </NavBar>
  );
}

export default Contact;