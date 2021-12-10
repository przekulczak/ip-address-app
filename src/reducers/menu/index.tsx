import { MenuActionsType, TriggerMenu, MenuStateType } from './types';

const initialState: MenuStateType = {
  isOpened: false,
};

type Action = TriggerMenu;

export default (state = initialState, action: Action): MenuStateType => {
  switch (action.type) {
    case MenuActionsType.TRIGGER_MENU:
      return { ...state, isOpened: !state.isOpened };
    default:
      return state;
  }
};
