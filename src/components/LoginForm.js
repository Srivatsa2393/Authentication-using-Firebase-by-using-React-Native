import React, { Component } from 'react';

import { Card, Button, CardSection, Input } from './common';

class LoginForm extends React.Component{
  state = { text: ''};

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>

        <CardSection></CardSection>

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
