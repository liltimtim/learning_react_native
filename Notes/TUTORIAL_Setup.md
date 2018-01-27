# React Native 

### Rendering Content On Screen

In the **index.js** file, we will use this file to 

1. Import Library to create a _component_
2. create a component
3. render it to the device

React native provides a library that allows reusable component(s) that control how content appears on the device. 

> Creating a component does not mean it automatically is placed onto the screen

### Step 1
```
import React from 'react';
import ReactNative from 'react-native';
```

#### React vs. React Native

**React**: Knows how a component should behave and knows how to take components and make them work together

**React Native** knows how to take the output from a component and place it on the screen.  Provides `default` core components (image, text, etc).

- this `portal` to the `mobile` device. 

```
import React from 'react';
```

The `import` style is from ES 6.  This isolates the module and gives it only local access.  In order to access a component you must `import` a module.

### Step 2 - Create Component

```
import React from 'react';
import ReactNative from 'react-native';

const App = () => {
    return (
        <Text></Text>
    );
};
```

The `return` value where you see the `<Text>` tag is a form of Javascript that is called `JSX`.  JSX is actually Javascript its just a simpler syntax to make code cleaner. 

### Step 3 - Registering a Component

This will render the component onto the device. 
```
ReactNative.AppRegistry.registerComponent('albums', () => App);
```

This is the `mount` point for the RN application.  This registers one component onto the application.  

The `'albums'` string **must** match the app name that was used when generating the RN app. 

> We should refactor this code snippet

> React does not hook up anything, everything is deliberate! We use **Import Destructuring** technique to include all the libraries needed. 

```
import React from 'react';
import { Text, AppRegistry } from 'react-native';

const app = () => {
    return (
        <Text></Text>
    );
};

ReactNative.AppRegistry.registerComponent('albums', () => App);
```