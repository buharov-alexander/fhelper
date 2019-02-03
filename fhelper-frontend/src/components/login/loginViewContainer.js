import React from 'react';
import { connect } from 'react-redux';

import { signIn } from 'actions/userActions';
import LoginView from './loginView';

const LoginViewContainer = props => <LoginView {...props} />;

export default connect(null, {
  signIn,
})(LoginViewContainer);
