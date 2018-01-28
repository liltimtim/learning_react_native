import React, { Component } from 'react';
import { Card, CardItem, Body, Text } from 'native-base';

export class AlbumCard extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Body>
                        <Text>{this.props.album.title}</Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}