import { Container } from "react-bootstrap";
import AllTunersCardComp from "../components/Tuners/AllTunersCardComp";

function AllTunerssPage({ user }) {
  return (
    <>
      <Container>
        <AllTunersCardComp></AllTunersCardComp>
      </Container>
    </>
  );
}
export default AllTunerssPage;
