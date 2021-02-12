import React from 'react';

interface PropsTypes {
  type?: 'push' | 'replace';
  url: string;
  params?: {
    [key: string]: string | number;
  };
}

class NativeRouter extends React.Component<PropsTypes, {}> {
  componentDidMount() {
    const { url, type = 'push', params } = this.props;
    console.log(url, type, params);
    let searchStr = url.indexOf('?') === -1 ? '?' : '';
    if (params) {
      Object.keys(params).forEach((key) => {
        if (key && params[key]) {
          searchStr += `${key}=${window.encodeURIComponent(params[key])}`;
        }
      });
    }
    let newUrl = searchStr.length > 1 ? url + searchStr : url;
    switch (type) {
      case 'replace':
        window.location.replace(newUrl);
        return;
      default:
        window.location.href = newUrl;
        return;
    }
  }
  render() {
    return null;
  }
}
export default NativeRouter;
