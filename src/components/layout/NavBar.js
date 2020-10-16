// Under Global CSS
import React, { Component } from "react";
import PropTypes from "prop-types";

export class NavBar extends Component {
  // Default Props
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };

  // Define Prop Types
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}{" "}
          {/*Passing props */}
        </h1>
      </nav>
    );
  }
}

export default NavBar;
