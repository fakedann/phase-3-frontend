import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateEmployee({switchBack, restid, updateRest}){

  const [search, setSearch] = useState('')
  const [checkedStatus, setChecked] = useState('name')
  const [change, setChange] = useState('')

  const notify = () => toast("You have succesfully updated an employee's info!", {position: toast.POSITION.TOP_CENTER})
  const wrong = () => toast("We could not find that employee. Please try again", {position: toast.POSITION.TOP_CENTER})
  const notvalid = () => toast("Your new input is invalid. Please, try again with a valid input.", {position: toast.POSITION.TOP_CENTER})

  function handleChange(e){
    setChecked(e.target.value)
  }

  function checkSubmit(event){
    event.preventDefault()
    const letters = /^[A-Za-z ]+$/
    const date = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    const address = /^[a-zA-Z 0-9_.-]*$/
    const phone = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
    const positions = ['server', 'host', 'cook', 'manager']

    if( checkedStatus === "name" && !letters.test(change) ){
      notvalid()
    }else if ( checkedStatus === "dob" && !date.test(change)){
      notvalid()
    }else if( checkedStatus === "address" && !address.test(change)){
      notvalid()
    }else if (checkedStatus === "phone" && !phone.test(change)){
      notvalid()
    }else if( checkedStatus === "position" && !positions.find( element => element === change)){
      notvalid()
    }else{
      handleSubmit()
    }

  }

  function handleSubmit(){
    fetch(`http://localhost:9292/employees/${search}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: change,
        field: checkedStatus,
        restid: restid,
      }),
    })
    .then((r) => {
      if (!r.ok){
        throw Error('Could not fetch properly.')
      }
      return r.json()
    })
    .then( data => {
      if(data !== null){
        updateRest('update', data)
        notify()
        switchBack()
      }
    })
    .catch( err => {
      console.log(err)
      wrong()
    })

  }

  function handleClick(){
    switchBack()
  }

  return(
    <div className="updateSection">
      <form onSubmit={checkSubmit}>
        <p className="advise">Indicate which employee requires a change</p>
        <label id="emp">
          Employee's name:
        <input type="text" name="search" value={search} onChange={ event => setSearch(event.target.value)}/>
        </label>
        <p id="note">Note: special characters are not allowed on any field. The only accepted inputs for the "position" input are: server, host, cook, or manager.</p>
        <p className="advise">Select the appropiate field</p>
        <div className="radio">
          <label className="radioBtn"><input type="radio" value="name" onChange={handleChange} checked={checkedStatus === "name"}/>
          Name</label>
          <label className="radioBtn"><input type="radio" value="dob" onChange={handleChange} checked={checkedStatus === "dob"}/>DOB (DD/MM/YYYY)</label>
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
     <button id="addBtn" className="btnTask" onClick={handleClick}>Back to Menu</button>
    </div>
  )
}

export default UpdateEmployee