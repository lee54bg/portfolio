import React from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {
  IconButton,
  Paper,
  Tab,
  Tabs,
  Tooltip,
} from '@material-ui/core';

import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Link } from 'react-router-dom';

const drawerWidth = 70;

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
  tabs: {
    width: '640px',
    margin: '0 auto',
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

const menuItems = [
  {
    listIcon: <AssignmentIndIcon />,
    listText: "About",
    listPath: "/about",
  }, {
    listIcon: <AppsIcon />,
    listText: "Portfolio",
    listPath: "/portfolio",
  }, {
    listIcon: <ContactMailIcon />,
    listText: "Contact",
    listPath: "/contact",
  }
]

const NavBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{height: '80px'}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Paper className={classes.tabs}>
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              centered
            >
            {["Introduction", "Work Experience", "Skills"].map((text, key) => (
              <Tab label={text} key={key}/>
            ))}
            </Tabs>
          </Paper>
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
            <HtmlTooltip title={lstItm.listText} placement="right" key={key}>
              <ListItem component={Link} to={lstItm.listPath} >
                <ListItemIcon>{lstItm.listIcon}</ListItemIcon>
                <ListItemText primary={lstItm.listText} />
              </ListItem>
            </HtmlTooltip>
          ))}
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