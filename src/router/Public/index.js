import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
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
      <main>
        <Route path="/" exact component={Landing} />
        <Route path="/login/" component={Login} />
        {/* <Route path="/recover-password/" component={RecoverPassword} /> */}
        <Route path="/register/" component={Register} />
        {/* <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} /> */}
      </main>
    </BrowserRouter>
  );
}

export default Public;