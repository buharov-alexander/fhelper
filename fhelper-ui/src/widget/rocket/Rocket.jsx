import React, {PureComponent} from 'react';

import './style/rocket.scss';
import {ReactComponent as RocketSvg} from 'img/rocket.svg'

export default class Rocket extends PureComponent {
    renderStar(index) {
        const left = Math.random() * 100;
        const height = Math.random() * 50;
        const duration = Math.random() * 2;
        return (
            <div
                key={index}
                className="b-rocket__star"
                style={{
                    left: `${left}%`,
                    height: `${height}px`,
                    animationDuration: `${duration}s`
                }}
            />
        );
    }
    
    renderStars() {
        const count = 50;
        const stars = [];
        for (let index = 0; index < count; index++) {
            const star = this.renderStar(index);
            stars.push(star);
        }
        return stars;
    }
    
    render() {
        return (
            <div className="b-rocket">
                <div className="b-rocket__rocket">
                    <RocketSvg/>
                </div>
                <div className="b-rocket__stars">
                    {this.renderStars()}
                </div>
            </div>
        );
    }
}
