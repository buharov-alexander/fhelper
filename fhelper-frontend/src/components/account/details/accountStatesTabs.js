import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Nav, Tab } from 'react-bootstrap';

import AccountStatesTable from './accountStatesTable';

const AccountStatesTabs = ({ accountStates }) => (
  <Tab.Container className="account-states-tab" defaultActiveKey="states">
    <Nav defaultActiveKey="states" variant="pills">
      <Nav.Item>
        <Nav.Link eventKey="states">States</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="graph">Graph</Nav.Link>
      </Nav.Item>
    </Nav>
    <Tab.Content>
      <Tab.Pane eventKey="states">
        <AccountStatesTable
          accountStates={accountStates}
        />
      </Tab.Pane>
      <Tab.Pane eventKey="graph" />
    </Tab.Content>
  </Tab.Container>
);

AccountStatesTabs.propTypes = {
  accountStates: ImmutablePropTypes.list.isRequired,
};

export default AccountStatesTabs;
