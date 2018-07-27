# Actions

Action creators specific to the About page go in this folder.
Action creators export functions that return objects describing what
action needs to take place.

Here are some examples:

```js
export const toggleAbout = () => (
  {
    type: 'ABOUT/TOGGLE_ABOUT',
    payload: { open: true },
  }
)
```

The `type` property is the unique identifier for this action. 
The `payload` property reflects the changed state. When an action is fired
the `reducer` switches on the action type and mutates the state according to
what is set in the payload property. For more info see the *reducers* folder.