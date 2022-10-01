
import { useEffect, useState } from 'react';
import './App.css';
import EditPage from './components/editPage/EditPage';
import Header from './components/header/Header';


function App() {
  const [profile, setProfile] = useState({
    age: 18,
    firstName: "Long", 
    lastName: "Nguyen",
    description: "I'm Long. I am very handsome, but I'm poor :))))"
  })

  const [docs, setDoc] = useState([
    {
      title: "fhds",
      content: "dufhds",
      id: "1"
    }
  ])

  const [isEdit, setEdit] = useState(false);
  const [isCreate, setCreate] = useState(false);

  return (
    <div className="App">
      <Header setEdit={setEdit} isEdit = {isEdit}/>
      <div className='container'> 
        <EditPage 
          isCreate={isCreate} 
          setCreate = {setCreate} 
          isEdit={isEdit} setEdit={setEdit} 
          profile = {profile} 
          setProfile = {setProfile}
          docs = {docs}
          setDoc = {setDoc}
        />
      </div>
    </div>
  );
}

export default App;
