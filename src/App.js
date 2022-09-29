
import './App.css';
import Body from './components/body/Information';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'> 
        <Body />
      </div>
    </div>
  );
}

export default App;
