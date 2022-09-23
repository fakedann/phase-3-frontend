import { useState } from 'react';
import CreateEmployee from './CreateEmployee';
import RestaurantInfo from './RestaurantInfo';
import SearchEmployee from './SearchEmployee';
import UpdateEmployee from './UpdateEmployee';

function Menu({switchToMain, restid}){

  console.log(`hello here is the restid ${restid}`)

  const [taskComponent, setTask] = useState('')

  function switchBack(){
    setTask('')
  }

  function handleClick(event){

    console.log(event.target.id)
    if(event.target.id === "uno"){
      setTask(<CreateEmployee switchBack={switchBack} restid={restid}/>)
    }else if (event.target.id === "dos"){
      setTask(<SearchEmployee switchBack={switchBack} restid={restid}/>)
    } else if ( event.target.id === "tres"){
      setTask(<UpdateEmployee switchBack={switchBack} restid={restid}/>)
    }else if (event.target.id === "four"){
      setTask(<RestaurantInfo switchBack={switchBack} restid={restid}/>)
    }else if (event.target.id === "cinco"){
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