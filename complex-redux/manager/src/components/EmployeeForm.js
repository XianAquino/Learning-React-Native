import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Picker } from 'react-native';
import { Input, CardSection } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    const { name, phone, shift } = this.props;
    return (
      <View>
        <CardSection>
          <Input
            label='Name'
            placeholder='Xian'
            value={name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Phone'
            placeholder='555-5555-5555'
            value={phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}

          />
        </CardSection>
        <CardSection >
          <Text style={style.pickerLabel}>Shift</Text>
          <Picker
            style={style.picker}
            selectedValue={shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const style = {
  picker: {
    flex: 1
  },
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(null, { employeeUpdate })(EmployeeForm);
