export enum MenuActionsType {
  TRIGGER_MENU = 'TRIGGER_MENU',
}

export interface TriggerMenu {
  type: MenuActionsType.TRIGGER_MENU;
}

export interface MenuStateType {
  isOpened: boolean;
}

export type MenuAction = TriggerMenu;
