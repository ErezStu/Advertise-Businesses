import { Container } from "react-bootstrap";
import SignInComp from "../components/sign-in/SignInComp";
import { toast } from "react-toastify";
import { getMeData, signInUser } from "../helpers/fetch/FetchHelper";
import { useHistory } from "react-router-dom";

function SignInPage({ set }) {
  const history = useHistory();

  function signIn(data) {
    signInUser(data, (response) => {
      if (response.token) {
        localStorage.setItem("token", response.token);
        getMeData(response.token, (data) => {
          set(data);
          toast.success("Welcome Back");
          history.replace("/home");
        });
      } else {
        toast.error("Invalid email or password");
      }
    });
  }

  return (
    <Container>
      <SignInComp clickHandler={signIn}></SignInComp>
    </Container>
  );
}
export default SignInPage;
