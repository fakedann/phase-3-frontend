import { useState } from 'react';
import ChooseRestaurant from './ChooseRestaurant';
import CreateRestaurant from './CreateRestaurant';
import Menu from './Menu';

function RestaurantMenu(){

  const [taskComponent, setTask] = useState('')

  function switchToMain(){
    setTask('')
  }

  function handleClick(event){

    if(event.target.id === "uno"){
      setTask(<CreateRestaurant switchToMain={switchToMain} />)
    }else if (event.target.id === "dos"){
      // setTask(<Menu switchToMain={switchToMain}/>)
      setTask(<ChooseRestaurant switchToMain={switchToMain} />)
    }
  }

  const menu = <><button className="btnTask" id="uno" onClick={handleClick}>Establish a New Restaurant</button>
  <button className="btnTask" id="dos" onClick={handleClick}>Manage a Restaurant</button>
  <button className="btnTask" id="tres" onClick={handleClick}>Restaurants' List and General Info</button></>

  return(
    <div className="mainSection">
      {taskComponent === '' ? menu: taskComponent}
    </div>
  )
}

export default RestaurantMenu