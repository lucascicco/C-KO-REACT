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

import MyAccount from '../pages/MyProfilePages/MyAccount';
import MyCart from '../pages/MyProfilePages/MyCart';
import MyLocation from '../pages/MyProfilePages/MyLocation';
import MyPersonal from '../pages/MyProfilePages/MyPersonal';
import MyProducts from '../pages/MyProfilePages/MyProducts';
import MyPurchases from '../pages/MyProfilePages/MyPurchases';
import MySells from '../pages/MyProfilePages/MySells';

import CreateProduct from '../pages/CreateProduct';

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
        <Route path="/purchase/address/:id" component={AddressForm} isPrivate />
        <Route
          path="/purchase/personal/:id"
          component={PersonalForm}
          isPrivate
        />
        <Route
          path="/purchase/payment/:id"
          component={PurchasePage}
          isPrivate
        />

        <Route path="/myaccount" component={MyAccount} isPrivate />
        <Route path="/mycart" component={MyCart} isPrivate />
        <Route path="/mylocation" component={MyLocation} isPrivate />
        <Route path="/mypersonal" component={MyPersonal} isPrivate />
        <Route path="/myproducts" component={MyProducts} isPrivate />
        <Route path="/mypurchases" component={MyPurchases} isPrivate />
        <Route path="/mysells" component={MySells} isPrivate />

        <Route path="/createproduct" component={CreateProduct} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
