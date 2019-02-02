import React from 'react';
import { connect } from 'react-redux';

import { loadCurrentCbrRates } from 'actions/cbrActions';
import { loadCurrentMoexIndexes } from 'actions/moexActions';
import Footer from './footer';

const FooterContainer = props => <Footer {...props} />;

const mapStateToProps = state => ({
  moexIndexes: state.moex.currentIndexes,
  cbrRates: state.cbr.currentRates,
});

export default connect(mapStateToProps, {
  loadCurrentCbrRates,
  loadCurrentMoexIndexes,
})(FooterContainer);
