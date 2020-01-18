import { put, call } from 'redux-saga/effects';

import { Types as DevListTypes } from '../ducks/devList';

import api from '@/services/api';

export function* asyncIndexDevs() {
  try {
    const data = yield call(apiIndexDevs);
    yield put({
      type: DevListTypes.SUCCESS_INITIAL_DATA,
      payload: {
        data: data.map((dev) => ({ ...dev, initialData: true })),
      },
    });
  } catch (error) {
    yield put({
      type: DevListTypes.FAILED_DATA,
      payload: {
        error,
      },
    });
  }
}
async function apiIndexDevs() {
  try {
    const response = await api.get('/devs');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export function* asyncStoreDev(action) {
  try {
    yield put({
      type: DevListTypes.REQUEST_DATA,
    });
    const dev = yield call(apiStoreDev, action.payload.dev);
    yield put({
      type: DevListTypes.SUCCESS_ADDITIONAL_DATA,
      payload: {
        dev: { ...dev, initialData: false },
      },
    });
  } catch (error) {
    yield put({
      type: DevListTypes.FAILED_DATA,
      payload: {
        error,
      },
    });
  }
}
async function apiStoreDev(dev) {
  try {
    const response = await api.post('/devs', dev);
    return response.data;
  } catch (error) {
    throw error;
  }
}
