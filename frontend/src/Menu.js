import { useState } from 'react';
import CreateEmployee from './CreateEmployee';
import RestaurantInfo from './RestaurantInfo';
import SearchEmployee from './SearchEmployee';
import UpdateEmployee from './UpdateEmployee';

function Menu({switchToMain, rest, setTitle, updateRest}){

  const [taskComponent, setTask] = useState('')

  function switchBack(){
    setTask('')
  }


  function handleClick(event){

    if(event.target.id === "uno"){
      setTask(<CreateEmployee switchBack={switchBack} restid={rest.id} updateRest={updateRest}/>)
    }else if (event.target.id === "dos"){
      setTask(<SearchEmployee switchBack={switchBack} rest={rest} updateRest={updateRest}/>)
    } else if ( event.target.id === "tres"){
      setTask(<UpdateEmployee switchBack={switchBack} restid={rest.id} updateRest={updateRest}/>)
    }else if (event.target.id === "four"){
      setTask(<RestaurantInfo switchBack={switchBack} rest={rest} updateRest={updateRest}/>)
    }else if (event.target.id === "cinco"){
      setTitle('')
      switchToMain()
    }
    

  }

  const menu = <><button className="btnTask" id="uno" onClick={handleClick}>Add Employee</button>
  <button className="btnTask" id="dos" onClick={handleClick}>Find an Employee</button>
  <button className="btnTask" id="tres" onClick={handleClick}>Make Changes to an Employee</button>
  <button className="btnTask" id="four" onClick={handleClick}>Restaurant's information</button>
  <button className="btnTask" id="cinco" onClick={handleClick}>Back To Main Menu</button>
  </>

  return(
    <div className="mainSection">
      {taskComponent === '' ? menu: taskComponent}
    </div>
  )
}

export default Menu