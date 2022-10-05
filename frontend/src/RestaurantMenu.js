import { useState } from 'react';
import ChooseRestaurant from './ChooseRestaurant';
import CreateRestaurant from './CreateRestaurant';

function RestaurantMenu({setTitle}){

  const [taskComponent, setTask] = useState('')

  function switchToMain(){
    setTask('')
  }

  function handleClick(event){

    if(event.target.id === "uno"){
      setTask(<CreateRestaurant switchToMain={switchToMain} />)
    }else if (event.target.id === "dos"){
      setTask(<ChooseRestaurant switchToMain={switchToMain} setTitle={setTitle} />)
    }
  }


  const menu =  <div className="mainMenu"><button className="btnTask" id="uno" onClick={handleClick}>Establish a New Restaurant</button>
  <button className="btnTask" id="dos" onClick={handleClick}>Manage a Restaurant</button></div>


  return(
    <div className="mainSection">
      {taskComponent === '' ? menu: taskComponent}
    </div>
  )
}

export default RestaurantMenu