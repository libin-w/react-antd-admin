import { AnyAction } from 'redux';
import { ActionType } from 'redux-promise-middleware';
import types from './types';

export type UserInfoStatusType = 'none' | 'loading' | 'success' | 'fail';
export type UserInfoStateInterface = {
  userInfoStatus: UserInfoStatusType;
  userName: string;
  realName: string;
  avatar: string;
  userId: number;
  accessData: string[];
  roleList: any[];
};

const initialState: UserInfoStateInterface = {
  userInfoStatus: 'none',
  userName: '',
  realName: '',
  avatar: '',
  userId: 0,
  accessData: [],
  roleList: []
};

// reducer
export default function reducer(state: UserInfoStateInterface = initialState, action: AnyAction) {
  console.log(action.payload);
  switch (action.type) {
    case `${types.GET_USER_INFO}_${ActionType.Pending}`:
      return { ...state, userInfoStatus: 'loading' };
    case `${types.GET_USER_INFO}_${ActionType.Fulfilled}`:
      return {
        ...state,
        userInfoStatus: 'success',
        userId: action.payload.data?.userId || 0,
        userName: action.payload.data?.userName || '',
        realName: action.payload.data?.realName || '',
        avatar: action.payload.data?.avatar || '',
        accessData: action.payload.data?.roleList.map((role) => role.key) || [],
        roleList: action.payload.data?.roleList || []
      };
    case `${types.GET_USER_INFO}_${ActionType.Rejected}`:
      return { ...state, userInfoStatus: action.payload.code === '40001' ? 'loading' : 'fail' };

    default:
      return state;
  }
}
