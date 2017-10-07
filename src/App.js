import React, { Component } from 'react';
import logo from './logo.svg';
import DataComponent from './dataComponent/dataComponent'
import BidComponent from './bidComponent/bidComponent'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Cводка курсов валют за последнюю неделю.
        </p>
        <DataComponent />
        <p className="App-intro">
          Cделай ставку и завтра узнаешь угадал ты или нет
        </p>
        <BidComponent />
      </div>
    );
  }
}

export default App;
