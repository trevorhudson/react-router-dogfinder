import { MemoryRouter, useParams } from 'react-router-dom';
// import { Router } from 'react-router';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ name: "whiskey" }),
}));

// import Router from "react-router";
// console.log('router >>>>>', Router);
// useParams = jest.fn();

import DogDetails from './DogDetails';

import { render, screen, waitFor } from '@testing-library/react';
import FilterDogs from './FilterDogs';

test('renders learn react link', () => {
  const dogs = [{ name: 'whiskey' }, { name: 'charlie' }];
  // useParams.mockReturnValue({ a: "b" });
  render(<MemoryRouter>
    <FilterDogs dogs={dogs} />
  </MemoryRouter>);
});
