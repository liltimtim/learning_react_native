import React, { Component } from 'react';
import { Card, CardItem, Body, Left, Right, Form, Input, Item, Label, Button, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
export default class SignInForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <Card style={styles.cardContainer}>
                <CardItem>
                    <Form style={{flex: 1, width: "100%"}}>
                        <Item style={[styles.formInputContainer, styles.itemGroupTop]} regular>
                            <Input autoCapitalize={'none'} autoCorrect={false} value={this.state.email} placeholder={'example@email.com'} onChangeText={email => this.setState({ email })} />
                        </Item>
                        <Item style={[styles.formInputContainer, styles.itemGroupBottom]}  regular>
                            <Input secureTextEntry={true} placeholder={'password'} value={this.state.password} onChangeText={password => this.setState({ password })} />
                        </Item>
                    </Form>
                </CardItem>
                <CardItem>
                    <Body>
                        <Button 
                            block
                                onPress={() => this.props.handleLoginPressed(this.state)}>
                            <Text>Login</Text>
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
    }
})