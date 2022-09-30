import axios from 'axios';

axios.defaults.baseURL = 'https://api.spacexdata.com/v4/';

export async function getAllRockets() {
  const result = await axios.get('dragons');
  return result.data;
}

export async function getRocket(id) {
  const result = await axios.get(`dragons/${id}`);
  return result.data;
}
