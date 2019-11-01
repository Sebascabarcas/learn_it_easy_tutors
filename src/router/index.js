import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Login from './Login/';
// import SignUp from './SignUp/';
// import PasswordRecovery from './PasswordRecovery/';
import PrivateRoute from '../components/PrivateRoute'
import Login from '../pages/Authentication/Login';
import history from '../history';
import Register from '../pages/Authentication/Register';
import Home from '../pages/Landing/Home';
import Product from '../pages/Landing/Product';
import OurTeam from '../pages/Landing/OurTeam';
import RecoverPassword from '../pages/Authentication/RecoverPassword';
import ResetPassword from '../pages/Authentication/ResetPassword';
import Logged from '../pages/App/Logged';
import Profile from '../pages/App/Profile';
import UserProfile from '../pages/App/UserProfile';
import PublicRoute from '../components/PublicRoute';

function Router () {
  return (
      <BrowserRouter history={history}>
        {/* <Switch> */}
          <PublicRoute>
            <Route path="/" exact component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/our-team" component={OurTeam} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/recover-password" component={RecoverPassword} />
            <Route path="/reset-password" component={ResetPassword} />
          </PublicRoute>
          <PrivateRoute>
            <Route path="/logged" exact component={Logged} />
            <Route path="/logged/:id" component={UserProfile} />
            <Route path="/profile" component={Profile} />
          </PrivateRoute>
          {/* <Route path="/recover-password/" component={RecoverPassword} /> */}
          {/* <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} /> */}
        {/* </Switch> */}
      </BrowserRouter>
  );
}

export default Router;

