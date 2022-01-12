import './ResourceView.css';
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import topImage from '../../../public/resourcesIllustration.svg';
import HelpLinesComponent from '../../helplines/HelplinesComponent';

function ResourceView(props) {
  const [selectedPage, setSelectedPage] = React.useState('helplines');

  return (
    <div className="bottomContainer">
      <Jumbotron style={{ paddingBottom: '0' }} className="topContainer">
        <Container fluid style={{ height: '100%', width: '90%' }}>
          <Row style={{ width: '100%', marginRight: '0' }}>
            <Col
              sm={12}
              xs={12}
              md={12}
              lg={6}
              className="displayFlexColumn justifyContentCenter"
            >
              <h1> Resources</h1>
              <p>
                These are some useful resources (the latest news articles,
                LineHayat’s infographics, and other free mental health services
                in Malaysia), which would help gain a better understanding of
                mental health and keep you updated with the services available
                in Malaysia.
              </p>
            </Col>
            <Col sm={12} xs={12} md={12} lg={6}>
              <Image src={topImage} className="resourceImage" />
            </Col>
          </Row>
        </Container>
        <div className="displayFlexRow justifyContentBetween jumbotronButtonContainer">
          <Button
            variant="light"
            className={
              (selectedPage === 'helplines' &&
                'selectedButton jumbotronButton berkshire-font') ||
              (selectedPage !== 'helplines' && 'jumbotronButton berkshire-font')
            }
            onClick={() => setSelectedPage('helplines')}
          >
            Helplines
          </Button>
          <Button
            variant="light"
            className={
              (selectedPage === 'news' &&
                'selectedButton jumbotronButton berkshire-font') ||
              (selectedPage !== 'news' && 'jumbotronButton berkshire-font')
            }
            onClick={() => setSelectedPage('news')}
          >
            News
          </Button>
          <Button
            variant="light"
            className={
              (selectedPage === 'mediaResource' &&
                'selectedButton jumbotronButton berkshire-font') ||
              (selectedPage !== 'mediaResource' &&
                'jumbotronButton berkshire-font')
            }
            onClick={() => setSelectedPage('mediaResource')}
          >
            Media Resources
          </Button>
        </div>
      </Jumbotron>
      <div>
        {selectedPage === 'helplines' && (
          <div>
            <HelpLinesComponent />
          </div>
        )}
        {selectedPage === 'news' && <div>News coming soon !</div>}
        {selectedPage === 'mediaResource' && (
          <div>Media Resources coming soon!</div>
        )}
      </div>
    </div>
  );
}

export default ResourceView;
