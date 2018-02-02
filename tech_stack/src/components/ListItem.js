import React, { Component } from 'react';
import { Card, CardItem, Body, Text, View } from 'native-base';
import { TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
class ListItem extends Component {
    
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    _renderDescription() {
        const { expanded, library } = this.props;
        if (expanded) {
            return (
                <CardItem>
                    <Body>
                        <Text>{library.description}</Text>
                    </Body>
                </CardItem>
            );
        }
    }

    render() {
        console.log(this.props);
        const { library, expanded, selectLibrary } = this.props;
        return (
            <TouchableWithoutFeedback
                onPress={() => {expanded ? selectLibrary(null):selectLibrary(library.id); }} >
                <Card>
                    <CardItem>
                        <Body>
                            <Text>{library.title}</Text>
                        </Body>
                    </CardItem>
                    {this._renderDescription()}
                </Card>
            </TouchableWithoutFeedback>
        );
    }
}
// ownProps are the props that are passed into the component we are wrapping. 
// any components passed to the component will appear in 'ownProps'
function mapStateToProps(state, ownProps) {
    const expanded = state.selectedLibraryId === ownProps.library.id ? true:false;
    return { expanded };
}

// we don't want to map state to props
// we then insert all the action creators onto the `prop`
export default connect(mapStateToProps, actions)(ListItem);
