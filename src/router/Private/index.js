import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logged from '../../pages/App/Logged/';
// import SignUp from './SignUp/';
// import PasswordRecovery from './PasswordRecovery/';
import history from '../../history';
import Profile from '../../pages/App/Profile';

function Private () {
  return (
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/logged/" exact component={Logged} />
          <Route path="/logged/:id" exact component={Profile} />
          {/* <Route path="/recover-password/" component={RecoverPassword} /> */}
          {/* <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} /> */}
        </Switch>
      </BrowserRouter>
  );
}

export default Private;
