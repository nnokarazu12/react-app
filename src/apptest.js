const axios = require('axios').default;
axios.post('https://zh2is19bwl.execute-api.us-east-1.amazonaws.com/dev', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });