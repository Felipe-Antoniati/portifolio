import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Portifolio from "./pages/Portifolio";

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/about" component={About}/>
        <Route path="/portifolio" component={Portifolio}/>
      </Switch>
    </BrowserRouter>
  );
};