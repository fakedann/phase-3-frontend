import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateEmployee({switchBack, restid}){

  const [search, setSearch] = useState('')
  const [checkedStatus, setChecked] = useState('name')
  const [change, setChange] = useState('')

  const notify = () => toast("You have succesfully updated an employee's info!", {position: toast.POSITION.TOP_CENTER})
  const wrong = () => toast("We could not find that employee. Please try again", {position: toast.POSITION.TOP_CENTER})

  function handleChange(e){
    setChecked(e.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    fetch(`http://localhost:9292/employees/${search}/${restid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: change,
        field: checkedStatus,
      }),
    })
    .then((r) => {
      if (!r.ok){
        throw Error('Could not fetch properly.')
      }
      return r.json()
    })
    .then( data => {
      console.log(data)
      if(data !== null){
        notify()
        switchBack()
      }
    })
    .catch( err => {
      console.log(err)
      wrong()
    })

  }

  return(
    <div className="updateSection">
      <form onSubmit={handleSubmit}>
        <p className="advise">Indicate which employee requires a change</p>
        <label id="emp">
          Employee's name:
        <input type="text" name="search" value={search} onChange={ event => setSearch(event.target.value)}/>
        </label>
        <p className="advise">Select the appropiate field</p>
        <div className="radio">
          <label className="radioBtn"><input type="radio" value="name" onChange={handleChange} checked={checkedStatus === "name"}/>
          Name</label>
          <label className="radioBtn"><input type="radio" value="dob" onChange={handleChange} checked={checkedStatus === "dob"}/>DOB</label>
          <label className="radioBtn"><input type="radio" value="address" onChange={handleChange} checked={checkedStatus === "address"}/>Address</label>
          <label className="radioBtn"><input type="radio" value="phone" onChange={handleChange} checked={checkedStatus === "phone"}/>Phone</label>
          <label className="radioBtn"><input type="radio" value="position" onChange={handleChange} checked={checkedStatus === "position"}/>Position</label>
        </div>
        <label>
          New input:
        <input type="text" name="change" value={change} onChange={ event => setChange(event.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
     </form>
    </div>
  )
}

export default UpdateEmployee