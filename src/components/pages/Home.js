import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";

//Functional Component
const Home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default Home;
