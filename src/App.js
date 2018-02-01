import React, { Component } from 'react';
import { View, Text, Header, Content, Container, Body, Button } from 'native-base';
import firebase from 'firebase';
import SignInForm from './components/SignInForm';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: null,
            error: null
        };
    }
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
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
            this.setState({ loading: false });
        }, (err) => {
            this.setState({ loading: false, error: err })
        }, (completed) => {
            console.log(completed);
        });
    }

    /**
     * 
     * @param {{email: String, password: String}} value 
     */
    _handleOnLogin(value) {
        this.setState({ error: null, loading: true });
        firebase.auth().signInWithEmailAndPassword(value.email, value.password).catch(err => {
            this.setState({ error: err });
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password).catch((err) => {
                this.setState({error: err, loading: false});
            });
        });   
    }

    _handleLogout() {
        firebase.auth().signOut()
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button 
                        block 
                        style={{marginRight: 20, marginLeft: 20, marginTop: 20}}
                        onPress={this._handleLogout.bind(this)}>
                        <Text>
                            Log Out
                        </Text>
                    </Button>
                );
            case false:
                return (
                    <SignInForm 
                        isLoading={this.state.loading}
                        error={this.state.error}
                        handleLoginPressed={this._handleOnLogin.bind(this)}/>
                );
            default:
                return <View />;
        }
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
                    {this.renderContent()}
                </Content>
            </Container>
        );
    }
}