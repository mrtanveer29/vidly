import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MovieList from "./components/MovieList";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" >Wellcome To Vidly App</h1>
        </header>
        <MovieList/>
      </div>
    );
  }
}


export default App;
