import store, { RootStateInterface } from '@/store';
import { AccessValueType } from '@/@types';

const isPermitted = (accessValue: AccessValueType): boolean => {
  const accessData = (store.getState() as RootStateInterface)?.userInfo?.accessData || [];
  const userInfoStatus =
    (store.getState() as RootStateInterface)?.userInfo?.userInfoStatus || 'none';
  if (userInfoStatus !== 'success') {
    return true;
  }
  if (accessData.length < 1) {
    return false;
  }
  if (Array.isArray(accessValue) && accessValue.length > 0) {
    return accessValue.some((val) => {
      if (Array.isArray(val)) {
        return val.every((v) => accessData.includes(v));
      } else {
        return accessData.includes(val);
      }
    });
  }
  return true;
};
export default isPermitted;
