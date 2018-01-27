# Creating Reusable Components

In the header.js file, we want to make it so that we can customize the header `title` item.  Ideally we would pass in the title of what we want when we want to display it. 

### React Props

**Props**: Method to pass data from a parent component to a child component we use the properties system. 

- This is called `passing props` which is a primary way to make components reusable. 

#### 3 Step Process
1. Identify what variables the parent needs to provide
2. Provide a reference to the incoming prop(s)
3. Ensure Parent provides said prop(s)

> Adding prop requirements states that the parent and child have gone into a 'contract' such that the parent promises to provide all the required props for the child component to work properly (whatever props are expected).

