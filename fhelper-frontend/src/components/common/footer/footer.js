import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Container, Row, Col } from 'react-bootstrap';

import 'style/footer.css';
import {
  usaFlag, euroFlag, micex, rts,
} from 'constants/images';
import {
  USD,
  EUR,
} from 'constants/valutaCodes';
import {
  IMOEX,
  RTSI,
} from 'constants/indexCodes';
import RateWidget from './rateWidget';

class Footer extends PureComponent {
  static propTypes = {
    cbrRates: ImmutablePropTypes.map.isRequired,
    moexIndexes: ImmutablePropTypes.map.isRequired,
    loadCurrentCbrRates: PropTypes.func.isRequired,
    loadCurrentMoexIndexes: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { loadCurrentCbrRates, loadCurrentMoexIndexes } = this.props;
    loadCurrentCbrRates();
    loadCurrentMoexIndexes();
  }

  getWidget = (rate, imageSrc) => (
    <RateWidget
      imageSrc={imageSrc}
      rate={rate}
    />
  );

  render() {
    const { moexIndexes, cbrRates } = this.props;

    const usdValue = cbrRates.has(USD) ? cbrRates.get(USD).value.toFixed(1) : '-';
    const eurValue = cbrRates.has(EUR) ? cbrRates.get(EUR).value.toFixed(1) : '-';
    const imoexValue = moexIndexes.has(IMOEX) ? moexIndexes.get(IMOEX).value.toFixed(1) : '-';
    const rtsiValue = moexIndexes.has(RTSI) ? moexIndexes.get(RTSI).value.toFixed(1) : '-';

    const usdWidget = this.getWidget(usdValue, usaFlag);
    const euroWidget = this.getWidget(eurValue, euroFlag);
    const micexWidget = this.getWidget(imoexValue, micex);
    const rtsiWidget = this.getWidget(rtsiValue, rts);
    return (
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col xs={2} />
            <Col xs={10} className="green-gradient footer-main-block flex-vert-center">
              <Row>
                <Col lg={8}>
                  <Row>
                    <Col xs={6} md={3}>
                      {usdWidget}
                    </Col>
                    <Col xs={6} md={3}>
                      {euroWidget}
                    </Col>
                    <Col xs={6} md={3}>
                      {micexWidget}
                    </Col>
                    <Col xs={6} md={3}>
                      {rtsiWidget}
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} />
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
