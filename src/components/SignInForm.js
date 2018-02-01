import React, { Component } from 'react';
import { Card, CardItem, Body, Left, Right, Form, Input, Item, Label, Button, Text, View, Spinner } from 'native-base';
import { StyleSheet } from 'react-native';
export default class SignInForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    _renderError() {
        if(this.props.error !== null) {
            return (
                <CardItem>
                    <Text>{this.props.error.message}</Text>
                </CardItem>
            );
        }
    }

    _renderLoading() {
        if(this.props.isLoading === true) {
            return <Spinner size='small' color='blue' />;
        } else {
            return <Text>Login</Text>;
        }
    }

    render() {
        return (
            <Card style={styles.cardContainer}>
                <CardItem>
                    <Form style={{flex: 1, width: "100%"}}>
                        <Item style={this.props.error === null ? [styles.formInputContainer, styles.itemGroupTop]:[styles.formInputContainer, styles.itemGroupTop, styles.itemInputGroupInvalid]} regular>
                            <Input autoCapitalize={'none'} autoCorrect={false} value={this.state.email} placeholder={'example@email.com'} onChangeText={email => this.setState({ email })} />
                        </Item>
                        <Item style={[styles.formInputContainer, styles.itemGroupBottom]}  regular>
                            <Input secureTextEntry={true} placeholder={'password'} value={this.state.password} onChangeText={password => this.setState({ password })} />
                        </Item>
                    </Form>
                </CardItem>
                {this._renderError()}
                <CardItem>
                    <Body>
                        <Button 
                            block
                                onPress={() => this.props.handleLoginPressed(this.state)}>
                            {this._renderLoading()}
                        </Button>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        marginLeft: 20,
        marginRight: 20
    },
    formInputContainer: {
        padding: 2
    },
    itemGroupTop: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderWidth: 1
    }, 
    itemGroupBottom: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderWidth: 1,
        borderTopWidth: 0
    },
    itemInputGroupValid: {
        borderColor: 'green'
    },
    itemInputGroupInvalid: {
        borderColor: 'red'
    }
})