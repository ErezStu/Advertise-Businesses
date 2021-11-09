import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import slide1 from "../helpers/Images/Slide1.jpg";
import slide2 from "../helpers/Images/Slide2.jpg";
import slide3 from "../helpers/Images/Slide3.jpg";

function HomePage() {
  return (
    <Container>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h1>Best Tuners</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />

          <Carousel.Caption>
            <h1>In our site you can find the tuner for you.</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src={slide3} alt="Third slide" />
          <Carousel.Caption />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
export default HomePage;
