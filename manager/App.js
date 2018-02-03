import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Container, Content, Header } from 'native-base';
import { createStore, applyMiddleware } from 'redux'; // applymiddleware allows injection of 3rd party
import reducers from './src/reducers';
import firebase from 'firebase';
import SignInForm from './src/components/SignInForm';
import ReduxThunk from 'redux-thunk'; // technically called middleware

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCyvPmU1FSso6AaUv9oq-xXY7UHGYqEfzk",
      authDomain: "manager-f5f4e.firebaseapp.com",
      databaseURL: "https://manager-f5f4e.firebaseio.com",
      projectId: "manager-f5f4e",
      storageBucket: "manager-f5f4e.appspot.com",
      messagingSenderId: "958603218191"
    };
    firebase.initializeApp(config);
  }

  render() {
    // the empty object allows us to insert any inflation parameters
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Container>
          <Header />
          <Content>
            <SignInForm />
          </Content>
        </Container>
      </Provider>
    );
  }
}