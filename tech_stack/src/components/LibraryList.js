import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux'; // get access to redux state
import ListItem from './ListItem'
// import {  } from 'native-base';

class LibraryList extends Component {
    componentWillMount() {
        // lifecycle method, component about to be rendered onto the screen
        const datasource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
            
        });

        this.datasource = datasource.cloneWithRows(this.props.libraries);
    }

    _renderRow(library) {
        // figures out how to render a single row
        return <ListItem library={library} />;

    }

    render() {
        return (
            <ListView 
                dataSource={this.datasource}
                renderRow={this._renderRow}
            />
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    // will set a property called 'libraries' onto the component's prop.
    return {
        libraries: state.libraries
    }
} 

export default connect(mapStateToProps)(LibraryList);
