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

  function handleChange(event){
    const name = event.target.name;
    let value = event.target.value;

    setForm({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event){
    event.preventDefault()
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

  return(
    <div className="mainSection">
      <form onSubmit={handleSubmit}>
        <label>
          Full name:
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        </label>
        <label>
          DOB:
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
    </div>
    
  )

}

export default CreateEmployee
