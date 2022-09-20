import { useState } from 'react';

function UpdateEmployee(){

  const [search, setSearch] = useState('')
  const [change, setChange] = useState('')

  function handleSubmit(event){
    event.preventDefault()
    fetch(`http://localhost:9292/employees/${search}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: change,
      }),
    })
    .then((r) => r.json())
    .then( data => console.log(data));

  }

  return(
    <div className="mainSection">
      <form onSubmit={handleSubmit}>
        <label>
          Employee's name:
        <input type="text" name="search" value={search} onChange={ event => setSearch(event.target.value)}/>
        </label>
        <label>
          desired change:
        <input type="text" name="change" value={change} onChange={ event => setChange(event.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
     </form>
    </div>
  )
}

export default UpdateEmployee