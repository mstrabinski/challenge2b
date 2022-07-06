/* eslint-disable */
import React from 'react';
import App from '../../components/App/App';

function Control({ name, setName }) {
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <input type="text" onChange={() => setName(event.target.value)} />
      </div>
    );
  }

  export default Control;