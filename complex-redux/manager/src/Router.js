import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = StackNavigator({
  Login: { screen: LoginForm },
  EmployeeList: { screen: EmployeeList },
  EmployeeCreate: { screen: EmployeeCreate },
  EmployeeEdit: { screen: EmployeeEdit }
});

export default RouterComponent;
