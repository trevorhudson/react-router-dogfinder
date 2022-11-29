import { NavLink } from "react-router-dom";


/** Renders the Navigation Bar
 *
 * - Props: array of dog names like: ['whiskey','tango','foxtrot']
 * - State: None
 *
 * App -> Nav
 */
function Nav({ dogs }) {

  return (
    <div className="NavBar">

      {dogs.map(
        dog =>
          <NavLink
            key={dog}
            to={`/dogs/${dog.toLowerCase()}`}
          >{dog}
          </NavLink>)}

    </div>
  );

}

export default Nav;