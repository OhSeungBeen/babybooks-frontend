import * as Actions from './actions';
import initialState from './defaultState';
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { Action, State } from 'types';

const appReducers = combineReducers<State>({
  app: Actions.AppAction.reducer,
  page: Actions.PageAction.reducer,
  tabs: Actions.TabsAction.reducer,
  dialog: Actions.DialogAction.reducer,
  categories: Actions.CategoriesAction.reducer,
  category: Actions.CategoryAction.reducer,
  layoutCategories: Actions.LayoutCategoriesAction.reducer,
});

export default function reducer(state: State = initialState, action: Action) {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return appReducers(state, action);
}

// export type State = ReturnType<typeof appReducers>;
