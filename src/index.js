import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://wahyuhr-query-apollo.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'zHHZrC7K5vwiFyiJez7emtWAU8ki5bi0EJ5tP7hJFXQ6U1NN9e2tGV8cFMYWaVnqA'
  },
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>  
  </ApolloProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
