import validateSignIn from "../../helpers/fetch/signInHelper";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

import "./SignInComp.css";

function SignInComp({ clickHandler = (f) => f }) {
  return (
    <Form>
      <h1>Sign in</h1>
      <Form.Group className="mb-3 p-5" controlId="formBasicEmail">
        <Form.Label column="lg" lg={1}>
          Email
        </Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3 px-5" controlId="formBasicPassword">
        <Form.Label column="lg" lg={1}>
          Password
        </Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button
        className="m-5"
        variant="primary"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          var errorOrData = validateSignIn(
            "formBasicEmail",
            "formBasicPassword"
          );
          if (typeof errorOrData == "string") {
            toast.warn(errorOrData);
          } else {
            clickHandler(errorOrData);
          }
        }}
      >
        Sign in
      </Button>
    </Form>
  );
}
export default SignInComp;
