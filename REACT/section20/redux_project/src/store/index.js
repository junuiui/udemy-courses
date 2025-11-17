// import { createStore,  } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'


const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState, // or automatically js to figure out
  reducers: {
    increment(state, action) { state.counter += action.payload; },
    decrement(state, action) { state.counter -= action.payload; },
    toggle(state) { state.showCounter = !state.showCounter },
  }

});

const initialAuthState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) { state.isAuthenticated = true },
    logout(state) { state.isAuthenticated = false }
  }
});

// ===============
// replaced by '@reduxjs/toolkit'
// ===============
// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       // NEVER mutate the existing state. ALWAYS overwrite.
//       counter: state.counter + action.value,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - action.value,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter
//     };
//   }

//   return state;
// };

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },

});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
