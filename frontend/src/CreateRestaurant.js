import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateRestaurant({switchToMain}){
  
  const [formData, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    foodType: ''

  })

  const notify = () => toast("You have succesfully created a restaurant", {position: toast.POSITION.TOP_CENTER})

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
    fetch(`http://localhost:9292/restaurants`, {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then( () => {
      setForm({
        name: '',
        address: '',
        phone: '',
        foodType: ''
    
      })
      notify()
      switchToMain() 
    })
    
  }

  return(
    <div className="mainSection">
      <form onSubmit={handleSubmit}>
        <label>
          Restaurant's name:
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
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
          Food type:
        <input type="text" name="foodType" value={formData.foodType} onChange={handleChange}/>
        </label>
  
        <input type="submit" value="Submit" />
     </form>
    </div>
    
  )

}

export default CreateRestaurant