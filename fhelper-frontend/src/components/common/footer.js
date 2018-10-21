import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

import { usaFlag, euroFlag, micex, rts } from 'constants/images';
import RateWidget from 'components/widgets/rateWidget';
import {
  USD,
  EUR,
} from 'constants/valutaCodes';
import {
  IMOEX,
  RTSI,
} from 'constants/indexCodes';

class Footer extends PureComponent {

  static propTypes = {
    cbrRates: PropTypes.object,
    moexIndexes: PropTypes.object,
    loadCurrentCbrRates: PropTypes.func.isRequired,
    loadCurrentMoexIndexes: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.loadCurrentCbrRates();
    this.props.loadCurrentMoexIndexes();
  }

  getWidget(rate, imageSrc) {
    return (
      <RateWidget
        imageSrc={imageSrc}
        rate={rate}
      />
    );
  }

  render() {
    const {moexIndexes, cbrRates} = this.props;

    const usdValue = cbrRates.has(USD) ? cbrRates.get(USD).value.toFixed(1) : '-';
    const eurValue = cbrRates.has(EUR) ? cbrRates.get(EUR).value.toFixed(1) : '-';
    const imoexValue = moexIndexes.has(IMOEX) ? moexIndexes.get(IMOEX).value.toFixed(1) : '-';
    const rtsiValue = moexIndexes.has(RTSI) ? moexIndexes.get(RTSI).value.toFixed(1) : '-';

    const usdWidget = this.getWidget(usdValue, usaFlag),
          euroWidget = this.getWidget(eurValue, euroFlag),
          micexWidget = this.getWidget(imoexValue, micex),
          rtsiWidget = this.getWidget(rtsiValue, rts);
    return (
      <footer className="footer">
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
      </footer>
    );
  }
}

export default Footer;