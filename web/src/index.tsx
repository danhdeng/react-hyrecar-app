import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {apolloClient} from "../src/app/graphql";
import { ApolloProvider } from '@apollo/client';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
      <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

