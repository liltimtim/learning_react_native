# Basic Component State

```
componentWillMount() {
    API.getAlbums()
    .then(albums => {
        this.setState({albums: albums});
    })
    .catch(err => {

    });
}
```
Every `class based` component comes with function `setState()`. 

**State**: is a property on every component.  Modifying the state causes the component to re-render if its needed. 

### Rules of State
* Definition: a plain javascript object used to record and respond to user-triggered events

* Updating states on a component is done via `this.setState`

* Never change state directly except on initial component creation, any other time do `this.setState`

