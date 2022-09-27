import { useEffect, useState } from 'react';

function RestaurantInfo({switchBack, restid}){

  const [restInfo, setRest] = useState('')
  
  useEffect(() => {
    fetch(`http://localhost:9292/restaurant/${restid}`)
      .then((r) => r.json())
      .then( (data) => {
        console.log(data)
        setRest(<p>Restaurant's Name: {data.name}<br></br> Address: {data.address}<br></br> Phone: {data.phone}<br></br> Food type: {data.type_of_food}<br></br> Employee count: {data.employee_count}</p>)
      });
  }, [])

  function handleClick(event){
    switchBack()
  }

  return(
    <div className="mainSection">
      <div className="restInfo">
        {restInfo}
      </div>
      
      <button className="btnTask" onClick={handleClick}>Back to Menu</button>
    </div>
  )
}


export default RestaurantInfo