import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CloseIcon from '@material-ui/icons/Close';
//Images
import BaupLogo from './baup-logo.png'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  menuButton: {
    marginLeft:'-20px',
    [theme.breakpoints.down('xs')]: {
      marginLeft:'-13px',
    }
  },
  menuButtonActive: {
    transform: 'rotate(90deg)',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButtonNotActive: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBar: {
    backgroundColor: '#1B3D6E',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  logoBaup:{
    height: '70px',
  },
  hide: {
    display: 'none',
  }
}));

const Header = ({ userName, title, open, setOpen }) => {
  const classes = useStyles();
  const handleDrawer = () => {
    setOpen(!open);
  };
  return ( 
    <Fragment>
       <AppBar position="fixed"
        className={classes.appBar}>
        <Toolbar>
          <IconButton 
            edge="start" 
            onClick={handleDrawer}
            className={clsx(classes.menuButton, {
              [classes.menuButtonActive]: open,
              [classes.menuButtonNotActive]: !open,
            })}
            color="inherit"
            aria-label="menu"
          >
            {open?<CloseIcon />:<MenuIcon />}
          </IconButton>
          <Hidden xsDown>
            <img
              src={BaupLogo}
              className={classes.logoBaup}
              alt='Logo Beca A Un Pana'
            />
          </Hidden>
          <Typography variant="h6" className={classes.root}>
            { title }
          </Typography> 
          <Hidden xsDown>
            <Typography variant="subtitle1">
              { userName }
            </Typography>
          </Hidden>
          <IconButton edge="end" color="inherit"> 
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Fragment>
   );
}
 
export default Header;