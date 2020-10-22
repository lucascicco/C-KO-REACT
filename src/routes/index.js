import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';
import history from '../services/history';
import SignIn from '../pages/FirstScreens/LoginPage';
import SignUp from '../pages/FirstScreens/CreateAccount';
import LocationOne from '../pages/FirstScreens/LocationForm';
import PersonalOne from '../pages/FirstScreens/PersonalForm';

import HomePage from '../pages/ProductsPage/Homepage';

export default function Routes() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />

        <Route path="/crpersonal" component={PersonalOne} isPrivate />
        <Route path="/crlocation" component={LocationOne} isPrivate />

        <Route path="/homepage" component={HomePage} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
