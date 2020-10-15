import React, { Fragment, Component } from "react";
import "./App.css";

// without JSX
class App extends Component {
  render() {
    return (
      <>
        <h1> Valkommen till React </h1>
        <label htmlFor='name'>Name ?</label>
        <h2> Hejda! </h2>
      </>
    );
  }
}

export default App;
