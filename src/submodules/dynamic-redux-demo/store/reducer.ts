import { AnyAction } from 'redux';
import types from './types';

export type DynamicReduxDemoStateInterface = {
  messageCount: number;
};

const initialState: DynamicReduxDemoStateInterface = {
  messageCount: 0
};

// reducer
export default function reducer(
  state: DynamicReduxDemoStateInterface = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case types.INCREASE_MESSAGE_COUNT:
      return {
        ...state,
        messageCount: state.messageCount + 1
      };
    case types.SUBTRACT_MESSAGE_COUNT:
      return {
        ...state,
        messageCount: state.messageCount - 1
      };
    default:
      return state;
  }
}
