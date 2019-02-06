import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const AccountStatesTabs = () => (
  <Tabs defaultActiveKey="states">
    <Tab eventKey="states" title="States" />
    <Tab eventKey="graph" title="Graph" />
  </Tabs>
);

AccountStatesTabs.propTypes = {
};

export default AccountStatesTabs;
