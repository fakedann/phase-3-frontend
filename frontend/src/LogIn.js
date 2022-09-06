import { useState } from 'react';

function LogIn({checkTask}){

  function handleClick(event){
    checkTask('Add')

  }

  return(
    <div className="mainSection">
      <button className="btnTask" id="uno" onClick={handleClick}>Add Employee</button>
      <button className="btnTask" id="dos">Employee's Advanced Search</button>
      <button className="btnTask" id="tres">Make Changes to an Employee</button>
      <button className="btnTask" id="four">Restaurant's information</button>
    </div>
  )
}

export default LogIn