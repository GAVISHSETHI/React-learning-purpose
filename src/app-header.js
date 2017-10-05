import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Head extends Component {
	  render() {
		return (
			<div>
 		< Image src='https://56e0b88549703524cdea-56269be9fa6a015648d898f06ebbb34a.ssl.cf1.rackcdn.com/L_2aa1a60163327a10edf6709010fb4f307a25ba182f5f3283caf4b9409ff498303fa86db359aadc198d7e7c7e36518a9db5ab6cb3d84c3686ade614e75c3795c8.png'  width="1351" height="281" />
			<div>
				{this.props.children}
			</div>

			</div>
		);
    }
	}


export default Head;
