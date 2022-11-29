import { useParams, NavLink } from "react-router-dom";

/**
 * Render a page containing the details of a given dog.
 * 
 * State: none
 * Props: dogs (TODO: array of dog object demo)
 * 
 * App -> DogDetails
 */

function DogDetails({ dogs }) {
    //TODO: dog that doesn't exist handle (Navagate)
    console.log("Dog is: ", dogs)
    const params = useParams();
    const dog = dogs.find(d => d.name === params.name);
    return (
        <div className="DogDetails">
            <p>Name: {dog.name} Age: {dog.age}</p>
            <img src={`/${dog.src}.jpg`} alt={dog.name} />
            {dog.facts.map((fact, idx) => <p key={idx}>{fact}</p>)}
            <NavLink to="/dogs">Back to all da good fluffers</NavLink>
        </div>
    )
}

export default DogDetails;