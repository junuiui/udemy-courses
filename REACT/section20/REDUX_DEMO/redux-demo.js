const redux = require('redux') // importing 3rd party (redux)

const counterReducer = (state = { counter: 0 }, action) => {

  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    }
  }

  return state;

};
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState(); // give latest update from store
  console.log(latestState);
};
store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });