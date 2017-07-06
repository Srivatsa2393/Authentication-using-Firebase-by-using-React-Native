import React, { Component } from 'react';
import { TextInput } from 'react-native';

import { Card, Button, CardSection } from './common';

class LoginForm extends React.Component{
  render() {
    return(
      <Card>
        <CardSection>
          <TextInput style={{ height: 20, width: 100}} />
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
