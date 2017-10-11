import React, { Component } from "react";
import { Button, Tab} from 'semantic-ui-react';
import { Link } from 'react-router';

  class Homepage extends Component {

  render() {
    const panes = [
      { menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}> <Button onClick={() => {window.location = "http://www.google.com"}}>
        Click Here to go to google
      </Button></Tab.Pane> },
      { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>
        <Button>
          <Link to={'/login'}> <h2>LOGIN</h2></Link>
        </Button>
      </Tab.Pane> },
      { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>HEY!</Tab.Pane> },
    ]
    return (
      <div className="App">
<div>
  <Tab menu={{ attached: false, tabular: false }} panes={panes} />
</div>
      <h1>HOME PAGE</h1>
      <div>

      </div>
      </div>
    );
  }
}
export default Homepage;







