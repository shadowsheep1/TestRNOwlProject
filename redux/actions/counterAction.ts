export type CounterAction = {
  type: 'COUNT_INCREASE' | 'COUNT_DECREASE';
};

//
export const increment = () => {
  return {
    type: 'COUNT_INCREASE',
  };
};

export const decrement = () => {
  return {
    type: 'COUNT_DECREASE',
  };
};
