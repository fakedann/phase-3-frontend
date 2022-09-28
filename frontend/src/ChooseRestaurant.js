import { useEffect, useState } from 'react';
import Menu from './Menu';

function ChooseRestaurant({switchToMain, setTitle}){

  const [restaurants, setRestaurants] = useState([])
  const [menuid, setMenu] = useState('')
  
  console.log(restaurants)

  useEffect(() => {
    fetch(`http://localhost:9292/restaurants`)
      .then((r) => r.json())
      .then( (data) => {
        setRestaurants(data)
      });
  }, [])

  function handleClick(event){
    let result = restaurants.find( restObj => restObj.name === event.target.innerText)
    setTitle(event.target.innerText)
    console.log(result.id)
    setMenu(result.id)
   
  }

  const restBtns = restaurants.map( restObj => <button key={restObj.id} className="btnTask" onClick={handleClick}>{restObj.name}</button>)

  return(
    <div>
      { menuid === '' ? restBtns: <Menu switchToMain={switchToMain} restid={menuid} setTitle={setTitle}/>}
    </div>
    
  )
}

export default ChooseRestaurant