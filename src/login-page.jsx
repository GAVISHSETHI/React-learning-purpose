import React, { Component } from 'react';
import Head from './app-header.js';
import Body from './app-body.jsx';
import Footer from './app-footer.jsx';
import 'semantic-ui-css/semantic.min.css';


class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div>
        <Head />
        </div>
        <br />
        <div>
        <Body />
        </div>
        <br />
        <div >
        <Footer />
        </div>

      </div>
    );

  }
}

export default Login;
