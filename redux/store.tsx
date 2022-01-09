import reducer from "./reducer";
import { createWrapper, Context } from "next-redux-wrapper";
import { connect } from "react-redux";
import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { State } from "types";

const makeStore = (context: Context) => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};

export const connectState = connect((state: State) => ({
  state,
}));

export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
