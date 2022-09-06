import { useState } from 'react';

function SignIn(){

  const [newAgent, setNewAgent] = useState({
    fullName: '',
    username: '',
    password: '',
    state: '',
  })

  function handleChange(event){

    const name = event.target.name
    let value = event.target.value

    setNewAgent({...newAgent, [name]: value})
  }

  function handleSubmit(event){
    console.log(`This is the new agent ${newAgent}`)
  }

  return(
    <div className="form">
      <form onSubmit={handleSubmit}>
        <p>Please, fill the information below.</p>
        <div className="input-container">
          <label>Full name</label>
          <input type="text" name="fullName" value={newAgent.fullName} onChange={handleChange} required />
        </div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" value={newAgent.username} onChange={handleChange} required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" value={newAgent.password} onChange={handleChange} required />
        </div>
        <div className="input-container">
          <label>State of residence</label>
          <input type="text" name="state" value={newAgent.state} onChange={handleChange} required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )

}

export default SignIn