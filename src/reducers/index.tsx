import { combineReducers } from 'redux';
import locationReducer from './location';
import historyReducer from './history';
import loadingReducer from './loading';
import menuReducer from './menu';
import { RootState, ApplicationActions } from './types';

const appReducer = combineReducers({
  location: locationReducer,
  history: historyReducer,
  loading: loadingReducer,
  menu: menuReducer,
});

const rootReducer = (state: RootState, action: ApplicationActions) => appReducer(state, action);

export default rootReducer;
