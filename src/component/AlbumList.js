import React, { Component } from 'react';
import { View, Text, Card, CardItem, Body, Container, Header, Content } from 'native-base';
import { API } from '../network/api';
export class AlbumList extends Component {

    componentDidMount() {
        let json = API.getAlbums();
        console.log(json);
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>Hello</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}