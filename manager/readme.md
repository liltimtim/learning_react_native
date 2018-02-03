# Introduction to Redux Thunk

Purpose of Redux Thunk is to handle `action creators` whose action performs an *asynchronous* action. 

Can handle anytime of asynchronous task. 

```
npm install --save redux-thunk
```

### Default Action Creator Rules
* action creators are functions
* must return an action
* an action is an obect with a type property and optionally with a payload property

> the issue is `must return an action`

### Default Action Creature Rules w/ Thunk
* action creators are functions
* **must return a function**
* this function will be called with `dispatch`

**dispatch**: the magic part, this method allows us to manually dispatch an action to the reducers. 

--------
## Redux Thunk in Practice

> We must wire up redux thunk

```
render() {
// the empty object allows us to insert any inflation parameters
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
return (
    <Provider store={store}>
    <Container>
        <Header />
        <Content>
        <SignInForm />
        </Content>
    </Container>
    </Provider>
);
}
```
createStore takes in 3 parameters

1. the reducers
2. any pre items you place into the store upon startup
3. middleware that you want to use

------

# React Native Router Flux
```
npm install --save react-native-router-flux
```

Manages `Scenes` aka Screens in the app.  Each `screen` is distinct. 

> You make `one` scene per screen in the app. 

```
<Scene
  key="login"
  component={LoginForm}
  title="Login"
  initial>
```

> the `key` component is important and uniquely identifies the particular `scene`.

**component**: Single setup of components what to show

**title**: title for the nav bar on the header. 

> Router must have only 1 scene and it is called the `root scene`.

### Router and Redux

```
const loginSuccess = (dispatch, user) => {
    dispatch(authLoadingStateChanged(false));
    dispatch(userAuthenticated(user));

    // do not wrap Actions inside dispatch
    Actions.employeeList();
}
```

Can call a function called `Actions` to navigate to another scene. 

> the name `employeeList()` is derived from the `key` given in the Scene. 

