import axios from 'axios';

axios.defaults.baseURL = 'https://api.chucknorris.io';

export const getMassegeFromChuck = async () => {
  const response = await axios.get('/jokes/random');

  return response.data.value;
};
