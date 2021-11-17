import { combineReducers, AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import initialState from "./defaultState";
import * as Actions from "./actions";
import { State } from "../types";

const appReducers = combineReducers<State>({
  app: Actions.AppAction.reducer,
  page: Actions.PageAction.reducer,
  tabs: Actions.TabsAction.reducer,
  dialog: Actions.DialogAction.reducer,
});

export default function reducer(
  state: State = initialState,
  action: AnyAction
) {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return appReducers(state, action);
}
