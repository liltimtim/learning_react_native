import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Header } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Container>
                    <Content>
                        <Header />
                    </Content>
                </Container>
            </Provider>
        );
    }
}

