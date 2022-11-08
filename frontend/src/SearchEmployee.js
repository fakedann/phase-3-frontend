import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchEmployee({switchBack, rest, updateRest}){

  const [search, setSearch] = useState('')
  const [employeeInfo, setInfo] = useState('')

  const borrar = () => toast("The employee you selected has been fired and deleted from your records.", {position: toast.POSITION.TOP_CENTER})

  function handleSubmit(event){
    event.preventDefault()
    let found = rest.employees.find( empObj => empObj.name === search)
    if (found !== undefined){
      setInfo(<p>Full Name: {found.name}<br></br>  DOB: {found.dob}<br></br> Address: {found.address}<br></br> Phone: {found.phone}<br></br> Position: {found.position}<br></br><button id={found.id} onClick={handleDelete}>Fire Employee</button></p>)
    }else{
      setInfo(<p>The employee you have searched for does no exist. Please, try something different.</p>)
    }

  }

  function handleClick(event){
    switchBack()
  }

  function handleDelete(event){
    
    fetch(`http://localhost:9292/employees/${event.target.id}`, {
      method: 'DELETE',
      })
    .then(res => res.json())
    .then(res => {
      updateRest("delete", 0, Number(event.target.id))
      borrar()
      setInfo('')
      switchBack()
    })

  }

  return(
    <div className="mainSection">
      <form onSubmit={handleSubmit}>
        <label>
          Employee's name:
        <input type="text" name="name" value={search} onChange={ event => setSearch(event.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
     </form>
      <div id="infoContainer">
        {employeeInfo}
      </div>
      <button className="btnTask" onClick={handleClick}>Back to Menu</button>
    </div>
  )
}

export default SearchEmployee