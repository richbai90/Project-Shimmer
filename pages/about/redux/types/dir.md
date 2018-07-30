# Types

In this folder we export our various action types for the `action creators`and `reducers`. While it is possible to simply hand type our action types, that becomes challenging to remember, and prone to typos. Instaed it is better if we export them like so:

```js
export const TOGGLE_ABOUT = 'ABOUT/TOGGLE_ABOUT'
```

Then instead of remembering exactly what we named our action type, we can import it instead. For more information see *actions* and *reducers*