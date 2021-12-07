import { combineReducers } from 'redux';
import searchReducer, { SearchStateType } from './search';

const appReducer = combineReducers({
  search: searchReducer,
});

export interface ApplicationState {
  search: SearchStateType;
}

const rootReducer = (state: ApplicationState, action: any) => appReducer(state, action);

export default rootReducer;
