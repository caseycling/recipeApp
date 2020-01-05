import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = "b2630a22";
  const APP_KEY = "bf41122161d5eef385038956b189eb18";	
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);


  useEffect(() => {
    console.log("Effect has been run");
  }, []);

  return(
    <div className="App">
      <form className="search-form">
        <input classname="search-bar" type="text"/>
          <button classname="search-button" type="submit">Search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
};

export default App;
