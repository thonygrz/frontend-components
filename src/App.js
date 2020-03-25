import React, { Fragment, useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';

function App() {
  const [open, setOpen] = useState(false);
  const [title, saveTitle] = useState('Dashboard');
  const [sideBarOptions, saveSideBarOptions]=useState([
    {
      title: 'Dashboard'
    },
    {
      title: 'Solicitudes'
    },
    {
      title: 'Formularios'
    },
    {
      title: 'Usuarios'
    }
  ]);

  return (
    <Fragment>
      <Header
      userName="Nicola Yammine"
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
  );
}

export default App;