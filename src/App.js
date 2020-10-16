import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // it works

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';

import './App.css';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
