import types from './types';

const actions = {
  increaseMessageCount: () => ({
    type: types.INCREASE_MESSAGE_COUNT
  }),
  subtractMessageCount: () => ({
    type: types.SUBTRACT_MESSAGE_COUNT
  })
};
export default actions;
