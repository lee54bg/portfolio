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
  Badge,
  Grid,
  IconButton,
  Paper,
  Tab,
  Tabs,
  Tooltip,
} from '@material-ui/core';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CloseIcon from '@material-ui/icons/Close';

import { Link } from 'react-router-dom';

const drawerWidth = 70;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
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
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  title: {
    marginTop: '10px',
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <FavoriteIcon />, name: 'Like' },
];

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
  
  const [open, setOpen] = React.useState(true);
  const [hidden, setHidden] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid justify={"space-between"} container>
            <Grid xs={1} item>
              <div className={classes.sectionDesktop}>
              <IconButton color="inherit" onClick={handleToggle}>
                <CloseIcon />
              </IconButton>
              {open && (
                menuItems.map((lstItm, key) => (
                  <HtmlTooltip title={lstItm.listText} placement="down" key={key}>
                    <IconButton color="inherit" component={Link} to={lstItm.listPath}>
                      {lstItm.listIcon}
                    </IconButton>
                  </HtmlTooltip>
                ))
              )}
              </div>
            </Grid>
            <Grid xs={7} item>
              <Typography variant="h4" className={classes.title}>
                News
              </Typography>
            </Grid>
          </Grid>          
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default NavBar;