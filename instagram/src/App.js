import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './components/Authentication/withAuthenticate';
import postData from './dummy-data.js';

class App extends Component {

  constructor(props) {
    super();
    
    this.state = {
      allPosts: [],
      displayedPosts: []
    }

    this.filterPosts = this.filterPosts.bind(this);
  }

 

  componentDidMount() {
    this.setState({
      allPosts: postData,
      displayedPosts: postData
    });
  }

  filterPosts(criterion) {
    if (criterion === '') {
      this.setState({
        displayedPosts: this.state.allPosts
      });
    } else {
      const filteredPosts = this.state.allPosts.filter(post => post.username.includes(criterion));
      this.setState({
        displayedPosts: filteredPosts
      });
    }
  }


  render() {
    return (
      <div className="App">
      <ComponentFromWithAuthenticate />
        <header>
          <div className="mainLogo">
            <i class="fab fa-instagram"></i>
            <div className="line1"></div>
            <h1 className="App-title">Instagram</h1>
          </div>
          <SearchBar posts={this.state.displayedPosts} filterPosts={this.filterPosts}/>
          <div className="socialIcon">
          <i class="far fa-compass"></i>
          <i class="far fa-heart"></i>
          <i class="far fa-user"></i>
          </div>
        </header>
        <div className="posts">
          {this.state.displayedPosts.map((post, index) => {
            return (
              <PostContainer key={index} post={post}/>        
            )
          })}
        </div>
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsContainer)(LoginPage);

export default App;