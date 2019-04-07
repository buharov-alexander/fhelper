import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Dropdown, DropdownButton, Image } from 'react-bootstrap';
import { getAccountIcon } from 'components/account/accountUtil';
import {
  CASH,
  BANK_ACCOUNT,
  DEPOSIT,
  BROKER_ACCOUNT,
  OTHER,
} from 'constants/accountTypes';


class TypeDropdown extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  getImage = type => <Image className="modal-account-icon" src={getAccountIcon({ accountType: type })} rounded />;

  getItem = (type, onChange) => (
    <Dropdown.Item onClick={onChange}>
      {this.getImage(type)}
    </Dropdown.Item>
  );

  render() {
    const { onChange, title, ...props } = this.props;
    return (
      <DropdownButton title={this.getImage(CASH)} {...props}>
        {this.getItem(CASH)}
        {this.getItem(BANK_ACCOUNT)}
        {this.getItem(DEPOSIT)}
        {this.getItem(BROKER_ACCOUNT)}
        {this.getItem(OTHER)}
      </DropdownButton>
    );
  }
}

export default TypeDropdown;
