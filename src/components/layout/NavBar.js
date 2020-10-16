// Under Global CSS
import React from "react";
import PropTypes from "prop-types";

//function, passing props
const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

// Default Props
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

// Define Prop Types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
