import React, {PureComponent} from 'react';

import Rocket from 'widget/rocket/Rocket'

import './style/loginPage.scss';
import SignIn from './SignIn';
export default class LoginPage extends PureComponent {
    render() {
        return (
            <div className="b-page b-login-page">
                <div className="b-login-page__section">
                    <Rocket/>
                </div>
                <div className="b-login-page__section">
                    <SignIn/>
                </div>
            </div>
        );
    }
}
