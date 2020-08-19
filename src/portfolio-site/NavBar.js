import {
  Fab,
  IconButton,
  Tooltip,
  useScrollTrigger,
  Zoom
} from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppsIcon from '@material-ui/icons/Apps';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    alignItems: 'center',
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
    left: theme.spacing(2),
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
})) (Tooltip);

const menuItems = [
  {
    listIcon: <HomeIcon />,
    listText: "Home",
    listPath: "/portfolio",
  },
  {
    listIcon: <AssignmentIndIcon />,
    listText: "About",
    listPath: "/about",
  }, {
    listIcon: <AppsIcon />,
    listText: "Portfolio",
    listPath: "/projects",
  }, {
    listIcon: <ContactMailIcon />,
    listText: "Contact",
    listPath: "/contact",
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

  function setTextName(name) {
    setTitle(name)
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
                  <IconButton color="inherit" 
                    onClick={() => setTextName(lstItm.listText)}
                    component={Link}
                    to={lstItm.listPath}
                  >
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