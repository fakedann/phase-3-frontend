import { useState } from 'react';

function SearchEmployee(){

  const [search, setSearch] = useState('')
  const [emplFound, setEmpl] = useState('')

  function handleSubmit(event){
    event.preventDefault()
    console.log('checking submit')
    console.log(search)
    fetch(`http://localhost:9292/employees/${search}`)
      .then((r) => r.json())
      .then( (data) => {
        console.log(data)
        setEmpl(data)
      });
    setSearch('')

  }

  // function handleChange(event){
  //   setSearch(event.target.value)
  // }

  return(
    <div className="mainSection">
      <form onSubmit={handleSubmit}>
        <label>
          Employee's name:
        <input type="text" name="name" value={search} onChange={ event => setSearch(event.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
     </form>
      <div id="infoContainer">
        <p>{emplFound}</p>
      </div>
    </div>
  )
}

export default SearchEmployee