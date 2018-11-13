import React from 'react';
import ReactDOM from 'react-dom';

import GraphQLInquirer from 'graphql-inquirer';


const fetcher = (query) => {

  let endpoint = '/graphql';
  //let endpoint = 'https://1jzxrj179.lp.gql.zone/graphql';

  console.log(JSON.stringify(query));

  return fetch(endpoint, {
    //mode: 'no-cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query)
  }).then((response) => {
    if (response.ok) return response.json();
    throw new Error(response.status+': '+response.statusText);
  });

};

window.onload = () => { ReactDOM.render(<GraphQLInquirer {...{fetcher}} />, document.getElementById('stage')); };