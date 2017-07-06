import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, Button, CardSection, Input } from './common';

class LoginForm extends React.Component{
  state = {
    email: '',
    password: '',
    error: ''
  };

  onButtonPress(){
    this.setState({error: ''});

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(() => {
          this.setState({ error: 'Authentication Failed.' });
        });
      });
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
