import './App.css';

import { Routes, Route, BrowserRouter, useParams, Navigate } from 'react-router-dom';
import { React, useState } from "react";
import Nav from './Nav.js';
import DogList from './DogList.js';
// import DogDetails from './DogDetails.js';
import getDogs from './getDogs';
import FilterDogs from './FilterDogs';

/**
 * Renders App component
 *
 * - State: dogs (array of dogs)
 * - Props: none
 *
 * App -> BrowserRouter (is this right??)
 */
function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) getData();

  /** Call API to get list of dogs */
  async function getData() {
    setDogs(await getDogs());
    setIsLoading(false);
  }

  return (
    <div className="App">

      {isLoading && <h1> Loading... </h1>}
      {!isLoading &&
        <BrowserRouter>
          <Nav dogs={dogs.map(dog => dog.name)} />
          <Routes >
            <Route element={<DogList dogs={dogs} />} path="/" />
            <Route
              element={<FilterDogs dogs={dogs} />}
              path="/dogs/:name"
            />
            <Route element={< Navigate to='/' />} path='*' />
          </Routes>

        </BrowserRouter>
      }
    </div>
  );
};

export default App;
