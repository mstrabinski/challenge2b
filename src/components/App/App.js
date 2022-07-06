/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Control from '../../components/Control/Control.js';

function App(props)  {
  const [name, setName] = React.useState("World");

  return (
    <div className="App">
      <header className="App-header">
        {/* <Child2 data={name.length} /> */}
        <h1>Your name is {name.length} characters long.</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Control name={name} setName={setName} />         
        </div>
      </header>
    </div>
  );
}

/* function Child2({ data }) {
  return (
    <div>
      <h1>Your name is {data} characters long.</h1>
    </div>
  );
} */

export default App;
