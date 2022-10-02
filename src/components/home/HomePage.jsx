import React from 'react'
import noteApi from '../../api/noteApi'
import "./homePage.css"

const HomePage = (props) => {
  const { docs, setDoc } = props
  
  const handleDelete = async (id) => {
    try {
      await noteApi.delete(id)
      const fetchDocument = async () => {
        try {
          const response = await noteApi.getAll();
          setDoc(response);
        } catch(errors) {
          console.log(errors);
        }
      }
      
      fetchDocument();
    } catch(errors) {
      console.log(errors);
    }
  }

  return (
    <div className='home-page'>
      <h3 className='home-title'>Document</h3>
      <div className="home-content">
        {docs.map((doc) => {
          return (
            <div className='document' key={doc.id}>
              <div className='document-content'>
                <h4>{doc.title}</h4>
                <p>{doc.content}</p>
              </div>
              <div className="document-features">
                <i 
                  className="fa-solid fa-trash delete-btn"
                  onClick={() => handleDelete(doc.id)}></i>
              </div>
            </div>
          )
          })}
      </div>
    </div>
  )
}

export default HomePage
