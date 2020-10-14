import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/FirstScreens/LoginPage';
import SignUp from '../pages/FirstScreens/CreateAccount';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
    </Switch>
  );
}
