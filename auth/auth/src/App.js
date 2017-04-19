import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAjX2qE175QD7WNRwsNY1UZ9Exw4z86vvg',
      authDomain: 'authentication-c439c.firebaseapp.com',
      databaseURL: 'https://authentication-c439c.firebaseio.com',
      projectId: 'authentication-c439c',
      storageBucket: 'authentication-c439c.appspot.com',
      messagingSenderId: '790862896138'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button
            onPress={() => firebase.auth().signOut()}
          >
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header text='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
