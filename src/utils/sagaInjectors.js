import { isEmpty, isString } from 'lodash';

import {invariant} from 'utils/funcs';
import checkStore from 'store/checkStore';

const checkKey = key =>
  invariant(
    isString(key) && !isEmpty(key),
    'injectSaga: Expected `key` to be a non empty string',
  );

export function injectSagaFactory(store, isValid) {
  return function injectSaga(key, descriptor = {}, args) {
    if (!isValid) checkStore(store);

    const {saga} = descriptor;

    checkKey(key);

    let hasSaga = Reflect.has(store.injectedSagas, key);

    if (process.env.NODE_ENV !== 'production') {
      const oldDescriptor = store.injectedSagas[key];
      // enable hot reloading of daemon and once-till-unmount sagas
      if (hasSaga && oldDescriptor.saga !== saga) {
        oldDescriptor.task.cancel();
        hasSaga = false;
      }
    }

    if (!hasSaga) {
      store.injectedSagas[key] = {
        ...descriptor,
        task: store.runSaga(saga, args),
      };
    }
  };
}

export default function getInjectors(store) {
  checkStore(store);

  return {
    injectSaga: injectSagaFactory(store, true),
  };
}
