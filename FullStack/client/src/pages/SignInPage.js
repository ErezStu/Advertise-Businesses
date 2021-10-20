import { Container } from "react-bootstrap";
import SignInComp from "../components/sign-in/SignInComp";
import { toast } from "react-toastify";
import { getMeData, signInUser } from "../helpers/FetchHelper";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

function SignInPage({ set, user }) {
  const history = useHistory();
  const msg = useContext(UserContext);

  console.log(msg.name);

  function signIn(data) {
    signInUser(data, (response) => {
      if (response.token) {
        toast.success("Welcome Back " + msg.name);
        localStorage.setItem("token", response.token);
        getMeData(response.token, (data) => {
          set(data);
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
