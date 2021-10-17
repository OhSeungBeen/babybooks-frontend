export * as AppAction from "./app";
export * as PageAction from "./page";
export * as TabsAction from "./tabs";
export * as NavigatorAction from "./navigator";

export enum ActionType {
  APP_SHOW_SIDEBAR,
  PAGE_AVAILABLE,
  PAGE_SET_FAVORITES,
  TAB_CHANGE,
  TAB_ADD,
  TAB_DELETE,
  NAVIGATOR_PUSH,
  NAVIGATOR_POP,
}
