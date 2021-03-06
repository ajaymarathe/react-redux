import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// imports components here
import Counter from './counter';

const initialState = {
  count: 0,
}

function reducer(state = initialState, action) {
  switch (action.type){
    case "INCREMENT":
      return {
        count: state.count + 1,
      }
    case "DECREMENT":
      return {
        count: state.count - 1,
      }
    
    default:
      return state;
  }


  
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('root'));

