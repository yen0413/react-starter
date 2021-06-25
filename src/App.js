import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import Counters from "./components/Counters";
import TaskTracker from "./components/TaskTracker";
import Home from "./components/Home";

class App extends Component {
  render() {
    //console.log("App - Rendered");

    return (
      <React.Fragment>
        <main className="container"></main>
        <Layout>
          <Route exact path="/Home" component={Home} />
          <Route path="/Counters" component={Counters} />
          <Route path="/TaskTracker" component={TaskTracker} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
