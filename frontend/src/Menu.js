import { useState } from 'react';
import CreateEmployee from './CreateEmployee';
import SearchEmployee from './SearchEmployee';
import UpdateEmployee from './UpdateEmployee';

function Menu({switchToMain}){

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
      setTask(<UpdateEmployee switchBack={switchBack}/>)
    }else if (event.target.id === "cinco"){
      console.log('here here in 5')
      switchToMain('')
    }
    

  }

  const menu = <><button className="btnTask" id="uno" onClick={handleClick}>Add Employee</button>
  <button className="btnTask" id="dos" onClick={handleClick}>Employee's Advanced Search</button>
  <button className="btnTask" id="tres" onClick={handleClick}>Make Changes to an Employee</button>
  <button className="btnTask" id="four">Restaurant's information</button>
  <button className="btnTask" id="cinco" onClick={handleClick}>Back To Main Menu</button>
  </>

  return(
    <div className="mainSection">
      {taskComponent === '' ? menu: taskComponent}
    </div>
  )
}

export default Menu