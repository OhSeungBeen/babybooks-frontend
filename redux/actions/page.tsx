import { AnyAction } from "redux";
import { ActionType } from ".";
import { PageState } from "../../types";
import initialState from "../defaultState";

export function reducer(
  state = initialState.page,
  action: AnyAction
): PageState {
  switch (action.type) {
    case ActionType.PAGE_AVAILABLE:
      const { siteInfo } = action;
      return { ...initialState.page, ...siteInfo };
    case ActionType.PAGE_SET_FAVORITES:
      const { isFavorites } = action;
      return { ...state, isFavorites };
    default:
      return state;
  }
}

export function setFavorites(isFavorites: boolean): Function {
  return (dispatch: Function) =>
    dispatch({ type: ActionType.PAGE_SET_FAVORITES, isFavorites });
}
