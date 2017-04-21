import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';

const RouterComponent = StackNavigator({
  Login: { screen: LoginForm },
  EmployeeList: { screen: EmployeeList },
  EmployeeCreate: { screen: EmployeeCreate }
});

export default RouterComponent;
