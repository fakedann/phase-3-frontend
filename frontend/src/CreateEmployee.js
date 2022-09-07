import { useState } from 'react';

function CreateEmployee(){
  
  const [formData, setForm] = useState({
    name: '',
    dob: '',
    available: '',
    address: '',
    phone: '',
    position: ''

  })

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
          Days available to work:
        <input type="text" name="available" value={formData.available} onChange={handleChange}/>
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
