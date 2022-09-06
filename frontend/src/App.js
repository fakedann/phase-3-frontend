import './App.css';
import { Route, Switch } from "react-router-dom";
import { useState } from 'react';
import SignIn from './SignIn';
import LogIn from './LogIn';

function App() {

  const [taskComponent, setTask] = useState('login')
  
  if (taskComponent === "Add"){
    console.log('conditionall!!!')
  }

  function checkTask(task){
    console.log(task)
    setTask("Add")
  }


  return (
    <div className="App">
      <LogIn checkTask={checkTask}/>
    </div>
  );
}

export default App;
