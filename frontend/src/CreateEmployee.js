import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateEmployee({switchBack, restid}){
  
  const [formData, setForm] = useState({
    name: '',
    dob: '',
    address: '',
    phone: '',
    position: '',
    restaurant_id: restid

  })

  const notify = () => toast("You have succesfully submitted an employee!", {position: toast.POSITION.TOP_CENTER})
  const notvalid = () => toast("One of your fields has at least one invalid character. Please, try again.", {position: toast.POSITION.TOP_CENTER})

  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;

    setForm({
      ...formData,
      [name]: value,
    });
  }

  function checkSubmit(event){
    event.preventDefault()
    const letters = /^[A-Za-z ]+$/
    const date = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    const address = /^[a-zA-Z 0-9_.-]*$/
    const phone = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
    const positions = ['server', 'host', 'cook', 'manager']

    if(letters.test(formData.name) && address.test(formData.address) && phone.test(formData.phone) && date.test(formData.dob) && positions.find( element => element === formData.position)){
      console.log('valid input')
      handleSubmit()
    }else{
      console.log('nope')
      notvalid()
    }

  }

  function handleSubmit(){
    // event.preventDefault()
    console.log(formData)
    fetch(`http://localhost:9292/employees`, {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then( () => {
      setForm({
        name: '',
        dob: '',
        address: '',
        phone: '',
        position: '',
        restaurant_id: ''
    
      })
      notify()
      switchBack() 
    })
    
  }

  function handleClick(){
    switchBack()
  }

  return(
    <div className="mainSection">
      <p id="note">Note: special characters are not allowed on any field. The only accepted inputs for the "position" input are: server, host, cook, or manager.</p>
      <form onSubmit={checkSubmit}>
        <label>
          Full name:
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        </label>
        <label>
          DOB(DD/MM/YYYY):
        <input type="text" name="dob" value={formData.dob} onChange={handleChange}/>
        </label>
        <label>
          Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange}/>
        </label>
        <label>
          Phone number:
        <input type="text" name="phone" value={formData.phone} onChange={handleChange}/>
        </label>
        <label>
          Position:
        <input type="text" name="position" value={formData.position} onChange={handleChange}/>
        </label>
  
        <input type="submit" value="Submit" />
     </form>
     <button id="addBtn" className="btnTask" onClick={handleClick}>Back to Menu</button>
    </div>
    
  )

}

export default CreateEmployee
