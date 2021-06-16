import axios from 'axios';

const getRoutes = (callback, fail) => {
  axios
    .get('http://localhost:3001/cache/samples/dropdown.json')
    .then(res => callback(res.data))
    .catch(err => fail(err))
}

export {
  getRoutes
}
