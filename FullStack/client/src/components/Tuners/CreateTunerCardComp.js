import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

function CreateTunerCardComp({ clickHandler }) {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();

  return (
    <Form>
      <h1>Buisness Registration</h1>
      <Form.Group className="mb-3 px-5" controlId="formBasicBusinessName">
        <Form.Label>Business Name</Form.Label>
        <Form.Control type="text" ref={input1} />
      </Form.Group>
      <Form.Group
        className="mb-3 px-5"
        controlId="formBasicBusinessDescription"
      >
        <Form.Label>Business Description</Form.Label>
        <Form.Control type="text" ref={input2} />
      </Form.Group>
      <Form.Group className="mb-3 px-5" controlId="formBasicBusinessAddress">
        <Form.Label>Business Address</Form.Label>
        <Form.Control type="text" ref={input3} />
      </Form.Group>
      <Form.Group className="mb-3 px-5" controlId="formBasicBusinessPhone">
        <Form.Label>Business Phone</Form.Label>
        <Form.Control type="text" ref={input4} />
      </Form.Group>
      <Form.Group className="mb-3 px-5" controlId="formBasicBusinessImage">
        <Form.Label>Business Image</Form.Label>
        <Form.Control type="text" ref={input5} />
      </Form.Group>
      <Button
        className="m-5"
        variant="success"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          toast.info("The card added");
          clickHandler({
            bizName: input1.current.value,
            bizDescription: input2.current.value,
            bizAddress: input3.current.value,
            bizPhone: input4.current.value,
            bizImage:
              input5.current.value.trim().length === 0
                ? "https://hajes-racing.com/wp-content/uploads/2020/05/A3-Dyno-wheel-shot.jpg"
                : input5.current.value,
          });
        }}
      >
        Add Tuner
      </Button>
    </Form>
  );
}
export default CreateTunerCardComp;
