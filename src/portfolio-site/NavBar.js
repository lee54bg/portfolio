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
  Fab,
  Badge,
  Grid,
  Grow,
  IconButton,
  Paper,
  Tab,
  Tabs,
  Tooltip,
  useScrollTrigger,
  Zoom
} from '@material-ui/core';

import PropTypes from 'prop-types';

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
import HomeIcon from '@material-ui/icons/Home';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import SchoolIcon from '@material-ui/icons/School';


import { Link } from 'react-router-dom';

const drawerWidth = 70;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
    alignItems: 'center',
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
    margin: '0 auto',
    width: '100%',
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
    flexGrow: 1,
  },
  scrollToTop: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
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
    listIcon: <HomeIcon />,
    listText: "Home",
    listPath: "/",
    // listFunction: titleHome,
  },
  {
    listIcon: <AssignmentIndIcon />,
    listText: "About",
    listPath: "/about",
    // listFunction: titleAbout,
  }, {
    listIcon: <AppsIcon />,
    listText: "Portfolio",
    listPath: "/portfolio",
    // listFunction: titlePortfolio,
  }, {
    listIcon: <ContactMailIcon />,
    listText: "Contact",
    listPath: "/contact",
    // listFunction: titleContact,
  }
]

const TimeText = () => {
  const classes = useStyles();

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = React.useState(time);
  
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time)
  };
  
  setInterval(UpdateTime, 1000)
  
  return (
    <>
      <Typography variant="h4" className={classes.title}>
        {ctime}
      </Typography>
    </>
  );      
};

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.scrollToTop}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const NavBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  
  const [open, setOpen] = React.useState(true);
  const [hidden, setHidden] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [appDrawerButtons, setAppButtons] = React.useState(true);
  const [title, setTitle] = React.useState('Home');

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const titleHome = () => {
    setTitle('')
  }

  const titleAbout = () => {
    setTitle('About')
  }

  const titlePortfolio = () => {
    setTitle('Portfolio')
  }

  const titleContact = () => {
    setTitle('Contact')
  }

  const handleTitle = (value) => {
    setTitle(value)
  }

  // https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
            {
              menuItems.map((lstItm, key) => (
                <HtmlTooltip title={lstItm.listText} placement="down" key={key}>
                  <IconButton color="inherit" component={Link} to={lstItm.listPath} >
                    {lstItm.listIcon}
                  </IconButton>
                </HtmlTooltip>
              ))
            }
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor"/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </main>
    </div>
  );
}

export default NavBar;