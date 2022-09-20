import './App.css';
import { useState } from 'react';
import Menu from './Menu';
import RestaurantMenu from './RestaurantMenu';

function App() {


  return (
    <div className="App">
      {<RestaurantMenu /> }
    </div>
  );
}

export default App;
