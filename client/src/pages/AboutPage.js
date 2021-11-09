import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";

import AI from "../helpers/Images/AboutImage.jpg";

const AboutPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={6} md={6}>
          <h1>Our Story</h1>
          <p>
            We’ve been around in one form or another for more than 5 years,
            always with one goal in mind — helping tuners compete and win. We
            provide the technology, software and local business automation tools
            small business owners need to better manage their time, communicate
            with clients, and get paid, so they can take control of their
            business and be more successful
          </p>
        </Col>
        <Col xs={6} md={6}>
          <Image src={AI} alt="about" />
        </Col>
      </Row>
    </Container>
  );
};
export default AboutPage;
