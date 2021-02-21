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
