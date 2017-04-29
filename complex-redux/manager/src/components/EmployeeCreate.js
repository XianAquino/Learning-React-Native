import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  static navigationOptions = {
    title: 'Create Employee',
  };

  onButtonPress() {
    const { name, phone, shift, navigation } = this.props;
    const { navigate } = navigation;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday', navigate });
  }

  render() {
    const { name, phone, shift } = this.props;
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >Create</Button>
        </CardSection>
      </Card>
    );
  }
}



const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
})(EmployeeCreate);
