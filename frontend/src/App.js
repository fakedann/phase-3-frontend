import './App.css';
import { useState } from 'react';
import Menu from './Menu';
import RestaurantMenu from './RestaurantMenu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [title, setTitle] = useState('')


  return (
    <div className="App">
      {title === '' ? '': <h2>You are currently working with {title}</h2>}
      <RestaurantMenu setTitle={setTitle}/>
      <ToastContainer />
    </div>
  );
}

export default App;
