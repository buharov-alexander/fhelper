import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown, DropdownButton } from 'react-bootstrap';
import { getValutaSymbol } from 'components/account/accountUtil';
import {
  USD,
  EUR,
  RUB,
} from 'constants/valutaCodes';

const ValutaDropdown = ({ onChange, title, ...props }) => (
  <DropdownButton title={title} {...props}>
    <Dropdown.Item onClick={onChange}>{getValutaSymbol(RUB)}</Dropdown.Item>
    <Dropdown.Item onClick={onChange}>{getValutaSymbol(USD)}</Dropdown.Item>
    <Dropdown.Item onClick={onChange}>{getValutaSymbol(EUR)}</Dropdown.Item>
  </DropdownButton>
);

ValutaDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ValutaDropdown;
