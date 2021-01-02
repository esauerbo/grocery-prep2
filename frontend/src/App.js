
import Header from './parts/Header.js';
import './css/App.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
<Header />  
    </div>
    </BrowserRouter>
  );
}

export default App;
