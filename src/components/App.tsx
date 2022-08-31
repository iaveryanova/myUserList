import React from 'react';
import Context from '../context/Context';
import './App.css';
import AppRoutes from './AppRoutes';
import NavBar from './NavBar';
import { useState } from 'react';
import Modal from './Modal';


function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Context.Provider value={{openModal, setOpenModal}}>
      <div className="App container">
        <NavBar />
        <h1 className='mt-5'>My User List</h1>
        <AppRoutes />
        <Modal />
      </div>
    </Context.Provider>
  );
}

export default App;
