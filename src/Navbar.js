import React, { Fragment, useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';

const Navbar = ( {userName, sideBarOptions, saveSideBarOptions}) => {
  const [open, setOpen] = useState(false);
  const [title, saveTitle] = useState('Dashboard');
  
  return (
    <Fragment>
      <Header
        userName={userName}
        title={title}
        open={open}
        setOpen={setOpen}
      />
      <SideBar
        open={open}
        title={title}
        saveTitle={saveTitle}
        sideBarOptions={sideBarOptions}
        saveSideBarOptions={saveSideBarOptions}
      />
    </Fragment>
  )
}
 
export default Navbar;