import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Portifolio from "./pages/Portifolio";
import Contact from "./pages/Contact";
import Happy from "./pages/Portifolio/Happy";

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
       <Switch>
          <Route path="/portifolio" exact component={Portifolio}/>
          <Route 
            path="/portifolio/happy" 
            component={Happy}
          />
       </Switch> 
      </Switch>
    </BrowserRouter>
  );
};