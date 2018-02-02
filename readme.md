# Project Goals
1. Build an application with a tight focus on using redux
2. Learn how to render a performant list of items
3. Use react native's animation library to present an appealing app animation when a user selects an item from the list

## Installation and Project setup
```
npm install --save redux react-redux
```

## Redux

```
stephengrider.github.io/JSPlaygrounds
```
Using this tool to experiment with Redux coding. 

### How Redux Works

[Action] -> {[Reduer] -> [State]} 

The `Store` contains `Reducer` and `State`

* Redux is quite simple, the terminology makes it difficult. 

**Store**: an object that holds the apps data.  Holds the `reducer` and application `state`

**Action**: an object (plain javascript object `{}`) that tells the reducer how to change its data
- only requirement is that it **must** have a `type` property. 

**Reducer**: a `function` that returns some data

**State**: data for our app to use.  all the apps data puts together the 'state'

Redux == `the store`

#### Example

**Action**: Given a string `asdf`, turn this into an array of characters 

**Reducer**: the action `type` is 'split', I will take  astring of chars and turn it into an array. 

**State** `['a', 's', 'd', 'f']`

-----

Inside the realtime coding pad...

Goal: take characters split into an array.

1. Create a store
```
// a store requires at least one function reducer
const reducer = () => []; // returns an array
const store = Redux.createStore();
```

> At anytime you can ask the store for its `state`.

```
store.getState();
```

2. Create an action

```
const action = {
    type: 'split_string',
    payload: 'asdf'
}
```

> this will `ALWAYS` have a string type. 
the `payload` will be the item we are working on.

```
const reducer = (state = [], action) => {
 if(action.type === 'split_string') {
  return action.payload.split(''); 
 }
};
const store = Redux.createStore(reducer);

store.getState();

const action = {
	type: 'split',
  payload: 'asdf'
}; // a plain JS object
```

3. invoke the action
```
store.dispatch(action);
```

> finalized everything
```
const reducer = (state = [], action) => {
 if(action.type === 'split_string') {
   console.log("splitting");
  return action.payload.split(''); 
 }
 return state;
};
const store = Redux.createStore(reducer);

store.getState();

const action = {
	type: 'split_string',
  payload: 'asdf'
}; // a plain JS object

store.dispatch(action);

store.getState();
```

#### What is the point?
1. redux is the best library to scale w/ less complexity 


Actions gives:
1. Predictability of the state
2. Never reach directly into the state
3. Actions make state modifications more `transactional`
4. `state` is retrieved in only one way

> `type` can be thought of as a `command` to be executed

Lets add another action
> action will append a character to the given array. 

```
const action2 = {
    type: 'add_character',
    payload: 'a'
};
```

> **We never mutate the `state` we create a new object from that state and return a new object with the changes.**

> Always return brand new objects from the reducer, never the `old state`.
----

## Provider and React Redux
The provider keeps track of the store and translates all the data into something react can use. 

Store holds the state, `provider` is the glue between react and redux. 

> Redux wasn't specifically designed to work exclusively with `react`

> `react-redux` is what makes them place nice together.

```
import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Header, Body, Text } from 'native-base';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Container>
                    <Content>
                        <Header>
                            <Body>
                                <Text>Tech Stack</Text>
                            </Body>
                        </Header>
                    </Content>
                </Container>
            </Provider>
        );
    }
}
```

We created a provider and wrapped the app inside the store

inside the `reducers` file is below....which is the index.js file. 

> this is the starter index file and will evolve throughout the course of the tutorial. 
```
import { combineReducers } from 'redux';

export default combineReducers({
    libraries: () => []
});
```

-------

### Presenting List of Data too user via Redux
**Data**: think `reducers` when you hear this word.  

> Our `reducer` will produce a library of information for us

```
import { combineReducers } from 'redux';

export default combineReducers({
    libraries: () => []
});
```

Whenever the reducer runs, it will return a list of 'libraries' in this case a library is a topic of technology for discussion with a brief description. 

#### Types of Reducers
Question to ask `what are the different pieces of data that are needed for the app`?

1. currently selected library
2. list of libraries

> Suggest we create two reducers
1. Library Reducer
    * Responsible for showing list of technologies
2. Selection Reducer
    * Handles the current selection index
    * Records the `id` of the current index / expanded detail 

------
### Implementation of Library Reducer

```
export default combineReducers({
    libraries: LibraryReducer.list
});
```
> The `key` is very important.  The object state will have a `key` called `libraries` and on it is an empty array. 

We create a library list via .json.  This creates an arbitrary array of items for display. 

```
import data from './LibraryList.json';

export default class LibraryReducer {
    static list() {
        return data;
    }
}
```

### Creating a Connect Helper

**Connect Helper**: Gives discrete access to the `library list`. This allows a component to reach into the store and grab data from it. The store returns the `state`

```
export default connect()(LibraryList);
```

1. connect gets turned into a function
2. we then call this function immediately with the component 

#### Using Connect Helper
first argument passed into `connect()` is a function

```
const mapStateToProps = state => {

}
```

```
function mapStateToProps(state) {
    console.log(state);
    // will set a property called 'libraries' onto the component's prop.
    return {
        libraries: state.libraries
    }
} 
```

this will now attach a `libraries` property onto the `props` object on the component. 

> Whenever the store is created, all the reducers are ran 1 time to return a piece of state. This is the `initial` setup state. 

We pass the state onto the `Provider`. 
`mapStateToProps` function handles this. 

**Provider**: will reach back into the state and gives it too the component. 

1. Connect helpers boots
2. Library list detects about to render asks for `state`
3. provider grants access
4. provider calls `mapStateToProps`
5. props are now whatever was returned from `mapStateToProps`
-----
## Lists
```
import { ListView } from 'react-native';
```

1. must pass in a data model for it to use. 

```
componentWillMount() {
    // lifecycle method, component about to be rendered onto the screen
    const datasource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
        
    });

    this.datasource = datasource.cloneWithRows(this.props.libraries);
}
```
Some boilerplate code for the list

```
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
```
----
## Action Creator
Components will call `Action Creator`

> Inside an React project we produce `action creator`

**Action Creator**: purpose is to create an action.  A javascript function that returns an action. 

Example: 
```
export const selectLibrary = () => {
    return {
        type: 'select_library'
    };
}
```

> Have an `object` with a `type` property.  Remeber its just an `action`. 

Whenever this action creator is called, an object with type is returned.

```
// we don't want to map state to props
// we then insert all the action creators onto the `prop`
export default connect(null, LibraryActions)(ListItem);
```


## Animation