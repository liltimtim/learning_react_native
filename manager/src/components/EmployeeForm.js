import React, { Component } from 'react';
import { Form, Card, CardItem, Label, Text, Input, View, Item} from 'native-base';
import { connect } from 'react-redux';
import { Picker, StyleSheet } from 'react-native';
import { employeeUpdate } from '../actions';
class EmployeeForm extends Component {
  render() {
    const { name, phone, shift } = this.props;
    return (
      <View>
        <Form>
          <Card style={style.cardForm}>
            <CardItem>
              <Item inlineLabel>
                <Label>Name</Label>
                <Input
                  value={name}
                  placeholder="Name"
                  onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text }) } />
              </Item>
              </CardItem>
              <CardItem>
                <Item inlineLabel style={{marginBottom: 8, marginTop: 0}}>
                  <Label>Phone</Label>
                  <Input
                    value={phone}
                    placeholder="xxx-xxx-xxxx"
                    keyboardType='numeric' 
                    onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })} />
                </Item>
              </CardItem>
              <CardItem>
                <Text>Select a Shift</Text>
                <Picker 
                  selectedValue={this.props.shift}
                  onValueChange={value => this.props.employeeUpdate({prop: 'shift', value: value })}
                  style={{ flex: 1, marginLeft: 20, marginRight: 20 }}>
                  <Picker.Item value="Monday" label="Monday" />
                  <Picker.Item value="Tuesday" label="Tuesday" />
                  <Picker.Item value="Wednesday" label="Wednesday" />
                  <Picker.Item value="Thursday" label="Thursday" />
                </Picker>      
              </CardItem>
            </Card>
          </Form>
      </View>
    )
  }
}

const style = StyleSheet.create({
  cardForm: {
    marginRight: 20,
    marginLeft: 20
  }
})

function mapStateToProps(state) {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);