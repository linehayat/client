import React, { useContext } from 'react';
import { LanguageContext } from '../../App';
import Image from 'react-bootstrap/Image';
import usmMain from '../../../public/usmMain.png';
import lineHayatLogo from '../../../public/lineHayatLogo.svg';
import Button from 'react-bootstrap/Button';
import './CoverImageComponent.css';
import { Link } from 'react-router-dom';

function CoverImageComponent(props) {
  const languageContext = useContext(LanguageContext);
  return (
    <div className="mainImage">
      <Image src={usmMain} width="100%" height="100%" className="bgImage" />
      <div className="hover">
        <Image
          src={lineHayatLogo}
          width="100%"
          height="100%"
          className="lHLogo"
        />
        <div className="hoverContent">
          <div
            dangerouslySetInnerHTML={{
              __html: languageContext.content.home.info,
            }}
            className="infoContainer"
          ></div>
          <div className="buttonContainer">
            <Link to="/help">
              <Button variant="primary" className="float-md-left">
                {languageContext.content.home.imsg}
              </Button>
            </Link>
            <Link to="aboutus">
              <Button variant="secondary" className="float-md-left">
                {languageContext.content.home.callUs}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="courtesyText">
        Image courtesy of Meda and Public Relations Centre, USM
      </div>
    </div>
  );
}

export default CoverImageComponent;
