import "./header.css"

const Header = (props) => {
  const {isEdit, setEdit } = props;

  const handleEdit = () => {
    setEdit(true)
  }

  return ( 
    <div className="header">
      <h2 className="title">User Profile</h2>
      {isEdit === false && 
      <button onClick={handleEdit} 
              className="edit-profile">Edit Profile</button>}
    </div>
  );
}

export default Header;