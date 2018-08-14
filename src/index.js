const isPlainObject = (obj) => {
  if (typeof obj !== 'object' || obj === null) { return false; }

  let proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
};

const combineReducers = (reducers) => {
  if(!isPlainObject(reducers)) { throw 'The reducers must be placed in a plain object.'; }

  for(let key in reducers) {
    const reducer = reducers[key];

    if(typeof(reducer) !== 'function') {
      throw 'Reducers must be a function.';
    }
  }

  return reducers;
};

const createStore = (reducers) => {
  let state = {};
  const initialAction = 'REDUX_INITIAL_ACTION';
  const subscribers = [];
  const combinedReducers = combineReducers(reducers);

  const generateNextStateFromReducers = (action) => {
    const nextState = {};

    for(let key in combinedReducers) {
      const reducer = combinedReducers[key];
      nextState[key] = reducer(state[key], action);
    }

    state = nextState;
  };

  const notifyAllSubscribers = () => {
    subscribers.forEach((subscriber) => subscriber());
  };

  const dispatch = (action) => {
    generateNextStateFromReducers(action);
    notifyAllSubscribers();
  };

  const subscribe = (subscriber) => {
    subscribers.push(subscriber);
  };

  dispatch({ type: initialAction });

  return {
    getState: () => state,
    dispatch: dispatch,
    subscribe: subscribe
  };
};

export {
  createStore,
  combineReducers
};
