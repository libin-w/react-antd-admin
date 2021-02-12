/*
 * @Author: WangLibin
 * @Date: 2020-07-24 09:50:51
 * @LastEditors: WangLibin
 * @LastEditTime: 2020-08-10 14:57:14
 * @Description: effectMiddleware
 */
import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from 'redux';
import isPromise from '@/utils/isPromise';

const createEffectMiddleware = () => {
  const effectFc: Middleware<Dispatch> = ({ dispatch }: MiddlewareAPI) => (next) => (
    action: AnyAction
  ) => {
    const { effect, payload } = action;

    if (typeof effect === 'function') {
      if (isPromise(payload)) {
        payload.then((res: any) => {
          effect(res);
        });
      } else {
        effect(payload);
      }
    }
    if (Array.isArray(effect)) {
      effect.forEach((e) => {
        if (typeof effect === 'function') {
          if (isPromise(payload)) {
            payload.then((res: any) => {
              e(res);
            });
          } else {
            e(payload);
          }
        }
      });
    }
    return next(action);
  };
  return effectFc;
};

const effect = createEffectMiddleware();

export default effect;
