import { useParams, NavLink, Navigate } from "react-router-dom";
import DogDetails from "./DogDetails";

/**
 * Filters list of dogs to match requested dog.
 *
 * State: none
 * Props: dogs : [{name, age, src, facts:[fact1,...]},...] *
 * App -> FilterDogs -> DogDetails
 */

function FilterDogs({ dogs }) {
  console.log("FilterDogs: ", dogs);

  const params = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === params.name);

  if (!dog) return <Navigate to="/" />;

  return (
    <DogDetails dog={dog} />
  );
}

export default FilterDogs;