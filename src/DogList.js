import { Link } from "react-router-dom";

/**
 * Render a list of a dog and its name
 * 
 * State: none
 * Props: [{name, age, src, facts:[fact1,...]},...]
 * 
 * App -> DogList
 */

function DogList({ dogs }) {
    return (
        <div className="DogList">
            {dogs.map(dog =>
                <div className="DogList-dog" key={dog.name}>
                    <p>{dog.name}</p>
                    <Link to={`/dogs/${dog.name}`}>
                        <img src={`/${dog.src}.jpg`} alt={dog.name} />
                    </Link>
                </div>)}
        </div>
    )
}

export default DogList;
