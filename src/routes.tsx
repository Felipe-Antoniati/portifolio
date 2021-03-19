import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Portifolio from "./pages/Portifolio";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/portifolio" component={Portifolio} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;