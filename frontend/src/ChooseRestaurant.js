import { useEffect, useState } from 'react';
import Menu from './Menu';

function ChooseRestaurant({switchToMain}){

  const [restaurants, setRestaurants] = useState([])
  const [activateMenu, setMenu] = useState('')
  
  console.log(restaurants)

  useEffect(() => {
    fetch(`http://localhost:9292/restaurants`)
      .then((r) => r.json())
      .then( (data) => {
        setRestaurants(data)
      });
  }, [])

  function handleClick(event){
    console.log(event.target.key)
    setMenu('4')
   
  }

  const restBtns = restaurants.map( restObj => <button key={restObj.id} className="btnTask" onClick={handleClick}>{restObj.name}</button>)

  return(
    <div className="mainSection">
      { activateMenu === '' ? restBtns: <Menu switchToMain={switchToMain} />}
    </div>
  )
}

export default ChooseRestaurant