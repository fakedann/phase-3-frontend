import { useState } from 'react';
import CreateEmployee from './CreateEmployee';
import SearchEmployee from './SearchEmployee';

function Menu(){

  const [taskComponent, setTask] = useState('')

  function switchBack(){
    setTask('')
  }

  function handleClick(event){

    console.log(event.target.id)
    if(event.target.id === "uno"){
      setTask(<CreateEmployee switchBack={switchBack}/>)
    }else if (event.target.id === "dos"){
      setTask(<SearchEmployee switchBack={switchBack}/>)
    } else if ( event.target.id === "tres"){
      fetch("http://localhost:9292/destroy")
      .then((r) => r.json())
      .then( (data) => console.log(data));
    }
    

  }

  const menu = <><button className="btnTask" id="uno" onClick={handleClick}>Add Employee</button>
  <button className="btnTask" id="dos" onClick={handleClick}>Employee's Advanced Search</button>
  <button className="btnTask" id="tres">Make Changes to an Employee</button>
  <button className="btnTask" id="four">Restaurant's information</button></>

  return(
    <div className="mainSection">
      {taskComponent === '' ? menu: taskComponent}
    </div>
  )
}

export default Menu