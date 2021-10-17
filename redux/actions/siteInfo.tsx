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
    default:
      return state;
  }
}
