import NavigationRouteComp from "./NavigationRouteComp";
import NavigationBarComp from "./NavigationBarComp";
import { BrowserRouter as Router } from "react-router-dom";

function SinglePageAppComp({ set, user }) {
  return (
    <Router>
      <NavigationBarComp user={user} setUser={set}></NavigationBarComp>
      <NavigationRouteComp set={set}></NavigationRouteComp>
    </Router>
  );
}
export default SinglePageAppComp;
