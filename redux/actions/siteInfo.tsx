import { AnyAction } from "redux";
import { SiteInfoState } from "../../types";
import initialState from "../defaultState";

enum ActionType {
  SITEINFO_AVAILABLE,
}

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
