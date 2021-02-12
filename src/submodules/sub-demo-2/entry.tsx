import React from 'react';
import SubmoduleLayout from '@/layouts/SubmoduleLayout';
import SubmoduleRouter from '@/routers/SubmoduleRouter';
import moduleConfig from './moduleConfig';
import routerConfig from './routerConfig';
class SubmoduleEntry extends React.Component {
  render() {
    return (
      <SubmoduleLayout siderType="mini" moduleConfig={moduleConfig} routerConfig={routerConfig}>
        <SubmoduleRouter moduleConfig={moduleConfig} routerConfig={routerConfig} />
      </SubmoduleLayout>
    );
  }
}

export default SubmoduleEntry;
