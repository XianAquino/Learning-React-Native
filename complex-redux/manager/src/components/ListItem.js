import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

  onRowPress() {
    this.props.navigate('EmployeeEdit', this.props.employee);
  }

  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const style = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};


export default ListItem;
