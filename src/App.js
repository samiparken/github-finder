import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
  // Declare state
  state = {
    users: [],
    loading: false,
  };

  // Lifecycle function
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  // Getting data by using API & Save into state
  // Search Github Users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    console.log(text);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // Rendering components
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Search searchUsers={this.searchUsers} /> {/* Prop Up from Search */}
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
