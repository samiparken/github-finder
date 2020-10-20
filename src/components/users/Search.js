import React, { Component } from "react";
import PropTypes from "prop-types";

//Component
export class Search extends Component {
  state = {
    text: "",
  };

  //Prop types
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showUsers: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  // Change a value of state (To take 'text' in the search bar)
  onChange = (e) => {
    console.log(this.state.text);
    this.setState({ text: e.target.value });
  };

  // Submit btn pressed
  onSubmit = (e) => {
    console.log(this.state.text);
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text); // "Prop is called" (Prop Up)
      this.setState({ text: "" });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange} // typing text
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {/* Button activates only when it can be clear */}
        {showClear && (
          <button
            className='btn btn-light btn-block'
            onClick={clearUsers} // Prop Up
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
