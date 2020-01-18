import { all, takeLatest } from 'redux-saga/effects';

import { Types as DevListTypes } from '../ducks/devList';
import * as Dev from './dev';

export default function* rootSaga() {
  yield all([
    takeLatest(DevListTypes.ASYNC_INDEX_DEVS, Dev.asyncIndexDevs),
    takeLatest(DevListTypes.ASYNC_STORE_DEV, Dev.asyncStoreDev),
  ]);
}
