import React from 'react';
import { connect } from 'react-redux';

import Footer from 'components/common/footer';
import {loadCbrRates} from 'actions/cbr/cbrActions';
import {loadMoexRates} from 'actions/moex/moexActions';

const FooterContainer = props => <Footer {...props} />

const mapStateToProps = state => {
  return {
    moexRates: state.moex.rates,
    cbrRates: state.cbr.rates
  }
}

export default connect(mapStateToProps, {
  loadCbrRates,
  loadMoexRates
})(FooterContainer);