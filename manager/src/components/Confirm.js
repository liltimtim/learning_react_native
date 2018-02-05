import React, { Component } from 'react';
import { Modal } from 'react-native';
import { Card, CardItem, Body, Text, View } from 'native-base';
import LoadingButton from './LoadingButton';
class Confirm extends Component {
  render() {
    return (
      <Modal
        >
        <View>
          <Card>
            <CardItem>
              <Body>
                <Text>Test</Text>
              </Body>
            </CardItem>
          </Card>
        </View>
      </Modal>
    );
  }
}
export default Confirm;