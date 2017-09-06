import React, { Component } from 'react';
import { Button , Form , Segment , Container, Icon , Header ,  Loader } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Xyz extends Component {
	LoaderExampleInlineCentered = () => (
	  <Loader active inline='centered' />
	)

	  render() {
		return (

      <Container secondary>


    <br />
    <br />
   <Header textAlign='center'size='huge'>WELCOME TO MY EVIVE</Header>
   <br />
   <br />
    <Segment  >
    <Form >
    <p><center> <h3>Log in: </h3></center></p>
      <Form.Group widths='equal'>
        <Form.Input label='Username:' placeholder='your-registered-email@email.com' />
          </Form.Group>
          <Form.Group widths='equal'>
        <Form.Input label='Password:' type='password' placeholder='example1234' />
      </Form.Group>
      <p><a href="https://myevive.com/password/forgot"> Forgot password? </a>
      </p>

      <Button size= 'large' secondary animated onclick = {this.LoaderExampleInlineCentered()}>
            <Button.Content visible >Sign in</Button.Content>
            <Button.Content hidden >
              <Icon name='right arrow' />
            </Button.Content>
          </Button>

            <Button size= 'large' secondary animated>
          <Button.Content visible >Register</Button.Content>
          <Button.Content hidden>
            <Icon name='add user' />
          </Button.Content>
        </Button>
         </Form>
      </Segment>

     </Container>
		);
    }
	}


export default Xyz;
   <Button loading secondary>Loading</Button>
