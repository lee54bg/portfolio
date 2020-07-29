import React from 'react';
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';

const useStyles = makeStyles(theme => ({
   title: {
      color: "tan",
   },
   subtitle: {
      color: "tan",
   },
   typedContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      textAlign: "center",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
   }
}));

const Header = () => {
   const classes = useStyles();
   
	return (
		<Box className={classes.typedContainer}>
         <Typography className={classes.title} variant="h4">
            <Typed strings={["Brandon Lee"]} typeSpeed={40}/>
         </Typography>
         <Typography className={classes.title} variant="h5">
            <Typed
               strings={["Software Engineer", "DevOps"]}
               typeSpeed={40}
               backSpeed={60}
               loop
            />
         </Typography>
		</Box>
   )
}

export default Header;