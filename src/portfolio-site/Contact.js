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

import NavBar from './NavBar.js';

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute"
  },
}));

const portfolioStyle = {
  marginLeft: '10%',
};

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      }
    },
  },
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


function Contact() {
  const classes = useStyles();

  return (
    <Box style={portfolioStyle}>
        <NavBar />
        <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5"
            onMouseEnter={event => onMouseOver(event)}
            onMouseOut={event => onMouseOut(event)}
          >
            Hire or contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Full Name" 
            variant="outlined"
            margin="dense"
            size="medium"
            />
          <br/>
          <InputField 
            fullWidth={true} 
            label="Email Address" 
            variant="outlined"
            margin="dense"
            size="medium"/>
          <br/>
          <InputField fullWidth={true} label="Subject" variant="outlined"
            margin="dense"
            size="medium"/>
          <br/>
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            margin="dense"
            size="medium"/>
          <br/>
          <Button variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
            Contact Me
          </Button>
        </Box>
        </Grid>
    </Box>
  );
}

export default Contact;