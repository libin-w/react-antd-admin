import { Store, Reducer, CombinedState, AnyAction } from 'redux';
export type InitialStateInterface = {
  [propName: string]: any;
};
export type ReducerInterface = Reducer;
export type ReducerNameType = string;
export type ReducerItemType = {
  key: ReducerNameType;
  reducer: Reducer;
};
export type InjectReducerType = (reducerData: ReducerItemType | ReducerItemType[]) => void;
export type RejectReducerType = (key: ReducerNameType | ReducerNameType[]) => void;
export type ReducerManagerInterface = {
  getReducerMap: () => { [propName: ReducerNameType]: ReducerInterface };
  reduce: ReducerInterface;
  inject: InjectReducerType;
  reject: RejectReducerType;
};

export type StoreInstanceInterface = Store<
  CombinedState<{
    [x: string]: any;
  }>,
  AnyAction
> & {
  reducerManager: ReducerManagerInterface;
  injectReducer: InjectReducerType;
  rejectReducer: RejectReducerType;
};
export { AnyAction };
