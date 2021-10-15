import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import { createWrapper, Context } from "next-redux-wrapper";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { State } from "../types";

const makeStore = (context: Context) => {
  const store = createStore(reducer, applyMiddleware(thunk));
  return store;
};

export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
