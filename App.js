/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Container,
  Header,
  Content
} from 'native-base';
import { AlbumList } from './src/component/AlbumList';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (  
      <AlbumList />
    );
  }
}

