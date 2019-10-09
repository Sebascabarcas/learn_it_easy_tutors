import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Login from './Login/';
// import SignUp from './SignUp/';
// import PasswordRecovery from './PasswordRecovery/';
import Login from '../../pages/Authentication/Login';
import history from '../../history';
import Register from '../../pages/Authentication/Register';
import Home from '../../pages/Landing/Home';
import Product from '../../pages/Landing/Product';
import OurTeam from '../../pages/Landing/OurTeam';
import RecoverPassword from '../../pages/Authentication/RecoverPassword';
import ResetPassword from '../../pages/Authentication/ResetPassword';

function Public () {
  return (
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/" exact component={Product} />
          <Route path="/our-team/" exact component={OurTeam} />
          <Route path="/login/" component={Login} />
          <Route path="/register/" component={Register} />
          <Route path="/recover-password/" component={RecoverPassword} />
          <Route path="/reset-password/" component={ResetPassword} />
          {/* <Route path="/recover-password/" component={RecoverPassword} /> */}
          {/* <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} /> */}
        </Switch>
      </BrowserRouter>
  );
}

export default Public;
