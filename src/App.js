import React, { Component } from 'react';
import { View, Text, Header, Content, Container, Body } from 'native-base';
import firebase from 'firebase';
import SignInForm from './components/SignInForm';
export default class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyDW5SGryqF1iOSyRCIbYJvXHC4JfBRYLuo",
            authDomain: "auth-a7c53.firebaseapp.com",
            databaseURL: "https://auth-a7c53.firebaseio.com",
            projectId: "auth-a7c53",
            storageBucket: "auth-a7c53.appspot.com",
            messagingSenderId: "64198401701"
        };
        firebase.initializeApp(config);
    }

    render() {
        return(
            <Container>
                <Header>
                    <Body>
                        <Text>Authentication</Text>
                    </Body>
                </Header>
                <Content>
                    <SignInForm />
                </Content>
            </Container>
        );
    }
}