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
    const address = /^[a-zA-Z 0-9_.-]*$/
    const phone = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/

    if(letters.test(formData.name) && address.test(formData.address) && phone.test(formData.phone) && letters.test(formData.foodType)){
      console.log('valid input')
      handleSubmit()
    }else{
      console.log('nope')
      notvalid()
    }

  }

  function handleSubmit(){
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
      <p id="note">Note: special characters are not allowed on any field.</p>
      <form onSubmit={checkSubmit}>
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