import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import FizzBuzz from './components/Algorithm/FizzBuzz';
import Shuffle from './components/Algorithm/Shuffle';

function App() {
  return (
    <div className="App">
      <Login />
      <FizzBuzz />
      <Shuffle />
    </div>
  );
}

export default App;
