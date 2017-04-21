import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  onEmailChange(text) {
    this.props.actions.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.actions.passwordChanged(text);
  }
  onLogin() {
    const { email, password, navigation } = this.props;
    const { navigate } = navigation;
    this.props.actions.loginUser({ email, password, navigate });
  }

  renderButton() {
    return this.props.loading ? <Spinner />
      : <Button onPress={this.onLogin.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label='password'
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <Text style={style.errorStyle}>{this.props.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const style = {
  errorStyle: {
    color: 'red',
    textAlign: 'center'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
