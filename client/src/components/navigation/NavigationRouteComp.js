import { Switch, Route } from "react-router-dom";
import { tabs } from "../../helpers/tabs/tabs";

function NavigationRouteComp({ set }) {
  return (
    <Switch>
      {tabs.map((tab, index) => (
        <Route key={index} path={tab.href}>
          {<tab.page set={set}></tab.page>}
        </Route>
      ))}
    </Switch>
  );
}

export default NavigationRouteComp;
