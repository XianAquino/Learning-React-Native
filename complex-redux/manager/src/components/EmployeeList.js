import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class EmployeeList extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Manager',
    headerRight: <Button title='Add' onPress={() => navigation.navigate('EmployeeCreate')} />,
  });

  showCreateEmployeeForm() {
    this.props.navigation.navigate('EmployeeCreate');
  }

  render() {
    return (
      <View>
        <Text>Employee Lis1!!!t</Text>
        <Button title='button' onPress={() => console.log('presss')} />
      </View>
    );
  }
}

export default EmployeeList;
