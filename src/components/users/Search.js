import React, { Component } from "react";

//Component
export class Search extends Component {
  state = {
    text: "",
  };

  // Submit btn pressed
  onSubmit = (e) => {
    e.proventDefault();
    console.log(this.state.text);
  };

  // Change a value of state (To take 'text' in the search bar)
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
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
      </div>
    );
  }
}

export default Search;
