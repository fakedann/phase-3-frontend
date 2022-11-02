import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RestaurantInfo({switchBack, restid}){

  const [restInfo, setRest] = useState('')
  const [listEmployees, setEmployees] = useState([])
  const [expandOrCollapse, setExpandOrCollapse] = useState('collapse')

  const borrar = () => toast("The employee you selected has been fired and deleted from your records.", {position: toast.POSITION.TOP_CENTER})

  const displayedEmployees = listEmployees.map( emplObj => <p key={emplObj.id} id={emplObj.id}>Full Name: {emplObj.name}<br></br>  DOB: {emplObj.dob}<br></br> Address: {emplObj.address}<br></br> Phone: {emplObj.phone}<br></br> Position: {emplObj.position}<br></br> <button onClick={handleDelete}>Fire Employee</button></p>)

  
  useEffect(() => {
    fetch(`http://localhost:9292/restaurant/${restid}`)
      .then((r) => r.json())
      .then( (data) => {
        console.log(data.employees)
        setEmployees(data.employees)
        setRest(<p>Restaurant's Name: {data.name}<br></br> Address: {data.address}<br></br> Phone: {data.phone}<br></br> Food type: {data.type_of_food}</p>)
      });
  }, [])

  function handleClick(event){
    switchBack()
  }

  function handleDelete(event){
   
    fetch(`http://localhost:9292/employees/${event.target.parentNode.id}`, {
      method: 'DELETE',
      })
    .then(res => res.json()) // or res.json()
    .then(res => {
      // const newEmployees = listEmployees.filter( emplObj => emplObj.id !== Number(event.target.parentNode.id))
      setEmployees(listEmployees.filter( emplObj => emplObj.id !== Number(event.target.parentNode.id)))
      borrar()
      
    })

  }

  function handleEmployees(){
    console.log('empl')

    if(expandOrCollapse === 'expand'){
      setExpandOrCollapse('collapse')
    }else{
      setExpandOrCollapse('expand')
    }
    
  }

  return(
    <div className="mainSection">
      <div className="restInfo">
        {restInfo}
        {<p>Employee count: {listEmployees.length}</p>}
        {expandOrCollapse === 'collapse' ? '': <h2>LIST OF EMPLOYEES</h2>}
        { expandOrCollapse === 'collapse' ? '': displayedEmployees}
      </div>
      <button className="btnTask" onClick={handleEmployees}>{expandOrCollapse === "collapse" ? "Show All Employees": "Back to General Info"}</button>
      <button className="btnTask" onClick={handleClick}>Back to Menu</button>
    </div>
  )
}


export default RestaurantInfo