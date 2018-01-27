# Project Organization

We create a folder called `src` which will contain all the javascript besides the code automatically generated for us. 

### Header Component

1. Import Library to create component
2. Make a component
3. Make component available to other parts of the app. 

```
// 1. Import
import React, { Component } from 'react';
import { Text, Header, Body } from 'native-base';

// 2. Make a component
export class CustomHeader extends Component {
    render() {
        return (
            <Header>
                <Body>
                    <Text>Albums</Text>
                </Body>
            </Header>
        );
    } 
}
```

I'm using some ES 6 shortcuts to create a class that extends component / inherits some things from Component. 

> the `export class...` lets me export a particular element from this file for use in other parts of the app. 

#### Component Nesting and Consuming Objects

```
import React from 'react';
import { AppRegistry } from 'react-native';
import { Text, Container, Left, Button } from 'native-base';
import { CustomHeader } from './src/component/header';
const App = () => {
    return (
        <Container>
            <CustomHeader />         
        </Container>
    );
};

AppRegistry.registerComponent('albums', () => App);
```

In the return statement, the `<Container>` now **nests** the object. 

> We imported our custom Header that we created using `import { CustomHeader } from './src/component/header';`

----
# Styling

Reference [Facebook's](https://facebook.github.io/react-native/docs/style.html) Method of styling 

```
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
})
```

Allows the creation of a styles 'sheet' so to speak which can be passed to a component as a **prop** item. 