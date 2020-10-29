import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';
import history from '../services/history';
import SignIn from '../pages/FirstScreens/LoginPage';
import SignUp from '../pages/FirstScreens/CreateAccount';
import LocationOne from '../pages/FirstScreens/LocationForm';
import PersonalOne from '../pages/FirstScreens/PersonalForm';

import HomePage from '../pages/ProductsPage/Homepage';
import ProductPage from '../pages/ProductsPage/ProductPage';
import AddressForm from '../pages/ProductsPage/AddressPage';
import PersonalForm from '../pages/ProductsPage/PersonalForm';
import PurchasePage from '../pages/ProductsPage/PurchasePage';

export default function Routes() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />

        <Route path="/crpersonal" component={PersonalOne} isPrivate />
        <Route path="/crlocation" component={LocationOne} isPrivate />

        <Route path="/homepage" component={HomePage} isPrivate />
        <Route path="/product/:id" component={ProductPage} isPrivate />
        <Route path="/address/product/:id" component={AddressForm} isPrivate />
        <Route
          path="/personal/product/:id"
          component={PersonalForm}
          isPrivate
        />
        <Route
          path="/purchase/product/:id"
          component={PurchasePage}
          isPrivate
        />
      </Switch>
    </BrowserRouter>
  );
}
