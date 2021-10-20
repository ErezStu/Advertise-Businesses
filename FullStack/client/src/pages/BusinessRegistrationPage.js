import { registerNewAccount, signInUser } from "../helpers/FetchHelper";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";
import SimpleRegistrationComp from "../components/simple-registration/SimpleRegistrationComp";
import CreateCardComp from "../components/Tuners/CreateTunerCardComp";
import { useState } from "react";
import { useHistory } from "react-router";

function BusinessRegistrationPage({ set }) {
  const [isStep1, setIsStep1] = useState(true);
  const history = useHistory();
  return (
    <Container>
      {isStep1 && (
        <SimpleRegistrationComp
          clickHandler={registerUser}
          text="Next"
          header="Buisness Registration"
        ></SimpleRegistrationComp>
      )}
      {!isStep1 && <CreateCardComp clickHandler={createCard}></CreateCardComp>}
    </Container>
  );

  function registerUser(data) {
    registerNewAccount(data, (data) => {
      if (data._id) {
        toast.success("Welcome to our website");
        set(data);
        setIsStep1(false);
      } else {
        toast.error('Oops, The acount wasn"t created');
      }
    });
  }

  function createCard() {
    toast.info("The card added");
  }
}
export default BusinessRegistrationPage;
