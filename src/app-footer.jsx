import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import  './index.css';
class Footer extends Component {

	  render() {
		return (

<p className = "para1">

      <Button.Group size='large'>
      <Button>Privacy</Button>
      <Button.Or />
      <Button>Terms</Button>
    </Button.Group>
</p>


		);
    }
	}


export default Footer;
