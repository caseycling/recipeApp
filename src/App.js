import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = 'b2630a22';
  const APP_KEY = 'bf41122161d5eef385038956b189eb18';	

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  return(
    <div className="App">
      <form className="search-form">
        <input classname="search-bar" type="text"/>
          <button classnam="search-button" type="submit">
            Search
          </button>
      </form>
    </div>
  );
};

export default App;
