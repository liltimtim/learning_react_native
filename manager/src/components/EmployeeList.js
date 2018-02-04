import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Container, Content, List, ListItem, Text, Card, CardItem, Body, View } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { employeeFetch } from '../actions/EmployeeAction';
import _ from 'lodash';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeeFetch();
  }

  componentWillReceiveProps(nextProps) {
    this._renderList(nextProps);
  }

  _renderList({ employees }) {
    // generate row cells
    return employees.map(x => { return this._renderRow(x) });
  }

  _renderRow(employee) {
    return (
      <ListItem style={{ borderBottomWidth: 0, marginLeft: 0, marginRight: 0, marginBottom: 10, marginTop: 0, paddingRight: 8, paddingLeft: 8, paddingTop: 0, paddingBottom: 0}} key={employee.uid} >
        <TouchableWithoutFeedback onPress={() => this._onRowSelect(employee)}>
          <Card style={{flex: 1, height: "100%", shadowOpacity: 0.2}}>
            <CardItem header style={{backgroundColor: '#efefef'}}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>{employee.name}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Shift: {<Text style={{fontWeight: 'bold'}}>{employee.shift}</Text>}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={{fontWeight: 'bold'}}>Phone: {employee.phone}</Text>
            </CardItem>
          </Card>
        </TouchableWithoutFeedback>
      </ListItem>
    );
  }

  _onRowSelect(employee) {
    // pass some props using navigation helper
    Actions.employeeEdit({ employee });
  }

  render() {
    return (
      <Container>
        <Content>
          <List renderSeparator={(sectionid, rowid) => <View key={rowid}/>} itemDivider={false} dataArray={this.props.employees}
            renderRow={(item) => {
              return this._renderRow(item);
            }}
          >
          </List>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  const employees = _.map(state.employees.employees, (val, uid) => {
    console.log(val);
    console.log(uid);
    return { ...val, uid };
  });
  return { employees };
}

export default connect(mapStateToProps, {employeeFetch})(EmployeeList);