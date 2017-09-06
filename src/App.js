import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';

import Abc from './app-header.js';
import Xyz from './app-body.jsx';
import Pqr from './app-footer.jsx';
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
     	<Abc />
      </div>
      <br />
      <div>
      <Xyz />
      </div>
      <br />
      <div >
      <Pqr />
      </div>
      </div>
    );

  }
}

export default App;
