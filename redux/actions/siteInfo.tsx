import initialState from "../defaultState";

export const SITEINFO_AVAILABLE = "SITEINFO_AVAILABLE";

export const siteInfoReducer = (state = initialState.siteInfo, action: any) => {
  switch (action.type) {
    case SITEINFO_AVAILABLE:
      const { siteInfo } = action;
      return { ...initialState, ...siteInfo };
    default:
      return { ...state };
  }
};
