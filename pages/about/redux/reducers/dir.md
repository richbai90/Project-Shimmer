# Reducers

Reducers specific to the About page go in this folder.
Reducers export functions that return objects describing what
the new state looks like.

Here are some examples:

```js
const defaultState = {
  open: false,
};

const toggleAbout = (state, payload) => {
  return { ...state, payload }
}

export default (state = defaultState, action ) => {
  switch(action.type) {
    case 'ABOUT/TOGGLE_ABOUT':
      return toggleAbout(state, action.payload);
    default:
      return state;
  }
}
```

The reducer must return an object reflecting the current state. For more information see *actions*