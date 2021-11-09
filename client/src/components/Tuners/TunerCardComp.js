import { Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../App";

function TunerCardComp({ card, handleClick, delset }) {
  const user = useContext(UserContext);

  return (
    <Card
      border="success"
      style={{
        width: "18rem",
        display: "inline-block",
        padding: 20,
        margin: 10,
      }}
    >
      <Card.Img
        variant="top"
        style={{ width: "15rem", height: "10rem" }}
        src={card.bizImage}
      />
      <Card.Body className="text-center">
        <Card.Title>{card.bizName}</Card.Title>
        <Card.Text>{card.bizDescription}</Card.Text>
        <Card.Text>{card.bizAddress}</Card.Text>
        <Card.Text>{card.bizPhone}</Card.Text>

        {user.biz && delset ? (
          <Button
            variant="danger"
            className="mt-2"
            onClick={(e) => {
              e.preventDefault();
              handleClick(card._id);
              toast.warn("Alright, We remvoed " + card.bizName + "'s tuner");
            }}
          >
            Remove tuner
          </Button>
        ) : null}
      </Card.Body>
    </Card>
  );
}
export default TunerCardComp;
