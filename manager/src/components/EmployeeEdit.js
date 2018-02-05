import React, { Component } from 'react';
import { Card, CardItem, Button, Container, Content, Text } from 'native-base'; 
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import _ from 'lodash';
import LoadingButton from '../components/LoadingButton';
import { LoadingButtonStyle } from '../Styles';
class EmployeeEdit extends Component {

  componentWillMount() {
    // take all props on incoming stuff into reducer
    _.each(this.props.employee, (value, prop) => { this.props.employeeUpdate({ prop, value }); });
  }

  _onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  _onButtonFirePress() {
    this.props.employeeDelete(this.props.employee);
  }

  render() {
    return (
      <Container>
        <Content>
          <EmployeeForm />
          <LoadingButton
            style={{marginTop: 20, marginRight: 20, marginLeft: 20}}
            loading={this.props.loading}
            onPress={this._onButtonPress.bind(this)}
            buttonText={'Save Changes'}>
          </LoadingButton>
          <LoadingButton 
            style={[LoadingButtonStyle.standardMargins, LoadingButtonStyle.destructive]}
            loading={this.props.loading}
            buttonText={'Fire Employee'}
            onPress={this._onButtonFirePress.bind(this)}
          />
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { name, phone, shift, loading } = state.employeeForm;
  return { name, phone, shift, loading };
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);