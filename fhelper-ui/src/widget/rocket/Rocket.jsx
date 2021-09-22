import React, {PureComponent} from 'react';

import './style/rocket.scss';
import {ReactComponent as RocketSvg} from 'img/rocket.svg'

export default class Rocket extends PureComponent {
    render() {
        return (
            <div className="b-rocket">
                <div className="b-rocket__rocket">
                    <RocketSvg/>
                </div>
            </div>
        );
    }
}
