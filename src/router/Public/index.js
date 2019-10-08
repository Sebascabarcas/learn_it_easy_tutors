import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Login from './Login/';
// import SignUp from './SignUp/';
// import PasswordRecovery from './PasswordRecovery/';
import Landing from '../../pages/Landing';
import Login from '../../pages/Login';
import history from '../../history';
import Register from '../../pages/Register';

function Public () {
  return (
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login/" render={props => <Login {...props} />} />
          <Route path="/register/" component={Register} />
          {/* <Route path="/recover-password/" component={RecoverPassword} /> */}
          {/* <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} /> */}
        </Switch>
      </BrowserRouter>
  );
}

export default Public;
