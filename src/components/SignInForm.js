import React, { Component } from 'react';
import { Card, CardItem, Body, Left, Right, Form, Input, Item, Label, Button, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';
export default class SignInForm extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Form style={{flex: 1, width: "100%"}}>
                        <Item style={[styles.formInputContainer, styles.itemGroupTop]} regular>
                            <Input  placeholder={'example@email.com'} />
                        </Item>
                        <Item style={[styles.formInputContainer, styles.itemGroupBottom]} regular>
                            <Input placeholder={'password'} />
                        </Item>
                    </Form>
                </CardItem>
                <CardItem>
                    <Body>
                        <Button block>
                            <Text>Login</Text>
                        </Button>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
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