import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App container">
      <NavBar />
      <h1 className='mt-5'>My User List</h1>
      <AppRoutes />
    </div>
  );
}

export default App;
