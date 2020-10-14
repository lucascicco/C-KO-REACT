import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alert variant="secondary" className="App-link">
          This is a button
        </Alert>
        <Button>Test button</Button>
      </header>
    </div>
  );
}

export default App;
