import React from 'react'
import { useState } from 'react';
import "./form.css"

const Form = (props) => {
  const {setProfile, setEdit} = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const getFirstName = e => {
    setFirstName(e.target.value)
  } 

  const getLastName = e => {
    setLastName(e.target.value)
  }

  const getAge = e => {
    setAge(e.target.value)
  }

  const handleSaveInfomation = e => {
    e.preventDefault();
    setEdit(false)
    setProfile({
      firstName: firstName,
      lastName: lastName,
      age: age,
    })
  }

  return (
    <div className='edit'>
      <h2>Edit Profile</h2>
      <form action="" className='form'>
        <div className="edit-detail">
          <span>First Name: </span>
          <input type="text" onChange={getFirstName}/>
        </div>
        <div className="edit-detail">
          <span>Last Name: </span>
          <input type="text"  onChange={getLastName}/>
        </div>
        <div className="edit-detail edit-birthday">
          <span>Birthday: </span>
          <input type="number" onChange={getAge}/>
        </div>
        <div className="edit-detail">
          <button onClick={handleSaveInfomation}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form