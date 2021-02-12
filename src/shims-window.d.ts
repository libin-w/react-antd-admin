import Console from 'console';
export {};
declare global {
  interface Window {
    __console__: Console;
    __REACT_DEVTOOLS_GLOBAL_HOOK__: any;
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
