import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { text } from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  static navigationOptions = {
    title: 'Edit Employee',
  };

  state = {
    showModal: false
  }

  componentWillMount() {
    _.each(this.props.navigation.state.params, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift, navigation } = this.props;
    const { navigate, state } = navigation;
    const { uid } = state.params;
    this.props.employeeSave({ name, phone, shift, uid, navigate });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    text(phone, `Your upcoming shift is ${shift}`);
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  onAccept() {
    const { navigate, state } = this.props.navigation;
    const { uid } = state.params;
    this.props.employeeDelete({ uid, navigate });
    this.onDecline();
  }

  render() {
    const { name, phone, shift } = this.props;
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={this.onTextPress.bind(this)}
          >Text</Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >Fire</Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit);
