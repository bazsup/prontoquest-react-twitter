import React, { Component } from 'react';

import './App.css';
import Twitter from './components/Twitter'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>ProntoQuest react twitter</h1>
        <Twitter />
      </div>
    );
  }
}

export default App;
