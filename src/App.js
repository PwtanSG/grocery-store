
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Main from './components/MainComponent'
import { HashRouter, BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Main />
        </div>
      </HashRouter>
    );
  }
}

export default App;
