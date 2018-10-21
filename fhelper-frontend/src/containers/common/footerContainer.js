import React from 'react';
import { connect } from 'react-redux';

import Footer from 'components/common/footer';
import {loadCurrentCbrRates} from 'actions/cbr/cbrActions';
import {loadMoexRates} from 'actions/moex/moexActions';

const FooterContainer = props => <Footer {...props} />

const mapStateToProps = state => {
  return {
    moexRates: state.moex.rates,
    cbrRates: state.cbr.currentRates
  }
}

export default connect(mapStateToProps, {
  loadCurrentCbrRates,
  loadMoexRates
})(FooterContainer);