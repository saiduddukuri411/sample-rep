// router imports for page redirects
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";

// local component imports
import Login from "./components/login/frame";
import Game from "./components/game/frame";

// import the store reducer and it used for logging in 
import { useSelector } from "react-redux";


function App() {

  const { username, token } = useSelector((state) => state.loggingReducer);
  
  // return routes based on absolute path
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          component={Login}
          exact={true}
        />
        {username !== null && token !== null ? (
          <Route path="/game" component={Game} exact={true} />
        ) : null}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
