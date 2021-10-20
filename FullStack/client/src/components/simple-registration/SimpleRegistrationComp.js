import { Form, Button } from "react-bootstrap";
import validateSimpleRegistration from "../../helpers/simpleRegistrationHelper";
import { toast } from "react-toastify";

const notify = (message) => toast.warn(message);

function SimpleRegistrationComp({
  text = "",
  header = "",
  clickHandler = (f) => f,
}) {
  return (
    <Form>
      <h1>{header}</h1>
      <Form.Group className="mb-3 p-5" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3 px-5 pb-5" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group className="mb-3 px-5" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button
        className="mx-5"
        variant="primary"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          var validatioErrorOrData =
            text === "Next"
              ? validateSimpleRegistration(
                  "formBasicEmail",
                  "formBasicPassword",
                  "formBasicName",
                  true
                )
              : (validatioErrorOrData = validateSimpleRegistration(
                  "formBasicEmail",
                  "formBasicPassword",
                  "formBasicName",
                  false
                ));
          if (typeof validatioErrorOrData == "string") {
            notify(validatioErrorOrData);
          } else {
            clickHandler(validatioErrorOrData);
          }
        }}
      >
        {text}
      </Button>
    </Form>
  );
}

export default SimpleRegistrationComp;
