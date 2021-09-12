import { Route, Switch } from "react-router-dom";
import Favourits from "./pages/Favourits";
import Allmeetups from "./pages/Allmeetups";
import Newmeetups from "./pages/Newmeetups";

import Layout from "./components/layout/Layout";
function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
