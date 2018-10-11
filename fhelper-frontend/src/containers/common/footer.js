import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

import { usaFlag, euroFlag, micex, brent } from 'components/common/images';
import RateWidget from 'components/widgets/rateWidget';

class Footer extends React.PureComponent {

  getWidget(rate, imageSrc) {
    return (
      <RateWidget
        imageSrc={imageSrc}
        rate={rate}
      />
    );
  }

  render() {
    const usdWidget = this.getWidget("65.7 rub", usaFlag),
          euroWidget = this.getWidget("78.5 rub", euroFlag),
          micexWidget = this.getWidget("2380", micex),
          rtsiWidget = this.getWidget("1134", micex);
    return (
      <Grid fluid>
        <Row className="row-eq-height">
          <Col xs={2}>
          </Col>
          <Col xs={10} className="green-gradient footer-main-block flex-vert-center">
            <Row>
              <Col md={8}>
                <Row>
                  <Col xs={6} sm={3}>
                    {usdWidget}
                  </Col>
                  <Col xs={6} sm={3}>
                    {euroWidget}
                  </Col>
                  <Col xs={6} sm={3}>
                    {micexWidget}
                  </Col>
                  <Col xs={6} sm={3}>
                    {rtsiWidget}
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    moexIndexes: state.moex.indexes,
    cbrRates: state.cbr.rates
  }
}

export default connect(mapStateToProps)(Footer);