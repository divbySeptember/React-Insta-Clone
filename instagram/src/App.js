import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import SearchBar from "./Components/SearchBar/SearchBar";
import PostContainer from "./Components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer data={dummyData} />
      </div>
    );
  }
}

export default App;


