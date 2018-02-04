import React, { Component } from 'react';
import { Card, CardItem, Body, Left, Right, Form, Input, Item, Label, Button, Text, View, Spinner, Content, Container } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import LoadingButton from './LoadingButton';
class SignInForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    _renderError() {
        const { error } = this.props;
        if(error !== null) {
            return (
                <CardItem>
                    <Text>{error.message}</Text>
                </CardItem>
            );
        }
    }

    _onEmailChange(text) {
        this.props.emailChanged(text);
    }

    _onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    render() {
        return (
            <Container>
                <Content>
                <Card style={styles.cardContainer}>
                    <CardItem>
                        <Form style={{flex: 1, width: "100%"}}>
                            <Item style={null === null ? [styles.formInputContainer, styles.itemGroupTop]:[styles.formInputContainer, styles.itemGroupTop, styles.itemInputGroupInvalid]} regular>
                                <Input autoCapitalize={'none'} autoCorrect={false} value={this.props.email} placeholder={'example@email.com'} onChangeText={this._onEmailChange.bind(this)} />
                            </Item>
                            <Item style={null === null ? [styles.formInputContainer, styles.itemGroupBottom]:[styles.formInputContainer, styles.itemGroupBottom, styles.itemInputGroupInvalid]}  regular>
                                <Input secureTextEntry={true} placeholder={'password'} value={this.props.password} onChangeText={this._onPasswordChange.bind(this)} />
                            </Item>
                        </Form>
                    </CardItem>
                    {this._renderError()}
                    <CardItem>
                        <Body>
                            <LoadingButton
                                buttonText={'Login'}
                                loading={this.props.loading}
                                onPress={() => {
                                    const { email, password } = this.props;
                                    this.props.loginUser({email, password});
                                }}>
                            </LoadingButton>
                        </Body>
                    </CardItem>
                </Card>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        email: state.auth.email,
        password: state.auth.password,
        authenticate: state.auth.authenticate,
        loading: state.auth.loading,
        error: state.auth.error
    };
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(SignInForm);

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