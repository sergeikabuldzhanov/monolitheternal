import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(()=>{
    fetch(`/api/greeting?name=Gabe`)
      .then(res=>res.json())
      .then(greeting=>setGreeting(greeting))
      .catch(error=>{
        console.log(error);
        
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>{greeting}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
