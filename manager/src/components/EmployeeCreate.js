import React, { Component } from 'react';
import { Form, Item, View, Text, Label, Input, Card, CardItem, Body, Content, Button, Container } from 'native-base';
import { Picker, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import EmployeeList from './EmployeeList';
import { employeeUpdate, employeeCreate, employeeCreatedReset } from '../actions/EmployeeAction';
import LoadingButton from '../components/LoadingButton';
import EmployeeForm from '../components/EmployeeForm';
import { LoadingButtonStyle } from '../Styles';
class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.employeeCreatedReset();
  }

  _onButtonPress() {
    const { name, phone, shift, loading } = this.props;
    this.props.employeeCreate({ name, phone, shift });
  }
  render() {
    const { phone, name, shift, loading } = this.props;
    return (
      <Container>
        <Content>
          <EmployeeForm 
            {...this.props}
           />
          <LoadingButton style={[LoadingButtonStyle.standardMargins]} 
            onPress={ this._onButtonPress.bind(this) }
            loading={this.props.loading}
            buttonText={'Create Employee'}>
          </LoadingButton>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { name, phone, shift, loading } = state.employeeForm;
  return { name, phone, shift, loading };
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate, employeeCreatedReset})(EmployeeCreate);