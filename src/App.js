import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button} from 'react-bootstrap';

//components
import NavBarButton from './components/NavBarButton';

function App() {

  
  


  return (
    <div className="App">
      <header className="App-header">
      <h1>React Lists</h1>
      <div>
        <NavBarButton/>
      </div>
      </header>
    </div>
  );
}

export default App;
