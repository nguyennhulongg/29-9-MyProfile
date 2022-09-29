import React from 'react'
import "./form.css"

const Form = () => {
  return (
    <div className='edit'>
      <h2>Edit Profile</h2>
      <form action="" className='form'>
        <div className="edit-name">
          <span>Name: </span>
          <input type="text" />
        </div>
      </form>
    </div>
  )
}

export default Form