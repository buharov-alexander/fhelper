import React from 'react';
import PropTypes from 'prop-types';
import { Thumbnail } from 'react-bootstrap';

import 'style/abilityCard.css';

const AbilityCard = ({ imageSrc, title }) => (
  <Thumbnail className="ability-card" src={imageSrc}>
    <h3>
      {title}
    </h3>
  </Thumbnail>
);

AbilityCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AbilityCard;