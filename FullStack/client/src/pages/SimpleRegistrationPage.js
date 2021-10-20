import { Container } from "react-bootstrap";
import SimpleRegistrationComp from "../components/simple-registration/SimpleRegistrationComp";
import {
  registerNewAccount,
  signInUser,
  getMeData,
} from "../helpers/FetchHelper";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

function SimpleRegistrationPage({ set }) {
  const history = useHistory();
  return (
    <Container>
      <SimpleRegistrationComp
        clickHandler={registerUser}
        text="Sign up"
        header="Simple Registration"
      ></SimpleRegistrationComp>
    </Container>
  );

  function registerUser(data) {
    registerNewAccount(data, (data) => {
      if (data._id) {
        toast.success("Welcome to our website");
        // signInUser(data, (response) => {
        //   console.log(response);
        //   if (response.token) {
        //     localStorage.setItem("token", response.token);
        //     getMeData(response.token, (data) => {
        //       set(data);
        //       history.replace("/home");
        //     });
        //   }
        // });
      } else {
        toast.error('Oops, The acount wasn"t created');
      }
    });
  }
}
export default SimpleRegistrationPage;
