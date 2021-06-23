const axios = require('axios');
axios.post('https://zh2is19bwl.execute-api.us-east-1.amazonaws.com/dev')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });