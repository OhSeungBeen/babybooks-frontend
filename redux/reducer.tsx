import { combineReducers, AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import initialState from "./defaultState";
import { siteInfoReducer } from "./actions";
import { State } from "../types";

const appReducers = combineReducers<State>({
  siteInfo: siteInfoReducer,
});

const reducer = (state: State = initialState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return appReducers(state, action);
};

export default reducer;
