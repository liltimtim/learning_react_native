import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Left, Thumbnail, Button, Icon } from 'native-base';
import { Image } from 'react-native';
export class AlbumCard extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: this.props.album.thumbnail_image}}/>
                        <Body>
                            <Text>{this.props.album.title}</Text>
                            <Text note>{this.props.album.artist}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{uri: this.props.album.image}} style={{height: 300, width: null, flex: 1}} />
                </CardItem>
                <CardItem>
                    <Body>
                        <Button>    
                            <Icon active name='md-cloud' />
                            <Text>Buy Now</Text>
                        </Button>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}