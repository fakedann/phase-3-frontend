import { useState } from 'react';
import Menu from './Menu';

function RestaurantMenu(){

  const [taskComponent, setTask] = useState('')

  function switchToMain(){
    setTask('')
  }

  function handleClick(event){

    console.log(event.target.id)
    if(event.target.id === "uno"){
      console.log('hola')
    }else if (event.target.id === "dos"){
      setTask(<Menu switchToMain={switchToMain}/>)
    }
    

  }

  const menu = <><button className="btnTask" id="uno" onClick={handleClick}>Establish a New Restaurant's Info</button>
  <button className="btnTask" id="dos" onClick={handleClick}>Manage a Restaurant's Employees</button>
  <button className="btnTask" id="tres" onClick={handleClick}>Restaurants' List and General Info</button></>

  return(
    <div className="mainSection">
      {taskComponent === '' ? menu: taskComponent}
    </div>
  )
}

export default RestaurantMenu