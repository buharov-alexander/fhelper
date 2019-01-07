import React from 'react';
import { connect } from 'react-redux';

import LoginView from './loginView';
import { signIn } from 'actions/userActions';

const LoginViewContainer = props => <LoginView {...props} />

export default connect(null, {
  signIn
})(LoginViewContainer);