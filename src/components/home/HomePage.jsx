import React from 'react'

const HomePage = (props) => {
  const { docs } = props
  
  return (
    <div className='home-page'>
      <h3 className='home-title'>Document</h3>
      <div className="home-content">
      {docs.map((doc) => {
            return (
              <div key={doc.id}>
                <h4>{doc.title}</h4>
                <p>{doc.content}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default HomePage
