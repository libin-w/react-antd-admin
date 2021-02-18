import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import ReduxPromiseMiddleware from 'redux-promise-middleware';
import ReduxThunk from 'redux-thunk';
import ReduxEffect from './middleware/redux-effect';

import {
  StoreInstanceInterface,
  ReducerInterface,
  InitialStateInterface,
  ReducerManagerInterface,
  AnyAction
} from './types';
import { devtoolsIsDisabled } from '@/utils/devTools';
import application, { ApplicationStateType } from './modules/application/reducer';
import userInfo, { UserInfoStateInterface } from './modules/user-info/reducer';
const composeEnhancers = devtoolsIsDisabled()
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export interface RootStateInterface<T = {}> {
  application: ApplicationStateType;
  userInfo: UserInfoStateInterface;
}
// 始终存在于应用程序中的 Reducer
const staticReducers = {
  application,
  userInfo
};

function createReducerManager(initialReducers: {
  [propName: string]: ReducerInterface;
}): ReducerManagerInterface {
  // Create an object which maps keys to reducers
  const reducers = { ...initialReducers };
  // Create the initial combinedReducer
  let combinedReducer = combineReducers(reducers);
  // An array which is used to delete state keys when reducers are removed
  let keysToRemove: string[] = [];

  return {
    getReducerMap: () => reducers,
    // The root reducer function exposed by this object
    // This will be passed to the store
    reduce: (state, action) => {
      // If any reducers have been removed, clean up their state first
      const newState = { ...state };
      if (keysToRemove.length > 0) {
        for (let i = 0; i < keysToRemove.length; i++) {
          delete newState[keysToRemove[i]];
        }
        keysToRemove = [];
      }
      // Delegate to the combined reducer
      return combinedReducer(newState, action);
    },
    // Adds a new reducer with the specified key
    inject: (reducerData) => {
      const addReducerList = Array.isArray(reducerData) ? reducerData : [reducerData];
      addReducerList.forEach((reducerItem) => {
        if (reducerItem.key && !reducers[reducerItem.key]) {
          // Add the reducer to the reducer mapping
          reducers[reducerItem.key] = reducerItem.reducer;
        }
      });
      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    },
    // 使用指定的 key 删除 reducer
    reject: (keyData) => {
      const removeKeys: string[] = typeof keyData === 'string' ? [keyData] : keyData;
      removeKeys.forEach((key) => {
        if (key && reducers[key]) {
          // Remove it from the reducer mapping
          delete reducers[key];
          // Add the key to the list of keys to clean up
          keysToRemove.push(key);
        }
      });
      // Generate a new combined reducer
      combinedReducer = combineReducers(reducers);
    }
  };
}
export const refreshStateTreeAction = (): AnyAction => {
  return {
    type: '@@REFRESH_STATE_TREE'
  };
};
function configureStore(initialState?: InitialStateInterface) {
  const reducerManager = createReducerManager(staticReducers);
  // Create a store with the root reducer function being the one exposed by the manager.
  const store: StoreInstanceInterface = createStore(
    reducerManager.reduce,
    initialState,
    composeEnhancers(applyMiddleware(ReduxEffect, ReduxThunk, ReduxPromiseMiddleware))
  );

  // Put the reducer manager on the store so it is easily accessible
  store.reducerManager = reducerManager;
  store.injectReducer = (reducerData) => {
    reducerManager.inject(reducerData);
    store.dispatch(refreshStateTreeAction());
  };
  store.rejectReducer = (key) => {
    reducerManager.reject(key);
    store.dispatch(refreshStateTreeAction());
  };
  return store;
}
export default configureStore();
