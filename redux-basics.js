const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// Reducer (Gets state & action), returns new state
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    // Mutating original state, never do this immutably
    return {
      ...state, // Copied values of old state
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD_COUNTER") {
    // Mutating original state, never do this immutably
    return {
      ...state, // Copied values of old state
      counter: state.counter + action.value
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription, inform me when I need to get a new state.

store.subscribe(() => {
  console.log("[Subscription]", store.getState());
}); // Whenever change, know to get state.

// Dispatching an Action

store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
