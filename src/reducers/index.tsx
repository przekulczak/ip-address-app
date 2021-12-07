import { combineReducers } from 'redux';
import searchReducer, { SearchStateType } from './search';
import historyReducer, { HistoryStateType } from './history';

const appReducer = combineReducers({
  search: searchReducer,
  history: historyReducer,
});

export interface ApplicationState {
  search: SearchStateType;
  history: HistoryStateType;
}

const rootReducer = (state: ApplicationState, action: any) => appReducer(state, action);

export default rootReducer;
