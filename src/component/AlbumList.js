import React, { Component } from 'react';
import { Container, Content, Header } from 'native-base';
import { API } from '../network/api';
import { AlbumCard } from './AlbumCard';
export class AlbumList extends Component {
    constructor() {
        super();
        this.state = { 
            data: []
        };
    }
    componentWillMount() {
        API.getAlbums()
        .then(albums => {
            this.setState({data: albums});
        })
        .catch(err => {

        });
    }

    renderItems() {
        return this.state.data.map((album) => {
            return (
                <AlbumCard album={album} />
            );
        });   
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    {this.renderItems()}
                </Content>
            </Container>
        );
    }
}