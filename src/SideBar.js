import React, { Fragment} from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//Icons
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import GroupIcon from '@material-ui/icons/Group';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawerColor:{
    backgroundColor: '#F6F6F6',
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    WebkitBoxShadow: '0px 0px 21px -9px rgba(0,0,0,0.49)',
    MozBoxShadow: '0px 0px 21px -9px rgba(0,0,0,0.49)',
    boxShadow: '0px 0px 21px -9px rgba(0,0,0,0.49)',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    WebkitBoxShadow: '0px 0px 21px -9px rgba(0,0,0,0.49)',
    MozBoxShadow: '0px 0px 21px -9px rgba(0,0,0,0.49)',
    boxShadow: '0px 0px 21px -9px rgba(0,0,0,0.49)',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logoBaup: {
    height: '70px',
  },
  list: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  listItemActive:{
    '& :after':{
      content: '" "',
      position: 'absolute',
      borderRight: '0.2rem #FCB526 solid',
      top: '0%',
      right: '0',
      height: '100%',
      marginTop: 'auto',
      marginBottom: 'auto',
      transform: 'rotate(0deg)',
      transition: theme.transitions.create(['height','transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  },
  listItemNotActive:{
    '& :after':{
      content: '" "',
      position: 'absolute',
      borderRight: '0.2rem #FCB526 solid',
      top: '0%',
      right: '0',
      height: '0%',
      marginTop: 'auto',
      marginBottom: 'auto',
      transform: 'rotate(90deg)',
      transition: theme.transitions.create(['height','transform'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }
  },
  listTop:{
    paddingBottom: '0',
  },
  listBottom:{
    paddingTop: '0',
  },
  iconActive:{
    color: '#FCB526',
  }
}));


const SideBar = ({open, title, saveTitle, sideBarOptions}) => {
  const classes = useStyles();


  const getOptionIcon = (option) =>{
    
    switch(option){
      case('Dashboard'):
        return <InsertChartIcon/>;
      case('Solicitudes'):
        return <MoveToInboxIcon/>;
      case('Formularios'):
        return <InsertDriveFileIcon/>;
      case('Usuarios'):
        return <GroupIcon/>;
      default:
        return null;
    }
    
  };

  const setOptionActive = (index) => {
    let option = sideBarOptions[index];
    saveTitle(option.title);
  }

  return ( 
    <Fragment>
       <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.drawerColor,{
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
        </div>
        <Divider />
        <List className={classes.listTop}>
          {sideBarOptions.map((option, index) => (
            <ListItem
              button key={option.title}
              className={clsx(classes.list, {
                [classes.listItemActive]: option.title === title,
                [classes.listItemNotActive]: option.title !== title,
              })}
              onClick={() => setOptionActive(index)}>
              <ListItemIcon className={clsx({
                [classes.iconActive]: option.title === title,
              })}>
                {getOptionIcon(option.title)}
              </ListItemIcon>
              <ListItemText primary={option.title} />
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List  className={classes.listBottom}>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon/>
            </ListItemIcon>
            <ListItemText primary='Log out' />
          </ListItem>
        </List>
      </Drawer>
    </Fragment>
  );
}
 
export default SideBar;