import { Navbar, Nav, Container } from "react-bootstrap";
import { tabs } from "../../helpers/tabs/tabs";
import { useHistory, Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { toast } from "react-toastify";

function NavigationBarComp({ user, setUser }) {
  const history = useHistory();

  const logOut = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      setUser({});
      toast("See you next time :-)");
      history.replace("/home");
    }
  };

  const button = (
    <Nav.Link onClick={logOut}>
      <GoSignOut style={{ color: "red" }} /> Sign Out
    </Nav.Link>
  );

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="info"
      variant="light"
      style={{ fontSize: "1em", fontWeight: "bolder" }}
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {user._id && user.biz ? (
              <>
                {tabs
                  .filter((x) => x.displayForLoggedin || x.bizUser)
                  .map((tab, index) => (
                    <Nav.Link key={index} to={tab.href} as={Link}>
                      {tab.icon} {tab.name}
                    </Nav.Link>
                  ))}
                {button}
              </>
            ) : user._id ? (
              <>
                {tabs
                  .filter((x) => x.displayForLoggedin && !x.bizUser)
                  .map((tab, index) => (
                    <Nav.Link key={index} to={tab.href} as={Link}>
                      {tab.icon} {tab.name}
                    </Nav.Link>
                  ))}
                {button}
              </>
            ) : (
              tabs
                .filter((x) => !x.hideForLoggedout)
                .map((tab, index) => (
                  <Nav.Link key={index} to={tab.href} as={Link}>
                    {tab.icon} {tab.name}
                  </Nav.Link>
                ))
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBarComp;
