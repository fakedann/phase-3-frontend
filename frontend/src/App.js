import logo from './logo.svg';
import './App.css';

function App() {

  function handleSubmit(){

  }
  return (
    <div className="App">
      <div className="form">
      <form onSubmit={handleSubmit}>
        <p id="lb1">Are you new to the company? Register here</p>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
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
