import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AppsIcon from '@material-ui/icons/Apps';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Link } from 'react-router-dom';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#b2ebf2',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    padding: theme.spacing(3),
  },
}));

const menuItems = [
  {
    listIcon: <AssignmentIndIcon />,
    listText: "About",
    listPath: "/about",
    buttonColor: "#b3e5fc"
  }, {
    listIcon: <AppsIcon />,
    listText: "Portfolio",
    listPath: "/portfolio",
    buttonColor: "#00acc1",
  }, {
    listIcon: <ContactMailIcon />,
    listText: "Contact",
    listPath: "/contact",
    buttonColor: "#9575cd",
  }
]

const NavBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          {menuItems.map((lstItm, key) => (
            <ListItem button key={key} component={Link} to={lstItm.listPath} >
              <ListItemIcon>{lstItm.listIcon}</ListItemIcon>
              <ListItemText primary={lstItm.listText} />
            </ListItem>
          ))}
          <ListItem button>
            <ListItemIcon><ContactMailIcon /></ListItemIcon>
            <ListItemText primary="Resume" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default NavBar;