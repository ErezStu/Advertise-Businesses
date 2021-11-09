import { insertNewCard } from "../helpers/fetch/FetchHelper";
import { Container, Button } from "react-bootstrap";
import MyTunersCardsComp from "../components/Tuners/MyTunersCardsComp";
import CreateCardComp from "../components/Tuners/CreateTunerCardComp";
import { useState } from "react";
function MyTunersPage() {
  const [isAddMode, setAddMode] = useState(true);

  return (
    <>
      {!isAddMode ? (
        <>
          <Button
            className="btn btn-success"
            onClick={() => {
              setAddMode(true);
            }}
          >
            Add A New Tuner
          </Button>
          <h1>My Tuners</h1>
        </>
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
        {!isAddMode && <MyTunersCardsComp delset={true} />}
        {isAddMode && <CreateCardComp clickHandler={insertCard} />}
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
