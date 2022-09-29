import React from 'react'
import Form from '../form/Form'
import "./information.css"

const Information = () => {
  return (
    <div className='body'>
      <div className="container">
        <img className='avatar' src="https://opgg-static.akamaized.net/images/lol/champion/Yasuo.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1664349579640" alt="" />
        <div className='info'>
          <div className="detail-info">
            <h3>Age</h3>
            <p>18</p>
          </div>
          <div className="detail-info">
            <h3>Name</h3>
            <p>Nguyễn Như Long</p>
          </div>
          <div className="detail-info">
            <h3>Gender</h3>
            <p>Male</p>
          </div>
        </div>
      </div>
      <Form />
    </div>
  )
}

export default Information
