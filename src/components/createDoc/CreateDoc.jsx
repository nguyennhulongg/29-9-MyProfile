import React, { useState } from 'react'
import "./createDoc.css"

const CreateDoc = (props) => {
  const { docs, setDoc, setCreate } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [addedDocument, setAddedDocument] = useState({
    title: "",
    content: "",
    id: ""
  })

  const handlEnterTitle = e => {
    setTitle(e.target.value);
  }

  const handlEnterContent = e => {
    setContent(e.target.value);
  }

  const handleSaveNewDoc = e => {
    e.preventDefault();
    setAddedDocument({
      ...addedDocument,
      title: title,
      content: content,
      id: Math.floor(Math.random() * 1000)
    })
    console.log(addedDocument)
  }


  return (
    <div className='home-page'>
      <div className="post-content">
        <div className="title">
          <h2>POSTS</h2>
        </div>
        <form action="">
          <p>Title</p>
          <input onChange={handlEnterTitle} className='post-name' type="text" />
          <button onClick={handleSaveNewDoc} className='save-btn'>Save</button>
          <p>Content</p>
          <textarea onChange={handlEnterContent} className='content'></textarea>
        </form>
      </div>
    </div>
  )
}

export default CreateDoc
