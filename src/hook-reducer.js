import { useReducer } from 'react';

const initialState = {
  loading: false,
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return { ...state, count: state.count + 1, loading: false };
    }
    case 'decrement': {
      return { ...state, count: state.count - 1, loading: false };
    }
    case 'loading': {
      return { ...state, loading: true };
    }
    default: {
      return state;
    }
  }
};

export default useReducer(reducer, initialState);
