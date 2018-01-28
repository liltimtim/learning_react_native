import React, { Component } from 'react';
import { Text, Header, Body } from 'native-base';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
export class CustomHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header style={styles.headerStyle}>
                <Body>
                    <Text style={styles.textStyle}>{this.props.headerText}</Text>
                </Body>
            </Header>
        );
    } 
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: "white"
    },
    headerStyle: {
        backgroundColor: "#89f442"
    }
})

CustomHeader.propTypes = {
    headerText: PropTypes.string
}

CustomHeader.defaultProps = {
    headerText: 'Albums'
}