import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // for organizing pages with address
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Home from "./components/pages/Home";
import User from "./components/users/User";
import About from "./components/pages/About";

// State
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import "./App.css"; // Global Style

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title='Github Finder' icon='fab fa-github' />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
