import { combineReducers } from 'redux';
import locationReducer from './location';
import { LocationStateType } from './location/types';
// to do move to types
import historyReducer, { HistoryStateType } from './history';
import loadingReducer from './loading';
import { LoadingStateType } from './loading/types';

const appReducer = combineReducers({
  location: locationReducer,
  history: historyReducer,
  loading: loadingReducer,
});

export interface ApplicationState {
  location: LocationStateType;
  history: HistoryStateType;
  loading: LoadingStateType;
}

const rootReducer = (state: ApplicationState, action: any) => appReducer(state, action);

export default rootReducer;
