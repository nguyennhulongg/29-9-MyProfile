import React from 'react'
import Form from '../form/Form'
import CreateDoc from '../createDoc/CreateDoc'
import "./editPage.css"
import HomePage from '../home/HomePage'

const EditPage = (props) => {
  const {profile,
      setProfile,
      isEdit, 
      setEdit, 
      setCreate,
      isCreate,
      docs,
      setDoc
    } = props

  const handleCreate = () => {
    setCreate(true)
  }

  return (
    <div className='body'>
      <button onClick={handleCreate}>Create New Doc</button>
      <div className="container">
        <img className='avatar' src="https://opgg-static.akamaized.net/images/lol/champion/Yasuo.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_160&v=1664349579640" alt="" />
        <div className='info'>
          <div className="detail-info">
            <h3>Age</h3>
            <p>{profile.age}</p>
          </div>
          <div className="detail-info">
            <h3>Name</h3>
            <p>{profile.firstName + " " + profile.lastName}</p>
          </div>
          <div className="detail-info">
            <h3>Gender</h3>
            <p>Male</p>
          </div>
        </div>
      </div>
      {isEdit ? 
      <Form 
        setEdit={setEdit} 
          setProfile = {setProfile}/>
          : isCreate 
          ? <CreateDoc setCreate = {setCreate} docs = {docs} setDoc = {setDoc}/> 
          : <HomePage docs = {docs}/>}
    </div>
  )
}

export default EditPage
