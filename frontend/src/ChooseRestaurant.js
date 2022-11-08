import { useEffect, useState } from 'react';
import Menu from './Menu';

function ChooseRestaurant({switchToMain, setTitle}){

  const [restaurants, setRestaurants] = useState([])
  const [menuid, setMenu] = useState('')
  const [selectedRest, setSelected] = useState('')

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
    setMenu(result.id)
    setSelected(result)
   
  }

  function updateRest(type, value, id){

    if (type === "add"){
      const newEmply = selectedRest.employees.slice()
      newEmply.push(value)
      setSelected({...selectedRest, employees: newEmply})
    }else if (type === "delete"){
      const newEmply = selectedRest.employees.filter( emplObj => emplObj.id !== id)
      setSelected({...selectedRest, employees: newEmply})
    }else{
      const newEmply = selectedRest.employees.map( emplObj => {
        if(emplObj.id === value.id){
          return value
        }
        return emplObj
      })
      setSelected({...selectedRest, employees: newEmply})
    }

  }

  const restBtns = restaurants.map( restObj => <button key={restObj.id} className="btnTask" onClick={handleClick}>{restObj.name}</button>)

  return(
    <div>
      { menuid === '' ? restBtns: <Menu switchToMain={switchToMain} rest={selectedRest} setTitle={setTitle} updateRest={updateRest}/>}
    </div>
    
  )
}

export default ChooseRestaurant