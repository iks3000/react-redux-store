import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';
import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItem={5} total={210} />
      <Switch>
        <Route exact
          path="/react-redux-store/"
          component={HomePage}
        />
        <Route
          path="/cart"
          component={CartPage}
        />
      </Switch>
    </main>
  )
};

export default App;
