import { AnyAction } from "redux";
import { ActionType } from ".";
import { SiteInfoState } from "../../types";
import initialState from "../defaultState";

export function reducer(
  state = initialState.siteInfo,
  action: AnyAction
): SiteInfoState {
  switch (action.type) {
    case ActionType.SITEINFO_AVAILABLE:
      const { siteInfo } = action;
      return { ...initialState.siteInfo, ...siteInfo };
    case ActionType.SITEINFO_SET_FAVORITES:
      const { isFavorites } = action;
      return { ...state, isFavorites };
    default:
      return state;
  }
}

export function setFavorites(isFavorites: boolean): Function {
  return (dispatch: Function) =>
    dispatch({ type: ActionType.SITEINFO_SET_FAVORITES, isFavorites });
}
