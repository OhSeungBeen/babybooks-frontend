import { ActionType } from ".";
import initialState from "redux/defaultState";
import { Action, PageState } from "types";

export function reducer(state = initialState.page, action: Action): PageState {
  switch (action.type) {
    case ActionType.PAGE_AVAILABLE:
      const { payload: siteInfo } = action;
      return { ...initialState.page, ...siteInfo };
    case ActionType.PAGE_SET_FAVORITES:
      const { payload: isFavorites } = action;
      return { ...state, isFavorites };
    default:
      return state;
  }
}

export function setFavorites(isFavorites: boolean): Action {
  return { type: ActionType.PAGE_SET_FAVORITES, payload: isFavorites };
}
