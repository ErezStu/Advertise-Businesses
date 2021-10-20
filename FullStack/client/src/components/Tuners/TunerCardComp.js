import { Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../App";

function TunerCardComp({ card, handleClick }) {
  const user = useContext(UserContext);
  console.log(user.cards);

  return (
    (
      <Card
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
          {user.biz && (
            <Button
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                handleClick(card._id);
                toast.warn("Alright, We remvoed " + card.bizName);
              }}
            >
              Remove This Tuner
            </Button>
          )}
        </Card.Body>
      </Card>
    ) || <></>
  );
}
export default TunerCardComp;
