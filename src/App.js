import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainPage from './components/pages/MainPage';
import LoginPage from './components/pages/LoginPage';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
