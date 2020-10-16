import React, { Component } from "react";
import Navbar from "./components/layout/NavBar";
import "./App.css";

//JSX
class App extends Component {
  foos = () => "Bars";

  render() {
    const name = "Han-Saem Park";
    const foo = () => "Bar";
    const loading = false;
    const showName = true;

    // if (loading) {
    //   return <h4>Loading...</h4>;
    // }

    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />{" "}
        {/*other Component*/}
        <h1>My First Page</h1>
        {loading ? <h4>Loading...</h4> : <h4> DONE! </h4>}
        <h2> Hello {showName ? name : null} </h2>
        <h2> Hello {showName && name} </h2> {/*Alt Ternary Operation*/}
        <h2> toUppercase() : {name.toUpperCase()} </h2>
        <h2> 2 + 2 = {2 + 2} </h2>
        <h2> foo = {foo()} </h2>
        <h2> foos = {this.foos()}</h2>
      </div>
    );
  }
}

export default App;
