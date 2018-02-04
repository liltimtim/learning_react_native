import React, { Component } from 'react';
import { Button, Text, Spinner } from 'native-base';
import PropTypes from 'prop-types';
/**
 * @augments {Component<{},{}>}
 */
export default class LoadingButton extends Component {
  render() {
    return (
      <Button block
        onPress={this.props.onPress}
        style={this.props.style}
        disabled={this.props.loading}>
        {this.props.loading? <Spinner size='small' color='white' />:<Text>{this.props.buttonText}</Text>}
      </Button>
    );
  }
}

LoadingButton.propTypes = {
  buttonText: PropTypes.string.isRequired
}