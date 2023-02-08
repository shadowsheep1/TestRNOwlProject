import {CounterAction} from '../actions/counterAction';

const initialState = {
  count: 0,
};

export default (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case 'COUNT_INCREASE':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'COUNT_DECREASE':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
