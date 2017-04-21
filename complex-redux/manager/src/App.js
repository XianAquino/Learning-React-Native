import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import config from './ENV/config';

import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config.firebase);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
