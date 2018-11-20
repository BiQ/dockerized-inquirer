import React from 'react';
import ReactDOM from 'react-dom';

import GraphQLInquirer from 'graphql-inquirer';


const fetcher = (query) => {

  let endpoint = '/graphql';

  return fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query)
  }).then((response) => {
    if (response.ok) return response.json();
    throw new Error(response.status+': '+response.statusText);
  });

};

window.onload = () => { ReactDOM.render(<GraphQLInquirer {...{fetcher}} />, document.getElementById('stage')); };