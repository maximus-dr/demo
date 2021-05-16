import axios from 'axios';

const getRoutes = (callback, fail) => {
  axios
    .get('http://localhost:3000/cache/pages/test.json')
    .then(res => callback(res.data))
    .catch(err => fail(err))
}

export {
  getRoutes
}
