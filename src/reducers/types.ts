import { CombinedState } from 'redux';
import { HistoryStateType, HistoryAction } from './history/types';
import { LoadingStateType, LoadingAction } from './loading/types';
import { LocationAction, LocationStateType } from './location/types';
import { MenuStateType, MenuAction } from './menu/types';

export interface ApplicationState {
  location: LocationStateType;
  history: HistoryStateType;
  loading: LoadingStateType;
  menu: MenuStateType;
}

export type ApplicationActions = LocationAction | LoadingAction | HistoryAction | MenuAction;

export type RootState = CombinedState<ApplicationState> | undefined;
