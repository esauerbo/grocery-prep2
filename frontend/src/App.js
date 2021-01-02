
import Header from './parts/Header.js';
import Recipelist from './parts/Recipelist.js';
import About from './pages/About.js';
import Cart from './parts/Cart.js';
import Recipe from './pages/Recipe.js';
import './css/App.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
  }

  updateCart = (items) => {
    const cart = this.state.cart;
    for (const item in items) {
      if (cart[item] === undefined) {
        cart[item] = +(items[item]);
      } else {
        cart[item] += +(items[item]);
      }
    }

    this.setState({cart: cart});
  }

  emptyCart = () => this.setState({ cart: [] });


render() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header /> 
      <Switch>
        <Route exact path='/'> 
          <Recipelist />
          <Cart cart={this.state.cart} emptyCart={this.emptyCart} />
        </Route>
        <Route exact path='/about'> 
          <About />
        </Route>
        <Route path='/recipe'> 
        <Recipe updateCart={this.updateCart} />
          <Cart cart={this.state.cart} emptyCart={this.emptyCart} />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
