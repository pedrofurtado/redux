# Pedro Furtado Redux

My own Redux. Just for fun.

## Example usage

```javascript
import { createStore, combineReducers } from 'pedrofurtado-redux';

const reducer1 = (state = [], action) => {
  switch(action.type) {
    case 'SOME_ACTION':
      return [...state, action.payload];
    case 'ANOTHER_ACTION':
      return [...state, action.another_payload];
    case 'LAST_ACTION':
      return [];
    default:
      return state;
  }
};

const reducer2 = (state = [], action) => {
  switch(action.type) {
    case 'UNIQUE_ACTION':
      return [action.unique_value, ...state];
    default:
      return state;
  }
};

const store = createStore(combineReducers({
  key1: reducer1,
  key2: reducer2
}));

store.subscribe(() => {
  console.log('I am subscribed now. Any changes in store will be notified for me.');
  console.log('The current state is: ', store.getState());
});

store.dispatch({ type: 'SOME_ACTION', payload: 'SOMETHING' });
store.dispatch({ type: 'ANOTHER_ACTION', another_payload: 'ANOTHER_THING' });
store.dispatch({ type: 'ACTION_THAT_NOT_EXISTS' });
```

## Build

To build the `dist/` folder, execute the following command:

```bash
$ docker container run --rm node:10 ....
```
