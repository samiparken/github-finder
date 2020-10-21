import React, { useState, useContext } from "react"; // Add 'useState', 'useContext' Hook
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

//Functional Component
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

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
      alertContext.setAlert("Please enter something", "light"); //context
    } else {
      githubContext.searchUsers(text); //context
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

export default Search;
