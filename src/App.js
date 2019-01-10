import React, { Component } from 'react';

import './App.css';
import Twitter from './components/Twitter'
import ReduxTwitter from './components/ReduxTwitter'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>ProntoQuest react twitter</h1>
        <Twitter />
        <hr />
        <ReduxTwitter />
      </div>
    );
  }
}

export default App;
