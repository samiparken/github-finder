import React, { useState, useContext } from "react"; // Add 'useState', 'useContext' Hook
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

//Functional Component
const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState(""); //useState Hook

  // Change a value of state (To take 'text' in the search bar)
  const onChange = (e) => {
    console.log(text);
    setText(e.target.value);
  };

  // Submit btn pressed
  const onSubmit = (e) => {
    console.log(text);
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text); // "Prop is called" (Prop Up)
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange} // typing text
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {/* Button activates only when it can be clear */}
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers} // Prop Up
        >
          Clear
        </button>
      )}
    </div>
  );
};

//Prop types
Search.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default Search;
