
import './css/App.css';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js'
import Recipe from './Recipe.js';
import Cart from './Cart.js';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
  }

  addToCart = (items) => {
      console.log("add to cart")
      const currCart = this.state.cart;
      for(const i in items) {
        if (currCart[i] !== undefined) {
          currCart[i] += items[i]
        } else {
          currCart[i] = items[i]
        }
      }
      this.setState({cart: currCart});
  }

  emptyCart = () => {
    console.log("empty cart");
    this.setState({ cart: [] });
  }

render() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
            <Route exact path='/'>
                <Home/>
                <Cart cart={this.state.cart} emptyCart={this.emptyCart} />
            </Route>
            <Route exact path='/About'>
                <About/>
            </Route>
            <Route path='/Recipe'>
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
