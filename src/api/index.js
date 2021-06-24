const axios = require('axios');

const url = "https://zh2is19bwl.execute-api.us-east-1.amazonaws.com/dev";

async function call() {
  const response = await axios.get(url + "/v1/compare-list");
  const data = await response.json();
  console.log(data);
}

export default call;
