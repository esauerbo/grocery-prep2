
import Header from './parts/Header.js';
import Recipelist from './parts/Recipelist.js';
import About from './pages/About.js';
import Cart from './parts/Cart.js';
import './css/App.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header /> 
      <Switch>
        <Route exact path='/'> 
          <Recipelist />
          <Cart />
        </Route>
        <Route exact path='/about'> 
          <About />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
