import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = 'b2630a22';
  const APP_KEY = 'bf41122161d5eef385038956b189eb18';	

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  return(
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
