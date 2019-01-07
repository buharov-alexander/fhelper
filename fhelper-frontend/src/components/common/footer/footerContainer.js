import React from 'react';
import { connect } from 'react-redux';

import Footer from './footer';
import { loadCurrentCbrRates } from 'actions/cbrActions';
import { loadCurrentMoexIndexes } from 'actions/moexActions';

const FooterContainer = props => <Footer {...props} />

const mapStateToProps = state => {
  return {
    moexIndexes: state.moex.currentIndexes,
    cbrRates: state.cbr.currentRates
  }
}

export default connect(mapStateToProps, {
  loadCurrentCbrRates,
  loadCurrentMoexIndexes
})(FooterContainer);