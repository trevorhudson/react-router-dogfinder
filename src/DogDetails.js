import { useParams, Link } from "react-router-dom";

/**
 * Render a page containing the details of a given dog.
 *
 * State: none
 * Props: dog : {name, age, src, facts:[fact1,...]}
 *
 * App -> FilterDogs -> DogDetails
 */

function DogDetails({ dog }) {
  console.log("Dog is: ", dog);

  return (
    <div className="DogDetails">
      <p>Name: {dog.name} Age: {dog.age}</p>
      <img src={`/${dog.src}.jpg`} alt={dog.name} />
      {dog.facts.map((fact, idx) => <p key={idx}>{fact}</p>)}
      <Link to="/dogs">Back to all da good fluffers</Link>
    </div>
  );
}

export default DogDetails;