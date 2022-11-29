import axios from "axios";

/**
 * Makes Ajax request to retrieve dogs info.
 * 
 * Returns an array like:
 *    [{name, age, src, facts:[fact1,...]},...]
 */

async function getDogs() {
  const resp = await axios.get('http://localhost:5001/dogs');
  return resp.data;
}

export default getDogs;