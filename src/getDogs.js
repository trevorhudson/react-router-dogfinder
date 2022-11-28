import axios, { Axios } from "axios";

/**
 * Makes Ajax request to retrieve dogs info.
 */

async function getDogs() {
  const resp = await axios.get('localhost:5001/dogs');
  return resp.data;
}

export default getDogs;