import React, { Component } from "react";
import { Button } from 'semantic-ui-react';


  class Homepage extends Component {
  render() {
    return (
      <div className="App">

      <h1>HOME PAGE</h1>
        <div>
          <Button onClick = "http://www.google.com">
            Click Here
          </Button>

        </div>

      </div>
    );
  }
}
export default Homepage;