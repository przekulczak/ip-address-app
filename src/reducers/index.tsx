import { combineReducers } from 'redux';
import locationReducer from './location';
import { LocationStateType } from './location/types';
import historyReducer, { HistoryStateType } from './history';
import loadingReducer from './loading';
import { LoadingStateType } from './loading/types';
import menuReducer from './menu';
import { MenuStateType } from './menu/types';

const appReducer = combineReducers({
  location: locationReducer,
  history: historyReducer,
  loading: loadingReducer,
  menu: menuReducer,
});

export interface ApplicationState {
  location: LocationStateType;
  history: HistoryStateType;
  loading: LoadingStateType;
  menu: MenuStateType;
}

const rootReducer = (state: ApplicationState, action: any) => appReducer(state, action);

export default rootReducer;
