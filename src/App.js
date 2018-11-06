import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar'
import SideBar from './SideBar/SideBar'

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar></SearchBar>
        <SideBar></SideBar>
      </div>
    );
  }
}

export default App;
