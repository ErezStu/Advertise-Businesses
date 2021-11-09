import { Container } from "react-bootstrap";
import AllTunersCardComp from "../components/Tuners/AllTunersCardComp";

function AllTunerssPage() {
  return (
    <>
      <Container>
        <h1>All The Tuners</h1>
        <AllTunersCardComp delset={false} />
      </Container>
    </>
  );
}
export default AllTunerssPage;
