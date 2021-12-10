import { MenuActionsType, MenuAction, MenuStateType } from './types';

const initialState: MenuStateType = {
  isOpened: false,
};

export default (state = initialState, action: MenuAction): MenuStateType => {
  switch (action.type) {
    case MenuActionsType.TRIGGER_MENU:
      return { ...state, isOpened: !state.isOpened };
    default:
      return state;
  }
};
