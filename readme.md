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

## Lists

## Animation