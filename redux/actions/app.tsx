import { ActionType } from ".";
import initialState from "redux/defaultState";
import { Action, AppState, SideBarInfo } from "types";

export function reducer(state = initialState.app, action: Action): AppState {
  switch (action.type) {
    case ActionType.APP_SHOW_SIDEBAR:
      const { payload: sideBar } = action;
      return { ...state, sideBar };
    default:
      return state;
  }
}

export function setSideBar(sideBar: SideBarInfo): Action {
  return { type: ActionType.PAGE_SET_FAVORITES, payload: sideBar };
}
