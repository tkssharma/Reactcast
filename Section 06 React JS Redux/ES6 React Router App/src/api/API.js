var axios = require('axios');
const LOCAL_API = 'http://localhost:3000/users';
const EXTERNAL_API = 'https://my-testing-api.herokuapp.com/users';

const API = {
  getUsers: () => (
    axios.get(EXTERNAL_API)
      .then(data => data)
      .catch(data =>{})
  ),
  addUser: user => {
    console.log(user);
    axios.post(EXTERNAL_API +'/signup', user)
      .then(res => {
        console.log(res.data)
      })
      .catch(data =>{});
  }
};
export default API
