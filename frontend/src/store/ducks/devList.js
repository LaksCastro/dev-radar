import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  successInitialData: ['data'],
  failedData: ['error'],
  successAdditionalData: ['data'],
  requestData: [],
  asyncIndexDevs: [],
  asyncStoreDev: ['dev'],
});

const INITIAL_STATE = {
  initializingData: true,
  storingData: false,
  data: null,
  error: null,
};

const successInitialData = (state = INITIAL_STATE, action) => ({
  ...state,
  data: action.payload.data,
  storingData: false,
  initializingData: false,
  error: null,
});

const successAdditionalData = (state = INITIAL_STATE, action) => ({
  ...state,
  data: [...state.data, action.payload.dev],
  initializingData: false,
  storingData: false,
  error: null,
});

const requestData = (state = INITIAL_STATE, action) => ({
  ...state,
  initializingData: false,
  storingData: true,
});

const failedData = (state = INITIAL_STATE, action) => ({
  ...state,
  initializingData: false,
  storingData: false,
  error: action.payload.error,
});

export default createReducer(INITIAL_STATE, {
  [Types.SUCCESS_INITIAL_DATA]: successInitialData,
  [Types.SUCCESS_ADDITIONAL_DATA]: successAdditionalData,
  [Types.REQUEST_DATA]: requestData,
  [Types.FAILED_DATA]: failedData,
});
