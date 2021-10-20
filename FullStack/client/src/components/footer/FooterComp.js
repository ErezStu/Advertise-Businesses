// var style = {
//   backgroundColor: "#F8F8F8",
//   borderTop: "1px solid #E7E7E7",
//   textAlign: "center",
//   padding: "20px",
//   position: "fixed",
//   left: "0",
//   bottom: "0",
//   height: "60px",
//   width: "100%",
// };

// var phantom = {
//   display: "block",
//   padding: "20px",
//   height: "60px",
//   width: "100%",
// };

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
