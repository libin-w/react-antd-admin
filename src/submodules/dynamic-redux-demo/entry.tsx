import React from 'react';
import SubmoduleLayout from '@/layouts/SubmoduleLayout';
import SubmoduleRouter from '@/routers/SubmoduleRouter';
import moduleConfig from './moduleConfig';
import routerConfig from './routerConfig';
import store from '@/store';
import dynamicReduxDemoReducer from './store/reducer';

interface PropsTypes {}
interface StateTypes {
  reducerIsReady: boolean;
}
class SubmoduleEntry extends React.Component<PropsTypes, StateTypes> {
  constructor(props) {
    super(props);
    this.state = {
      reducerIsReady: false
    };
  }
  componentDidMount() {
    store.injectReducer({ key: 'dynamicReduxDemo', reducer: dynamicReduxDemoReducer });
    this.setState({ reducerIsReady: true });
  }
  componentWillUnmount() {
    store.rejectReducer('dynamicReduxDemo');
  }
  render() {
    if (this.state.reducerIsReady) {
      return (
        <SubmoduleLayout siderType="large" moduleConfig={moduleConfig} routerConfig={routerConfig}>
          <SubmoduleRouter moduleConfig={moduleConfig} routerConfig={routerConfig} />
        </SubmoduleLayout>
      );
    } else {
      return null;
    }
  }
}

export default SubmoduleEntry;
