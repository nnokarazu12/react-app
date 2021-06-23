import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/Button'

const axios = require('axios');
axios.post('https://zh2is19bwl.execute-api.us-east-1.amazonaws.com/dev')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

ReactDOM.render(
  <Button/>,
  document.getElementById('root')
);

