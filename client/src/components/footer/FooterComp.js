import { Navbar, Container, Nav } from "react-bootstrap";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Footer({ user }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route></Route>
      </Switch>
      <Nav>
        <Navbar
          style={{ fontWeight: "bolder" }}
          fixed="bottom"
          expand="sm"
          variant="light"
          bg="info"
        >
          <Container>
            <Nav.Link href="#">
              <BsFacebook />
              Visit us on FB
            </Nav.Link>
            <Nav.Link href="#">
              <AiFillInstagram />
              Follow us on IG
            </Nav.Link>
            <Nav.Link href="#">
              <BsTwitter />
              our twits
            </Nav.Link>
            <Nav.Link href="#">
              <AiFillYoutube />
              YouTube channel
            </Nav.Link>
          </Container>
        </Navbar>
      </Nav>
    </BrowserRouter>
  );
}

export default Footer;
