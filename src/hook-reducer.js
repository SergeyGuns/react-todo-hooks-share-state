export const initialState = {
  list: [],
  input: '',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_counter': {
      return { ...state, counter: action.payload };
    }
    case 'set_input': {
      return { ...state, input: action.payload };
    }
    case 'add_item': {
      return { ...state, list: state.list.concat(action.payload), input: '' };
    }
    case 'delete_item': {
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
      };
    }
    case 'toggle_done': {
      return {
        ...state,
        list: state.list.map(item => ({
          ...item,
          done: item.id === action.payload ? !item.done : item.done,
        })),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
