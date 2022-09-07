import './App.css';
import { useState } from 'react';
import Menu from './Menu';
import CreateEmployee from './CreateEmployee';

function App() {

  const [taskComponent, setTask] = useState(<Menu checkTask={checkTask}/>)
  

  function checkTask(task){
    console.log(task)
    if( task === "uno"){
      setTask(<CreateEmployee setTask={setTask}/>)
    }
    
  }


  return (
    <div className="App">
      {taskComponent }
    </div>
  );
}

export default App;
