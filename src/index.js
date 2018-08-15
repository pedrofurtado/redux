const createStore = (_reducers, _middlewares) => {
  let state = {};
  const initialAction = 'REDUX_INITIAL_ACTION';
  const subscribers = [];
  const reducers = _reducers;
  const middlewares = _middlewares;

  const runAllMiddlewares = (action) => {
    middlewares.forEach((middleware) => middleware(state, action));
  };

  const generateNextStateFromReducers = (action) => {
    const nextState = {};

    for(let key in reducers) {
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
    }

    state = nextState;
  };

  const notifyAllSubscribers = () => {
    subscribers.forEach((subscriber) => subscriber());
  };

  const dispatch = (action) => {
    runAllMiddlewares(action);
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
  createStore
};
