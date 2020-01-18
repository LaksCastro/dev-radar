import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import devList from './devList';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    devList,
  });
