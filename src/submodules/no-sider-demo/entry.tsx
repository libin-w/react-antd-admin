import React from 'react';
import NoSiderApp from './views';
import moduleConfig from './moduleConfig';
class SubmoduleEntry extends React.Component {
  render() {
    return <NoSiderApp modulePath={`/${moduleConfig.modulePath}`} />;
  }
}

export default SubmoduleEntry;
