import { Container } from "react-bootstrap";
import SimpleRegistrationComp from "../components/simple-registration/SimpleRegistrationComp";
import { registerNewAccount, getMeData } from "../helpers/fetch/FetchHelper";
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
        localStorage.setItem("token", data.token);
        getMeData(data.token, (user) => {
          set(user);
        });
        history.replace("/home");
      } else {
        toast.error("Oops, something went wrong");
      }
    });
  }
}
export default SimpleRegistrationPage;
