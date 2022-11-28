import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Nav from './Nav.js';
import DogList from './DogList.js';
import DogDetails from './DogDetails.js';

const dogs = ['whiskey', 'perry', 'duke'];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs} />
        <Routes >
          <Route element={<DogList dogs={dogs} />} path="/dogs" />
          <Route element={<DogDetails />} path="/dogs/:name" />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
