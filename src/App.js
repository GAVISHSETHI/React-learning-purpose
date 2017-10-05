import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Login from './login-page.jsx';
import Homepage from './home-page.jsx';
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
     <div>
       <Login />
     </div>
        <div>
          <Router history={browserHistory}>
            <Route path={"/"} component={Homepage} >
              {/*<Route path={"login"} component={Login} />*/}
            </Route>
          </Router>
        </div>
     </div>

    );
  }
}

export default App;
