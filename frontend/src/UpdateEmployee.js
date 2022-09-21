import { useState } from 'react';

function UpdateEmployee(){

  const [search, setSearch] = useState('')
  const [checkedStatus, setChecked] = useState('date')

  function handleChange(e){
    setChecked(e.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    fetch(`http://localhost:9292/employees/${search}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: 'hola',
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
        <label>Date</label>
        <input type="radio" value="date" onChange={handleChange} checked={checkedStatus === "date"}/>
        <label>Title</label>
        <input type="radio" value="title" onChange={handleChange} checked={checkedStatus === "title"}/>
        <label>Author</label>
        <input type="radio" value="author" onChange={handleChange} checked={checkedStatus === "author"}/>
        <label>Publisher</label>
        <input type="radio" value="publisher" onChange={handleChange} checked={checkedStatus === "publisher"}/>
        <input type="submit" value="Submit" />
     </form>
    </div>
  )
}

export default UpdateEmployee