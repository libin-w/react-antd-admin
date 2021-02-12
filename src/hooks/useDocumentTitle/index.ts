import { useEffect, useRef } from 'react';
import {   useUnmount } from 'ahooks';
import { isValidString } from '@/utils';

export interface Options {
  restoreOnUnmount?: boolean;
  validString?: boolean;
}

const DEFAULT_OPTIONS: Options = {
  restoreOnUnmount: false,
  validString: false
};

function useDocumentTitle(title: string, options: Options = DEFAULT_OPTIONS) {
  const titleRef = useRef(document.title);
  useEffect(() => {
    if (options.validString === true) {
      isValidString(title) && (document.title = title);
    } else {
      document.title = title;
    }
  }, [title]);

  useUnmount(() => {
    if (options && options.restoreOnUnmount) {
      document.title = titleRef.current;
    }
  });
}

export default typeof document !== 'undefined' ? useDocumentTitle : () => {};
