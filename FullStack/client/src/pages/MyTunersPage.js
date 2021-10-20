import { insertNewCard } from "../helpers/FetchHelper";
import { Container, Button } from "react-bootstrap";
import MyTunersCardsComp from "../components/Tuners/MyTunersCardsComp";
import CreateCardComp from "../components/Tuners/CreateTunerCardComp";
import { useState } from "react";
function MyTunersPage() {
  const [isAddMode, setAddMode] = useState(false);

  return (
    <>
      {!isAddMode ? (
        <Button
          className="btn btn-success"
          onClick={() => {
            setAddMode(true);
          }}
        >
          Add A New Tuner
        </Button>
      ) : (
        <Button
          className="btn btn-success"
          onClick={() => {
            setAddMode(false);
          }}
        >
          My Tuners
        </Button>
      )}
      <Container>
        {!isAddMode && <MyTunersCardsComp></MyTunersCardsComp>}
        {isAddMode && (
          <CreateCardComp clickHandler={insertCard}></CreateCardComp>
        )}
      </Container>
    </>
  );

  function insertCard(data) {
    insertNewCard(data, localStorage.getItem("token"), () => {
      setAddMode(false);
    });
  }
}
export default MyTunersPage;
