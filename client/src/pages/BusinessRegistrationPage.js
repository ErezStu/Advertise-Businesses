import { registerNewAccount, getMeData } from "../helpers/fetch/FetchHelper";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";
import SimpleRegistrationComp from "../components/simple-registration/SimpleRegistrationComp";
import { useHistory } from "react-router";

function BusinessRegistrationPage({ set }) {
  const history = useHistory();
  return (
    <Container>
      <SimpleRegistrationComp
        clickHandler={registerUser}
        text="Next"
        header="Buisness Registration"
      ></SimpleRegistrationComp>
    </Container>
  );

  function registerUser(data) {
    registerNewAccount(data, (data) => {
      if (data._id) {
        toast.success("Welcome to our website, add your first tuner now");
        localStorage.setItem("token", data.token);
        getMeData(data.token, (user) => {
          set(user);
        });
        set(data);
        history.replace("/my-tuners");
      } else {
        toast.error("Oops, something went wrong");
      }
    });
  }
}
export default BusinessRegistrationPage;
