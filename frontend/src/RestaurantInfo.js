import { useEffect, useState } from 'react';

function RestaurantInfo({switchBack, restid}){

  const [restInfo, setRest] = useState('')
  const [listEmployees, setEmployees] = useState([])
  const [expandOrCollapse, setExpandOrCollapse] = useState('collapse')
  console.log(listEmployees)

  const displayedEmployees = listEmployees.map( emplObj => <p key={emplObj.id}>Full Name: {emplObj.name}<br></br>  DOB: {emplObj.dob}<br></br> Address: {emplObj.address}<br></br> Phone: {emplObj.phone}<br></br> Position: {emplObj.position}</p>)

  
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

  function handleEmployees(){
    console.log('empl')

    if(expandOrCollapse === 'expand'){
      setExpandOrCollapse('collapse')
    }else{
      fetch(`http://localhost:9292/restaurant/${restid}/employees`)
      .then((r) => r.json())
      .then( (data) => {
        console.log(data[0])
          setEmployees(data)
          setExpandOrCollapse('expand')
      });
    }
  
    
  }

  return(
    <div className="mainSection">
      <div className="restInfo">
        {restInfo}
        {expandOrCollapse === 'collapse' ? '': <h2>LIST OF EMPLOYEES</h2>}
        { expandOrCollapse === 'collapse' ? '': displayedEmployees}
      </div>
      <button className="btnTask" onClick={handleEmployees}>{expandOrCollapse === "collapse" ? "Show All Employees": "Back to General Info"}</button>
      <button className="btnTask" onClick={handleClick}>Back to Menu</button>
    </div>
  )
}


export default RestaurantInfo