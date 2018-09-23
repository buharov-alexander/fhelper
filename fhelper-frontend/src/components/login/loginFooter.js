import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

import { usaFlag, euroFlag, micex, brent } from 'components/common/images';
import RateWidget from 'components/rate/rateWidget';

export default class LoginFooter extends React.PureComponent {
  render() {
    return (
      <Grid fluid>
        <Row className="row-eq-height">
          <Col xs={2}>
          </Col>
          <Col xs={10} className="green-gradient login-bottom-block flex-vert-center">
            <Row>
              <Col md={8}>
                <Row>
                  <Col xs={6} sm={3}>
                    <RateWidget
                      imageSrc={usaFlag}
                      rate={"67.3 rub"}
                    />
                  </Col>
                  <Col xs={6} sm={3}>
                    <RateWidget
                      imageSrc={euroFlag}
                      rate={"78.5 rub"}
                    />
                  </Col>
                  <Col xs={6} sm={3}>
                    <RateWidget
                      imageSrc={micex}
                      rate={"2404.3"}
                    />
                  </Col>
                  <Col xs={6} sm={3}>
                    <RateWidget
                      imageSrc={brent}
                      rate={"79 usd"}
                    />
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