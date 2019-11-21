import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Game from "./components/gamePage";
import Scorecard from "./components/scorecard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Game} path="/game" />
          <Route component={Scorecard} path='/scorecard' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
