import React, { Component } from 'react';
import logo from '../logo.svg';
import '../../node_modules/uikit/dist/css/uikit.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Breakation</h1>
        </header>
        <div className="container">
          {this.props.children}
        </div>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
