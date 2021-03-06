import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

import 'style/rateWidget.css';

const RateWidget = ({ imageSrc, rate }) => (
  <div>
    <Image className="img-rate" src={imageSrc} roundedCircle />
    <div className="white label-rate">
      {rate}
    </div>
  </div>
);

RateWidget.propTypes = {
  rate: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default RateWidget;
