import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <Text>Hello</Text>
      </Provider>
    );
  }
}

export default App;
