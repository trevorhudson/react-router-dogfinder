import './App.css';

import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom';
import { React, useState } from "react"
import Nav from './Nav.js';
import DogList from './DogList.js';
import DogDetails from './DogDetails.js';
import getDogs from './getDogs';

/**
 * Renders App component
 * TODO:STATE!!!
 * App -> BrowserRouter (is this right??)
 */
function App() {
  const [dogs, setDogs] = useState([])
  if (dogs.length === 0) getData(); //TODO: Create a loading state with message

  const params = useParams()
  console.log("params>>>>>>>>>>>>>>", params)

  async function getData() {
    setDogs(await getDogs());
  }
  
  //some function here that recieves the click data

  return (
    <div className="App">
      {dogs.length > 0 &&
        <BrowserRouter>
          <Nav dogs={dogs.map(dog => dog.name)} />
          <Routes >
            <Route element={<DogList dogs={dogs} onClick="cb"/>} path="/dogs" />
            <Route
              element={<DogDetails dogs={dogs} />}
              path="/dogs/:name"
            //   <DogDetails
            //     dog={dogs.filter(d => d.name === "Whiskey")[0]} />}
            //TODO:non existing dog redirect somehow...
            />
          </Routes>
      
        </BrowserRouter>
      }
    </div>
  );
};

export default App;
