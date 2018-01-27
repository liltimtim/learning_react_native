import React from 'react';
import { AppRegistry } from 'react-native';
import { Text, Container, Left, Button } from 'native-base';
import { CustomHeader } from './src/component/header';
const App = () => {
    return (
        <Container>
            <CustomHeader headerText={"Albums"} />         
        </Container>
    );
};

AppRegistry.registerComponent('albums', () => App);
