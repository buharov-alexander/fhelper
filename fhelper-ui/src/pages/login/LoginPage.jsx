import React, {PureComponent} from 'react';

import './style/loginPage.scss';
import Rocket from 'widget/rocket/Rocket'

export default class LoginPage extends PureComponent {
    render() {
        return (
            <div className="b-page b-login-page">
                <div className="b-login-page__section">
                    <Rocket/>
                </div>
                <div className="b-login-page__section"/>
            </div>
        );
    }
}
