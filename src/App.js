import { Route, Switch } from "react-router-dom";
import Favourits from "./pages/Favourits";
import Allmeetups from "./pages/Allmeetups";
import Newmeetups from "./pages/Newmeetups";
import Mainnavigation from "./components/layout/Mainnavigation";
function App() {
  return (
    <div>
      <Mainnavigation />
      <Switch>
        <Route path="/" exact>
          <Allmeetups />
        </Route>
        <Route path="/newmeetups">
          <Newmeetups />
        </Route>
        <Route path="/favourits">
          <Favourits />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
