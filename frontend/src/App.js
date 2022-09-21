import './App.css';
import { useState } from 'react';
import Menu from './Menu';
import RestaurantMenu from './RestaurantMenu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <div className="App">
      <RestaurantMenu />
      <ToastContainer />
    </div>
  );
}

export default App;
