import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import axios from "axios"; // for async

// States
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

const GithubState = (props) => {
  // Initial values
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  // Initialize Reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // 1. Search Users, Getting data by using API & Save into state
  const searchUsers = async (text) => {
    console.log(text);
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // 2. Get User, Get single Github user data
  const getUser = async (username) => {
    console.log(username);
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };
  // 3. Get Repos, Get Users Repos
  const getUserRepos = async (username) => {
    console.log(username);
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // 4. Clear Users from state
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // 5. Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // values & methods
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        getUserRepos,
        clearUsers,
        //setLoading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
