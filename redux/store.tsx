import { createStore, applyMiddleware, Store } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { State } from '../types';
import { composeWithDevTools } from 'redux-devtools-extension';

const makeStore = (context: Context) => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};

export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });
