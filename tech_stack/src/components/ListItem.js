import React, { Component } from 'react';
import { Card, CardItem, Body, Text, View } from 'native-base';
import { TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
class ListItem extends Component {
    
    render() {
        console.log(this.props);
        return (
            <TouchableWithoutFeedback
                onPress={() => { this.props.selectLibrary(this.props.library.id); }} >
                <Card>
                    
                    <CardItem>
                        <Body>
                            <Text>{this.props.library.title}</Text>
                        </Body>
                    </CardItem>
                    
                </Card>
            </TouchableWithoutFeedback>
        );
    }
}
// we don't want to map state to props
// we then insert all the action creators onto the `prop`
export default connect(null, actions)(ListItem);
