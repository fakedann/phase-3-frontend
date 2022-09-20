import { useState } from 'react';

function SearchEmployee({switchBack}){

  const [search, setSearch] = useState('')
  const [employeeInfo, setInfo] = useState('')

  function handleSubmit(event){
    event.preventDefault()
    console.log('checking submit')
    console.log(search)
    fetch(`http://localhost:9292/employees/${search}`)
      .then((r) => r.json())
      .then( (data) => {
        console.log(data)
        if(data !== null){
          setInfo(<p>Full Name: {data.name}<br></br>  DOB: {data.dob}<br></br> Address: {data.address}.<br></br> Phone: {data.phone}</p>)
        }else{
          setInfo('Invalid input. Please, try again.')
        }
      });
    setSearch('')

  }

  function handleClick(event){
    switchBack()
  }

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
        {employeeInfo}
      </div>
      <button className="btnTask" onClick={handleClick}>Back to Menu</button>
    </div>
  )
}

export default SearchEmployee