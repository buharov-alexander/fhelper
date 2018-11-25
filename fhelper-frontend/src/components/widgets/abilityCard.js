import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import 'style/abilityCard.css';

const AbilityCard = ({ imageSrc, title }) => (
  <Card className="ability-card">
    <Card.Img variant="top" src={imageSrc} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
    </Card.Body>
  </Card>
);

AbilityCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AbilityCard;