import React from 'react';
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';

const useStyles = makeStyles(theme => ({
   title: {
      color: "#1b1b1b",
   },
   subtitle: {
      color: "#1b1b1b",
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
         <Typography className={classes.title} variant="h2">
            <Typed strings={["Brandon Lee"]} typeSpeed={40}/>
         </Typography>
         <Typography className={classes.title} variant="h4">
            <Typed
               strings={["Aspiring Software Engineer", "Life-long Learner", "Focused Problem Solver"]}
               typeSpeed={40}
               backSpeed={60}
               loop
            />
         </Typography>
		</Box>
   )
}

export default Header;