import './App.css';
import { Route, Switch } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [login, setLogIn] = useState({
    username: '',
    password: '',
  })

  function handleSubmit(event){
    event.preventDefault()
    console.log(login)
  }
  
  function handleChange(event){

    const name = event.target.name
    let value = event.target.value

    setLogIn({...login, [name]: value})
  }

  return (
    <div className="App">
      <div className="form">
      <form onSubmit={handleSubmit}>
        <p id="lb1">Are you new to the company? Register here</p>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="username" value={login.username} onChange={handleChange} required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" value={login.password} onChange={handleChange} required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
    </div>
  );
}

export default App;
