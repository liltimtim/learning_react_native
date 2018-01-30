# Setting Up Project

### Creating Structure
1. create a folder called `src` where all non-generated code will go
- this will contain our platform agnostic file that should handle both platforms

2. create a file called `App.js`.  This will act as the entry point for the application. 

### Index.js Aside

You can create an `index.js` in a directory.  This is used to have / contain all the imports you may need. 

Lets say we had a structure like the following

```
Components
    |- button.js
    |- header.js
    |- index.js
``` 

Inside the index.js file we can use a technique to both import and export a component at the same time. 


```
// index.js file inside Components folder
export * from './button';
export * from './header';
```

> The drawback here is that for each component file you **cannot** use the `export default _classname_` method. 

```
// Inside button.js file
... component code ...
export { Button };

// cannot use the default keyword here
```

> You must export an `object`.  You can use the ES6 sugar syntax instead of `{ Button: Button }` you can just use `{ Button }`

-----

## Sign In Form

