import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchEmployee({switchBack, restid}){

  const [search, setSearch] = useState('')
  const [employeeInfo, setInfo] = useState('')

  const borrar = () => toast("The employee you selected has been fired and deleted from your records.", {position: toast.POSITION.TOP_CENTER})

  function handleSubmit(event){
    event.preventDefault()
    fetch(`http://localhost:9292/employees/${search}/${restid}`)
      .then((r) => r.json())
      .then( (data) => {
        console.log(data)
        if(data !== null){
          setInfo(<p>Full Name: {data.name}<br></br>  DOB: {data.dob}<br></br> Address: {data.address}<br></br> Phone: {data.phone}<br></br> Position: {data.position}<br></br><button id={data.id} onClick={handleDelete}>Fire Employee</button></p>)
        }else{
          setInfo('We could not find that employee. Please, try again.')
        }
      });
    setSearch('')

  }

  function handleClick(event){
    switchBack()
  }

  function handleDelete(event){
    console.log(event.target)
    fetch(`http://localhost:9292/employees/${event.target.id}/${restid}`, {
      method: 'DELETE',
      })
    .then(res => res.json())
    .then(res => {
      borrar()
      setInfo('')
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