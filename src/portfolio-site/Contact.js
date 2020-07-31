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



const portfolioStyle = {
  width: '90%',
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


function Contact() {
  return (
    <Box style={portfolioStyle}>
        <NavBar />
        <Grid container justify="center">
        <Box component="form">
          <Typography variant="h5">
            Hire or contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Full Name" 
            variant="outlined"
            margin="dense"
            size="medium"
            />
          <InputField 
            fullWidth={true} 
            label="Email Address" 
            variant="outlined"
            margin="dense"
            size="medium"/>
          <InputField fullWidth={true} label="Subject" variant="outlined"
            margin="dense"
            size="medium"/>
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            margin="dense"
            size="medium"/>
          <Button variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
            Contact Me
          </Button>
        </Box>
        </Grid>
    </Box>
  );
}

export default Contact;