import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/FirstScreens/LoginPage';
import SignUp from '../pages/FirstScreens/CreateAccount';
import LocationOne from '../pages/FirstScreens/LocationForm';
import PersonalOne from '../pages/FirstScreens/PersonalForm';

import HomePage from '../pages/ProductsPage/Homepage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/crpersonal" component={PersonalOne} />
      <Route path="/crlocation" component={LocationOne} />

      <Route path="/homepage" component={HomePage} />
    </Switch>
  );
}
