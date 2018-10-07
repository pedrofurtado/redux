# Redux

My own Redux. Just for fun.

## Example usage

```javascript
import { createStore } from '@pedrofurtado/redux';

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

const reducer2 = (state = 5, action) => {
  switch(action.type) {
    case 'UNIQUE_ACTION':
      return 9;
    default:
      return state;
  }
};

const middleware1 = (state, action) => {
  console.log('Middleware 1 executing!');
  console.log('State at this moment', state);
  console.log('Action at this moment', action);
  console.log('Middleware 1 executed!');
}

const middleware2 = (state, action) => {
  console.log('Middleware 2 executing!');
  console.log('State at this moment', state);
  console.log('Action at this moment', action);
  console.log('Middleware 2 executed!');
}

const store = createStore(
  {
    key1: reducer1,
    key2: reducer2
  },
  [
    middleware1,
    middleware2
  ]
);

store.subscribe(() => {
  console.log('Changes detected in state!');
});

store.dispatch({ type: 'SOME_ACTION', payload: 'SOMETHING' });
store.dispatch({ type: 'ANOTHER_ACTION', another_payload: 'ANOTHER_THING' });
store.dispatch({ type: 'ACTION_THAT_NOT_EXISTS' });
store.dispatch({ type: 'UNIQUE_ACTION' });
```

## Build

To build the `dist/` folder, execute the following command:

```bash
$ docker-compose up --build -d
```

Enjoy!
