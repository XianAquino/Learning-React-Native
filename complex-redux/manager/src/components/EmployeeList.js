import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { ListView, Button } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Manager',
    headerRight: <Button title='Add' onPress={() => navigation.navigate('EmployeeCreate')} />,
  });

  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  showCreateEmployeeForm() {
    this.props.navigation.navigate('EmployeeCreate');
  }
  renderRow(employee) {
    const { navigate } = this.props.navigation;
    return (
      <ListItem navigate={navigate} employee={employee} />
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
