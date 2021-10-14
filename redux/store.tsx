import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const makeStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk));
  return store;
};

export default createWrapper(makeStore, { debug: false });
