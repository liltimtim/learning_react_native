import React, { Component } from 'react';
import { Form, Item, View, Text, Label, Input, Card, CardItem, Body, Content, Button, Container } from 'native-base';
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import EmployeeList from './EmployeeList';
import { employeeUpdate } from '../actions/EmployeeAction';
import LoadingButton from '../components/LoadingButton';
class EmployeeCreate extends Component {
  render() {
    const { phone, name } = this.props;
    return (
      <Container>
        <Content>
          <Form>
              <Card style={style.cardForm}>
                <CardItem>
                  <Item inlineLabel>
                    <Label>Name</Label>
                    <Input
                      value={name}
                      onChangeText={this.props.employeeUpdate.bind(this)} />
                  </Item>
                </CardItem>
                <CardItem>
                  <Item inlineLabel style={{marginBottom: 8, marginTop: 0}}>
                    <Label>Phone</Label>
                    <Input
                      value={phone} 
                      onChangeText={this.props.employeeUpdate.bind(this)} />
                  </Item>
                </CardItem>
              </Card>
          </Form>
          <LoadingButton style={{marginTop: 20, marginRight: 20, marginLeft: 20}} 
            onPress={() => {
              const {name, phone, shift } = this.props;
              
            }}
            loading={this.props.loading}
            buttonText={'Create Employee'}>
            
          </LoadingButton>
        </Content>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  cardForm: {
    marginRight: 20,
    marginLeft: 20
  }
})

function mapStateToProps(state) {
  return {
    name: state.createEmployee.name,
    phone: state.createEmployee.phone,
    shift: state.createEmployee.shift,
    error: state.createEmployee.error,
    loading: state.createEmployee.loading
  }
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);