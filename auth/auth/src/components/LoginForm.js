import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(err => this.onLoginFailed(err));
      });
  }

  onLoginFailed(error) {
    this.setState({
      error: `Authentication Failed: ${error}`,
      loading: false
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    return this.state.loading ? <Spinner />
      : <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='sample@gmail.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Password'
            value={this.state.password}
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={style.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
        {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const style = {
  errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  }
};

export default LoginForm;
