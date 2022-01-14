import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Onboarding1 from "./components/onBoarding1";
import Onboarding2 from "./components/onBoarding2";
import Onboarding3 from "./components/onBoarding3";
import { Toaster } from 'react-hot-toast';
import Header from "./components/header";
function App() {
  return (
    <div className="App">
      <Toaster position="top-center" />
      <Router>
        <Switch>
          <Route exact path="/home">
            <Header />
            <Home />
          </Route>
          <Route exact path="/">
            <Onboarding1 />
          </Route>
          <Route exact path="/onBoarding2">
            <Onboarding2 />
          </Route>
          <Route exact path="/onBoarding3">
            <Onboarding3 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
