const axios = require('axios');
axios.post({
  method: 'post',
  url: 'https://zh2is19bwl.execute-api.us-east-1.amazonaws.com/dev',

  headers: {'Content-Type': 'application/json'}
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });