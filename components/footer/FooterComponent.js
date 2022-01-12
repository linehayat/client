import React, { useContext, useState } from 'react';
import 'flag-icon-css/css/flag-icon.css';
import './FooterComponent.css';
import { LanguageContext } from '../../App';
import logo from '../../public/lineHayatLogo.svg';
import usmFooter from '../../public/footerUsm.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FooterComponent(props) {
  const languageContext = useContext(LanguageContext);
  return (
    <div className="footer">
      <div className="footerContent">
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            <div className="ml-md-5">
              <h4 className="mb-lg-5">LineHayat,</h4>
              <p>Universiti Sains Malaysia, 11800,</p>
              <p>Penang, Malaysia</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="d-flex justify-content-center">
              <img src={usmFooter} width="70%" height="70%" />
              <img className="footer-lh-logo" src={logo} />
            </div>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <div>
              <h4 className="mb-lg-5">E-mail:</h4>
              <a href="mailto:linehayat@usm.my">
                <p className="mb-lg-5">linehayat@usm.my</p>
              </a>
              <h4 className="mb-lg-5">Last Updated:</h4>
              <p>21/08/2021</p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="horizontalCenter footerDesignedBy">
        <p className="footerDesignedByNoMargin">
          Designed by <span className="footerHighlight">LineHayat D&M</span>;
        </p>
        <p>
          Developed by{' '}
          <a
            href="https://henneberg.io/#/"
            rel="noopener noreferrer"
            className="myLink"
          >
            <span className="footerHighlight">Max Henneberg</span>
          </a>{' '}
          & <span className="footerHighlight">Joo Hom</span>
        </p>
      </div>
    </div>
  );
}

export default FooterComponent;
