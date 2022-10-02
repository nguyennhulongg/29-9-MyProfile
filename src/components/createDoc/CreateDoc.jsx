import React, { useState } from 'react'
import noteApi from '../../api/noteApi';
import "./createDoc.css"

const CreateDoc = (props) => {
  const { setCreate, setDoc } = props;

  const [addedDocument, setAddedDocument] = useState({
    title: "",
    content: "",
    id: ""
  })

  const id = Math.floor(Math.random() * 1000);

  const handlEnterTitle = e => {
    const title = e.target.value;
    setAddedDocument(addedDocument => ({
      ...addedDocument,
      title: title,
      id: id
    }));
  }

  const handlEnterContent = e => {
    const content = e.target.value;
    setAddedDocument(addedDocument => ({
      ...addedDocument,
      content: content,
      id: id
    }));
  }

  const handleSaveNewDoc = async (e) => {
    e.preventDefault();
    await noteApi.post(addedDocument);
    const fetchDocument = async () => {
      try {
        const response = await noteApi.getAll();
        setDoc(response);
      } catch(errors) {
        console.log(errors);
      }
    }
    document.querySelector('.create-friend').reset();
    fetchDocument();
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
          <button onClick={handleSaveNewDoc} className='save-btn'>Save and back</button>
          <p>Content</p>
          <textarea onChange={handlEnterContent} className='content'></textarea>
        </form>
      </div>
    </div>
  )
}

export default CreateDoc
